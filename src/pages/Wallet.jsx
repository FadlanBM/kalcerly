import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {getBalance,getTransactions} from '../api/resources';
import {getWallets,deleteWallet,setPrimaryWallet,generateNonce,verifyWallet} from '../api/wallet';
export default function Wallet(){
 const [wallets,setWallets]=useState([]),[balance,setBalance]=useState(null),[tx,setTx]=useState([]),[error,setError]=useState('');
 const load=()=>Promise.allSettled([getWallets(),getBalance(),getTransactions()]).then(r=>{setWallets(r[0].status==='fulfilled'?r[0].value.data||[]:[]);setBalance(r[1].status==='fulfilled'?r[1].value.data:null);setTx(r[2].status==='fulfilled'?r[2].value.data||[]:[]);if(r.every(x=>x.status==='rejected'))setError('Data dompet belum dapat dimuat.')});
 useEffect(()=>{load()},[]);
 const act=async fn=>{try{setError('');await fn();await load()}catch(e){setError(e.data?.message||e.message)}};
 const connect=()=>act(async()=>{
  if(!window.ethereum)throw new Error('Provider wallet Ethereum tidak tersedia di perangkat ini.');
  const [address]=await window.ethereum.request({method:'eth_requestAccounts'});
  const chainId=Number(await window.ethereum.request({method:'eth_chainId'}));
  const {data}=await generateNonce(address);
  const message=`${data.domain} wants you to sign in with your Ethereum account:\n${address}\n\nConnect this wallet to Kalcerly.\n\nURI: https://${data.domain}\nVersion: 1\nChain ID: ${chainId}\nNonce: ${data.nonce}\nIssued At: ${new Date().toISOString()}`;
  const signature=await window.ethereum.request({method:'personal_sign',params:[message,address]});
  await verifyWallet(address,signature,message,chainId);
 });
 return <main className="max-w-[600px] mx-auto min-h-screen bg-[#0B0E14] text-[#E1E2EB] p-4 pt-8 pb-32 space-y-5"><h1 className="text-2xl font-bold">Dompet & FIT</h1>{error&&<p role="alert" className="text-red-300">{error}</p>}<div className="rounded-2xl bg-[#191C22] p-5"><p className="text-[#C2CAB0]">Saldo FIT (base units)</p><p className="text-2xl text-[#CCFF80]">{balance?.hasWallet?balance.balance:'Belum ada dompet'}</p><p className="text-xs text-[#C2CAB0]">{balance?.address}</p></div><button className="rounded bg-[#A3E635] px-4 py-2 text-black" onClick={connect}>Hubungkan wallet</button><section><h2 className="font-bold mb-2">Dompet terhubung</h2>{wallets.map(w=><div key={w.id} className="rounded-xl bg-[#191C22] p-3 mb-2 break-all"><p>{w.address}</p><p className="text-xs text-[#C2CAB0]">Chain ID {w.chainId} {w.isPrimary&&'· Utama'}</p><div className="flex gap-2 mt-2">{!w.isPrimary&&<button className="text-[#CCFF80]" onClick={()=>act(()=>setPrimaryWallet(w.id))}>Jadikan utama</button>}<button className="text-red-300" onClick={()=>{if(window.confirm('Hapus dompet ini?'))act(()=>deleteWallet(w.id))}}>Hapus</button></div></div>)}</section><section><h2 className="font-bold mb-2">Transaksi blockchain</h2>{tx.map(t=><div key={t.id} className="rounded-xl bg-[#191C22] p-3 mb-2"><p>{t.type} · {t.status}</p><p className="text-xs break-all text-[#C2CAB0]">{t.transactionHash}</p></div>)}</section><Link to="/rewards" className="text-[#CCFF80]">Lihat riwayat reward →</Link></main>
}
