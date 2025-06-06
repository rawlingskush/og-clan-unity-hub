
import React from 'react';

interface TacticalOverlayProps {
  mousePosition: { x: number; y: number };
}

const TacticalOverlay = ({ mousePosition }: TacticalOverlayProps) => {
  return (
    <>
      {/* Background with tactical overlay - optimized for mobile */}
      <div 
        className="absolute inset-0 z-0 opacity-15 md:opacity-20 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat"
        style={{ 
          transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px) scale(1.05)`,
          willChange: 'transform'
        }}
      ></div>
      
      {/* Enhanced dark tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95">
        {/* Optimized tactical grid overlay for mobile */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ opacity: 0.08 }}
        ></div>
        
        {/* Enhanced corner tactical elements - mobile optimized */}
        <div className="absolute top-4 md:top-8 left-4 md:left-8 w-8 h-8 md:w-16 md:h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>
        
        <div className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 md:w-16 md:h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>

        {/* Additional scanning lines for better effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/40 to-transparent top-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/40 to-transparent bottom-1/4 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
        </div>
      </div>
    </>
  );
};

export default TacticalOverlay;
