import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';

export default function Leaderboard() {
  const navigate = useNavigate();
  return <main className="w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] pb-28">
    <header className="sticky top-0 flex items-center gap-4 px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-4 border-b border-[#424936]/30 bg-[#0B0E14]/95"><button onClick={() => navigate('/challenges')} aria-label="Kembali ke tantangan"><ArrowLeft size={20} /></button><h1 className="text-lg font-bold">Leaderboard</h1></header>
    <section className="p-4"><div className="rounded-2xl border border-[#A3E635]/30 bg-gradient-to-br from-[#121F00] to-[#191C22] p-6 text-center"><Trophy size={32} className="mx-auto mb-3 text-[#CCFF80]" /><h2 className="font-bold text-lg">Peringkat komunitas</h2><p className="text-sm text-[#C2CAB0] mt-2">Peringkat akan muncul saat data leaderboard tersedia. Ikuti tantangan untuk mulai mengumpulkan progres.</p><button onClick={() => navigate('/challenges')} className="mt-5 px-5 py-2.5 rounded-lg bg-[#A3E635] text-[#121F00] text-sm font-bold">Lihat Tantangan</button></div></section>
  </main>;
}
