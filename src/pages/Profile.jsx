import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import { useAuth } from '../context/AuthContext';
import { 
  Edit2, Settings, CheckCircle2, Copy, RefreshCw, ArrowRight, 
  BarChart2, MapPin, Activity, Flame, DollarSign, Trophy, 
  ChevronRight, Clock, MessageCircle, Share2, Wallet, LogOut
} from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  
  const initials = user?.fullname ? user.fullname.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'RP';

  return (
    <div className="relative w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-[calc(80px+env(safe-area-inset-bottom))] overflow-x-hidden">
      
      {/* Header */}
      <div className="sticky top-0 w-full px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-3 bg-[#0B0E14]/95 backdrop-blur-md z-40 flex items-center justify-between border-b border-[#424936]/20">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#CCFF80]">Profil Saya</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/profile/edit')} aria-label="Edit profil" className="text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors"><Edit2 size={18} /></button>
          <button onClick={() => navigate('/profile/settings')} aria-label="Pengaturan" className="text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors"><Settings size={18} /></button>
          <button onClick={logoutUser} className="text-rose-400 hover:text-rose-300 transition-colors" title="Logout"><LogOut size={18} /></button>
        </div>
      </div>

      <div className="px-4 py-4 flex flex-col gap-5">
        
        {/* Profile Card */}
        <div className="relative p-4 bg-gradient-to-br from-[#121F00] to-[#191C22] border border-[#A3E635]/30 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A3E635]/10 blur-[40px] rounded-full pointer-events-none"></div>

          <div className="flex items-start gap-3 relative z-10">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#272A31] border-2 border-[#A3E635] p-0.5">
                <div className="w-full h-full rounded-full bg-[#191C22] overflow-hidden">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#32353C] flex items-center justify-center text-xs">{initials}</div>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#191C22] rounded-full p-0.5">
                <CheckCircle2 size={16} className="text-[#A3E635]" fill="#A3E635" stroke="#191C22" />
              </div>
            </div>
            
            <div className="flex flex-col pt-1">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-tight text-[#E1E2EB]">{user?.fullname || 'User'}</h2>
              <span className="font-['Space_Grotesk'] text-[12px] text-[#7BD0FF] mb-1.5">@rian_runner</span>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#121F00]/80 border border-[#A3E635] rounded-full">
                <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
                <span className="text-[9px] font-bold text-[#A3E635] tracking-wider uppercase">VERIFIED PROTOCOL ATHLETE</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#C2CAB0] mt-3 relative z-10 leading-relaxed">
            Marathon runner & fitness enthusiast. Running GBK & Senayan loops daily. 🏃‍♂️⚡
          </p>

          <div className="flex items-center justify-between mt-4 relative z-10">
            <div className="flex gap-4">
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-[#E1E2EB] text-sm">184</span>
                <span className="text-[10px] text-[#C2CAB0]">Mengikuti</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-[#E1E2EB] text-sm">1,420</span>
                <span className="text-[10px] text-[#C2CAB0]">Pengikut</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#A3E635]">
              <Flame size={12} fill="currentColor" />
              <span className="text-[10px] font-bold tracking-wider">TIER 4 PRO</span>
            </div>
          </div>

          {/* Connected Wallet Section */}
          <div className="mt-4 p-3 bg-[#0B0E14]/80 border border-[#424936]/40 rounded-xl relative z-10">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#CCFF80] rounded-full"></div>
                <span className="text-[10px] font-bold text-[#424936] uppercase tracking-wider text-[#C2CAB0]">CONNECTED WALLET</span>
              </div>
              <div className="flex gap-2 text-[#C2CAB0]">
                <Copy size={12} className="cursor-pointer hover:text-[#E1E2EB]" />
                <RefreshCw size={12} className="cursor-pointer hover:text-[#E1E2EB]" />
              </div>
            </div>
            <div className="font-['Space_Grotesk'] text-xs text-[#E1E2EB] mb-3">0x8A92...aF92</div>
            
            <button onClick={() => navigate('/wallet')} className="w-full flex items-center justify-between px-3 py-2 bg-[#A3E635] hover:bg-[#B4F742] transition-colors rounded-lg text-[#121F00]">
              <div className="flex items-center gap-2">
                <Wallet size={16} />
                <span className="text-xs font-bold">Buka Dompet Web3 / FIT Wallet</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold leading-tight">2,840</span>
                  <span className="text-[9px] font-bold leading-tight">FIT</span>
                </div>
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Statistik Performa */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart2 size={16} className="text-[#CCFF80]" />
              <h3 className="font-bold text-[15px] text-[#E1E2EB]">Statistik Performa</h3>
            </div>
            <span className="text-[9px] font-bold text-[#C2CAB0] tracking-wider uppercase">LIFETIME CONSENSUS</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] text-[#C2CAB0]">Total Jarak</span>
                <MapPin size={12} className="text-[#7BD0FF]" />
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-bold text-2xl text-[#E1E2EB]">428.5</span>
                <span className="font-medium text-xs text-[#7BD0FF]">KM</span>
              </div>
              <div className="flex items-center gap-1 text-[9px]">
                <Activity size={10} className="text-[#A3E635]" />
                <span className="text-[#A3E635] font-medium">+14.2% bln ini</span>
              </div>
            </div>

            <div className="p-3 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] text-[#C2CAB0]">Aktivitas Valid</span>
                <CheckCircle2 size={12} className="text-[#A3E635]" />
              </div>
              <div className="font-bold text-2xl text-[#E1E2EB] mb-1">87</div>
              <div className="flex items-center gap-1 text-[9px] text-[#7BD0FF]">
                <ShieldIcon />
                <span className="font-medium">100% On-Chain</span>
              </div>
            </div>

            <div className="p-3 bg-gradient-to-br from-[#2a1711] to-[#191C22] border border-[#FFB690]/30 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFB690]/5 blur-[20px] rounded-full"></div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <span className="text-[11px] text-[#C2CAB0]">Streak Aktif</span>
                <Flame size={12} className="text-[#FFB690]" fill="#FFB690" />
              </div>
              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="font-bold text-2xl text-[#E1E2EB]">14</span>
                <span className="font-medium text-xs text-[#C2CAB0]">Hari</span>
              </div>
              <div className="text-[9px] text-[#FFB690]/80 relative z-10">Target Pribadi: 21 Hari</div>
            </div>

            <div className="p-3 bg-gradient-to-br from-[#121F00] to-[#191C22] border border-[#A3E635]/30 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#A3E635]/10 blur-[20px] rounded-full"></div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <span className="text-[11px] text-[#C2CAB0]">Total FIT</span>
                <DollarSign size={12} className="text-[#CCFF80]" />
              </div>
              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="font-bold text-2xl text-[#CCFF80]">2,840</span>
                <span className="font-medium text-[10px] text-[#C2CAB0]">FIT</span>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-[#C2CAB0] relative z-10">
                <div className="w-1 h-1 bg-[#A3E635] rounded-full"></div>
                Siap Klaim: 120 FIT
              </div>
            </div>
          </div>
        </div>

        {/* Pencapaian & Badge */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-[#7BD0FF]" />
              <h3 className="font-bold text-[15px] text-[#E1E2EB]">Pencapaian & Badge</h3>
            </div>
            <button onClick={() => navigate('/profile/badges')} className="flex items-center gap-0.5 text-[10px] font-bold text-[#CCFF80]">
              Lihat Semua <ChevronRight size={10} />
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {/* Badge 1 */}
            <div className="flex flex-col items-center justify-center p-3 w-[100px] bg-[#191C22]/80 border border-[#A3E635]/40 rounded-xl shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#121F00] border border-[#A3E635] flex items-center justify-center mb-2">
                <span className="text-lg">🏃</span>
              </div>
              <span className="text-[10px] font-bold text-[#E1E2EB] mb-1">First 5K</span>
              <div className="px-1.5 py-0.5 bg-[#A3E635]/20 rounded text-[7px] font-bold text-[#A3E635] uppercase mb-1.5 tracking-wider">UNLOCKED</div>
              <span className="text-[8px] text-[#C2CAB0]">Proof #014</span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center justify-center p-3 w-[100px] bg-[#191C22]/80 border border-[#FFB690]/40 rounded-xl shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#2a1711] border border-[#FFB690] flex items-center justify-center mb-2">
                <span className="text-lg">♨️</span>
              </div>
              <span className="text-[10px] font-bold text-[#E1E2EB] mb-1 whitespace-nowrap">7-Day Streak</span>
              <div className="px-1.5 py-0.5 bg-[#FFB690]/20 rounded text-[7px] font-bold text-[#FFB690] uppercase mb-1.5 tracking-wider">UNLOCKED</div>
              <span className="text-[8px] text-[#C2CAB0]">NFT Staked</span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center justify-center p-3 w-[100px] bg-[#191C22]/80 border border-[#7BD0FF]/40 rounded-xl shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#00A6E0]/10 border border-[#7BD0FF] flex items-center justify-center mb-2">
                <span className="text-lg">🏆</span>
              </div>
              <span className="text-[10px] font-bold text-[#E1E2EB] mb-1 whitespace-nowrap">50 KM Runner</span>
              <div className="px-1.5 py-0.5 bg-[#7BD0FF]/20 rounded text-[7px] font-bold text-[#7BD0FF] uppercase mb-1.5 tracking-wider">UNLOCKED</div>
              <span className="text-[8px] text-[#C2CAB0]">Proof #042</span>
            </div>
          </div>
        </div>

        {/* Tabs & Feed */}
        <div className="mt-2">
          <div className="flex bg-[#191C22] p-1 rounded-lg border border-[#424936]/30 mb-4">
            <button className="flex-1 py-1.5 bg-[#272A31] border border-[#A3E635]/40 rounded-md shadow-sm text-xs font-bold text-[#CCFF80]">Aktivitas Terakhir</button>
            <button className="flex-1 py-1.5 text-xs font-medium text-[#C2CAB0] hover:text-[#E1E2EB]">NFT Badges</button>
            <button className="flex-1 py-1.5 text-xs font-medium text-[#C2CAB0] hover:text-[#E1E2EB]">Statistik</button>
          </div>

          {/* Activity Item */}
          <div className="p-4 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#121F00] border border-[#A3E635]/50 flex items-center justify-center shrink-0">
                  <Activity size={16} className="text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-tight">GBK Sunset Run</h4>
                  <div className="flex items-center flex-wrap gap-1 text-[10px] text-[#C2CAB0] mt-1">
                    <span>Kemarin, 17:45 WIB</span>
                    <span className="text-[8px]">•</span>
                    <span className="text-[#7BD0FF]">Gelora Bung Karno</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[#121F00]/80 border border-[#A3E635] rounded-full shrink-0">
                <CheckCircle2 size={10} className="text-[#A3E635]" />
                <span className="text-[8px] font-bold text-[#A3E635] tracking-wider uppercase">AI VERIFIED</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 border-t border-b border-[#424936]/20 mb-3 relative z-10">
              <div className="flex flex-col">
                <span className="text-[9px] text-[#C2CAB0] font-bold tracking-wider mb-0.5">JARAK</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-lg font-bold text-[#E1E2EB]">5.21</span>
                  <span className="text-[10px] text-[#C2CAB0]">KM</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#C2CAB0] font-bold tracking-wider mb-0.5">DURASI</span>
                <span className="text-lg font-bold text-[#E1E2EB]">34:22</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-[#C2CAB0] font-bold tracking-wider mb-0.5">PACE RATA-RATA</span>
                <span className="text-lg font-bold text-[#E1E2EB]">6'35"</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-3 text-[10px] relative z-10">
              <div className="flex items-center gap-1 text-[#CCFF80]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF80] flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-[#121F00] rounded-full"></div>
                </div>
                <span className="font-bold">+42 FIT</span>
                <span className="text-[#C2CAB0] ml-1">• Minted to L2</span>
              </div>
              <span className="text-[#7BD0FF] font-medium flex items-center gap-1 cursor-pointer">
                0x3d7b...f12c <ChevronRight size={10} className="rotate-[-45deg]" />
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#C2CAB0] text-[10px] relative z-10">
              <button className="flex items-center gap-1 hover:text-[#E1E2EB]">
                <span className="text-xs">🔥</span> 28 Kudos
              </button>
              <button className="flex items-center gap-1 hover:text-[#E1E2EB]">
                <MessageCircle size={12} /> 6 Komentar
              </button>
              <button className="ml-auto hover:text-[#E1E2EB]">
                <Share2 size={12} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
