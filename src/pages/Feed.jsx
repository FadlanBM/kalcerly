import React, { useState, useEffect } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import { Search, MessageSquare, Plus, MoreHorizontal, MessageCircle, Share2, MapPin, CheckCircle, Activity, Award } from 'lucide-react';
import { getFeeds } from '../api/feed';

export default function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const res = await getFeeds();
        if (res.success) {
          setFeeds(res.data);
        }
      } catch (err) {
        console.error("Failed to load feeds:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeeds();
  }, []);

  return (
    <div className="relative w-full max-w-[390px] min-h-screen mx-auto bg-[#0B0E14] text-[#E1E2EB] font-sans pb-[calc(80px+env(safe-area-inset-bottom))] overflow-x-hidden">
      
      {/* Header */}
      <div className="sticky top-0 w-full px-4 pt-[max(env(safe-area-inset-top,16px),16px)] pb-3 bg-[#0B0E14]/95 backdrop-blur-md z-40 flex items-center justify-between border-b border-[#424936]/20">
        <h1 className="font-['Space_Grotesk'] font-bold text-xl text-[#E1E2EB] tracking-tight">Kalcerly</h1>
        
        <div className="flex items-center gap-2 p-1 bg-[#191C22] border border-[#424936]/40 rounded-full">
          <button className="px-4 py-1.5 bg-[#A3E635] text-[#121F00] font-bold text-xs rounded-full">Untuk Anda</button>
          <button className="px-4 py-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] font-medium text-xs rounded-full">Mengikuti</button>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[#C2CAB0] hover:text-[#E1E2EB]"><Search size={20} /></button>
          <button className="text-[#C2CAB0] hover:text-[#E1E2EB] relative">
            <MessageSquare size={20} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#A3E635] rounded-full"></div>
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Verified Today Stories */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={14} className="text-[#CCFF80]" />
            <span className="text-[11px] font-bold text-[#C2CAB0] tracking-wider uppercase">VERIFIED TODAY</span>
          </div>
          <span className="text-xs font-medium text-[#7BD0FF]">5 Aktif</span>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {/* My Story (Add) */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-16 h-16 rounded-full border border-[#424936] border-dashed flex items-center justify-center bg-[#191C22]">
              <Plus className="text-[#C2CAB0]" size={24} />
            </div>
            <span className="text-xs text-[#C2CAB0]">Saya</span>
          </div>
          
          {/* User Story */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#A3E635] to-[#00A6E0] relative">
              <div className="w-full h-full rounded-full bg-[#191C22] border-2 border-[#0B0E14] overflow-hidden">
                <div className="w-full h-full bg-[#272A31] flex items-center justify-center text-xs">AW</div>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#191C22] border border-[#A3E635] rounded-full flex items-center justify-center">
                <span className="text-[8px]">🚴</span>
              </div>
            </div>
            <span className="text-xs font-medium text-[#E1E2EB]">Alex</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#A3E635] to-[#A3E635] relative">
              <div className="w-full h-full rounded-full bg-[#191C22] border-2 border-[#0B0E14] overflow-hidden">
                <div className="w-full h-full bg-[#272A31] flex items-center justify-center text-xs">MS</div>
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#191C22] border border-[#A3E635] rounded-full flex items-center justify-center">
                <span className="text-[8px]">🏃</span>
              </div>
            </div>
            <span className="text-xs font-medium text-[#E1E2EB]">Maya</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-16 h-16 rounded-full p-[2px] border border-[#424936] relative">
              <div className="w-full h-full rounded-full bg-[#191C22] border-2 border-[#0B0E14] overflow-hidden">
                <div className="w-full h-full bg-[#272A31] flex items-center justify-center text-xs">BD</div>
              </div>
            </div>
            <span className="text-xs text-[#C2CAB0]">Budi</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-16 h-16 rounded-full p-[2px] border border-[#A3E635] relative">
              <div className="w-full h-full rounded-full bg-[#191C22] border-2 border-[#0B0E14] overflow-hidden">
                <div className="w-full h-full bg-[#272A31] flex items-center justify-center text-xs">DN</div>
              </div>
            </div>
            <span className="text-xs text-[#E1E2EB]">Dina</span>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[#424936]/20"></div>

      {/* Feed Posts */}
      <div className="flex flex-col gap-4 p-4">
        
        {loading ? (
          <>
            {[1, 2].map((i) => (
              <article key={i} className="p-4 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl animate-pulse">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#32353C]/50 flex-shrink-0"></div>
                    <div>
                      <div className="w-24 h-4 bg-[#32353C]/50 rounded mb-1.5"></div>
                      <div className="w-32 h-3 bg-[#32353C]/50 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-16 bg-[#32353C]/30 rounded mb-3"></div>
                <div className="w-full h-12 bg-[#32353C]/30 rounded"></div>
              </article>
            ))}
          </>
        ) : feeds.length > 0 ? (
          feeds.map((post) => (
            <article key={post.id} className="p-4 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
              {/* Post Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#272A31] overflow-hidden flex-shrink-0 flex items-center justify-center text-sm font-medium">
                    {post.author?.fullname ? post.author.fullname.substring(0, 2).toUpperCase() : 'AW'}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-[#E1E2EB]">{post.author?.fullname || 'User'}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#C2CAB0] mt-0.5">
                      <span>Baru saja</span>
                      <span>•</span>
                      <MapPin size={10} />
                      <span>{post.activity?.title || 'Lokasi'}</span>
                    </div>
                  </div>
                </div>
                <button className="text-[#C2CAB0]"><MoreHorizontal size={18} /></button>
              </div>

              {/* Post Content */}
              <p className="text-sm text-[#E1E2EB] mb-3 leading-relaxed">
                {post.content || 'Workout selesai!'}
              </p>

              {/* Activity Stats (if linked) */}
              {post.activity && (
                <div className="flex justify-between items-center py-2 px-1 border-t border-b border-[#424936]/20 mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#C2CAB0] font-bold tracking-wider mb-1">JARAK</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-[#E1E2EB]">{(post.activity.distanceMeters / 1000).toFixed(2)}</span>
                      <span className="text-xs text-[#C2CAB0]">KM</span>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[#424936]/30"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#C2CAB0] font-bold tracking-wider mb-1">DURASI</span>
                    <span className="text-xl font-bold text-[#E1E2EB]">
                      {Math.floor(post.activity.durationSeconds / 60)}:{(post.activity.durationSeconds % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-[#424936]/30"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#C2CAB0] font-bold tracking-wider mb-1">KALORI</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-[#A3E635]">{post.activity.calories}</span>
                      <span className="text-xs text-[#C2CAB0]">KCAL</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex justify-between items-center px-1">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFC6AA]/10 border border-[#FFC6AA]/20 rounded-full text-[#FFB690] hover:bg-[#FFC6AA]/20 transition-colors">
                  <span className="text-sm">👏</span>
                  <span className="text-xs font-bold">{post.likesCount || 0} Kudos</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
                  <MessageCircle size={16} />
                  <span className="text-xs">{post.commentsCount || 0} Komentar</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
                  <Share2 size={16} />
                  <span className="text-xs">Bagikan</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="p-4 text-center text-[#C2CAB0]">Belum ada post.</div>
        )}

        {/* Post 2: Alex (Cycling) */}
        <article className="p-4 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#272A31] overflow-hidden flex-shrink-0 flex items-center justify-center text-sm font-medium">AW</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-[#E1E2EB]">Alex Wijaya</span>
                  <span className="text-xs text-[#C2CAB0]">@alexride</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#C2CAB0] mt-0.5">
                  <span>5 jam lalu</span>
                  <span>•</span>
                  <span>Pantai Indah Kapuk (PIK 2)</span>
                </div>
              </div>
            </div>
            <button className="text-[#C2CAB0]"><MoreHorizontal size={18} /></button>
          </div>

          <p className="text-sm text-[#E1E2EB] mb-3 leading-relaxed">
            Long ride Minggu pagi 42 KM bareng komunitas <span className="text-[#7BD0FF]">@JKTcyclists</span>. Streak 14 hari aman! 🔥
          </p>

          <div className="bg-[#0B0E14] rounded-lg p-3 mb-3 border border-[#424936]/40">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#121F00]/80 border border-[#A3E635] rounded-full">
                <CheckCircle size={10} className="text-[#A3E635]" />
                <span className="text-[10px] font-bold text-[#A3E635] tracking-wider">VERIFIED ACTIVITY</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#191C22] border border-[#A3E635]/30 rounded-full">
                <span className="text-[10px] font-bold text-[#A3E635] tracking-wider">+65 FIT Earned</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-[#7BD0FF]" />
                <span className="text-xs font-bold text-[#7BD0FF] uppercase tracking-wider">CYCLING</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#E1E2EB]">42.4 <span className="text-[10px] font-normal text-[#C2CAB0]">KM</span></span>
                <span className="text-sm font-bold text-[#E1E2EB]">01:28:15</span>
                <span className="text-sm font-bold text-[#A3E635]">28.9 <span className="text-[10px] font-normal text-[#C2CAB0]">KM/H</span></span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3 pt-3 border-t border-[#424936]/20">
              <div className="flex items-center gap-1 px-2 py-1 bg-[#272A31]/50 rounded text-[10px] text-[#C2CAB0] font-medium">
                <span className="text-xs">🔥</span> 14 Hari Workout Streak
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[#272A31]/50 rounded text-[10px] text-[#C2CAB0] font-medium">
                Top 5% Komunitas
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-1">
            <button className="flex items-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
              <span className="text-sm">👏</span>
              <span className="text-xs">98 Kudos</span>
            </button>
            <button className="flex items-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
              <MessageCircle size={16} />
              <span className="text-xs">14 Komentar</span>
            </button>
            <button className="flex items-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
              <Share2 size={16} />
              <span className="text-xs">Bagikan</span>
            </button>
          </div>
        </article>

        {/* Post 3: Small Update */}
        <article className="p-3 bg-[#191C22]/85 border border-[#424936]/40 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#272A31] flex items-center justify-center text-xs font-bold text-[#C2CAB0]">BD</div>
            <div>
              <p className="text-sm text-[#E1E2EB] font-medium leading-tight mb-1">
                Budi Darmawan menyelesaikan lari 10 KM
              </p>
              <p className="text-xs text-[#C2CAB0]">6 jam lalu • Proof terverifikasi</p>
            </div>
          </div>
          <CheckCircle size={16} className="text-[#A3E635] flex-shrink-0" />
        </article>

      </div>
    </div>
  );
}
