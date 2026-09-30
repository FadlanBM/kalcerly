import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LiveActivityTracking from './pages/LiveActivityTracking';
import AIVerification from './pages/AIVerification';
import Challenges from './pages/Challenges';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/liveactivity" element={<LiveActivityTracking />} />
        <Route path="/verification" element={<AIVerification />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
