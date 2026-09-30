import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Polyline, Marker } from '@react-google-maps/api';
import { darkMapStyle } from '../utils/mapStyles';

const LiveActivityTracking = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const [currentPosition, setCurrentPosition] = useState(null);
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(0);
  const [status, setStatus] = useState('tracking');
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [mapZoom, setMapZoom] = useState(16);
  const [mapInstance, setMapInstance] = useState(null);
  const statusRef = useRef(status);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Helper to calculate distance in km using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    let watchId;
    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          if (statusRef.current === 'finished') return;

          const newPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentPosition(newPos);
          
          if (statusRef.current === 'tracking') {
            setPath(prevPath => {
              if (prevPath.length > 0) {
                const lastPos = prevPath[prevPath.length - 1];
                const dist = calculateDistance(lastPos.lat, lastPos.lng, newPos.lat, newPos.lng);
                setDistance(prevDist => prevDist + dist);
              }
              return [...prevPath, newPos];
            });
          }
        },
        (error) => {
          console.error("Error getting GPS location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[390px] h-[100dvh] mx-auto overflow-hidden text-[#E1E2EB] font-['Plus_Jakarta_Sans'] flex flex-col pt-[max(env(safe-area-inset-top),16px)] pb-[max(env(safe-area-inset-bottom),16px)]" style={{
      background: 'linear-gradient(0deg, #10131A, #10131A), linear-gradient(0deg, #0B0E14, #0B0E14), #FFFFFF',
      boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }}>
      {/* Ambient luminous gradients */}
      <div className="absolute w-[320px] h-[288px] left-[calc(50%-160px)] top-[-96px] bg-[#A3E635] bg-opacity-10 blur-[32px] rounded-full pointer-events-none" />
      <div className="absolute w-[256px] h-[256px] right-[-80px] bottom-[80px] bg-[#00A6E0] bg-opacity-10 blur-[32px] rounded-full pointer-events-none" />

      {/* Top Status Bar & Session Header */}
      <div className="flex-none w-full flex flex-col items-center px-4 z-10">
        <div className="flex flex-row justify-between items-center w-full h-[32px]">
          <div className="box-border flex flex-row items-center px-2.5 py-1 gap-1.5 w-[102.38px] h-[24px] bg-[#191C22] bg-opacity-90 border border-[#424936] border-opacity-30 rounded-full">
            <div className="w-2 h-2 bg-[#A3E635] rounded-full" />
            <div className="font-['Space_Grotesk'] font-medium text-[11px] leading-[14px] tracking-[0.66px] text-[#E1E2EB]">GPS Strong</div>
          </div>
          <div className="flex flex-row items-center gap-2 h-[32px]">
            {/* Audio */}
            <div className="box-border flex flex-row justify-center items-center w-[32px] h-[32px] bg-[#191C22] border border-[#424936] border-opacity-30 rounded-full cursor-pointer hover:bg-[#272A31] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </div>
            {/* Settings */}
            <div className="box-border flex flex-row justify-center items-center w-[32px] h-[32px] bg-[#191C22] border border-[#424936] border-opacity-30 rounded-full cursor-pointer hover:bg-[#272A31] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Real-time Telemetry Engine */}
      <div className="flex-1 w-full flex flex-col items-center px-4 pt-3 overflow-y-auto z-10 scrollbar-hide">
        
        {/* Primary Core Metric: Timer & Distance */}
        <div className="flex flex-col justify-center items-center pt-2 w-full h-[191px] flex-none">
          
          {/* Timer */}
          <div className="flex flex-col items-center w-[114.63px] h-[71px]">
            <div className="flex flex-col items-start pb-[2px] w-[60.92px] h-[16px]">
              <div className="w-full h-[14px] font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center justify-center tracking-[1.1px] uppercase text-[#C2CAB0] text-opacity-80">
                DURATION
              </div>
            </div>
            <div className="flex flex-col items-start w-[114.63px] h-[55px]">
              <div className="w-full h-[55px] font-['Space_Grotesk'] font-bold text-[44px] leading-[55px] flex items-center justify-center tracking-[-1.1px] text-[#E1E2EB]">
                34:22
              </div>
            </div>
          </div>

          {/* Distance */}
          <div className="flex flex-col justify-center items-center pt-1 w-[161.72px] h-[72px]">
            <div className="relative w-full h-[68px] flex justify-center">
              <div className="h-[68px] font-['Plus_Jakarta_Sans'] font-extrabold text-[68px] leading-[68px] flex items-center tracking-[-3.4px] text-[#E1E2EB] drop-shadow-[0_0_24px_rgba(163,230,53,0.45)]">
                {distance.toFixed(2)}
              </div>
              <div className="h-[68px] flex items-end pb-3 pl-2">
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[24px] flex items-center tracking-[0.45px] uppercase text-[#A3E635]">
                  KM
                </div>
              </div>
            </div>
          </div>

          {/* Live Target Pacing Indicator */}
          <div className="flex flex-col items-center pt-1 w-full h-[24px] mt-2">
            <div className="box-border flex flex-row items-center px-3 py-0.5 gap-[8px] bg-[#A3E635] bg-opacity-10 border border-[#A3E635] border-opacity-30 rounded-full">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                 <path d="M1 6L5.58579 1.41421C6.36683 0.633165 7.63316 0.633165 8.41421 1.41421L11 4" stroke="#A3E635" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="h-[14px] font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.66px] text-[#A3E635]">
                +0.14 km ahead of daily split
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Telemetry Bento Grid */}
        <div className="flex flex-col items-start pt-4 w-full h-[182px] flex-none">
          <div className="relative w-full h-[166px]">
            {/* Metric 1: Pace */}
            <div className="box-border flex flex-col justify-between items-start p-3 absolute h-[76px] left-0 right-[184px] top-0 bg-[#191C22] bg-opacity-85 border border-[#424936] border-opacity-30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-center w-full h-[14px]">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.55px] uppercase text-[#C2CAB0]">AVG PACE</div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7BD0FF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <div className="flex flex-col items-start pt-1 w-full h-[36px]">
                <div className="flex items-end h-[32px]">
                  <div className="font-['Space_Grotesk'] font-bold text-[28px] leading-[32px] flex items-center tracking-[-0.56px] text-[#E1E2EB]">06:35</div>
                  <div className="pl-1 mb-1 font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] flex items-center text-[#C2CAB0]">/KM</div>
                </div>
              </div>
            </div>

            {/* Metric 2: Speed */}
            <div className="box-border flex flex-col justify-between items-start p-3 absolute h-[76px] left-[184px] right-0 top-0 bg-[#191C22] bg-opacity-85 border border-[#424936] border-opacity-30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-center w-full h-[14px]">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.55px] uppercase text-[#C2CAB0]">CURRENT SPEED</div>
                <svg width="12" height="14" viewBox="0 0 24 24" fill="#CCFF80"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <div className="flex flex-col items-start pt-1 w-full h-[36px]">
                <div className="flex items-end h-[32px]">
                  <div className="font-['Space_Grotesk'] font-bold text-[28px] leading-[32px] flex items-center tracking-[-0.56px] text-[#E1E2EB]">10.8</div>
                  <div className="pl-1 mb-1 font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] flex items-center text-[#C2CAB0]">KM/H</div>
                </div>
              </div>
            </div>

            {/* Metric 3: Heart Rate */}
            <div className="box-border flex flex-col justify-between items-start p-3 absolute h-[76px] left-0 right-[184px] top-[88px] bg-[#191C22] bg-opacity-85 border border-[#424936] border-opacity-30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-center w-full h-[14px]">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.55px] uppercase text-[#C2CAB0]">HEART RATE</div>
                <svg width="14" height="13" viewBox="0 0 24 24" fill="#FFB4AB"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <div className="flex flex-col items-start pt-1 w-full h-[36px]">
                <div className="flex items-end h-[32px]">
                  <div className="font-['Space_Grotesk'] font-bold text-[28px] leading-[32px] flex items-center tracking-[-0.56px] text-[#E1E2EB]">156</div>
                  <div className="pl-1 mb-1 font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] flex items-center text-[#FFB4AB]">BPM</div>
                </div>
              </div>
            </div>

            {/* Metric 4: Calories */}
            <div className="box-border flex flex-col justify-between items-start p-3 absolute h-[76px] left-[184px] right-0 top-[88px] bg-[#191C22] bg-opacity-85 border border-[#424936] border-opacity-30 backdrop-blur-[6px] rounded-xl">
              <div className="flex flex-row justify-between items-center w-full h-[14px]">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.55px] uppercase text-[#C2CAB0]">BURNED</div>
                <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB690" strokeWidth="2"><path d="M15.82 2.09c-1.74.88-3.3 2.1-4.7 3.49C8.36 8.35 6 12 6 15a6 6 0 0 0 12 0c0-3-2.36-6.65-5.12-9.41-1.12-1.12-2.07-2.3-2.88-3.5h.02z"></path></svg>
              </div>
              <div className="flex flex-col items-start pt-1 w-full h-[36px]">
                <div className="flex items-end h-[32px]">
                  <div className="font-['Space_Grotesk'] font-bold text-[28px] leading-[32px] flex items-center tracking-[-0.56px] text-[#E1E2EB]">382</div>
                  <div className="pl-1 mb-1 font-['Plus_Jakarta_Sans'] font-medium text-[12px] leading-[16px] flex items-center text-[#C2CAB0]">KCAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live GPS Map Preview */}
        <div className="flex flex-col items-start pt-4 w-full h-[292px] pb-4 flex-none">
          <div className="box-border relative w-full h-[276px] bg-[#0B0E14] border border-[#424936] border-opacity-40 shadow-[inset_0_2px_4px_1px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden">
            {/* Map Canvas */}
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={currentPosition || { lat: -6.200000, lng: 106.816666 }}
                zoom={mapZoom}
                onLoad={(map) => setMapInstance(map)}
                onZoomChanged={() => {
                  if (mapInstance) {
                    setMapZoom(mapInstance.getZoom());
                  }
                }}
                options={{
                  styles: darkMapStyle,
                  disableDefaultUI: true,
                  zoomControl: false,
                  gestureHandling: 'greedy',
                }}
              >
                {path.length > 0 && (
                  <Polyline
                    path={path}
                    options={{
                      strokeColor: '#A3E635',
                      strokeOpacity: 1.0,
                      strokeWeight: 4,
                    }}
                  />
                )}
                
                {/* Start Marker */}
                {path.length > 0 && (
                  <Marker
                    position={path[0]}
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      fillColor: '#7BD0FF',
                      fillOpacity: 1,
                      scale: 6,
                      strokeColor: '#0B0E14',
                      strokeWeight: 2,
                    }}
                  />
                )}
                
                {/* End/Current Marker */}
                {currentPosition && (
                  <Marker
                    position={currentPosition}
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      fillColor: '#A3E635',
                      fillOpacity: 1,
                      scale: 8,
                      strokeColor: '#0B0E14',
                      strokeWeight: 2,
                    }}
                  />
                )}
              </GoogleMap>
            ) : (
              <div className="absolute inset-0 bg-[#10131A] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#A3E635] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Map Controls (Expand & Zoom) */}
            <div className="absolute right-2.5 top-2.5 flex flex-col gap-1.5 z-10">
              {/* Fullscreen Expand Badge */}
              <button
                type="button"
                onClick={() => setIsMapExpanded(true)}
                title="Perbesar Layar Penuh"
                className="box-border flex items-center justify-center w-7 h-7 bg-[#272A31] bg-opacity-90 border border-[#424936] border-opacity-40 backdrop-blur-[4px] rounded cursor-pointer hover:bg-[#343842] active:scale-95 transition-all text-[#E1E2EB]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </button>

              {/* Zoom In Button */}
              <button
                type="button"
                onClick={() => {
                  const nextZoom = (mapInstance?.getZoom() ?? mapZoom) + 1;
                  setMapZoom(nextZoom);
                  if (mapInstance) mapInstance.setZoom(nextZoom);
                }}
                title="Perbesar (Zoom In)"
                className="box-border flex items-center justify-center w-7 h-7 bg-[#272A31] bg-opacity-90 border border-[#424936] border-opacity-40 backdrop-blur-[4px] rounded cursor-pointer hover:bg-[#343842] active:scale-95 transition-all text-[#E1E2EB]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>

              {/* Zoom Out Button */}
              <button
                type="button"
                onClick={() => {
                  const nextZoom = Math.max(1, (mapInstance?.getZoom() ?? mapZoom) - 1);
                  setMapZoom(nextZoom);
                  if (mapInstance) mapInstance.setZoom(nextZoom);
                }}
                title="Perkecil (Zoom Out)"
                className="box-border flex items-center justify-center w-7 h-7 bg-[#272A31] bg-opacity-90 border border-[#424936] border-opacity-40 backdrop-blur-[4px] rounded cursor-pointer hover:bg-[#343842] active:scale-95 transition-all text-[#E1E2EB]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
            </div>

            {/* Elevation Profile Float Sheet */}
            <div className="box-border flex flex-row justify-between items-center px-2.5 py-1.5 absolute h-[34px] left-2 right-2 bottom-2 bg-[#191C22] bg-opacity-90 border border-[#424936] border-opacity-30 backdrop-blur-[6px] rounded-lg pointer-events-none">
              <div className="flex flex-row items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8"></path></svg>
                <div className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.66px] text-[#C2CAB0]">ELEVATION</div>
                <div className="font-['Space_Grotesk'] font-semibold text-[13px] leading-[20px] flex items-center text-[#E1E2EB]">+42 m</div>
              </div>
              {/* Micro sparkline */}
              <div className="flex flex-row items-end gap-1 h-[14px]">
                <div className="w-1.5 h-[6px] bg-[#424936] bg-opacity-60 rounded-[1px]"></div>
                <div className="w-1.5 h-[10px] bg-[#424936] bg-opacity-80 rounded-[1px]"></div>
                <div className="w-1.5 h-[8px] bg-[#424936] bg-opacity-70 rounded-[1px]"></div>
                <div className="w-1.5 h-[14px] bg-[#A3E635] rounded-[1px]"></div>
                <div className="w-1.5 h-[12px] bg-[#A3E635] bg-opacity-80 rounded-[1px]"></div>
                <div className="w-1.5 h-[10px] bg-[#A3E635] bg-opacity-60 rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="flex-none w-full flex flex-col items-center px-4 pt-3 gap-3 z-10">
        <div className="flex flex-row justify-between items-start w-full h-[56px]">
          {/* Pause/Resume Button */}
          <button 
            onClick={() => setStatus(prev => prev === 'tracking' ? 'paused' : 'tracking')}
            disabled={status === 'finished'}
            className={`box-border flex flex-row justify-center items-center px-5 gap-2 w-[169.33px] h-[56px] bg-[#191C22] border border-[#424936] border-opacity-40 rounded-full cursor-pointer hover:bg-[#20242B] transition-colors ${status === 'finished' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {status === 'tracking' ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFB690"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[24px] text-center tracking-[-0.45px] text-[#E1E2EB]">Jeda</span>
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#A3E635"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[24px] text-center tracking-[-0.45px] text-[#E1E2EB]">Lanjut</span>
              </>
            )}
          </button>

          {/* Finish Button */}
          <button 
            onClick={() => setStatus('finished')}
            disabled={status === 'finished'}
            className={`flex flex-row justify-center items-center px-5 gap-2 w-[164.75px] h-[56px] bg-[#A3E635] shadow-[0_0_24px_rgba(163,230,53,0.35)] rounded-full border-none cursor-pointer hover:bg-[#b0f53f] transition-colors ${status === 'finished' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg width="14" height="16" viewBox="0 0 24 24" fill="#416400"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path></svg>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[24px] text-center tracking-[-0.45px] text-[#416400]">Selesai</span>
          </button>
        </div>

        {/* Slide To Lock */}
        <div className="box-border flex flex-row items-center p-1 w-full h-[44px] bg-[#191C22] bg-opacity-90 border border-[#424936] border-opacity-30 rounded-full relative">
          <div className="absolute inset-1 flex justify-center items-center z-0 opacity-70 pointer-events-none gap-1">
            <span className="font-['Space_Grotesk'] font-bold text-[11px] leading-[14px] flex items-center tracking-[0.55px] uppercase text-[#C2CAB0]">GESER UNTUK MENGUNCI</span>
            <div className="flex -space-x-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="3" className="opacity-60"><path d="M9 18l6-6-6-6"/></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A3E635" strokeWidth="3" className="opacity-80"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
          <div className="box-border flex justify-center items-center w-[36px] h-[36px] bg-[#272A31] border border-[#424936] border-opacity-60 shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-full z-10 cursor-grab active:cursor-grabbing">
            <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="#C2CAB0" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
        </div>
      </div>

      {/* Fullscreen Expanded Map Modal */}
      {isMapExpanded && (
        <div className="fixed inset-0 z-50 bg-[#0B0E14] flex flex-col animate-in fade-in duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#10131A] border-b border-[#424936]/40 z-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#A3E635] rounded-full animate-pulse" />
              <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wider uppercase text-[#E1E2EB]">
                Peta Aktivitas Langsung
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMapExpanded(false)}
              className="box-border flex items-center justify-center w-8 h-8 rounded-full bg-[#191C22] border border-[#424936]/40 text-[#E1E2EB] hover:bg-[#272A31] active:scale-95 transition-all"
              title="Tutup Layar Penuh"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Fullscreen Map Canvas */}
          <div className="relative flex-1 w-full h-full">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={currentPosition || { lat: -6.200000, lng: 106.816666 }}
                zoom={mapZoom}
                options={{
                  styles: darkMapStyle,
                  disableDefaultUI: true,
                  zoomControl: false,
                  gestureHandling: 'greedy',
                }}
              >
                {path.length > 0 && (
                  <Polyline
                    path={path}
                    options={{
                      strokeColor: '#A3E635',
                      strokeOpacity: 1.0,
                      strokeWeight: 5,
                    }}
                  />
                )}

                {path.length > 0 && (
                  <Marker
                    position={path[0]}
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      fillColor: '#7BD0FF',
                      fillOpacity: 1,
                      scale: 8,
                      strokeColor: '#0B0E14',
                      strokeWeight: 2,
                    }}
                  />
                )}

                {currentPosition && (
                  <Marker
                    position={currentPosition}
                    icon={{
                      path: google.maps.SymbolPath.CIRCLE,
                      fillColor: '#A3E635',
                      fillOpacity: 1,
                      scale: 10,
                      strokeColor: '#0B0E14',
                      strokeWeight: 2,
                    }}
                  />
                )}
              </GoogleMap>
            ) : null}

            {/* Floating Zoom & Center Buttons */}
            <div className="absolute right-4 bottom-6 flex flex-col gap-2 z-20">
              {/* Recenter button */}
              {currentPosition && (
                <button
                  type="button"
                  onClick={() => {
                    // Recenter
                    if (mapInstance && currentPosition) {
                      mapInstance.panTo(currentPosition);
                    }
                  }}
                  title="Pusatkan ke Posisi Saya"
                  className="box-border flex items-center justify-center w-10 h-10 bg-[#191C22]/90 border border-[#424936]/50 backdrop-blur-md rounded-full text-[#A3E635] shadow-lg hover:bg-[#272A31] active:scale-95 transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path></svg>
                </button>
              )}

              {/* Zoom In */}
              <button
                type="button"
                onClick={() => {
                  setMapZoom(prev => prev + 1);
                }}
                title="Perbesar (Zoom In)"
                className="box-border flex items-center justify-center w-10 h-10 bg-[#191C22]/90 border border-[#424936]/50 backdrop-blur-md rounded-full text-[#E1E2EB] shadow-lg hover:bg-[#272A31] active:scale-95 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>

              {/* Zoom Out */}
              <button
                type="button"
                onClick={() => {
                  setMapZoom(prev => Math.max(1, prev - 1));
                }}
                title="Perkecil (Zoom Out)"
                className="box-border flex items-center justify-center w-10 h-10 bg-[#191C22]/90 border border-[#424936]/50 backdrop-blur-md rounded-full text-[#E1E2EB] shadow-lg hover:bg-[#272A31] active:scale-95 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </button>
            </div>

            {/* Quick Metrics Bar at Top */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 bg-[#191C22]/90 border border-[#424936]/40 backdrop-blur-md rounded-xl z-20 pointer-events-none">
              <div>
                <span className="block text-[10px] font-['Space_Grotesk'] text-[#C2CAB0] uppercase">JARAK</span>
                <span className="text-base font-bold font-['Plus_Jakarta_Sans'] text-[#A3E635]">{distance.toFixed(2)} KM</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-['Space_Grotesk'] text-[#C2CAB0] uppercase">STATUS</span>
                <span className="text-xs font-bold font-['Space_Grotesk'] uppercase text-[#E1E2EB]">{status}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LiveActivityTracking;
