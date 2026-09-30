import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowDownUp, Info, ShieldCheck, ChevronDown, ArrowRight, User } from 'lucide-react';

export default function SwapModal({ onClose, initialTab = 'swap' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 pointer-events-auto backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Bottom Sheet */}
      <div className="relative w-full bg-[#12151C] rounded-t-[32px] pointer-events-auto animate-in slide-in-from-bottom-[100%] duration-300 shadow-[0_-8px_32px_rgba(0,0,0,0.6)] flex flex-col items-center pt-3 pb-8 px-4 text-[#E1E2EB] font-sans">
        
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-[#424936]/50 rounded-full mb-5"></div>

        {/* Top Tabs */}
        <div className="w-full flex items-center justify-between mb-6">
          <div className="flex bg-[#191C22] p-1 rounded-full border border-[#424936]/40">
            <button 
              onClick={() => setActiveTab('send')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${activeTab === 'send' ? 'bg-[#272A31] border border-[#424936]/60 text-[#E1E2EB] shadow-sm font-bold' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}
            >
              {activeTab === 'send' && <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>}
              Kirim / Transfer
            </button>
            <button 
              onClick={() => setActiveTab('swap')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${activeTab === 'swap' ? 'bg-[#272A31] border border-[#424936]/60 text-[#E1E2EB] shadow-sm font-bold' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}
            >
              {activeTab === 'swap' && <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>}
              Tukar / Swap
            </button>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#191C22] text-[#C2CAB0] hover:text-[#E1E2EB] hover:bg-[#272A31] transition-colors border border-[#424936]/40"
          >
            <X size={16} />
          </button>
        </div>

        {activeTab === 'swap' ? (
          <>
            {/* Bayar (From) Card */}
            <div className="w-full p-4 bg-[#191C22]/60 border border-[#424936]/30 rounded-2xl mb-1 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-[#C2CAB0]">Bayar (From)</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#E1E2EB]">Saldo: 1,250 FIT</span>
                  <button className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635] rounded text-[9px] font-bold text-[#A3E635]">MAX</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-3xl text-[#E1E2EB] mb-1 leading-none">500</span>
                  <span className="text-[11px] text-[#C2CAB0]">≈ $75.00 USD</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#272A31] border border-[#424936]/50 rounded-full hover:bg-[#32353C] transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#A3E635] flex items-center justify-center">
                    <span className="text-[10px]">⚡</span>
                  </div>
                  <span className="font-bold text-sm text-[#E1E2EB]">FIT</span>
                  <ChevronDown size={14} className="text-[#C2CAB0]" />
                </button>
              </div>
            </div>

            {/* Swap Arrow Button */}
            <div className="relative w-full h-2 flex justify-center items-center z-10">
              <button className="w-9 h-9 rounded-full bg-[#12151C] border border-[#A3E635]/40 flex items-center justify-center shadow-[0_0_12px_rgba(163,230,53,0.15)] hover:bg-[#191C22] transition-colors">
                <ArrowDownUp size={16} className="text-[#A3E635]" />
              </button>
            </div>

            {/* Terima (To) Card */}
            <div className="w-full p-4 bg-[#191C22]/60 border border-[#424936]/30 rounded-2xl mb-6 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-[#C2CAB0]">Terima (To - Estimasi)</span>
                <span className="text-[11px] text-[#E1E2EB]">Saldo: 42.50 USDC</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-3xl text-[#E1E2EB] mb-1 leading-none">74.85</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#C2CAB0]">≈ $74.85 USD</span>
                    <div className="px-1.5 py-0.5 bg-[#00A6E0]/20 border border-[#7BD0FF]/30 rounded text-[9px] font-bold text-[#7BD0FF]">
                      1 FIT ≈ 0.15 USDC
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#272A31] border border-[#424936]/50 rounded-full hover:bg-[#32353C] transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#2775CA] flex items-center justify-center text-white text-xs font-bold">
                    $
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="font-bold text-sm text-[#E1E2EB]">USDC</span>
                    <span className="text-[7px] text-[#7BD0FF] uppercase font-bold tracking-wider">POLYGON</span>
                  </div>
                  <ChevronDown size={14} className="text-[#C2CAB0]" />
                </button>
              </div>
            </div>

            {/* Detail Breakdown */}
            <div className="w-full p-4 bg-[#0B0E14] border border-[#424936]/30 rounded-xl mb-6 space-y-3">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C2CAB0] flex items-center gap-1">Nilai Tukar <Info size={10} /></span>
                <span className="font-medium text-[#E1E2EB]">1 FIT = 0.1502 USDC</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C2CAB0]">Slippage Tolerance</span>
                <span className="font-bold text-[#A3E635] bg-[#121F00] px-1.5 py-0.5 rounded">0.5% (Auto)</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C2CAB0]">Rute Likuiditas</span>
                <span className="text-[#E1E2EB]">Kalcerly DEX Pool → <span className="text-[#7BD0FF]">QuickSwap V3</span></span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C2CAB0]">Biaya Protokol</span>
                <span className="text-[#C2CAB0]"><span className="text-[#A3E635] font-bold">0%</span> (Bebas biaya untuk Verified Runner)</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#C2CAB0]">Dampak Harga (Price Impact)</span>
                <span className="font-bold text-[#A3E635]">&lt; 0.05% (Sangat Rendah)</span>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={() => {
                onClose();
                navigate('/transfer-success');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#A3E635] hover:bg-[#B4F742] transition-colors rounded-full text-[#121F00] mb-5"
            >
              <span className="text-[15px] font-bold">Konfirmasi Penukaran (Swap FIT)</span>
              <ArrowRight size={18} />
            </button>
          </>
        ) : (
          <>
            {/* Kirim (Send) UI Form */}
            <div className="w-full p-4 bg-[#191C22]/60 border border-[#424936]/30 rounded-2xl mb-4 relative">
              <span className="text-[11px] text-[#C2CAB0] mb-2 block">Penerima (Alamat Dompet / ENS)</span>
              <div className="flex items-center gap-3 p-3 bg-[#0B0E14] border border-[#424936]/50 rounded-xl">
                <User size={16} className="text-[#C2CAB0]" />
                <input 
                  type="text" 
                  placeholder="0x... atau nama.eth" 
                  className="bg-transparent text-sm text-[#E1E2EB] outline-none flex-1 font-['Space_Grotesk'] placeholder:text-[#424936]"
                />
              </div>
            </div>

            <div className="w-full p-4 bg-[#191C22]/60 border border-[#424936]/30 rounded-2xl mb-6 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-[#C2CAB0]">Jumlah</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#E1E2EB]">Tersedia: 1,250 FIT</span>
                  <button className="px-1.5 py-0.5 bg-[#121F00] border border-[#A3E635] rounded text-[9px] font-bold text-[#A3E635]">MAX</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <input 
                    type="number" 
                    placeholder="0"
                    className="bg-transparent font-bold text-3xl text-[#E1E2EB] mb-1 leading-none outline-none w-[150px] placeholder:text-[#424936]"
                  />
                  <span className="text-[11px] text-[#C2CAB0]">≈ $0.00 USD</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[#272A31] border border-[#424936]/50 rounded-full hover:bg-[#32353C] transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#A3E635] flex items-center justify-center">
                    <span className="text-[10px]">⚡</span>
                  </div>
                  <span className="font-bold text-sm text-[#E1E2EB]">FIT</span>
                  <ChevronDown size={14} className="text-[#C2CAB0]" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={() => {
                onClose();
                navigate('/transfer-success');
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#A3E635] hover:bg-[#B4F742] transition-colors rounded-full text-[#121F00] mb-5"
            >
              <span className="text-[15px] font-bold">Lanjutkan Transfer</span>
              <ArrowRight size={18} />
            </button>
          </>
        )}

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-2 text-[9px] text-[#C2CAB0]/70 text-center px-4">
          <ShieldCheck size={12} className="text-[#A3E635]/80 shrink-0" />
          <p>Powered by Uniswap / 1inch Protocol Aggregator & Polygon zkEVM</p>
        </div>

      </div>
    </div>
  );
}
