import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LiveActivityTracking from './pages/LiveActivityTracking';
import AIVerification from './pages/AIVerification';
import Challenges from './pages/Challenges';

import Profile from './pages/Profile';
import MintingStatus from './pages/MintingStatus';
import Wallet from './pages/Wallet';
import TransferSuccess from './pages/TransferSuccess';
import Notifications from './pages/Notifications';
import MainLayout from './components/MainLayout';
import Feed from './pages/Feed';
import ProfileDetails from './pages/ProfileDetails';
import Leaderboard from './pages/Leaderboard';

// Komponen Pembantu untuk mendengarkan Deep Link kustom (misal: kalcerly://login?token=...)
function DeepLinkHandler() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Hanya berjalan jika kita berada di lingkungan Tauri
    if (window.__TAURI__) {
      import('@tauri-apps/plugin-deep-link').then(({ onOpenUrl }) => {
        onOpenUrl((urls) => {
          urls.forEach((url) => {
            // Cek jika URL adalah deep link untuk login
            // Contoh URL: kalcerly://login?accessToken=abc&refreshToken=def
            if (url.includes('kalcerly://login')) {
              try {
                const urlObj = new URL(url);
                const accessToken = urlObj.searchParams.get('accessToken');
                const refreshToken = urlObj.searchParams.get('refreshToken');
                
                if (accessToken) {
                  loginUser({ accessToken, refreshToken: refreshToken || '' }, {
                    // Data user sementara atau tarik via /me setelah login
                    fullname: 'Google User',
                  });
                  navigate('/dashboard');
                }
              } catch (e) {
                console.error("Gagal membaca token dari deep link", e);
              }
            }
          });
        });
      }).catch(err => {
        console.warn("Deep link plugin belum diinstal di core Rust:", err);
      });
    }
  }, [loginUser, navigate]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DeepLinkHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/challenges" element={<Challenges />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/edit" element={<ProfileDetails mode="edit" />} />
            <Route path="/profile/settings" element={<ProfileDetails mode="settings" />} />
            <Route path="/profile/badges" element={<ProfileDetails mode="badges" />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

          <Route path="/liveactivity" element={<LiveActivityTracking />} />
          <Route path="/verification" element={<AIVerification />} />
          <Route path="/minting-status" element={<MintingStatus />} />
          <Route path="/transfer-success" element={<TransferSuccess />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
