import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, Wallet, Trophy, Medal, MessageSquare, 
  ExternalLink, CornerDownLeft, HandHeart, Zap
} from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

export default function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-[calc(80px+env(safe-area-inset-bottom))] overflow-x-hidden">
      
      {/* Header */}
      <div className="sticky top-0 w-full px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-4 bg-[#0B0E14]/95 backdrop-blur-md z-40 flex flex-col gap-4 border-b border-[#424936]/20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors p-1 -ml-1">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <h1 className="font-['Space_Grotesk'] font-bold text-lg text-[#E1E2EB]">Notifikasi</h1>
            <div className="px-2 py-0.5 bg-[#A3E635] rounded-full text-[10px] font-bold text-[#121F00]">3 Baru</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button className="px-4 py-1.5 bg-[#A3E635] rounded-full text-[11px] font-bold text-[#121F00] shrink-0">
            Semua
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#191C22] border border-[#424936]/40 rounded-full text-[11px] font-medium text-[#C2CAB0] hover:text-[#E1E2EB] shrink-0">
            <CheckCircle2 size={12} />
            Verifikasi & Proof
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#191C22] border border-[#424936]/40 rounded-full text-[11px] font-medium text-[#C2CAB0] hover:text-[#E1E2EB] shrink-0">
            <Trophy size={12} />
            Hadiah FIT
          </button>
        </div>
      </div>

      <div className="flex flex-col px-4 pt-4 pb-6 gap-6">
        
        {/* Section: HARI INI */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
              <span className="text-[10px] font-bold text-[#C2CAB0] tracking-wider uppercase">HARI INI</span>
            </div>
            <span className="text-[10px] text-[#C2CAB0]">3 belum dibaca</span>
          </div>

          {/* Notif 1 */}
          <div className="p-4 bg-[#191C22]/80 border border-[#A3E635]/30 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#A3E635]"></div>
            
            <div className="flex gap-3 relative">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#121F00] border border-[#A3E635] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-[#A3E635]" />
                </div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#A3E635] border-2 border-[#191C22] rounded-full"></div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-snug pr-2">Aktivitas Berhasil Diverifikasi! ⚡</h4>
                  <span className="text-[9px] text-[#C2CAB0] shrink-0 mt-0.5">10m lalu</span>
                </div>
                <p className="text-[11px] text-[#C2CAB0] leading-relaxed mb-3">
                  Lari pagi 5.21 KM di Sleman telah lolos verifikasi AI Proof of Movement. Bukti on-chain dicatat di Polygon.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-1 bg-[#121F00] border border-[#A3E635]/40 rounded-full flex items-center gap-1">
                    <Zap size={10} className="text-[#A3E635]" />
                    <span className="text-[9px] font-bold text-[#A3E635]">+42 FIT Dikreditkan</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-bold text-[#7BD0FF] hover:text-[#A3E635] transition-colors self-start">
                  Lihat Bukti Hash 0x8f...a92 <ExternalLink size={10} />
                </button>
              </div>
            </div>
          </div>

          {/* Notif 2 */}
          <div className="p-4 bg-[#191C22]/80 border border-[#424936]/40 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#A3E635]"></div>
            
            <div className="flex gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-[#424936] overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/150?u=maya" alt="Maya" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#191C22] rounded-full flex items-center justify-center">
                  <HandHeart size={10} className="text-[#FFB690]" />
                </div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#A3E635] border-2 border-[#191C22] rounded-full"></div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-snug pr-2">Maya Safitri memberi Kudos 👏</h4>
                  <span className="text-[9px] text-[#C2CAB0] shrink-0 mt-0.5">1 jam lalu</span>
                </div>
                <p className="text-[11px] text-[#C2CAB0] leading-relaxed mb-2">
                  Memberikan tepuk tangan untuk lari 5.21 KM pagi Anda:
                </p>
                <div className="p-2.5 bg-[#0B0E14] border-l-2 border-[#424936] rounded-r-lg">
                  <p className="text-[11px] italic text-[#C2CAB0]">"Gokil pace-nya stabil banget bro!"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notif 3 */}
          <div className="p-4 bg-[#191C22]/80 border border-[#424936]/40 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#A3E635]"></div>
            
            <div className="flex gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#00A6E0]/10 border border-[#7BD0FF]/40 flex items-center justify-center shrink-0">
                  <Wallet size={16} className="text-[#7BD0FF]" />
                </div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#A3E635] border-2 border-[#191C22] rounded-full"></div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-snug pr-2">Klaim Hadiah Berhasil Masuk Dompet</h4>
                  <span className="text-[9px] text-[#C2CAB0] shrink-0 mt-0.5">3 jam lalu</span>
                </div>
                <p className="text-[11px] text-[#C2CAB0] leading-relaxed mb-3">
                  <span className="font-bold text-[#A3E635]">500 FIT</span> dari Hadiah Podium Mingguan telah ditransfer ke dompet Anda (0x8A...F92). Gas fee gratis.
                </p>
                <button 
                  onClick={() => navigate('/wallet')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12151C] border border-[#7BD0FF]/30 rounded-full text-[10px] font-bold text-[#7BD0FF] hover:bg-[#191C22] transition-colors self-start"
                >
                  Buka Dompet Web3 <ExternalLink size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section: KEMARIN */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-bold text-[#424936] tracking-wider uppercase">KEMARIN</span>
            <span className="text-[10px] text-[#C2CAB0]">Dibaca</span>
          </div>

          {/* Notif 4 */}
          <div className="p-4 bg-[#191C22]/40 border border-[#424936]/20 rounded-xl relative">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#12151C] border border-[#424936]/50 flex items-center justify-center shrink-0">
                <Trophy size={16} className="text-[#A3E635]" />
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-[13px] text-[#C2CAB0] leading-snug pr-2">Tantangan 'Run 50 KM' Mendekati Target 🎯</h4>
                  <span className="text-[9px] text-[#424936] shrink-0 mt-0.5">18:30</span>
                </div>
                <p className="text-[11px] text-[#424936] leading-relaxed mb-3">
                  Sisa <span className="text-[#C2CAB0]">14 KM</span> lagi untuk klaim bonus <span className="text-[#A3E635]">+500 FIT</span> dan NFT Badge eksklusif edisi Maret.
                </p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[9px] text-[#424936] font-medium">
                    <span>36 / 50 KM</span>
                    <span>72%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#12151C] rounded-full overflow-hidden">
                    <div className="h-full bg-[#A3E635]" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notif 5 */}
          <div className="p-4 bg-[#191C22]/40 border border-[#424936]/20 rounded-xl relative">
            <div className="flex gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-[#424936]/50 overflow-hidden shrink-0 opacity-70">
                  <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-[13px] text-[#C2CAB0] leading-snug pr-2">Alex Wijaya mengomentari aktivitas Anda</h4>
                  <span className="text-[9px] text-[#424936] shrink-0 mt-0.5">14:15</span>
                </div>
                <div className="p-2.5 bg-[#0B0E14] border-l-2 border-[#424936]/40 rounded-r-lg mb-2">
                  <p className="text-[11px] italic text-[#424936]">"Besok sabtu ikut long run di Malioboro bareng Kalcerly Club?"</p>
                </div>
                <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#A3E635] hover:text-[#B4F742] transition-colors self-start">
                  <MessageSquare size={10} /> Balas Komentar <CornerDownLeft size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section: MINGGU INI */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-bold text-[#424936] tracking-wider uppercase">MINGGU INI</span>
            <span className="text-[10px] text-[#C2CAB0]">Arsip</span>
          </div>

          {/* Notif 6 */}
          <div className="p-4 bg-[#191C22]/40 border border-[#424936]/20 rounded-xl relative mb-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#12151C] border border-[#424936]/50 flex items-center justify-center shrink-0">
                <Medal size={16} className="text-[#A3E635]" />
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-[13px] text-[#C2CAB0] leading-snug pr-2">Pencapaian Baru: 7-Day Streak Runner 🔥</h4>
                  <span className="text-[9px] text-[#424936] shrink-0 mt-0.5">3 hari lalu</span>
                </div>
                <p className="text-[11px] text-[#424936] leading-relaxed mb-3">
                  Anda telah aktif selama 7 hari berturut-turut. Reward multiplier <span className="text-[#A3E635] font-bold">1.5x</span> aktif untuk sesi berikutnya.
                </p>
                <div className="px-2 py-1 bg-[#12151C] border border-[#424936]/40 rounded-full flex items-center gap-1.5 self-start">
                  <Zap size={10} className="text-[#FFB690]" />
                  <span className="text-[9px] font-bold text-[#C2CAB0]">Multiplier 1.5x Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
