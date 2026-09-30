import React from 'react';
import { CheckCircle2, Circle, ExternalLink, Loader2, Award, Zap } from 'lucide-react';

export default function MintingStatus() {
  return (
    <div className="relative w-full max-w-[390px] h-full mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-8 overflow-y-auto">
      
      {/* Top Modal Drag Handle & Ambient Background */}
      <div className="relative w-full h-[180px] bg-gradient-to-b from-[#1D2026] to-[#0B0E14] flex flex-col items-center justify-start pt-3 overflow-hidden rounded-t-[32px]">
        <div className="w-12 h-1.5 bg-[#424936]/50 rounded-full mb-6"></div>
        
        {/* Animated Trophy Graphic */}
        <div className="relative flex justify-center items-center w-24 h-24 mb-4">
          <div className="absolute inset-0 bg-[#FFB690]/10 rounded-full blur-[20px]"></div>
          {/* Orbital rings */}
          <div className="absolute w-[120%] h-[120%] border border-[#424936]/40 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-[140%] h-[140%] border border-[#7BD0FF]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          {/* Core circle */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#552100] to-[#121F00] border border-[#FFB690]/40 flex items-center justify-center relative z-10 shadow-[0_0_24px_rgba(255,182,144,0.3)]">
            <Award size={32} className="text-[#FFB690]" />
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#121F00]/80 border border-[#A3E635]/40 rounded-full z-10">
          <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-[#A3E635] tracking-wider uppercase">Memproses Transaksi On-Chain • Gasless</span>
        </div>
      </div>

      {/* Header Titles */}
      <div className="flex flex-col items-center text-center px-6 mt-2 mb-6">
        <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] leading-tight text-[#E1E2EB] mb-2">Mencetak Trofi NFT & Mengirim FIT</h1>
        <p className="text-[11px] leading-relaxed text-[#C2CAB0]">Menghubungkan konsensus AI Proof of Kinetic Work (PoKW) ke Polygon PoS Mainnet.</p>
      </div>

      {/* Two Summary Cards */}
      <div className="flex gap-3 px-4 mb-6">
        <div className="flex-1 p-3 bg-[#191C22]/80 border border-[#A3E635]/30 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#121F00] border border-[#A3E635]/50 flex items-center justify-center flex-shrink-0">
            <Zap size={14} className="text-[#A3E635]" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-[9px] font-bold text-[#C2CAB0] tracking-wider uppercase">REWARD RUN</span>
            <span className="font-bold text-sm text-[#CCFF80] truncate">+1,500 FIT Total</span>
          </div>
        </div>
        <div className="flex-1 p-3 bg-[#191C22]/80 border border-[#FFB690]/30 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2a1711] border border-[#FFB690]/50 flex items-center justify-center flex-shrink-0">
            <Award size={14} className="text-[#FFB690]" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-[9px] font-bold text-[#C2CAB0] tracking-wider uppercase">SOULBOUND NFT</span>
            <span className="font-bold text-sm text-[#FFB690] truncate">Bronze Genesis</span>
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="px-6 mb-8 flex flex-col">
        
        {/* Step 1: LULUS */}
        <div className="flex gap-4 relative pb-6">
          <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#A3E635]"></div>
          <div className="relative z-10 flex flex-col items-center pt-0.5">
            <div className="w-6 h-6 rounded-full bg-[#A3E635] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(163,230,53,0.4)]">
              <CheckCircle2 size={14} className="text-[#121F00]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm text-[#E1E2EB] pr-2">Validasi AI Telemetri & Anti-Cheat</span>
              <div className="px-1.5 py-0.5 border border-[#A3E635] bg-[#121F00]/50 rounded text-[9px] font-bold text-[#A3E635] tracking-wider shrink-0">LULUS</div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#C2CAB0]">
              <CheckCircle2 size={10} className="text-[#A3E635]" />
              <span>99.8% GPS Verified (10.02 km • Cadence valid)</span>
            </div>
          </div>
        </div>

        {/* Step 2: SUBSIDIZED */}
        <div className="flex gap-4 relative pb-6">
          <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#A3E635]"></div>
          <div className="relative z-10 flex flex-col items-center pt-0.5">
            <div className="w-6 h-6 rounded-full bg-[#A3E635] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(163,230,53,0.4)]">
              <CheckCircle2 size={14} className="text-[#121F00]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm text-[#E1E2EB] pr-2">Otorisasi Kalcerly Paymaster ERC-4337</span>
              <div className="px-1.5 py-0.5 border border-[#7BD0FF] bg-[#00A6E0]/20 rounded text-[9px] font-bold text-[#7BD0FF] tracking-wider shrink-0">SUBSIDIZED</div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#C2CAB0]">
              <Zap size={10} className="text-[#7BD0FF]" />
              <span>Biaya Gas Ditanggung (0 POL)</span>
            </div>
          </div>
        </div>

        {/* Step 3: AKTIF */}
        <div className="flex gap-4 relative pb-6">
          <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-[#424936]/30 border-l border-dashed border-[#424936]"></div>
          <div className="relative z-10 flex flex-col items-center pt-0.5">
            <div className="w-6 h-6 rounded-full bg-[#121F00] border-2 border-[#A3E635] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(163,230,53,0.3)]">
              <div className="w-2.5 h-2.5 bg-[#A3E635] rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm text-[#A3E635] pr-2">Pencetakan Soulbound NFT Podium #3</span>
              <div className="px-1.5 py-0.5 border border-[#A3E635] bg-[#121F00]/50 rounded text-[9px] font-bold text-[#A3E635] tracking-wider shrink-0 flex items-center gap-1">
                <Loader2 size={10} className="animate-spin" /> AKTIF
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#C2CAB0] leading-tight">
              <span>Etsa metadata permanen on-chain • <span className="text-[#7BD0FF]">0x742d...8b42</span></span>
            </div>
          </div>
        </div>

        {/* Step 4: MENUNGGU */}
        <div className="flex gap-4 relative">
          <div className="relative z-10 flex flex-col items-center pt-0.5">
            <div className="w-6 h-6 rounded-full bg-[#191C22] border-2 border-[#424936]/50 flex items-center justify-center flex-shrink-0">
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <span className="font-medium text-sm text-[#C2CAB0] pr-2">Transfer 1,500 FIT ke Dompet Anda</span>
              <div className="px-1.5 py-0.5 border border-[#424936]/50 bg-[#191C22]/50 rounded text-[9px] font-bold text-[#C2CAB0] tracking-wider shrink-0">MENUNGGU</div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#424936]">
              <span>Menunggu konfirmasi blok (estimasi ~2.1 dtk)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Stats Grid */}
      <div className="mx-4 mb-6 p-3 bg-[#191C22]/80 border border-[#424936]/40 rounded-xl flex items-center justify-between">
        <div className="flex flex-col flex-1 items-start">
          <span className="text-[9px] text-[#C2CAB0] tracking-wider mb-0.5">JARIGAN</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
            <span className="text-[11px] font-bold text-[#E1E2EB]">Polygon PoS</span>
          </div>
        </div>
        <div className="w-px h-6 bg-[#424936]/40"></div>
        <div className="flex flex-col flex-1 items-center">
          <span className="text-[9px] text-[#C2CAB0] tracking-wider mb-0.5">TX HASH</span>
          <div className="flex items-center gap-1 text-[#7BD0FF] cursor-pointer">
            <span className="text-[11px] font-medium">0x8f92...c49a</span>
            <ExternalLink size={10} />
          </div>
        </div>
        <div className="w-px h-6 bg-[#424936]/40"></div>
        <div className="flex flex-col flex-1 items-end">
          <span className="text-[9px] text-[#C2CAB0] tracking-wider mb-0.5">KONFIRMASI</span>
          <span className="text-[11px] font-bold text-[#CCFF80]">8 / 12 Blok</span>
        </div>
      </div>

      {/* Progress Button */}
      <div className="px-4 mb-4">
        <div className="relative w-full h-[52px] bg-[#1D2026] border border-[#424936]/50 rounded-full overflow-hidden flex items-center justify-center">
          {/* Progress fill */}
          <div className="absolute left-0 top-0 bottom-0 w-[65%] bg-[#121F00] border-r border-[#A3E635]"></div>
          
          {/* Button content */}
          <div className="relative z-10 flex items-center gap-2 text-[#A3E635] font-bold text-sm">
            <Loader2 size={16} className="animate-spin" />
            <span>Memproses di Blockchain... (65%)</span>
          </div>
        </div>
      </div>

      {/* Warning text */}
      <div className="px-6 text-center">
        <p className="text-[10px] leading-relaxed text-[#424936] font-medium">
          Mohon jangan tutup aplikasi selama proses pencetakan smart contract berlangsung. Transaksi dilindungi akun terabstraksi.
        </p>
      </div>

    </div>
  );
}
