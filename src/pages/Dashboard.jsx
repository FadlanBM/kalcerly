import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell, Activity, MapPin, Flame, Wallet, ChevronRight, Play,
  CheckCircle2, Target, Clock, Home, MessageSquare, Trophy, User, Plus
} from 'lucide-react';
import TopHeader from '../components/TopHeader';
import BottomNavigation from '../components/BottomNavigation';
import { getActivities } from '../api/activity';

export default function Dashboard() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await getActivities(1, 1);
        if (res.success) {
          setActivities(res.data);
        }
      } catch (err) {
        console.error("Failed to load activities", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecent();
  }, []);

  const recentActivity = activities.length > 0 ? activities[0] : null;

  return (
    <div className="relative w-full max-w-[390px] min-h-[897px] mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-[calc(104px+env(safe-area-inset-bottom))] overflow-hidden">

      {/* Top Header */}
      <TopHeader />

      {/* Main Content */}
      <main className="flex flex-col gap-4 px-4 pt-[132px]">

        {/* Today's Activity Card */}
        <section className="relative p-4 bg-[#191C22]/85 border border-[#424936]/50 rounded-xl overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#A3E635]/10 blur-[20px] rounded-full"></div>

          <div className="relative z-10 flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-[#CCFF80]" />
              <span className="text-[12px] font-medium text-[#C2CAB0]">Aktivitas Hari Ini</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#32353C]/60 border border-[#424936]/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-[#CCFF80] rounded-full"></div>
              <span className="text-[10px] font-bold text-[#C2CAB0] tracking-wider uppercase">GPS SYNC</span>
            </div>
          </div>

          <div className="relative z-10 flex justify-between items-center mb-4">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[28px] font-bold text-[#E1E2EB] tracking-tight">3.2</span>
                <span className="text-[18px] font-bold text-[#CCFF80]">KM</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 bg-[#CCFF80] rounded-full"></div>
                <span className="text-[12px] font-medium text-[#C2CAB0]">Walking Mode</span>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="26" fill="none" stroke="#32353C" strokeWidth="5.33" />
                <circle cx="32" cy="32" r="26" fill="none" stroke="#CCFF80" strokeWidth="5.33" strokeDasharray="163" strokeDashoffset="58" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[11px] font-bold text-[#E1E2EB] leading-none">64%</span>
                <span className="text-[9px] text-[#C2CAB0] mt-0.5">5 KM</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex gap-2 pt-2 border-t border-[#424936]/20">
            <div className="flex-1 flex items-center gap-2 p-2 bg-[#1D2026]/50 border border-[#424936]/30 rounded-lg">
              <div className="w-7 h-7 bg-[#FFC6AA]/10 rounded-full flex items-center justify-center">
                <Flame size={12} className="text-[#974000]" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#C2CAB0] tracking-wider uppercase">Calories</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[16px] font-semibold text-[#E1E2EB]">215</span>
                  <span className="text-[11px] font-semibold text-[#C2CAB0]">kcal</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-2 p-2 bg-[#1D2026]/50 border border-[#424936]/30 rounded-lg">
              <div className="w-7 h-7 bg-[#00A6E0]/10 rounded-full flex items-center justify-center">
                <Clock size={12} className="text-[#7BD0FF]" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#C2CAB0] tracking-wider uppercase">Duration</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[16px] font-semibold text-[#E1E2EB]">38</span>
                  <span className="text-[11px] font-semibold text-[#C2CAB0]">mins</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid (Streak & Balance) */}
        <div className="flex gap-2 h-32">
          {/* Streak Card */}
          <div className="flex-1 p-3 flex flex-col justify-between bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-[12px] font-bold text-[#E1E2EB] flex items-center gap-1">
                🔥 7 Day Streak
              </span>
              <span className="px-1.5 py-0.5 bg-[#552100]/60 rounded text-[10px] font-bold text-[#FFB690]">ACTIVE</span>
            </div>
            <div className="flex justify-between items-center my-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-[#416400]" />
                  </div>
                  <span className={`text-[10px] ${i === 6 ? 'font-bold text-[#CCFF80]' : 'text-[#C2CAB0]'}`}>{day}</span>
                </div>
              ))}
            </div>
            <div className="text-[11px] text-[#C2CAB0]">Reward multiplier: 1.5x</div>
          </div>

          {/* Balance Card */}
          <div className="flex-1 p-3 flex flex-col justify-between bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-[#C2CAB0] tracking-wider uppercase">FIT Balance</span>
              <Wallet size={12} className="text-[#7BD0FF]" />
            </div>
            <div className="mt-1">
              <div className="flex items-baseline gap-1">
                <span className="text-[18px] font-semibold text-[#E1E2EB]">1,250</span>
                <span className="text-[11px] font-bold text-[#CCFF80]">FIT</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-[#CCFF80]">
                <Activity size={10} />
                <span>+$42 earned today</span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/wallet')}
              className="mt-2 flex justify-between items-center px-2 py-1 bg-[#1D2026] border border-[#424936]/30 rounded text-[11px] font-semibold text-[#7BD0FF]"
            >
              Quick Wallet
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Start Workout Button */}
        <button 
          onClick={() => navigate('/liveactivity')}
          className="w-full flex justify-between items-center px-4 py-3.5 bg-[#A3E635] shadow-[0_0_24px_rgba(163,230,53,0.35)] rounded-full"
        >
          <div className="w-8 h-8 bg-[#121F00]/20 rounded-full flex items-center justify-center">
            <Play size={14} className="text-[#121F00] ml-1" fill="currentColor" />
          </div>
          <span className="text-[18px] font-bold text-[#121F00]">Mulai Olahraga Sekarang</span>
          <div className="flex items-center gap-1">
            <Activity size={16} className="text-[#121F00]/80" />
            <MapPin size={16} className="text-[#121F00]/80" />
          </div>
        </button>

        {/* Monthly Quest Card */}
        <section className="p-4 bg-[#191C22]/90 border border-[#424936]/40 rounded-xl">
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#001E2C]/50 rounded text-[10px] font-bold text-[#7BD0FF] tracking-wider uppercase">Monthly Quest</span>
              <span className="text-[11px] text-[#C2CAB0] flex items-center gap-1"><Clock size={10} /> 12 hari lagi</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-[#A3E635]/20 border border-[#A3E635]/40 rounded-full">
              <Target size={12} className="text-[#CCFF80]" />
              <span className="text-[11px] font-bold text-[#CCFF80]">+500 FIT</span>
            </div>
          </div>

          <h3 className="text-[18px] font-bold text-[#E1E2EB] mb-3">Run 50 KM in 30 Days</h3>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-[#E1E2EB] font-medium">36 / 50 KM</span>
              <span className="text-[#CCFF80] font-bold">72% Completed</span>
            </div>
            <div className="w-full h-2 bg-[#32353C] rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-[#A3E635] rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-[#C2CAB0] mt-1">
              <span>Tersisa 14 KM</span>
              <span>Target Harian: 1.2 KM/hari</span>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[18px] font-bold text-[#E1E2EB]">Aktivitas Terakhir</h2>
            <button className="text-[12px] text-[#CCFF80]">Lihat Semua</button>
          </div>

          <div className="flex justify-between items-center p-3 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
            {loading ? (
              <div className="w-full flex justify-between items-center animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#32353C]/50 rounded-full"></div>
                  <div>
                    <div className="w-24 h-4 bg-[#32353C]/50 rounded mb-1.5"></div>
                    <div className="w-16 h-3 bg-[#32353C]/50 rounded"></div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="w-12 h-4 bg-[#32353C]/50 rounded-full mb-1"></div>
                  <div className="w-10 h-3 bg-[#32353C]/50 rounded"></div>
                </div>
              </div>
            ) : recentActivity ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1D2026] border border-[#424936]/40 rounded-full flex items-center justify-center">
                    <Activity size={18} className="text-[#CCFF80]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] font-bold text-[#E1E2EB]">{recentActivity.title || 'Morning Run'}</h4>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[#A3E635]/15 border border-[#A3E635]/60 rounded-full">
                        <CheckCircle2 size={10} className="text-[#CCFF80]" />
                        <span className="text-[9px] text-[#CCFF80] uppercase tracking-wider">{recentActivity.status || 'VERIFIED'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#C2CAB0] mt-0.5">
                      <span className="text-[#E1E2EB] font-semibold">{(recentActivity.distanceMeters / 1000).toFixed(2)} KM</span>
                      <span>•</span>
                      <span>{Math.floor(recentActivity.durationSeconds / 60)}:{recentActivity.durationSeconds % 60}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="px-2 py-0.5 bg-[#1D2026] border border-[#424936]/40 rounded-full mb-1">
                    <span className="text-[11px] font-bold text-[#CCFF80]">+{recentActivity.calories || 42} FIT</span>
                  </div>
                  <span className="text-[10px] text-[#C2CAB0]">Hari ini</span>
                </div>
              </>
            ) : (
              <span className="text-[12px] text-[#C2CAB0]">Belum ada aktivitas.</span>
            )}
          </div>
        </section>

      </main>

    </div>
  );
}
