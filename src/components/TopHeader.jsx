import React from 'react';
import { Bell } from 'lucide-react';

const TopHeader = () => {
  return (
    <header className="fixed top-0 z-50 w-full max-w-[390px] flex justify-between items-center px-4 pt-[max(env(safe-area-inset-top,64px),64px)] pb-4 bg-[#10131A]/90 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <div className="relative w-9 h-9 rounded-full border border-[#424936]/50 bg-gray-700">
          {/* Avatar Image Placeholder */}
          <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-full h-full rounded-full object-cover" />
          <div className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-[#CCFF80] rounded-full border-2 border-[#0B0E14]"></div>
        </div>
        <div>
          <p className="text-[12px] text-[#C2CAB0] leading-none">Selamat Pagi,</p>
          <h1 className="text-[18px] font-bold text-[#E1E2EB] leading-tight">Rian 👋</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1D2026]/90 border border-[#424936]/40 rounded-full">
          <div className="w-3.5 h-3.5 bg-[#CCFF80] rounded-full flex items-center justify-center">
            <span className="text-[#121F00] text-[8px] font-bold">$</span>
          </div>
          <span className="text-[11px] font-bold text-[#CCFF80]">1,250 FIT</span>
        </div>
        <button className="relative w-9 h-9 bg-[#191C22] rounded-full flex items-center justify-center">
          <Bell size={16} className="text-[#E1E2EB]" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#A3E635] rounded-full border-2 border-[#0B0E14]"></div>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
