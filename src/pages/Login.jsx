import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { login, register } from '../api/auth';
import { openUrl } from '@tauri-apps/plugin-opener';

export default function Login({ initialTab = 'login' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);
  const { loginUser } = useAuth();

  const [activeTab, setActiveTab] = useState(() => {
    if (initialTab === 'register' || location.pathname === '/register' || location.state?.tab === 'register') {
      return 'register';
    }
    return 'login';
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement?.scrollTop ||
        document.body?.scrollTop ||
        0;

      const viewportHeight = window.innerHeight;
      const totalHeight = Math.max(
        document.documentElement?.scrollHeight || 0,
        document.body?.scrollHeight || 0
      );

      const container = containerRef.current;
      const containerScrollY = container ? container.scrollTop : 0;
      const containerHeight = container ? container.clientHeight : 0;
      const containerTotalHeight = container ? container.scrollHeight : 0;

      // 1. Status Bar Atas (Indikator Notifikasi Android):
      // Belum di-scroll -> Transparan | Di-scroll ke bawah -> TIDAK Transparan
      const currentScroll = scrollY || containerScrollY;
      setIsScrolled(currentScroll > 10);

      // 2. Navigation Bar Bawah Android (Kebalikannya):
      // Belum di-scroll -> TIDAK Transparan | Di-scroll sampai bawah -> Transparan
      const margin = 28;
      const windowReachedBottom =
        totalHeight > viewportHeight &&
        viewportHeight + scrollY >= totalHeight - margin;

      const containerReachedBottom =
        containerTotalHeight > containerHeight &&
        containerHeight + containerScrollY >= containerTotalHeight - margin;

      setIsAtBottom(Boolean(windowReachedBottom || containerReachedBottom));
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });

    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
    }

    const timer = setTimeout(handleScroll, 120);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('scroll', handleScroll, true);
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTab]);

  // Register Form State & Validation
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [registerErrors, setRegisterErrors] = useState({});
  const [registerTouched, setRegisterTouched] = useState({});
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerSubmitError, setRegisterSubmitError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState('');

  // Login Form State (Cleaned - No Default Values)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginRemember, setLoginRemember] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Validation function
  const validateRegisterField = (name, value, allValues = registerForm) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) {
          error = 'Nama lengkap wajib diisi';
        } else if (value.trim().length < 3) {
          error = 'Nama lengkap minimal 3 karakter';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) {
          error = 'Nama hanya boleh mengandung huruf';
        }
        break;

      case 'email':
        if (!value || !value.trim()) {
          error = 'Email wajib diisi';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Format email tidak valid (cth: nama@domain.com)';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Kata sandi wajib diisi';
        } else if (value.length < 8) {
          error = 'Kata sandi minimal 8 karakter';
        } else if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(value)) {
          error = 'Wajib kombinasi huruf dan angka';
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleRegisterChange = (field, value) => {
    const updated = { ...registerForm, [field]: value };
    setRegisterForm(updated);

    if (registerTouched[field]) {
      const err = validateRegisterField(field, value, updated);
      setRegisterErrors((prev) => ({ ...prev, [field]: err }));
    }

  };

  const handleRegisterBlur = (field) => {
    setRegisterTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateRegisterField(field, registerForm[field], registerForm);
    setRegisterErrors((prev) => ({ ...prev, [field]: err }));
  };

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, rating: '', color: 'bg-[#32353C]', textColor: 'text-[#8C947C]' };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    switch (score) {
      case 1:
        return { score: 1, rating: 'Lemah (1/4)', color: 'bg-rose-500', textColor: 'text-rose-400' };
      case 2:
        return { score: 2, rating: 'Cukup (2/4)', color: 'bg-amber-400', textColor: 'text-amber-400' };
      case 3:
        return { score: 3, rating: 'Kuat (3/4)', color: 'bg-[#CCFF80]', textColor: 'text-[#CCFF80]' };
      case 4:
        return { score: 4, rating: 'Sangat Kuat (4/4)', color: 'bg-[#A3E635]', textColor: 'text-[#A3E635]' };
      default:
        return { score: 0, rating: 'Terlalu Pendek', color: 'bg-rose-500', textColor: 'text-rose-400' };
    }
  };

  const pwdStrength = getPasswordStrength(registerForm.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      handleLogin();
      return;
    }

    const newErrors = {};
    const fields = ['fullName', 'email', 'password'];
    fields.forEach((field) => {
      const err = validateRegisterField(field, registerForm[field], registerForm);
      if (err) newErrors[field] = err;
    });

    const allTouched = fields.reduce((acc, f) => ({ ...acc, [f]: true }), {});
    setRegisterTouched(allTouched);
    setRegisterErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    setRegisterSubmitError('');
    setRegisterLoading(true);
    
    try {
      const data = await register(registerForm.fullName, registerForm.email, registerForm.password);

      setIsRegisterSuccess(true);
      setSuccessModalMessage(data.message || 'Pendaftaran Berhasil! 🎉');
      setShowSuccessModal(true);
    } catch (err) {
      console.error('Register API Error:', err);
      setRegisterSubmitError(err.data?.message || err.message || 'Gagal mendaftar. Coba lagi nanti.');
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoginError('');

    if (!loginEmail.trim() || !loginPassword) {
      setLoginError('Email/username dan kata sandi wajib diisi');
      return;
    }

    setLoginLoading(true);
    try {
      const response = await login(loginEmail, loginPassword);
      console.log('Login Success:', response);

      if (response.success && response.data) {
        loginUser({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
        }, response.data.user);
        navigate('/dashboard');
      } else {
        setLoginError(response.message || 'Login gagal.');
      }
    } catch (err) {
      console.error('Login Error:', err);
      setLoginError(err.data?.message || err.message || 'Gagal terhubung ke server. Coba lagi nanti.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    // Alamat backend yang menangani auth Google
    const googleLoginUrl = 'https://kalcerly.vercel.app/api/auth/google/login';
    try {
      if (window.__TAURI__) {
        await openUrl(googleLoginUrl);
      } else {
        window.location.href = googleLoginUrl;
      }
    } catch (e) {
      console.error("Gagal membuka halaman login Google:", e);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[420px] min-h-screen bg-[#0B0E14] relative flex flex-col mx-auto text-[#E1E2EB] font-sans px-5"
      style={{
        paddingTop: 'calc(74px + env(safe-area-inset-top, 24px))',
        paddingBottom: 'calc(36px + env(safe-area-inset-bottom, 24px))'
      }}
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-96 h-56 -top-10 left-1/2 -translate-x-1/2 bg-[#A3E635]/10 blur-[48px] rounded-full" />
        <div className="absolute w-72 h-72 bottom-10 -right-10 bg-[#7BD0FF]/5 blur-[40px] rounded-full" />
      </div>

      {/* Fixed Top Status Bar & Navigation Header (Transparan saat belum di-scroll, Tidak Transparan saat di-scroll ke bawah) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#0B0E14]/95 backdrop-blur-md border-b border-[#424936]/50 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
          }`}
        style={{
          paddingTop: 'calc(14px + env(safe-area-inset-top, 24px))'
        }}
      >
        <div className="max-w-[420px] mx-auto px-5 flex items-center justify-between pb-3">
          <button
            className="w-11 h-11 bg-[#191C22] border border-[#424936] backdrop-blur-md rounded-full flex justify-center items-center cursor-pointer shadow-md active:scale-95 transition-transform"
            onClick={() => navigate('/')}
            aria-label="Kembali ke Beranda"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1E2EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          {/* Subtle branding shown when scrolled */}
          <div
            className={`flex items-center gap-2 transition-opacity duration-300 pr-1 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <div className="w-6 h-6 bg-[#272A31] border border-[#CCFF80]/40 rounded-md flex justify-center items-center shadow-sm">
              <svg width="10" height="12" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 15L5.625 9.375H0L7.5 0L6.375 5.625H12L4.5 15Z" fill="#CCFF80" />
              </svg>
            </div>
            <span className="font-extrabold text-sm text-[#CCFF80] tracking-tight">Kalcerly.</span>
          </div>
        </div>
      </header>

      {/* Brand Identity & Title Section */}
      <section className="relative z-10 flex flex-col gap-2 mt-1 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#272A31] border border-[#CCFF80]/40 shadow-[0_0_16px_rgba(163,230,53,0.2)] rounded-lg flex justify-center items-center">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 15L5.625 9.375H0L7.5 0L6.375 5.625H12L4.5 15Z" fill="#CCFF80" />
            </svg>
          </div>
          <span className="font-extrabold text-lg text-[#CCFF80] tracking-tight">Kalcerly.</span>
        </div>
        <h1 className="font-bold text-2xl leading-tight tracking-tight text-[#E1E2EB] mt-0.5">
          {activeTab === 'login' ? 'Selamat Datang Kembali 👋' : 'Mulai Budaya Bergerak'}
        </h1>
        <p className="text-xs leading-relaxed text-[#C2CAB0]">
          {activeTab === 'login'
            ? 'Masuk untuk melanjutkan streak olahraga dan klaim reward FIT Token harianmu.'
            : 'Daftar akun Kalcerly untuk mulai tracking aktivitas, verifikasi AI anti-cheat, dan raih token FIT.'}
        </p>
      </section>

      {/* Segmented Tab Switcher */}
      <div className="relative z-10 flex bg-[#191C22] border border-[#424936] rounded-xl p-1.5 mb-6">
        <button
          type="button"
          className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg text-xs transition-all cursor-pointer ${activeTab === 'login'
            ? 'border border-[#A3E635] bg-[#272A31] text-[#CCFF80] font-bold shadow-sm'
            : 'border border-transparent bg-transparent text-[#C2CAB0] font-medium hover:text-white'
            }`}
          onClick={() => setActiveTab('login')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeTab === 'login' ? '#CCFF80' : '#C2CAB0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Masuk
        </button>
        <button
          type="button"
          className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg text-xs transition-all cursor-pointer ${activeTab === 'register'
            ? 'border border-[#A3E635] bg-[#272A31] text-[#CCFF80] font-bold shadow-sm'
            : 'border border-transparent bg-transparent text-[#C2CAB0] font-medium hover:text-white'
            }`}
          onClick={() => setActiveTab('register')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeTab === 'register' ? '#CCFF80' : '#C2CAB0'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
          Daftar Akun
        </button>
      </div>

      {/* Unified Form */}
      <form className="relative z-10 flex flex-col gap-4 mb-6" onSubmit={handleSubmit} noValidate>

        {/* Register Error Banner */}
        {activeTab === 'register' && registerSubmitError && (
          <div className="bg-rose-500/15 border border-rose-500/60 text-rose-300 p-3.5 rounded-xl flex items-center gap-3 animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xs text-rose-300">Pendaftaran Gagal</p>
              <p className="text-[11px] text-[#C2CAB0]">{registerSubmitError}</p>
            </div>
          </div>
        )}

        {/* Login Error Banner */}
        {activeTab === 'login' && loginError && (
          <div className="bg-rose-500/15 border border-rose-500/60 text-rose-300 p-3.5 rounded-xl flex items-center gap-3 animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xs text-rose-300">Login Gagal</p>
              <p className="text-[11px] text-[#C2CAB0]">{loginError}</p>
            </div>
          </div>
        )}

        {/* Register Only: Nama Lengkap */}
        {activeTab === 'register' && (
          <InputField
            label="Nama Lengkap"
            type="text"
            placeholder="cth. Rian Pradipta"
            value={registerForm.fullName}
            onChange={(e) => handleRegisterChange('fullName', e.target.value)}
            onBlur={() => handleRegisterBlur('fullName')}
            error={registerTouched.fullName ? registerErrors.fullName : ''}
            success={registerTouched.fullName && !registerErrors.fullName && registerForm.fullName.trim().length >= 3}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
          />
        )}


        {/* Shared: Email Input */}
        <InputField
          label={activeTab === 'login' ? 'Email atau Username' : 'Email'}
          type="email"
          placeholder={activeTab === 'login' ? 'Masukkan email atau @username' : 'nama@email.com'}
          value={activeTab === 'login' ? loginEmail : registerForm.email}
          onChange={(e) => {
            if (activeTab === 'login') {
              setLoginEmail(e.target.value);
            } else {
              handleRegisterChange('email', e.target.value);
            }
          }}
          onBlur={() => {
            if (activeTab === 'register') handleRegisterBlur('email');
          }}
          error={activeTab === 'register' && registerTouched.email ? registerErrors.email : ''}
          success={activeTab === 'register' && registerTouched.email && !registerErrors.email && registerForm.email.length > 0}
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          }
          rightIcon={
            activeTab === 'login' && loginEmail ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            ) : registerTouched.email && !registerErrors.email && registerForm.email.length > 0 ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : null
          }
        />

        {/* Shared: Password Input */}
        <div className="flex flex-col gap-2">
          <InputField
            label="Kata Sandi"
            labelRight={
              activeTab === 'login' ? (
                <a href="#" className="text-[11px] text-[#CCFF80] font-semibold hover:underline">Lupa Sandi?</a>
              ) : null
            }
            type="password"
            placeholder="Masukkan kata sandi"
            value={activeTab === 'login' ? loginPassword : registerForm.password}
            onChange={(e) => {
              if (activeTab === 'login') {
                setLoginPassword(e.target.value);
              } else {
                handleRegisterChange('password', e.target.value);
              }
            }}
            onBlur={() => {
              if (activeTab === 'register') handleRegisterBlur('password');
            }}
            error={activeTab === 'register' && registerTouched.password ? registerErrors.password : ''}
          />

          {/* Register Only: Dynamic Strength Meter */}
          {activeTab === 'register' && (
            <div className="flex flex-col gap-1.5 mt-0.5">
              <div className="flex justify-between font-mono text-[11px]">
                <span className="text-[#C2CAB0]">Kekuatan Sandi</span>
                <span className={`font-bold ${pwdStrength.textColor}`}>
                  {pwdStrength.rating || 'Min. 8 Karakter & Angka'}
                </span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                      pwdStrength.score >= step
                        ? pwdStrength.color + ' shadow-[0_0_8px_rgba(163,230,53,0.3)]'
                        : 'bg-[#32353C]'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Checkbox Section */}
        {activeTab === 'login' && (
          <div className="flex justify-between items-center mt-1">
            <label className="flex items-center gap-2.5 cursor-pointer select-none py-1">
              <input
                type="checkbox"
                className="hidden peer"
                checked={loginRemember}
                onChange={(e) => setLoginRemember(e.target.checked)}
              />
              <div className={`w-[18px] h-[18px] rounded flex justify-center items-center shrink-0 transition-colors ${
                loginRemember ? 'bg-[#A3E635]' : 'bg-[#272A31] border border-[#424936]'
              }`}>
                {loginRemember && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-xs text-[#C2CAB0]">Ingat saya di perangkat ini</span>
            </label>
          </div>
        )}

        {/* Primary CTA Submit Button */}
        <Button
          type="submit"
          className="mt-3"
          disabled={(activeTab === 'login' && loginLoading) || (activeTab === 'register' && registerLoading)}
          icon={
            (activeTab === 'login' && loginLoading) || (activeTab === 'register' && registerLoading) ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            )
          }
        >
          {(activeTab === 'login' && loginLoading) || (activeTab === 'register' && registerLoading)
            ? 'Menghubungkan...'
            : activeTab === 'login'
            ? 'Masuk Akun'
            : 'Daftar & Buat Akun'}
        </Button>
      </form>

      {/* Divider */}
      <div className="relative text-center my-6 z-10 before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:border-t before:border-[#424936]">
        <span className="bg-[#0B0E14] px-3 relative z-10 font-mono font-bold text-[10px] tracking-wider text-[#8C947C] uppercase">
          {activeTab === 'login' ? 'ATAU MASUK DENGAN' : 'ATAU DAFTAR DENGAN'}
        </span>
      </div>

      {/* Social Connect */}
      <div className="relative z-10 mb-6">
        <button onClick={handleGoogleLogin} className="flex justify-center items-center gap-3 w-full h-12 bg-[#191C22] border border-[#424936] rounded-xl text-[#E1E2EB] font-medium text-xs cursor-pointer active:scale-[0.98] transition-all hover:bg-[#272A31]">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Lanjutkan dengan Google
        </button>
      </div>

      {/* Footer Section & Toggle */}
      <footer className="relative z-10 mt-auto text-center pt-6 pb-2 flex flex-col gap-3 items-center">
        <p className="text-[11px] leading-relaxed text-[#555E46] px-2">
          Dengan melanjutkan, Anda menyetujui <a href="#" className="text-[#727F5C] underline hover:text-[#CCFF80]">Ketentuan Layanan</a> dan <a href="#" className="text-[#727F5C] underline hover:text-[#CCFF80]">Kebijakan Privasi</a> Kalcerly.
        </p>
      </footer>

      {/* Android Bottom Navigation Bar Protector (Tidak transparan saat belum di-scroll, baru transparan saat scroll sampai bawah) */}
      <div
        className={`fixed bottom-0 left-0 right-0 pointer-events-none transition-all duration-300 z-50 ${isAtBottom
          ? 'bg-transparent border-t-transparent opacity-0'
          : 'bg-[#0B0E14] border-t border-[#424936]/40 opacity-100 shadow-[0_-4px_16px_rgba(0,0,0,0.6)]'
          }`}
        style={{ height: 'calc(env(safe-area-inset-bottom, 24px) + 8px)' }}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 animate-fadeIn">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm bg-[#191C22] border border-[#424936] rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center animate-slideUp">
            <div className="w-14 h-14 rounded-full bg-[#A3E635]/10 flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#E1E2EB] mb-2">Pendaftaran Berhasil!</h3>
            <p className="text-sm text-[#C2CAB0] mb-6 leading-relaxed">
              {successModalMessage}
            </p>
            <Button
              onClick={() => {
                setShowSuccessModal(false);
                setIsRegisterSuccess(false);
                setActiveTab('login');
              }}
              className="w-full"
            >
              Lanjut ke Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
