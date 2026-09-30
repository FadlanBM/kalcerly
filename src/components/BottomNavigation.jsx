import React from 'react';
import {NavLink} from 'react-router-dom';
const tabs=[['Beranda','/dashboard'],['Feed','/feed'],['Rekam','/liveactivity'],['Tantangan','/challenges'],['Profil','/profile']];
export default function BottomNavigation(){return <nav className="fixed bottom-0 inset-x-0 z-50 bg-[#191C22] border-t border-[#424936] pb-[env(safe-area-inset-bottom)]"><div className="max-w-[600px] mx-auto flex justify-around">{tabs.map(([label,url])=><NavLink key={url} to={url} className={({isActive})=>`py-4 px-2 text-xs font-semibold ${isActive?'text-[#CCFF80]':'text-[#C2CAB0]'}`}>{label}</NavLink>)}</div></nav>}
