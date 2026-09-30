import React from 'react';
import TopHeader from '../components/TopHeader';

export default function Challenges() {
  return (
    <div className="relative w-full max-w-[390px] h-[1532px] mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans overflow-y-scroll overflow-x-hidden pb-24 scrollbar-hide">
      
      {/* Top Header */}
      <TopHeader />

      {/* Segmented Navigation Hub Tabs & Filter Strip (Sticky sub-header) */}
      <div className="sticky top-[56px] flex flex-col items-start px-4 pt-2 pb-3 w-full bg-[#0B0E14]/95 border-b border-[#424936]/20 backdrop-blur-[6px] z-40">
        
        {/* Segmented Toggle */}
        <div className="flex flex-row items-start p-1 w-full h-[46px] bg-[#1D2026] border border-[#424936]/30 rounded-xl mb-3">
          {/* Active Tab */}
          <button className="relative flex flex-row justify-center items-center px-4 w-1/2 h-[36px] bg-transparent border-none cursor-pointer">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] leading-[20px] text-center text-[#CCFF80]">Tantangan</span>
            <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full ml-1.5"></div>
            <div className="absolute h-[2px] left-4 right-4 bottom-0 bg-[#A3E635] rounded-full"></div>
          </button>
          
          {/* Inactive Tab */}
          <button className="flex flex-row justify-center items-center px-4 w-1/2 h-[36px] bg-transparent border-none cursor-pointer">
            <span className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] leading-[20px] text-center text-[#C2CAB0]">Leaderboard</span>
            <div className="flex flex-col items-center px-1.5 ml-1 h-[16px] bg-[#272A31] rounded-full">
              <span className="font-['Space_Grotesk'] font-normal text-[12px] leading-[16px] text-[#7BD0FF]">W-42</span>
            </div>
          </button>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-row gap-2 w-full overflow-x-auto scrollbar-hide py-1">
          <button className="flex justify-center items-center px-3.5 py-1.5 h-[28px] bg-[#A3E635] shadow-[0_0_12px_rgba(163,230,53,0.3)] rounded-full border-none cursor-pointer whitespace-nowrap shrink-0">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] leading-[16px] text-[#416400]">Semua</span>
          </button>
          <button className="flex flex-row items-center px-3 py-1.5 gap-1 h-[30px] bg-[#1D2026] border border-[#424936]/40 rounded-full cursor-pointer whitespace-nowrap shrink-0 hover:bg-[#272A31]">
            <span className="font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] text-[#E1E2EB]">Running</span>
            <span className="font-['Liberation_Serif'] font-medium text-[12px] leading-[16px] text-[#E1E2EB]">🏃</span>
          </button>
          <button className="flex flex-row items-center px-3 py-1.5 gap-1 h-[30px] bg-[#1D2026] border border-[#424936]/40 rounded-full cursor-pointer whitespace-nowrap shrink-0 hover:bg-[#272A31]">
            <span className="font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] text-[#C2CAB0]">Cycling</span>
            <span className="font-['Liberation_Serif'] font-medium text-[12px] leading-[16px] text-[#C2CAB0]">🚴</span>
          </button>
          <button className="flex flex-row items-center px-3 py-1.5 gap-1 h-[30px] bg-[#1D2026] border border-[#424936]/40 rounded-full cursor-pointer whitespace-nowrap shrink-0 hover:bg-[#272A31]">
            <span className="font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] text-[#C2CAB0]">Walking</span>
            <span className="font-['Liberation_Serif'] font-medium text-[12px] leading-[16px] text-[#C2CAB0]">🚶</span>
          </button>
        </div>

      </div>

      {/* Main Dynamic Feed Canvas */}
      <div className="flex flex-col px-4 pt-4 pb-[80px] gap-6 w-full z-0">
        
        {/* Featured Active Challenge Banner (Hero) */}
        <div className="flex flex-col items-start p-4 gap-3 w-full h-[340px] bg-gradient-to-br from-[#182414] via-[#1D2026] to-[#191C22] border border-[#A3E635]/40 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7)] rounded-2xl relative overflow-hidden">
          <div className="absolute w-[144px] h-[144px] -right-10 -top-10 bg-[#A3E635]/15 blur-[20px] rounded-full z-0 pointer-events-none" />

          {/* Top Row Badges */}
          <div className="flex flex-row justify-between items-center w-full z-10">
            <div className="flex flex-row items-center px-2.5 py-0.5 bg-[#0B0E14]/80 border border-[#FFC6AA]/30 rounded-full">
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[11px] leading-[16px] text-[#FFDBCA]">🔥 Populer • 2,431 Peserta</span>
            </div>
            <div className="flex flex-row items-center px-2 py-0.5 gap-1 bg-[#0B0E14]/90 border border-[#A3E635]/50 rounded-full">
              <div className="w-2.5 h-2.5 bg-[#CCFF80] rounded-sm flex justify-center items-center">
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#121F00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#CCFF80]">ON-CHAIN BOUNTY</span>
            </div>
          </div>

          {/* Challenge Title */}
          <div className="flex flex-col items-start gap-1 w-full z-10 mt-1">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] leading-[32px] tracking-[-0.65px] text-[#E1E2EB]">Run 50 KM in 30 Days</h2>
            <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Tantangan endurance bulanan level atletik. Selesaikan untuk mint lencana verified.</p>
          </div>

          {/* Telemetry & Metric Progress Bar */}
          <div className="flex flex-col items-start py-1 gap-2 w-full z-10 mt-2">
            <div className="relative w-full h-[32px]">
              <div className="flex items-baseline gap-1 absolute left-0 top-0">
                <span className="font-['Space_Grotesk'] font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#E1E2EB]">36</span>
                <span className="font-['Space_Grotesk'] font-medium text-[14px] leading-[20px] text-[#C2CAB0]">/ 50 KM</span>
              </div>
              <span className="absolute right-0 top-3 font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] tracking-[0.3px] text-[#CCFF80]">72% SELESAI</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-[10px] bg-[#32353C] border border-[#424936]/30 rounded-full relative overflow-hidden">
              <div className="absolute left-[1%] top-[3px] bottom-[3px] w-[70%] bg-[#A3E635] shadow-[0_0_12px_rgba(163,230,53,0.7)] rounded-full" />
            </div>

            {/* Subtext Meta */}
            <div className="flex flex-row justify-between items-center w-full mt-1">
              <div className="flex flex-row items-center gap-1">
                <svg width="9" height="12" viewBox="0 0 24 24" fill="#CCFF80"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] text-[#CCFF80]">14 KM lagi</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Berakhir dlm 12 hari</span>
              </div>
            </div>
          </div>

          {/* Reward Bounty Chips */}
          <div className="flex flex-row items-center pt-2 gap-2 w-full border-t border-[#424936]/30 z-10 mt-1">
            <div className="flex flex-row items-center px-2.5 py-1 gap-1.5 bg-[#0B0E14]/90 border border-[#424936]/40 rounded-lg">
              <svg width="10" height="11" viewBox="0 0 24 24" fill="#7BD0FF"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span className="font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] text-[#7BD0FF]">+500 FIT Token</span>
            </div>
            <div className="flex flex-row items-center px-2.5 py-1 gap-1.5 bg-[#0B0E14]/90 border border-[#424936]/40 rounded-lg">
              <span className="font-['Liberation_Serif'] font-normal text-[12px] leading-[16px] text-[#E1E2EB]">🏆</span>
              <span className="font-['Space_Grotesk'] font-semibold text-[12px] leading-[16px] text-[#FFDBCA]">50 KM Runner</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="flex flex-row justify-center items-center py-3 w-full h-[48px] bg-[#A3E635] shadow-[0_0_20px_rgba(163,230,53,0.35)] rounded-full border-none cursor-pointer z-10 mt-2 hover:bg-[#b3f742] transition-colors gap-1.5">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] leading-[20px] text-center text-[#416400]">Lihat Detail Tantangan</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#416400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        {/* Section 2: More Challenges List */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-row justify-between items-center w-full h-[24px]">
            <div className="flex flex-row items-center gap-1.5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[24px] tracking-[-0.27px] text-[#E1E2EB]">Tantangan Lainnya</h3>
              <div className="w-1.5 h-1.5 bg-[#7BD0FF] rounded-full"></div>
            </div>
            <button className="flex flex-row items-center gap-0.5 bg-transparent border-none cursor-pointer">
              <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-center text-[#7BD0FF]">Lihat Semua</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7BD0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-3 w-full">
            
            {/* Card 2: Weekend 10K Speedrun */}
            <div className="flex flex-col items-start p-4 gap-3 w-full bg-[#1D2026]/80 border border-[#424936]/30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row items-center gap-1.5">
                    <div className="px-2 py-0.5 bg-[#32353C] rounded-full">
                      <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#7BD0FF] uppercase">SPEEDRUN</span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">• Akhir Pekan</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[24px] text-[#E1E2EB]">Weekend 10K Speedrun</h4>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#C2CAB0] uppercase">HADIAH</span>
                  <div className="flex flex-row items-center gap-1 mt-0.5">
                    <svg width="9" height="10" viewBox="0 0 24 24" fill="#7BD0FF"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <span className="font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] text-[#7BD0FF]">+150 FIT</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 w-full mt-1">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Target: <strong className="font-['Space_Grotesk'] text-[#E1E2EB]">10 KM</strong></span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Progress: <strong className="font-['Space_Grotesk'] text-[#CCFF80]">0 / 10 KM</strong></span>
              </div>
              <div className="flex flex-row justify-between items-center pt-2 w-full border-t border-[#424936]/20 mt-1">
                <div className="flex flex-row items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">842 bergabung</span>
                </div>
                <button className="flex justify-center items-center px-4 py-1.5 h-[30px] bg-[#32353C] border border-[#A3E635]/30 rounded-full cursor-pointer hover:bg-[#3f434c]">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] leading-[16px] text-center text-[#CCFF80]">Gabung Tantangan</span>
                </button>
              </div>
            </div>

            {/* Card 3: Cycling Century 100 KM */}
            <div className="flex flex-col items-start p-4 gap-3 w-full bg-[#1D2026]/80 border border-[#424936]/30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row items-center gap-1.5">
                    <div className="flex flex-row items-center px-2 py-0.5 gap-1 bg-[#00A6E0]/20 rounded-full">
                      <span className="font-['Liberation_Serif'] font-normal text-[10px] leading-[15px] text-[#7BD0FF]">🚴</span>
                      <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#7BD0FF] uppercase">SEPEDA</span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">• 14 Hari Tersisa</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[24px] text-[#E1E2EB]">Cycling Century 100 KM</h4>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Selesaikan akumulasi rute gowes 100 KM dalam 2 pekan.</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#C2CAB0] uppercase">HADIAH</span>
                  <div className="flex flex-row items-center gap-1 mt-0.5">
                    <svg width="9" height="10" viewBox="0 0 24 24" fill="#CCFF80"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <span className="font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] text-[#CCFF80]">+1,000 FIT</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row justify-between items-center pt-2 w-full border-t border-[#424936]/20 mt-1">
                <div className="flex flex-row items-center gap-1">
                  <svg width="10" height="11" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Smart Contract Verified</span>
                </div>
                <button className="flex justify-center items-center px-4 py-1.5 h-[30px] bg-[#32353C] border border-[#A3E635]/30 rounded-full cursor-pointer hover:bg-[#3f434c]">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] leading-[16px] text-center text-[#CCFF80]">Gabung Tantangan</span>
                </button>
              </div>
            </div>

            {/* Card 4: Daily 7K Walk Consistency */}
            <div className="flex flex-col items-start p-4 gap-3 w-full bg-[#1D2026]/80 border border-[#424936]/30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-start w-full">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex flex-row items-center gap-1.5">
                    <div className="flex flex-row items-center px-2 py-0.5 gap-1 bg-[#FFC6AA]/20 rounded-full">
                      <span className="font-['Liberation_Serif'] font-normal text-[10px] leading-[15px] text-[#FFDBCA]">🚶</span>
                      <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#FFDBCA] uppercase">KONSISTENSI</span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[12px] leading-[16px] text-[#CCFF80]">Aktif Berjalan</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[16px] leading-[24px] text-[#E1E2EB]">Daily 7K Walk Consistency</h4>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#C2CAB0] uppercase">HADIAH</span>
                  <div className="flex flex-row items-center gap-1 mt-0.5">
                    <svg width="9" height="10" viewBox="0 0 24 24" fill="#7BD0FF"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    <span className="font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] text-[#7BD0FF]">+100 FIT</span>
                  </div>
                </div>
              </div>
              
              {/* Day dots indicator */}
              <div className="flex flex-row items-center gap-1.5 w-full mt-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex justify-center items-center w-5 h-5 bg-[#A3E635] rounded-full">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#416400" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                ))}
                <div className="flex justify-center items-center w-5 h-5 bg-[#32353C] border border-[#424936]/40 rounded-full">
                  <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#C2CAB0]">6</span>
                </div>
                <div className="flex justify-center items-center w-5 h-5 bg-[#32353C] border border-[#424936]/40 rounded-full">
                  <span className="font-['Space_Grotesk'] font-normal text-[10px] leading-[15px] text-[#C2CAB0]">7</span>
                </div>
                <span className="font-['Space_Grotesk'] font-bold text-[12px] leading-[16px] text-[#C2CAB0] ml-1">5/7 Hari</span>
              </div>

              <div className="flex flex-row justify-between items-center pt-2 w-full border-t border-[#424936]/20 mt-1">
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Hari ini: <strong className="text-[#CCFF80]">7,420 Langkah (Selesai)</strong></span>
                <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[12px] leading-[16px] text-[#CCFF80]">Streak 🔥 5 Hari</span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Weekly Leaderboard Mini-Preview */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-row justify-between items-center w-full h-[40px]">
            <div className="flex flex-col items-start">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[24px] tracking-[-0.27px] text-[#E1E2EB]">Top Peringkat Minggu Ini</h3>
              <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">Reset setiap Senin 00:00 WIB</span>
            </div>
            <button className="flex flex-row items-center px-2.5 py-1 gap-0.5 bg-[#1D2026] border border-[#424936]/30 rounded-lg cursor-pointer">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12px] leading-[16px] text-[#CCFF80]">Papan Penuh</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </button>
          </div>

          {/* Leaderboard Stack */}
          <div className="flex flex-col gap-2 w-full">
            
            {/* Rank 1: Sarah K */}
            <div className="flex flex-row justify-between items-center p-3 w-full bg-[#1D2026]/70 border border-[#424936]/20 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <span className="w-6 font-['Liberation_Serif'] font-normal text-[18px] text-center text-[#E1E2EB]">🥇</span>
                <div className="w-8 h-8 bg-[#272A31] border border-[#424936]/40 rounded-full flex justify-center items-center overflow-hidden">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1E2EB" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[20px] text-[#E1E2EB]">Sarah K.</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">+52 KM minggu ini</span>
                </div>
              </div>
              <div className="flex flex-row items-baseline gap-1">
                <span className="font-['Space_Grotesk'] font-bold text-[14px] leading-[20px] text-[#E1E2EB]">1,240</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">pts</span>
              </div>
            </div>

            {/* Rank 2: Budi W */}
            <div className="flex flex-row justify-between items-center p-3 w-full bg-[#1D2026]/70 border border-[#424936]/20 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <span className="w-6 font-['Liberation_Serif'] font-normal text-[18px] text-center text-[#E1E2EB]">🥈</span>
                <div className="w-8 h-8 bg-[#272A31] border border-[#424936]/40 rounded-full flex justify-center items-center overflow-hidden">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1E2EB" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[20px] text-[#E1E2EB]">Budi W.</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">+48 KM minggu ini</span>
                </div>
              </div>
              <div className="flex flex-row items-baseline gap-1">
                <span className="font-['Space_Grotesk'] font-bold text-[14px] leading-[20px] text-[#E1E2EB]">1,180</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">pts</span>
              </div>
            </div>

            {/* Rank 3: Dimas P */}
            <div className="flex flex-row justify-between items-center p-3 w-full bg-[#1D2026]/70 border border-[#424936]/20 rounded-xl">
              <div className="flex flex-row items-center gap-3">
                <span className="w-6 font-['Liberation_Serif'] font-normal text-[18px] text-center text-[#E1E2EB]">🥉</span>
                <div className="w-8 h-8 bg-[#272A31] border border-[#424936]/40 rounded-full flex justify-center items-center overflow-hidden">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1E2EB" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"/></svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[20px] text-[#E1E2EB]">Dimas P.</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">+45 KM minggu ini</span>
                </div>
              </div>
              <div className="flex flex-row items-baseline gap-1">
                <span className="font-['Space_Grotesk'] font-bold text-[14px] leading-[20px] text-[#E1E2EB]">1,120</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">pts</span>
              </div>
            </div>

            {/* Rank 4: Kamu (Highlighted) */}
            <div className="flex flex-row justify-between items-center p-3 w-full bg-[#272A31]/90 border-2 border-[#A3E635] shadow-[0_0_16px_rgba(163,230,53,0.2)] rounded-xl relative overflow-hidden">
              <div className="flex flex-row items-center gap-3 relative z-10">
                <span className="w-6 font-['Space_Grotesk'] font-bold text-[16px] text-center text-[#CCFF80]">#4</span>
                <div className="w-8 h-8 bg-[#A3E635]/20 border border-[#A3E635] rounded-full flex justify-center items-center overflow-hidden">
                   <span className="font-['Liberation_Serif'] font-normal text-[14px] text-[#E1E2EB]">🏃</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex flex-row items-center gap-1.5">
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] leading-[20px] text-[#CCFF80]">Kamu</span>
                    <div className="w-1.5 h-1.5 bg-[#A3E635] rounded-full"></div>
                  </div>
                  <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">+42 KM minggu ini</span>
                </div>
              </div>
              <div className="flex flex-row items-baseline gap-1 relative z-10">
                <span className="font-['Space_Grotesk'] font-bold text-[14px] leading-[20px] text-[#CCFF80]">1,050</span>
                <span className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] leading-[16px] text-[#C2CAB0]">pts</span>
              </div>
              {/* YOU Indicator triangle/ribbon on top right */}
              <div className="absolute right-[-25px] top-[-14px] w-[65px] h-[18px] bg-[#A3E635] transform rotate-45 flex justify-center items-center pt-2">
                <span className="font-['Space_Grotesk'] font-bold text-[9px] leading-[14px] text-[#416400]">YOU</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-[72px] bg-[#191C22]/90 border-t border-[#424936]/20 backdrop-blur-[12px] flex justify-between items-center px-6 z-50">
        
        {/* Home */}
        <button className="flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span className="font-['Space_Grotesk'] font-bold text-[10px] text-[#C2CAB0] tracking-wider uppercase">HOME</span>
        </button>

        {/* Feed */}
        <button className="flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity mr-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span className="font-['Space_Grotesk'] font-bold text-[10px] text-[#C2CAB0] tracking-wider uppercase">FEED</span>
        </button>

        {/* Floating Action Button (FAB) - Record */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button className="flex justify-center items-center w-[56px] h-[56px] bg-[#A3E635] hover:bg-[#B4F742] shadow-[0_0_24px_rgba(163,230,53,0.45)] rounded-full border-none cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#416400"><path d="M5 3l14 9-14 9V3z"/></svg>
          </button>
        </div>

        {/* Challenges (Active) */}
        <button className="flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity ml-4 relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCFF80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
          <span className="font-['Space_Grotesk'] font-bold text-[10px] text-[#CCFF80] tracking-wider uppercase">CHALLENGES</span>
          <div className="absolute -bottom-2 w-1 h-1 bg-[#A3E635] rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span className="font-['Space_Grotesk'] font-bold text-[10px] text-[#C2CAB0] tracking-wider uppercase">PROFILE</span>
        </button>
      </div>

    </div>
  );
}
