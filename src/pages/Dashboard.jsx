import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getActivities } from '../api/activity';
import { getBalance, getStats } from '../api/resources';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [data,setData] = useState({});
  const [error,setError] = useState('');
  useEffect(() => { Promise.allSettled([getStats(),getActivities(1,3),getBalance()]).then(results => {
    setData({ stats: results[0].status === 'fulfilled' ? results[0].value.data : null, activities: results[1].status === 'fulfilled' ? results[1].value.data : [], balance: results[2].status === 'fulfilled' ? results[2].value.data : null });
    if(results.every(x=>x.status==='rejected')) setError('Data dashboard belum dapat dimuat.');
  }); }, []);
  const s=data.stats;
  return <main className="max-w-[600px] mx-auto min-h-screen bg-[#0B0E14] text-[#E1E2EB] px-4 pt-8 pb-32 space-y-6">
    <header><p className="text-[#C2CAB0]">Selamat datang,</p><h1 className="text-2xl font-bold">{user?.fullname || 'Pengguna'}</h1></header>
    {error && <p role="alert">{error}</p>}
    <section className="grid grid-cols-2 gap-3">{[['Aktivitas',s?.totalActivities],['Jarak',s ? `${(Number(s.totalDistanceMeters)/1000).toFixed(1)} km` : null],['Streak',s ? `${s.currentStreak} hari` : null],['Saldo (base units)',data.balance?.hasWallet ? data.balance.balance : 'Hubungkan dompet']].map(([label,value])=><div key={label} className="rounded-2xl bg-[#191C22] p-4"><p className="text-sm text-[#C2CAB0]">{label}</p><p className="mt-2 text-xl font-bold text-[#CCFF80]">{value ?? '—'}</p></div>)}</section>
    <nav className="grid grid-cols-2 gap-2">{[['Rekam aktivitas','/liveactivity'],['Target pribadi','/goals'],['Rute','/routes'],['Segmen','/segments'],['Klub','/clubs'],['Reward','/rewards'],['Leaderboard','/leaderboard'],['Tantangan','/challenges']].map(([label,url])=><Link key={url} className="rounded-xl border border-[#424936] p-3 text-[#CCFF80]" to={url}>{label} →</Link>)}</nav>
    <section><div className="flex justify-between"><h2 className="font-bold">Aktivitas terakhir</h2><Link to="/activities" className="text-[#CCFF80]">Lihat semua</Link></div><div className="space-y-2 mt-3">{(data.activities || []).map(x=><Link to={`/activities/${x.id}`} key={x.id} className="block rounded-xl bg-[#191C22] p-3">{x.title || x.type} · {((Number(x.distanceMeters)||0)/1000).toFixed(2)} km · {x.status}</Link>)}{data.activities?.length===0 && <p className="text-[#C2CAB0]">Belum ada aktivitas.</p>}</div></section>
  </main>;
}
