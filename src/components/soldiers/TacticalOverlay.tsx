
import React from 'react';

interface TacticalOverlayProps {
  mousePosition: { x: number; y: number };
}

const TacticalOverlay = ({ mousePosition }: TacticalOverlayProps) => {
  return (
    <>
      {/* Background with tactical overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat"
        style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(1.1)` }}
      ></div>
      
      {/* Dark tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95">
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ opacity: 0.1 }}
        ></div>
        
        {/* Corner tactical elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>
        
        <div className="absolute top-8 right-8 w-16 h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>
      </div>
    </>
  );
};

export default TacticalOverlay;
