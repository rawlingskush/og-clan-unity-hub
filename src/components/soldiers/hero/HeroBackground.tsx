
import React from 'react';

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

const HeroBackground = ({ mousePosition }: HeroBackgroundProps) => {
  return (
    <>
      {/* Tactical overlay background with enhanced parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-[url('/lovable-uploads/380c7e90-171d-4704-9af6-45d26921ddb2.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px) scale(1.1)` }}
      ></div>
      
      {/* Enhanced tactical overlay with grid patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/70">
        {/* Tactical grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ 
            opacity: 0.15,
            animation: 'fadeInOut 8s infinite alternate' 
          }}
        ></div>
        
        {/* Targeting HUD elements */}
        <div className="absolute top-0 right-0 w-24 h-24 border border-ogclan/20 opacity-30 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/40"></div>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/60"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/60"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/60"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/60"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-24 h-24 border border-ogclan/20 opacity-30 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/40"></div>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/60"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/60"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/60"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/60"></div>
        </div>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] w-[120%] h-[120%] opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)',
                top: `calc(50% - 150px + ${mousePosition.y * 0.5}px)`,
                left: `calc(50% - 150px + ${mousePosition.x * 0.5}px)`,
                width: '300px',
                height: '300px',
                transition: 'all 0.3s ease-out',
                animation: 'pulsingGlow 6s infinite alternate'
              }}>
          </div>
        </div>
        
        {/* Scanning line effect */}
        <div className="absolute h-full w-1/2 left-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/40 top-0 left-1/3 animate-[vertical-scanner_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute h-full w-1/2 right-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/40 top-0 left-2/3 animate-[vertical-scanner_12s_ease-in-out_infinite_reverse]"></div>
        </div>
        
        {/* Radar ping effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
          <div className="absolute inset-0 rounded-full border border-ogclan/60"></div>
          <div className="absolute inset-0 rounded-full border-2 border-ogclan/40 animate-[radar-ping_4s_cubic-bezier(0,0,.2,1)_infinite]"></div>
        </div>
      </div>
      
      {/* Enhanced animated scanner lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      
      {/* Enhanced targeting HUD decoration */}
      <div className="absolute bottom-6 right-6 w-40 h-40 opacity-20">
        <div className="absolute inset-0 rounded-full border border-ogclan/50 animate-pulse-slow"></div>
        <div className="absolute inset-[10px] rounded-full border border-ogclan/40"></div>
        <div className="absolute inset-[20px] rounded-full border border-ogclan/30"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ogclan/40"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-ogclan/40"></div>
      </div>
    </>
  );
};

export default HeroBackground;
