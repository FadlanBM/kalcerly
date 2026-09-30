import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Copy, QrCode, Send, ArrowLeftRight, Wallet as WalletIcon, 
  Flame, CheckCircle2, Activity, ExternalLink, Zap, Fuel, Link, Unlink
} from 'lucide-react';
import SwapModal from '../components/SwapModal';
import { getWallets } from '../api/wallet';

export default function Wallet() {
  const navigate = useNavigate();
  const [autoMint, setAutoMint] = useState(true);
  const [activeModal, setActiveModal] = useState(null); // 'send' | 'swap' | null
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await getWallets();
        if (res.success) {
          setWallets(res.data);
        }
      } catch (err) {
        console.error("Failed to load wallets:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWallets();
  }, []);

  const primaryWallet = wallets.find(w => w.isPrimary) || wallets[0];
  const displayAddress = primaryWallet 
    ? `${primaryWallet.address.slice(0, 6)}...${primaryWallet.address.slice(-4)}`
    : 'Belum Terhubung';

  return (
    <div className="relative w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-8 overflow-x-hidden">
      
      {/* Header */}
      <div className="sticky top-0 w-full px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-4 bg-[#0B0E14]/95 backdrop-blur-md z-40 flex items-center justify-between border-b border-[#424936]/20">
        <button onClick={() => navigate(-1)} className="text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors p-1 -ml-1">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-['Space_Grotesk'] font-bold text-base text-[#E1E2EB] tracking-wider uppercase">DOMPET</h1>
        <div className="w-6"></div> {/* Spacer for centering */}
      </div>

      <div className="px-4 py-4 flex flex-col gap-6">
        
        {/* Main Wallet Card */}
        <div className="relative p-4 bg-[#191C22]/80 border border-[#A3E635]/30 rounded-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#A3E635]/5 blur-[40px] rounded-full pointer-events-none"></div>

          {/* Network & Address Row */}
          <div className="flex justify-between items-center mb-5 relative z-10">
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 bg-[#00A6E0]/20 border border-[#7BD0FF]/30 rounded text-[9px] font-bold text-[#7BD0FF] tracking-wider uppercase">EVM MAINNET</div>
              <span className="font-['Space_Grotesk'] text-sm text-[#E1E2EB]">|</span>
              <div className="flex items-center gap-1.5 cursor-pointer group">
                {loading ? (
                  <div className="w-24 h-4 bg-[#32353C]/50 rounded animate-pulse"></div>
                ) : (
                  <span className="font-['Space_Grotesk'] text-[13px] font-medium text-[#E1E2EB]">{displayAddress}</span>
                )}
                {!loading && <Copy size={12} className="text-[#C2CAB0] group-hover:text-[#A3E635] transition-colors" />}
              </div>
            </div>
            <button className="p-1.5 bg-[#121F00] border border-[#A3E635]/30 rounded-lg text-[#C2CAB0] hover:text-[#A3E635] transition-colors">
              <QrCode size={16} />
            </button>
          </div>

          {/* Balance */}
          <div className="mb-5 relative z-10">
            <span className="text-[11px] text-[#C2CAB0] block mb-1">Saldo Token Olahraga</span>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-4xl text-[#CCFF80]">1,250</span>
              <span className="font-bold text-base text-[#CCFF80]">FIT</span>
              <span className="text-xs text-[#C2CAB0] ml-1">≈ $187.50 USD</span>
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
            <div className="p-2.5 bg-[#0B0E14]/60 border border-[#424936]/40 rounded-xl">
              <div className="flex items-center gap-1 mb-1">
                <Flame size={12} className="text-[#FFB690]" fill="#FFB690" />
                <span className="text-[9px] font-bold text-[#C2CAB0] uppercase tracking-wider">TOTAL REWARDS</span>
              </div>
              <span className="font-bold text-sm text-[#E1E2EB]">2,840 FIT</span>
            </div>
            <div className="p-2.5 bg-[#0B0E14]/60 border border-[#424936]/40 rounded-xl">
              <div className="flex items-center gap-1 mb-1">
                <CheckCircle2 size={12} className="text-[#7BD0FF]" />
                <span className="text-[9px] font-bold text-[#C2CAB0] uppercase tracking-wider">PROOFS MINTED</span>
              </div>
              <span className="font-bold text-sm text-[#E1E2EB]">42 Proofs</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-5 relative z-10">
            <button 
              onClick={() => setActiveModal('send')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#A3E635] hover:bg-[#B4F742] transition-colors rounded-full text-[#121F00]"
            >
              <Send size={14} />
              <span className="text-sm font-bold">Kirim / Transfer</span>
            </button>
            <button 
              onClick={() => setActiveModal('swap')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#272A31] border border-[#424936]/60 hover:bg-[#32353C] transition-colors rounded-full text-[#E1E2EB]"
            >
              <ArrowLeftRight size={14} />
              <span className="text-sm font-bold">Tukar / Swap</span>
            </button>
          </div>

          {/* Bottom Connect Link */}
          <button className="w-full pt-4 border-t border-[#424936]/40 flex items-center justify-between text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors relative z-10">
            <div className="flex items-center gap-2.5">
              <WalletIcon size={14} />
              <span className="text-[10px] leading-tight text-left">Hubungkan Wallet Lain (WalletConnect /<br/>Phantom / Metamask)</span>
            </div>
            <span className="text-sm">›</span>
          </button>
        </div>

        {/* Aktivitas Proof Terkini */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-[15px] text-[#E1E2EB]">Aktivitas Proof Terkini</h2>
              <div className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635]/40 rounded text-[8px] font-bold text-[#A3E635] tracking-wider uppercase">ZK-PROOF</div>
            </div>
            <button className="text-[11px] text-[#7BD0FF] hover:text-[#A3E635] transition-colors">Semua (42)</button>
          </div>

          {/* Activity 1 */}
          <div className="p-4 bg-[#191C22]/80 border border-[#424936]/40 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#121F00] border border-[#A3E635]/50 flex items-center justify-center shrink-0">
                  <Activity size={16} className="text-[#A3E635]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-tight">Morning Run Senayan</h4>
                  <p className="text-[11px] text-[#C2CAB0] mt-0.5">Hari ini • 06:14 WIB</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635] rounded text-[9px] font-bold text-[#A3E635]">
                  +42 FIT Minted
                </div>
                <span className="text-[10px] text-[#C2CAB0]">5.21 KM</span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#424936] text-[#C2CAB0]">Tx Hash</span>
                <span className="text-[#E1E2EB] font-['Space_Grotesk']">0x8f92e4...a91cb2</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#424936] text-[#C2CAB0]">Block Verification</span>
                <span className="text-[#7BD0FF] font-['Space_Grotesk']">Block #1984203</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[#424936]/20">
              <div className="flex items-center gap-1.5 text-[#A3E635]">
                <CheckCircle2 size={12} />
                <span className="text-[9px] font-bold tracking-wider uppercase">VALIDATED PROOF-OF-WORKOUT</span>
              </div>
              <button className="flex items-center gap-1 text-[10px] text-[#7BD0FF] hover:text-[#A3E635] transition-colors">
                Lihat di Explorer <ExternalLink size={10} />
              </button>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="p-4 bg-[#191C22]/80 border border-[#424936]/40 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00A6E0]/10 border border-[#7BD0FF]/50 flex items-center justify-center shrink-0">
                  <Activity size={16} className="text-[#7BD0FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#E1E2EB] leading-tight">PIK 2 Cycling Sprint</h4>
                  <p className="text-[11px] text-[#C2CAB0] mt-0.5">Kemarin • 16:40 WIB</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635] rounded text-[9px] font-bold text-[#A3E635]">
                  +65 FIT Minted
                </div>
                <span className="text-[10px] text-[#C2CAB0]">42.4 KM</span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#424936] text-[#C2CAB0]">Tx Hash</span>
                <span className="text-[#E1E2EB] font-['Space_Grotesk']">0x3d71b8...c44ea1</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#424936] text-[#C2CAB0]">Block Verification</span>
                <span className="text-[#7BD0FF] font-['Space_Grotesk']">Block #1983890</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[#424936]/20">
              <div className="flex items-center gap-1.5 text-[#A3E635]">
                <CheckCircle2 size={12} />
                <span className="text-[9px] font-bold tracking-wider uppercase">VALIDATED PROOF-OF-WORKOUT</span>
              </div>
              <button className="flex items-center gap-1 text-[10px] text-[#7BD0FF] hover:text-[#A3E635] transition-colors">
                Lihat di Explorer <ExternalLink size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* Pengaturan & Keamanan Dompet */}
        <div className="flex flex-col gap-3 mb-6">
          <h2 className="font-bold text-[15px] text-[#E1E2EB]">Pengaturan & Keamanan Dompet</h2>
          
          <div className="flex flex-col bg-[#191C22]/80 border border-[#424936]/40 rounded-xl overflow-hidden divide-y divide-[#424936]/20">
            
            {/* Setting 1: Auto-Mint */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex flex-col pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={14} className="text-[#A3E635]" />
                  <span className="font-bold text-sm text-[#E1E2EB]">Auto-Mint Activity Proof</span>
                </div>
                <p className="text-[10px] text-[#C2CAB0] leading-relaxed pl-5.5">
                  Mint bukti olahraga otomatis setelah GPS validasi selesai.
                </p>
              </div>
              <div 
                onClick={() => setAutoMint(!autoMint)}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${autoMint ? 'bg-[#A3E635]' : 'bg-[#424936]'}`}
              >
                <div className={`w-4 h-4 bg-[#121F00] rounded-full shadow-sm transform transition-transform ${autoMint ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </div>

            {/* Setting 2: Gasless Sponsoring */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex flex-col pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <Fuel size={14} className="text-[#7BD0FF]" />
                  <span className="font-bold text-sm text-[#E1E2EB]">Gasless Minting Sponsoring</span>
                </div>
                <p className="text-[10px] text-[#C2CAB0] leading-relaxed pl-5.5">
                  Biaya jaringan (gas fee) ditanggung Kalcerly Paymaster.
                </p>
              </div>
              <div className="px-2 py-1 bg-[#00A6E0]/20 border border-[#7BD0FF]/40 rounded text-[9px] font-bold text-[#7BD0FF] tracking-wider shrink-0">
                GRATIS
              </div>
            </div>

            {/* Setting 3: Connected Wallet */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex flex-col pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <WalletIcon size={14} className="text-[#C2CAB0]" />
                  <span className="font-bold text-sm text-[#E1E2EB]">Dompet Terhubung</span>
                </div>
                <p className="text-[10px] text-[#C2CAB0] leading-relaxed pl-5.5">
                  Primary: MetaMask EVM
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#121F00]/80 border border-[#A3E635]/40 rounded-full shrink-0">
                <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
                <span className="text-[8px] font-bold text-[#A3E635] tracking-wider uppercase">TERHUBUNG</span>
              </div>
            </div>
          </div>

          {/* Disconnect Button */}
          <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FF5A5A]/5 border border-[#FF5A5A]/20 hover:bg-[#FF5A5A]/10 transition-colors rounded-xl text-[#FFB690]">
            <Unlink size={16} />
            <span className="text-sm font-bold">Putuskan Koneksi Dompet</span>
          </button>
        </div>

      </div>

      {/* Swap Modal */}
      {activeModal !== null && (
        <SwapModal initialTab={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
