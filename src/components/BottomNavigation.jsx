import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Play, Trophy, User } from 'lucide-react';

export default function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[calc(72px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] bg-[#191C22]/90 border-t border-[#424936]/20 backdrop-blur-xl shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.6)] z-50">
      <div className="grid grid-cols-5 items-center h-full px-2 max-w-[390px] mx-auto">
        
        {/* Nav Item: Home */}
        <button onClick={() => navigate('/dashboard')} className={`flex flex-col items-center justify-center gap-1.5 relative transition-colors ${path === '/dashboard' || path === '/' ? 'text-[#CCFF80]' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}>
          <Home size={28} fill={path === '/dashboard' || path === '/' ? 'currentColor' : 'none'} />
          <span className={`text-[10px] font-bold ${path === '/dashboard' || path === '/' ? 'text-[#CCFF80]' : ''}`}>Home</span>
          {(path === '/dashboard' || path === '/') && <div className="absolute -bottom-2 w-1 h-1 bg-[#CCFF80] rounded-full"></div>}
        </button>


        <button onClick={() => navigate('/feed')} className={`flex flex-col items-center justify-center gap-1.5 transition-colors ${path === '/feed' ? 'text-[#CCFF80]' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`} aria-label="Feed">
          <MessageSquare size={26} fill={path === '/feed' ? 'currentColor' : 'none'} />
          <span className="text-[10px] font-bold">Feed</span>
        </button>

        {/* Nav Item: Record */}
        <button onClick={() => navigate('/liveactivity')} className={`flex flex-col items-center justify-center gap-1.5 relative transition-colors ${path === '/liveactivity' ? 'text-[#CCFF80]' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}>
          <Play size={28} fill={path === '/liveactivity' ? 'currentColor' : 'none'} />
          <span className={`text-[10px] font-bold ${path === '/liveactivity' ? 'text-[#CCFF80]' : ''}`}>Record</span>
          {path === '/liveactivity' && <div className="absolute -bottom-2 w-1 h-1 bg-[#CCFF80] rounded-full"></div>}
        </button>

        {/* Nav Item: Challenges */}
        <button onClick={() => navigate('/challenges')} className={`flex flex-col items-center justify-center gap-1.5 relative transition-colors ${path === '/challenges' ? 'text-[#CCFF80]' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}>
          <Trophy size={28} fill={path === '/challenges' ? 'currentColor' : 'none'} />
          <span className={`text-[10px] font-bold ${path === '/challenges' ? 'text-[#CCFF80]' : ''}`}>Challenges</span>
          {path === '/challenges' && <div className="absolute -bottom-2 w-1 h-1 bg-[#CCFF80] rounded-full"></div>}
        </button>

        {/* Nav Item: Profile */}
        <button onClick={() => navigate('/profile')} className={`flex flex-col items-center justify-center gap-1.5 relative transition-colors ${path === '/profile' ? 'text-[#CCFF80]' : 'text-[#C2CAB0] hover:text-[#E1E2EB]'}`}>
          <User size={28} fill={path === '/profile' ? 'currentColor' : 'none'} />
          <span className={`text-[10px] font-bold ${path === '/profile' ? 'text-[#CCFF80]' : ''}`}>Profile</span>
          {path === '/profile' && <div className="absolute -bottom-2 w-1 h-1 bg-[#CCFF80] rounded-full"></div>}
        </button>

      </div>
    </nav>
  );
}
