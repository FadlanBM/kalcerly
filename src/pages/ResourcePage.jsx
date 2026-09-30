import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createResource, deleteResource, getResource, listResource, resourceAction, updateResource } from '../api/resources';
import { getActivities } from '../api/activity';

const types = ['WALKING', 'RUNNING', 'CYCLING'];
const configs = {
  activities: { title: 'Aktivitas', fields: [], subtitle: x => `${x.type || ''} · ${((Number(x.distanceMeters) || 0) / 1000).toFixed(2)} km · ${x.status || ''}` },
  routes: { title: 'Rute', fields: [['name', 'Nama rute'], ['activityType', 'Jenis aktivitas', types], ['distanceMeters', 'Jarak (meter)', 'number'], ['estimatedDurationSeconds', 'Estimasi durasi (detik)', 'number'], ['elevationMeters', 'Elevasi (meter)', 'number'], ['difficulty', 'Kesulitan', ['EASY', 'MODERATE', 'HARD', 'EXPERT']], ['startLatitude', 'Lintang awal'], ['startLongitude', 'Bujur awal'], ['endLatitude', 'Lintang akhir'], ['endLongitude', 'Bujur akhir'], ['polyline', 'Polyline'], ['isPublic', 'Publik', 'boolean']], subtitle: x => `${x.activityType || ''} · ${((Number(x.distanceMeters) || 0) / 1000).toFixed(2)} km` },
  segments: { title: 'Segmen', fields: [['name', 'Nama segmen'], ['activityType', 'Jenis aktivitas', types], ['distanceMeters', 'Jarak (meter)', 'number'], ['elevationGainMeters', 'Kenaikan elevasi', 'number'], ['startLatitude', 'Lintang awal'], ['startLongitude', 'Bujur awal'], ['endLatitude', 'Lintang akhir'], ['endLongitude', 'Bujur akhir'], ['polyline', 'Polyline'], ['isPublic', 'Publik', 'boolean']], subtitle: x => `${x.activityType || ''} · ${x.distanceMeters || 0} m` },
  challenges: { title: 'Tantangan', fields: [['name', 'Nama tantangan'], ['description', 'Deskripsi'], ['type', 'Jenis target', ['DISTANCE', 'DURATION', 'ACTIVITY_COUNT', 'STREAK']], ['targetDistanceMeters', 'Target jarak (meter)', 'number'], ['targetDurationSeconds', 'Target durasi (detik)', 'number'], ['targetActivities', 'Target aktivitas', 'number'], ['targetStreakDays', 'Target streak (hari)', 'number'], ['startAt', 'Mulai', 'datetime-local'], ['endAt', 'Selesai', 'datetime-local']], subtitle: x => `${x.type || ''} · target ${x.targetDistanceMeters || x.targetValue || 0}` },
  goals: { title: 'Target pribadi', fields: [['type', 'Jenis target', ['DISTANCE', 'DURATION', 'ACTIVITY_COUNT', 'ELEVATION']], ['period', 'Periode', ['WEEKLY', 'MONTHLY', 'YEARLY']], ['targetValue', 'Nilai target', 'number'], ['startDate', 'Tanggal mulai', 'date'], ['endDate', 'Tanggal akhir', 'date']], subtitle: x => `${x.currentValue || 0} / ${x.targetValue || 0} · ${x.period || ''}` },
  clubs: { title: 'Klub', fields: [['name', 'Nama klub'], ['description', 'Deskripsi'], ['isPrivate', 'Privat', 'boolean']], subtitle: x => `${x.memberCount ?? ''} anggota · ${x.description || ''}` },
};
const inputClass = 'w-full rounded-xl bg-[#191C22] border border-[#424936] px-3 py-3 text-[#E1E2EB]';
const buttonClass = 'rounded-xl bg-[#A3E635] px-4 py-2 font-semibold text-[#121F00] disabled:opacity-50';
const secondaryClass = 'rounded-xl border border-[#424936] px-3 py-2 text-[#CCFF80]';
const toBody = (fields, values) => Object.fromEntries(fields.filter(([key]) => values[key] !== '' && values[key] !== undefined).map(([key,,type]) => [key, type === 'number' ? Number(values[key]) : type === 'boolean' ? values[key] === 'true' : type === 'datetime-local' ? new Date(values[key]).toISOString() : values[key]]));
const getError = e => e?.data?.message || e?.message || 'Permintaan gagal.';

export default function ResourcePage({ resource }) {
  const { id } = useParams();
  const config = configs[resource];
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [values, setValues] = useState({});
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [extra, setExtra] = useState(null);
  const [activityId, setActivityId] = useState('');
  const [post, setPost] = useState('');
  const [effortSeconds, setEffortSeconds] = useState('');
  const [memberId, setMemberId] = useState('');

  const reload = async () => {
    setLoading(true); setError('');
    try {
      if (id) setItem((await getResource(resource, id)).data);
      else {
        const endpoint = tab === 'all' ? resource : `${resource}/${tab}`;
        const result = resource === 'activities' ? await getActivities(page, 20) : await listResource(endpoint, { page, limit: 20 });
        setItems(Array.isArray(result.data) ? result.data : []);
      }
    } catch (e) { setError(getError(e)); }
    finally { setLoading(false); }
  };
  useEffect(() => { reload(); }, [resource, id, page, tab]);
  const act = async (fn, success = 'Berhasil disimpan.') => {
    setBusy(true); setError(''); setNotice('');
    try { await fn(); setNotice(success); await reload(); }
    catch (e) { setError(getError(e)); }
    finally { setBusy(false); }
  };
  const action = (name, method = 'POST', body) => act(() => resourceAction(resource, id, name, method, body));
  const recordProgress = () => activityId && action('progress', 'POST', { activityId });
  const fields = config.fields;
  return <main className="max-w-[600px] mx-auto min-h-screen bg-[#0B0E14] text-[#E1E2EB] px-4 pt-8 pb-32 space-y-5">
    <header className="flex items-center justify-between"><h1 className="text-2xl font-bold">{id ? item?.name || item?.title || config.title : config.title}</h1>{id && <Link className="text-[#CCFF80]" to={`/${resource}`}>Kembali</Link>}</header>
    {error && <p role="alert" className="rounded-xl bg-red-950 p-3 text-red-200">{error}</p>}
    {notice && <p role="status" className="rounded-xl bg-[#263711] p-3 text-[#CCFF80]">{notice}</p>}
    {loading && <p>Memuat...</p>}
    {!id && <>
      {['routes', 'challenges', 'clubs'].includes(resource) && <div className="flex gap-2"><button className={secondaryClass} onClick={() => {setTab('all'); setPage(1)}}>Semua</button><button className={secondaryClass} onClick={() => {setTab(resource === 'routes' ? 'saved' : 'me'); setPage(1)}}>{resource === 'routes' ? 'Tersimpan' : 'Diikuti'}</button></div>}
      {fields.length > 0 && <form className="space-y-3 rounded-2xl bg-[#14171D] p-4" onSubmit={e => { e.preventDefault(); act(() => createResource(resource, toBody(fields, values)), `${config.title} berhasil dibuat.`); setValues({}); }}><h2 className="font-bold">Buat {config.title.toLowerCase()}</h2>{fields.map(([key,label,type]) => <label key={key} className="block text-sm"><span className="block mb-1 text-[#C2CAB0]">{label}</span>{Array.isArray(type) || type === 'boolean' ? <select className={inputClass} value={values[key] || ''} onChange={e => setValues({...values,[key]:e.target.value})}><option value="">Pilih</option>{(type === 'boolean' ? ['true','false'] : type).map(v => <option key={v} value={v}>{v}</option>)}</select> : <input className={inputClass} type={type || 'text'} value={values[key] || ''} onChange={e => setValues({...values,[key]:e.target.value})} />}</label>)}<button disabled={busy} className={buttonClass}>Simpan</button></form>}
      <section className="space-y-3"><h2 className="font-bold">Daftar {config.title.toLowerCase()}</h2>{!loading && items.length === 0 && <p className="text-[#C2CAB0]">Belum ada data.</p>}{items.map(x => <Link key={x.id} to={`/${resource}/${x.challengeId || x.id}`} className="block rounded-xl bg-[#191C22] border border-[#424936] p-4"><strong>{x.name || x.title || x.type || 'Aktivitas'}</strong><p className="text-sm text-[#C2CAB0]">{config.subtitle(x)}</p></Link>)}<div className="flex gap-3"><button className={secondaryClass} disabled={page === 1} onClick={() => setPage(page - 1)}>Sebelumnya</button><span className="py-2">{page}</span><button className={secondaryClass} disabled={items.length < 20} onClick={() => setPage(page + 1)}>Berikutnya</button></div></section>
    </>}
    {id && item && <section className="space-y-4"><div className="rounded-xl bg-[#191C22] p-4"><p>{item.description || config.subtitle(item)}</p><p className="mt-2 text-sm text-[#C2CAB0]">ID: {item.id}</p></div>
      <div className="flex flex-wrap gap-2">
        {resource === 'routes' && <><button className={secondaryClass} disabled={busy} onClick={() => action('save')}>Simpan rute</button><button className={secondaryClass} disabled={busy} onClick={() => action('save', 'DELETE')}>Hapus simpanan</button></>}
        {['challenges','clubs'].includes(resource) && <><button className={secondaryClass} disabled={busy} onClick={() => action('join')}>Ikuti</button><button className={secondaryClass} disabled={busy} onClick={() => action('leave', 'DELETE')}>Keluar</button></>}
        {['routes','segments','goals','clubs','activities'].includes(resource) && <button className={secondaryClass} disabled={busy} onClick={() => {if(window.confirm(`Hapus ${config.title.toLowerCase()} ini?`)) deleteResource(resource,id).then(() => window.location.href = `/${resource}`).catch(e => setError(getError(e)))}}>Hapus</button>}
      </div>
      {['challenges','goals'].includes(resource) && <div className="space-y-2"><input className={inputClass} placeholder="ID aktivitas terverifikasi" value={activityId} onChange={e => setActivityId(e.target.value)} /><button className={buttonClass} disabled={!activityId || busy} onClick={recordProgress}>Tambah progres dari aktivitas</button></div>}
      {resource === 'activities' && <div className="flex gap-2"><Link className={secondaryClass} to={`/verification/${id}`}>Verifikasi & reward</Link></div>}
      {resource === 'segments' && <><button className={secondaryClass} onClick={async () => { try {setExtra((await resourceAction('segments',id,'leaderboard','GET')).data)} catch(e){setError(getError(e))}}}>Leaderboard segmen</button><div className="space-y-2"><input className={inputClass} placeholder="ID aktivitas" value={activityId} onChange={e=>setActivityId(e.target.value)}/><input className={inputClass} type="number" placeholder="Waktu segmen (detik)" value={effortSeconds} onChange={e=>setEffortSeconds(e.target.value)}/><button className={buttonClass} disabled={!activityId || !effortSeconds || busy} onClick={() => action('efforts','POST',{activityId,elapsedSeconds:Number(effortSeconds)})}>Catat effort</button></div>{extra && <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(extra,null,2)}</pre>}</>}
      {resource === 'challenges' && <button className={secondaryClass} onClick={async () => {try {setExtra((await resourceAction('challenges',id,'participants','GET')).data)} catch(e){setError(getError(e))}}}>Peserta</button>}
      {resource === 'clubs' && <><button className={secondaryClass} onClick={async () => {try {setExtra((await resourceAction('clubs',id,'members','GET')).data)} catch(e){setError(getError(e))}}}>Anggota</button><button className={secondaryClass} onClick={async () => {try {setExtra((await resourceAction('clubs',id,'posts','GET')).data)} catch(e){setError(getError(e))}}}>Post</button><div className="flex gap-2"><input className={inputClass} placeholder="Tulis post klub" value={post} onChange={e=>setPost(e.target.value)}/><button className={buttonClass} disabled={!post || busy} onClick={() => act(() => resourceAction('clubs',id,'posts','POST',{content:post}))}>Kirim</button></div>{extra && <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(extra,null,2)}</pre>}{item.membership?.role === 'OWNER' && <div className="space-y-2"><input className={inputClass} placeholder="ID pengguna anggota" value={memberId} onChange={e=>setMemberId(e.target.value)}/><button className={secondaryClass} disabled={!memberId} onClick={()=>action(`members/${encodeURIComponent(memberId)}/role`,'PATCH',{role:'ADMIN'})}>Jadikan admin</button></div>}</>}
      {resource === 'challenges' && extra && <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(extra,null,2)}</pre>}
      {['routes','clubs','activities'].includes(resource) && <form className="space-y-2" onSubmit={e => {e.preventDefault(); act(() => updateResource(resource,id,toBody(fields,values)))}}><h2 className="font-bold">Ubah detail</h2>{(resource === 'activities' ? [['title','Judul'],['description','Deskripsi']] : resource === 'clubs' ? fields : [['name','Nama rute']]).map(([key,label,type]) => <label key={key} className="block text-sm">{label}<input className={inputClass} value={values[key] ?? item[key] ?? ''} onChange={e=>setValues({...values,[key]:e.target.value})}/></label>)}<button className={buttonClass} disabled={busy}>Simpan perubahan</button></form>}
    </section>}
  </main>;
}


