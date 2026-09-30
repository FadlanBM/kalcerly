import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CheckCircle2, Copy, ShieldCheck, Share2, Wallet, ChevronRight } from 'lucide-react';

export default function TransferSuccess() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-8 overflow-x-hidden flex flex-col pt-8">
      
      {/* Top Section */}
      <div className="flex flex-col items-center px-4 mb-6">
        {/* Animated Check Icon */}
        <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 border border-[#A3E635]/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute inset-2 border border-[#A3E635]/40 rounded-full"></div>
          <div className="absolute inset-4 bg-[#A3E635] rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(163,230,53,0.4)]">
            <Check size={32} className="text-[#121F00]" strokeWidth={3} />
          </div>
        </div>

        <h1 className="font-bold text-2xl text-[#E1E2EB] mb-2 tracking-tight">Transfer Berhasil!</h1>
        <p className="text-[11px] text-[#C2CAB0] text-center mb-6">
          FIT Token telah berhasil dikirim melalui smart contract
        </p>

        <div className="flex flex-col items-center mb-3">
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="font-bold text-[40px] text-[#A3E635] leading-none tracking-tight">-250</span>
            <span className="font-bold text-lg text-[#A3E635]">FIT</span>
          </div>
          <span className="text-xs text-[#C2CAB0]">≈ $37.50 USD</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#12151C] border border-[#424936]/40 rounded-full">
          <CheckCircle2 size={12} className="text-[#7BD0FF]" />
          <span className="text-[10px] text-[#C2CAB0]">
            Terkonfirmasi di Blok <span className="text-[#E1E2EB] font-bold">#1984289</span> (1.8 detik)
          </span>
        </div>
      </div>

      {/* Main Receipt Card */}
      <div className="px-4 mb-4">
        <div className="w-full bg-[#12151C] border border-[#424936]/30 rounded-2xl p-4">
          
          <div className="flex justify-between items-center mb-5">
            <span className="text-[9px] font-bold text-[#C2CAB0] tracking-widest uppercase">RINCIAN TANDA TERIMA</span>
            <div className="flex items-center gap-1 text-[#C2CAB0]">
              <span className="text-[10px]">⏱</span>
              <span className="text-[10px]">Hari ini, 18:24 WIB</span>
            </div>
          </div>

          {/* Recipient */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-[#191C22] border border-[#424936] overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#A3E635] border-2 border-[#12151C] rounded-full flex items-center justify-center">
                  <Check size={8} className="text-[#121F00]" strokeWidth={4} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-[13px] text-[#E1E2EB]">Alex Wijaya</span>
                  <div className="px-1.5 py-0.5 bg-[#2775CA]/20 rounded text-[8px] font-medium text-[#7BD0FF]">@alexride</div>
                </div>
                <span className="text-[11px] font-medium text-[#A3E635]">alex.kalcerly.eth</span>
                <span className="text-[10px] text-[#C2CAB0] font-['Space_Grotesk']">0x742d...8b42</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#7BD0FF] tracking-wider uppercase">PENERIMA</span>
          </div>

          {/* Details Grid */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between items-start">
              <span className="text-[11px] text-[#C2CAB0]">Pengirim</span>
              <div className="flex flex-col items-end text-right">
                <span className="text-[11px] text-[#E1E2EB]">Dompet Saya</span>
                <span className="text-[11px] text-[#C2CAB0] font-['Space_Grotesk']">0x8A42...9F92</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-[#C2CAB0]">Jaringan Blockchain</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#8247E5] rounded-full"></div>
                <span className="text-[11px] font-medium text-[#E1E2EB]">Polygon PoS Mainnet</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-[11px] text-[#C2CAB0]">Biaya Jaringan (Gas)</span>
              <div className="flex flex-col items-end text-right">
                <div className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635]/40 rounded text-[9px] font-bold text-[#A3E635] tracking-wider mb-1">GRATIS</div>
                <span className="text-[9px] text-[#C2CAB0] w-[140px]">Disponsori Kalcerly Paymaster (ERC-4337)</span>
              </div>
            </div>
          </div>

          {/* TxHash */}
          <div className="w-full bg-[#0B0E14] border border-[#424936]/30 rounded-xl p-3 flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-[#C2CAB0] tracking-wider uppercase mb-1">ID TRANSAKSI (TXHASH)</span>
              <span className="text-[11px] text-[#7BD0FF] font-['Space_Grotesk']">0x3f9b8e21a48c...87d19c</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#191C22] border border-[#424936]/50 rounded-lg hover:bg-[#272A31] transition-colors">
              <Copy size={12} className="text-[#C2CAB0]" />
              <span className="text-[10px] font-medium text-[#E1E2EB]">Salin</span>
            </button>
          </div>

          {/* Proof of Activity Valid */}
          <div className="w-full bg-[#121F00]/30 border border-[#A3E635]/20 rounded-xl p-3 flex gap-3">
            <div className="mt-0.5">
              <ShieldCheck size={16} className="text-[#A3E635]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-bold text-[#A3E635] tracking-wider uppercase">PROOF OF ACTIVITY VALID</span>
                <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
              </div>
              <p className="text-[10px] text-[#E1E2EB] leading-relaxed mb-1">
                Sumber Reward: Sesi lari terverifikasi <span className="text-[#A3E635]">"GBK Sunset Run"</span> (6.2 km)
              </p>
              <p className="text-[9px] text-[#C2CAB0] leading-relaxed">
                Data GPS & detak jantung divalidasi on-chain melalui Oracles
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Remaining Balance Card */}
      <div className="px-4 mb-6">
        <div className="w-full bg-[#12151C] border border-[#424936]/30 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#191C22] border border-[#424936]/50 flex items-center justify-center">
              <Wallet size={14} className="text-[#A3E635]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#C2CAB0] mb-0.5">Sisa Saldo FIT Anda</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-sm text-[#E1E2EB]">1,000 FIT</span>
                <span className="text-[10px] text-[#C2CAB0]">(~$150.00 USD)</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-[#191C22] border border-[#424936]/50 rounded-lg hover:bg-[#272A31] transition-colors">
            <span className="text-[11px] font-medium text-[#E1E2EB]">Log</span>
            <ChevronRight size={12} className="text-[#C2CAB0]" />
          </button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mt-auto">
        <button 
          onClick={() => navigate('/wallet')}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#A3E635] hover:bg-[#B4F742] transition-colors rounded-full text-[#121F00] mb-4"
        >
          <CheckCircle2 size={18} strokeWidth={2.5} />
          <span className="text-[15px] font-bold">Selesai & Kembali ke Dompet</span>
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 py-2 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
          <Share2 size={14} />
          <span className="text-[11px] font-medium">Bagikan Bukti Transfer / Share Receipt</span>
        </button>
      </div>

    </div>
  );
}
