import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Shield, Trophy, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const badges = [
  { icon: '🏃', name: 'First 5K', detail: 'Aktivitas lari 5 KM pertama' },
  { icon: '🔥', name: '7-Day Streak', detail: 'Aktif selama tujuh hari' },
  { icon: '🏆', name: '50 KM Runner', detail: 'Total lari mencapai 50 KM' },
];

export default function ProfileDetails({ mode }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(() => localStorage.getItem('kalcerly-notifications') !== 'off');
  const title = { edit: 'Edit Profil', settings: 'Pengaturan', badges: 'Pencapaian & Badge' }[mode];

  const toggleNotifications = () => {
    localStorage.setItem('kalcerly-notifications', notifications ? 'off' : 'on');
    setNotifications(!notifications);
  };

  return (
    <main className="w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] pb-28">
      <header className="sticky top-0 z-40 flex items-center gap-4 px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-4 border-b border-[#424936]/30 bg-[#0B0E14]/95 backdrop-blur-md">
        <button onClick={() => navigate('/profile')} aria-label="Kembali ke profil"><ArrowLeft size={20} /></button>
        <h1 className="text-lg font-bold">{title}</h1>
      </header>
      {mode === 'edit' && <section className="p-4 space-y-4">
        <div className="flex items-center gap-3 rounded-2xl border border-[#424936]/40 bg-[#191C22] p-4"><UserRound className="text-[#CCFF80]" /><div><p className="font-bold">{user?.fullname || 'Pengguna'}</p><p className="text-xs text-[#C2CAB0]">Data akun saat ini</p></div></div>
        <div className="rounded-xl border border-[#424936]/40 bg-[#191C22] p-4 space-y-3">
          <div><p className="text-xs text-[#C2CAB0]">Nama lengkap</p><p className="mt-1">{user?.fullname || 'Belum tersedia'}</p></div>
          <div className="border-t border-[#424936]/30 pt-3"><p className="text-xs text-[#C2CAB0]">Email</p><p className="mt-1">{user?.email || 'Belum tersedia'}</p></div>
        </div>
        <p className="text-sm text-[#C2CAB0]">Perubahan data profil belum tersedia melalui layanan akun. Data di atas ditampilkan langsung dari akun Anda.</p>
      </section>}
      {mode === 'settings' && <section className="p-4 space-y-4">
        <div className="rounded-xl border border-[#424936]/40 bg-[#191C22] p-4 flex items-center justify-between gap-3"><div className="flex items-center gap-3"><Bell size={18} className="text-[#CCFF80]" /><div><p className="font-semibold">Preferensi notifikasi</p><p className="text-xs text-[#C2CAB0]">Disimpan di perangkat ini</p></div></div><button role="switch" aria-checked={notifications} onClick={toggleNotifications} className={`w-11 h-6 rounded-full p-1 ${notifications ? 'bg-[#A3E635]' : 'bg-[#424936]'}`}><span className={`block w-4 h-4 rounded-full bg-[#0B0E14] transition-transform ${notifications ? 'translate-x-5' : ''}`} /></button></div>
        <div className="rounded-xl border border-[#424936]/40 bg-[#191C22] p-4 flex items-start gap-3"><Shield size={18} className="text-[#7BD0FF] shrink-0" /><div><p className="font-semibold">Keamanan akun</p><p className="text-xs text-[#C2CAB0] mt-1">Kelola akses akun dengan keluar dari perangkat setelah selesai menggunakan aplikasi.</p></div></div>
      </section>}
      {mode === 'badges' && <section className="p-4 space-y-3"><p className="text-sm text-[#C2CAB0] mb-4">Koleksi pencapaian yang ditampilkan di profil.</p>{badges.map(badge => <div key={badge.name} className="rounded-xl border border-[#A3E635]/30 bg-[#191C22] p-4 flex items-center gap-4"><span className="text-3xl" aria-hidden="true">{badge.icon}</span><div><p className="font-bold">{badge.name}</p><p className="text-xs text-[#C2CAB0]">{badge.detail}</p></div><Trophy size={16} className="text-[#CCFF80] ml-auto" /></div>)}</section>}
    </main>
  );
}
