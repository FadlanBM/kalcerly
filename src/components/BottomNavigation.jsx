import React from 'react';
import { Home, MessageSquare, Play, Trophy, User } from 'lucide-react';

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[calc(72px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] bg-[#191C22]/90 border-t border-[#424936]/20 backdrop-blur-xl shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.6)] z-50">
      <div className="grid grid-cols-5 items-center h-full px-4 max-w-[390px] mx-auto">
        {/* Nav Item: Home (Active) */}
        <button className="flex flex-col items-center justify-center gap-1.5 relative">
          <Home size={28} className="text-[#CCFF80]" fill="currentColor" />
          <span className="text-[10px] font-bold text-[#CCFF80]">Home</span>
          <div className="absolute -bottom-2 w-1 h-1 bg-[#CCFF80] rounded-full"></div>
        </button>

        {/* Nav Item: Feed */}
        <button className="flex flex-col items-center justify-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
          <MessageSquare size={28} />
          <span className="text-[10px] font-bold">Feed</span>
        </button>

        {/* Nav Item: Record */}
        <button className="flex flex-col items-center justify-center gap-1.5 relative text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
          <Play size={28} className="text-[#CCFF80]" fill="currentColor" />
          <span className="text-[10px] font-bold text-[#CCFF80]">Record</span>
        </button>

        {/* Nav Item: Challenges */}
        <button className="flex flex-col items-center justify-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
          <Trophy size={28} />
          <span className="text-[10px] font-bold">Challenges</span>
        </button>

        {/* Nav Item: Profile */}
        <button className="flex flex-col items-center justify-center gap-1.5 text-[#C2CAB0] hover:text-[#E1E2EB] transition-colors">
          <User size={28} />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </nav>
  );
}
