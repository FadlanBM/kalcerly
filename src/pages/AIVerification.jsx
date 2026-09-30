import React from 'react';

const AIVerification = () => {
  return (
    <div className="relative w-[390px] h-[1079px] mx-auto overflow-y-scroll overflow-x-hidden text-[#E1E2EB] font-['Plus_Jakarta_Sans'] pb-10 scrollbar-hide" style={{
      background: 'linear-gradient(0deg, #0B0E14, #0B0E14), #FFFFFF'
    }}>
      
      {/* Header - Top App Bar */}
      <div className="sticky top-0 flex flex-row justify-between items-center px-4 w-[390px] h-[56px] bg-[#10131A] bg-opacity-85 shadow-[0_1px_0_rgba(66,73,54,0.3)] backdrop-blur-[6px] z-50">
        <button className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#1D2026] transition-colors cursor-pointer border-none bg-transparent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[24px] tracking-[-0.45px] text-[#E1E2EB]">Ringkasan & Verifikasi</h1>
        </div>
        <button className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-[#1D2026] transition-colors cursor-pointer border-none bg-transparent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
      </div>

      {/* Main Content Canvas */}
      <div className="flex flex-col items-start px-4 pt-4 gap-4 w-[390px] z-0">
        
        {/* Key Run Stats Recap Strip */}
        <div className="box-border flex flex-col items-start p-4 w-[358px] h-[82px] bg-[#191C22] bg-opacity-90 border border-[#424936] border-opacity-30 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-[12px] rounded-xl">
          <div className="flex flex-row justify-between items-center w-[326px] h-[48px]">
            {/* Distance */}
            <div className="flex flex-col items-start pr-1 h-[48px]">
              <div className="flex flex-col items-center w-[60px] h-[16px]">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center tracking-[0.6px] uppercase text-[#C2CAB0]">JARAK</span>
              </div>
              <div className="relative w-[60px] h-[32px] mt-1">
                <span className="absolute left-[calc(50%-19px-10px)] top-0 font-['Space_Grotesk'] font-bold text-[20px] leading-[32px] text-center tracking-[-0.56px] text-[#E1E2EB]">5.21</span>
                <span className="absolute left-[calc(50%-11px+20px)] top-[10px] font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center text-[#C2CAB0]">KM</span>
              </div>
            </div>

            {/* Duration */}
            <div className="box-border flex flex-col items-start px-2 w-[82px] h-[48px] border-l border-[#424936] border-opacity-20">
              <div className="flex flex-col items-center w-[73px] h-[16px]">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center tracking-[0.6px] uppercase text-[#C2CAB0]">WAKTU</span>
              </div>
              <div className="flex flex-col items-center w-[69px] h-[32px] mt-1">
                <span className="font-['Space_Grotesk'] font-bold text-[20px] leading-[32px] text-center tracking-[-0.56px] text-[#E1E2EB]">34:22</span>
              </div>
            </div>

            {/* Pace */}
            <div className="box-border flex flex-col items-start pr-1 w-[88px] h-[48px] border-l border-[#424936] border-opacity-20 pl-2">
              <div className="flex flex-col items-center w-[77px] h-[16px]">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center tracking-[0.6px] uppercase text-[#C2CAB0]">PACE RATA</span>
              </div>
              <div className="relative w-[84px] h-[32px] mt-1">
                <span className="absolute left-[calc(50%-27px-13px)] top-0 font-['Space_Grotesk'] font-bold text-[20px] leading-[32px] text-center tracking-[-0.56px] text-[#7BD0FF]">06:35</span>
                <span className="absolute left-[calc(50%-12px+26.3px)] top-[8px] font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center text-[#C2CAB0]">/KM</span>
              </div>
            </div>

            {/* Calories */}
            <div className="box-border flex flex-col items-start w-[78px] h-[48px] border-l border-[#424936] border-opacity-20 pl-2">
              <div className="flex flex-col items-center w-[77px] h-[16px]">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center tracking-[0.6px] uppercase text-[#C2CAB0]">KALORI</span>
              </div>
              <div className="relative w-[77px] h-[32px] mt-1">
                <span className="absolute left-[calc(50%-17.5px-16px)] top-0 font-['Space_Grotesk'] font-bold text-[20px] leading-[32px] text-center tracking-[-0.56px] text-[#FFB690]">382</span>
                <span className="absolute left-[calc(50%-16px+17.91px)] top-[10px] font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center text-[#C2CAB0]">KCAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Verification Status Card */}
        <div className="box-border flex flex-col items-start p-4 gap-3 relative w-[358px] bg-[#191C22] bg-opacity-95 border border-[#A3E635] border-opacity-40 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)] backdrop-blur-[12px] rounded-xl overflow-hidden">
          {/* Ambient Decorative Glow */}
          <div className="absolute w-[144px] h-[144px] right-[-47px] top-[-47px] bg-[#A3E635] bg-opacity-15 blur-[20px] rounded-full z-0 pointer-events-none" />

          {/* Card Header with Pulsating Lime Shield */}
          <div className="flex flex-row items-start gap-3 w-[324px] z-10 relative">
            <div className="relative flex justify-center items-center w-12 h-12">
              <div className="absolute inset-0 bg-[#A3E635] bg-opacity-20 rounded-full animate-pulse z-0" />
              <div className="box-border flex justify-center items-center w-11 h-11 bg-[#1D2026] border border-[#A3E635] shadow-[0_0_16px_rgba(163,230,53,0.35)] rounded-full z-10">
                <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <div className="flex items-center w-full">
                <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[25px] tracking-[-0.27px] text-[#E1E2EB]">Aktivitas Terverifikasi AI</h2>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[15px] text-[#C2CAB0] mt-0.5">Data sensor & GPS lolos validasi anti-cheat anti-spoofing.</p>
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="box-border flex flex-col items-start pt-4 pb-3 px-3 gap-2 w-[324px] bg-[#0B0E14] bg-opacity-80 border border-[#424936] border-opacity-30 rounded-lg z-20 relative">
            {/* Item 1 */}
            <div className="flex flex-row justify-between items-center py-1 w-full border-b border-[#424936] border-opacity-15 pb-2.5">
              <div className="flex flex-row items-center gap-2">
                <div className="flex justify-center items-center w-4 h-4 bg-[#A3E635] bg-opacity-20 rounded-full">
                  <svg width="9" height="7" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[13px] leading-[20px] tracking-[-0.07px] text-[#E1E2EB]">GPS Trajectory & Kecepatan Alami</span>
              </div>
              <div className="box-border flex flex-col items-center justify-center px-2 py-0.5 bg-[#A3E635] bg-opacity-15 border border-[#A3E635] border-opacity-30 rounded">
                <span className="font-['Space_Grotesk'] font-bold text-[10px] leading-[14px] tracking-[0.66px] text-[#CCFF80]">VALID</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-row justify-between items-center py-1 w-full border-b border-[#424936] border-opacity-15 pb-2.5">
              <div className="flex flex-row items-center gap-2">
                <div className="flex justify-center items-center w-4 h-4 bg-[#A3E635] bg-opacity-20 rounded-full">
                  <svg width="9" height="7" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[13px] leading-[20px] tracking-[-0.07px] text-[#E1E2EB]">Pola Langkah & Accelerometer</span>
              </div>
              <div className="box-border flex flex-col items-center justify-center px-2 py-0.5 bg-[#A3E635] bg-opacity-15 border border-[#A3E635] border-opacity-30 rounded">
                <span className="font-['Space_Grotesk'] font-bold text-[10px] leading-[14px] tracking-[0.66px] text-[#CCFF80]">VALID</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row justify-between items-center py-1 w-full">
              <div className="flex flex-row items-center gap-2">
                <div className="flex justify-center items-center w-4 h-4 bg-[#A3E635] bg-opacity-20 rounded-full shrink-0">
                  <svg width="9" height="7" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[13px] leading-[18px] tracking-[-0.07px] text-[#E1E2EB] max-w-[180px]">Konsistensi Detak Jantung & Elevasi</span>
              </div>
              <div className="box-border flex flex-col items-center justify-center px-2 py-0.5 bg-[#A3E635] bg-opacity-15 border border-[#A3E635] border-opacity-30 rounded shrink-0">
                <span className="font-['Space_Grotesk'] font-bold text-[10px] leading-[14px] tracking-[0.66px] text-[#CCFF80]">VALID</span>
              </div>
            </div>
          </div>

          {/* Trust Score & Latency Indicator */}
          <div className="flex flex-row justify-between items-center w-[324px] z-30 relative mt-1">
            <div className="flex flex-row items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full" />
              <span className="font-['Space_Grotesk'] font-normal text-[11px] leading-[16px] text-[#C2CAB0]">Kalcerly AI Engine v2.4</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-['Space_Grotesk'] font-normal text-[11px] leading-[16px] text-[#7BD0FF]">Inference: 142ms • Conf: 99.8%</span>
            </div>
          </div>
        </div>

        {/* Reward Breakdown Card (FIT Token) */}
        <div className="box-border flex flex-col items-start p-4 gap-3 relative w-[358px] bg-[#191C22] bg-opacity-95 border border-[#A3E635] border-opacity-50 shadow-[0_0_24px_rgba(163,230,53,0.18)] backdrop-blur-[12px] rounded-xl overflow-hidden">
          
          <div className="flex flex-row justify-between items-center w-full z-10">
            <div className="flex flex-row items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#A3E635"><path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/></svg>
              <span className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] tracking-[0.55px] uppercase text-[#CCFF80]">REWARD DIDISTRIBUSIKAN</span>
            </div>
            <div className="flex flex-col items-start px-2 py-0.5 bg-[#FFC6AA] rounded-full">
              <span className="font-['Space_Grotesk'] font-bold text-[10px] leading-[14px] tracking-[0.66px] text-[#974000]">HOT STREAK 🔥 5H</span>
            </div>
          </div>

          {/* Total FIT Headline */}
          <div className="relative w-full h-[41px] z-10 mt-1">
            <span className="absolute left-0 top-0 font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] leading-[40px] tracking-[-1px] text-[#CCFF80]">+42</span>
            <span className="absolute left-[88px] top-[10px] font-['Plus_Jakarta_Sans'] font-bold text-[22px] leading-[28px] tracking-[-0.55px] text-[#E1E2EB]">FIT Token</span>
          </div>

          {/* Reward Itemization Breakdown */}
          <div className="box-border flex flex-col items-start p-3 gap-2 w-full bg-[#1D2026] bg-opacity-60 border border-[#424936] border-opacity-20 rounded-lg z-20 relative mt-2">
            
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4v16"/><path d="M9 8h8"/><path d="M9 16h8"/></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Base Running Reward</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-[14px] leading-[20px] text-[#E1E2EB]">+30 FIT</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7BD0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Distance Bonus (5KM Milestone)</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-[14px] leading-[20px] text-[#7BD0FF]">+8 FIT</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFB690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Streak Multiplier (1.1x)</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-[14px] leading-[20px] text-[#FFB690]">+4 FIT</span>
            </div>

          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3E635]/10 to-transparent z-0 pointer-events-none" />
        </div>

        {/* Activity Proof (Web3 / Blockchain Card) */}
        <div className="box-border flex flex-col items-start p-4 gap-3 w-[358px] bg-[#191C22] bg-opacity-85 border border-[#424936] border-opacity-30 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-[12px] rounded-xl">
          
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7BD0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[24px] tracking-[-0.27px] text-[#E1E2EB]">On-Chain Activity Proof</h3>
            </div>
            <div className="box-border flex flex-col items-center justify-center px-2 py-0.5 bg-[#00A6E0] bg-opacity-15 border border-[#7BD0FF] border-opacity-30 rounded">
              <span className="font-['Space_Grotesk'] font-bold text-[10px] leading-[14px] tracking-[0.66px] text-[#7BD0FF]">MINTED</span>
            </div>
          </div>

          <div className="flex flex-col items-start w-full mt-1">
            
            {/* Activity ID */}
            <div className="flex flex-row justify-between items-center py-2 w-full border-b border-[#424936] border-opacity-15">
              <span className="font-['Space_Grotesk'] font-normal text-[12px] leading-[18px] text-[#C2CAB0]">Activity ID</span>
              <span className="font-['Space_Grotesk'] font-semibold text-[12px] leading-[18px] text-[#E1E2EB]">KLC-2026-000921</span>
            </div>

            {/* Proof Hash */}
            <div className="flex flex-row justify-between items-center py-2 w-full border-b border-[#424936] border-opacity-15">
              <span className="font-['Space_Grotesk'] font-normal text-[12px] leading-[18px] text-[#C2CAB0]">Proof Hash</span>
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:opacity-80">
                <span className="font-['Space_Grotesk'] font-normal text-[12px] leading-[18px] text-center text-[#7BD0FF]">0x8f92e4...a91cb2</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </div>
            </div>

            {/* Network */}
            <div className="flex flex-row justify-between items-center py-2 w-full border-b border-[#424936] border-opacity-15">
              <span className="font-['Space_Grotesk'] font-normal text-[12px] leading-[18px] text-[#C2CAB0]">Network</span>
              <span className="font-['Space_Grotesk'] font-semibold text-[12px] leading-[18px] text-[#E1E2EB]">EVM Layer 2 • Block #1984203</span>
            </div>

            {/* Explorer Link */}
            <div className="flex flex-col items-start pt-3 pb-1 w-full">
              <div className="flex flex-row items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                <span className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] tracking-[0.66px] text-[#CCFF80]">Lihat di Blockchain Explorer</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons Cluster */}
        <div className="flex flex-col items-start pt-2 gap-3 w-[358px]">
          
          {/* Primary Button */}
          <button className="flex flex-row justify-center items-center gap-2 w-full h-[48px] bg-[#A3E635] shadow-[0_0_20px_rgba(163,230,53,0.35)] rounded-full border-none cursor-pointer hover:bg-[#b3f742] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[24px] text-center tracking-[-0.16px] text-[#121F00]">Bagikan ke Social Feed</span>
          </button>

          {/* Secondary Button */}
          <button className="box-border flex flex-row justify-center items-center gap-2 w-full h-[44px] bg-[#1D2026] border border-[#424936] border-opacity-40 rounded-full cursor-pointer hover:bg-[#252830] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1E2EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] leading-[24px] text-[#E1E2EB]">Kembali ke Beranda</span>
          </button>

        </div>

      </div>
    </div>
  );
};

export default AIVerification;
