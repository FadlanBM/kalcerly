import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {AuthProvider,useAuth} from './context/AuthContext';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LiveActivityTracking from './pages/LiveActivityTracking';
import AIVerification from './pages/AIVerification';
import ResourcePage from './pages/ResourcePage';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Rewards from './pages/Rewards';
import Feed from './pages/Feed';
import Leaderboard from './pages/Leaderboard';
import EmailVerification from './pages/EmailVerification';
import SocialUser from './pages/SocialUser';
import PostDetail from './pages/PostDetail';
function Protected({children}){const {isAuthenticated,isLoading}=useAuth();if(isLoading)return <div className="bg-[#0B0E14] text-white min-h-screen p-8">Memuat sesi...</div>;return isAuthenticated?children:<Navigate to="/login" replace/>}
function App(){return <AuthProvider><BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Login/>}/><Route path="/verify-email" element={<EmailVerification/>}/><Route element={<Protected><MainLayout/></Protected>}><Route path="/dashboard" element={<Dashboard/>}/><Route path="/profile" element={<Profile/>}/><Route path="/wallet" element={<Wallet/>}/><Route path="/rewards" element={<Rewards/>}/><Route path="/feed" element={<Feed/>}/><Route path="/posts/:id" element={<PostDetail/>}/><Route path="/users/:userId" element={<SocialUser/>}/><Route path="/leaderboard" element={<Leaderboard/>}/>{['activities','routes','segments','challenges','goals','clubs'].flatMap(resource=>[<Route key={resource} path={`/${resource}`} element={<ResourcePage resource={resource}/>}/>,<Route key={`${resource}-detail`} path={`/${resource}/:id`} element={<ResourcePage resource={resource}/>}/>])}</Route><Route path="/liveactivity" element={<Protected><LiveActivityTracking/></Protected>}/><Route path="/verification/:id" element={<Protected><AIVerification/></Protected>}/><Route path="*" element={<Navigate to="/dashboard" replace/>}/></Routes></BrowserRouter></AuthProvider>}
export default App;
