import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Ambient Background Lighting Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Top Header Bar */}
      <header className="top-bar">
        <div className="brand">
          <div className="logo-icon">
            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 15L5.625 9.375H0L7.5 0L6.375 5.625H12L4.5 15Z" fill="#0B0E14" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">Kalcerly</span>
            <span className="brand-sub">FIT PROTOCOL</span>
          </div>
        </div>
      </header>

      {/* Footer - Bottom Action Sheet */}
      <main className="bottom-sheet">
        <div className="headline-group">
          <div className="tagline">
            <div className="tagline-icon">
              <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.65 14.28c-1.63 1.95-3.65 3.72-6.15 3.72-2.5 0-4.52-1.77-6.15-3.72A10 10 0 0 1 12 2a10 10 0 0 1 6.65 12.28z" />
                <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </div>
            <span className="tagline-text">MAKE MOVEMENT A CULTURE</span>
          </div>

          <h1 className="heading">
            <span className="text-white">Ubah Gerakan Jadi Budaya &amp;</span>
            <span className="text-accent">Hadiah Nyata</span>
          </h1>

          <p className="description">
            Lacak aktivitas lari, jalan, dan sepedamu dengan verifikasi AI anti-cheat. Dapatkan token FIT dan buktikan pencapaianmu on-chain.
          </p>
        </div>

        <div className="action-group">
          <Button
            onClick={() => navigate('/register')}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            Mulai Sekarang
          </Button>

          <div className="login-link">
            <span className="login-text">Sudah punya akun?</span>
            <button className="login-action" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => navigate('/login')}>Masuk</button>
          </div>
        </div>
      </main>
    </div>
  );
}
