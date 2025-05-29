
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base dark background with tech gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      
      {/* Enhanced CODM battle scene overlay - optimized for mobile */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
      
      {/* Secondary character overlay for depth - mobile responsive */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/lovable-uploads/17e3bb79-3e72-4502-9527-d3ddbcaf50b7.png')] bg-no-repeat bg-right-top opacity-8 mix-blend-overlay transform scale-75 lg:scale-50 rotate-12"></div>
      
      {/* Logo watermark background with revised opacity and enhanced blinking effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25">
        <div className="relative w-[150%] max-w-[1200px] aspect-square">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain filter saturate-125 brightness-110 animate-glow" 
            aria-hidden="true"
            style={{filter: "drop-shadow(0 0 12px rgba(212, 175, 55, 0.5))"}}
          />
        </div>
      </div>
      
      {/* Tactical operative silhouette - mobile optimized */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[url('/lovable-uploads/6c05815f-b567-49f6-94d3-be587bc340e9.png')] bg-no-repeat bg-bottom-left opacity-6 mix-blend-overlay hidden md:block"></div>
      
      {/* Tech circuit lines with slightly increased opacity */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/70 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/50 to-transparent animate-pulse-slow animation-delay-600"></div>
        <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/40 to-transparent animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-[90%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-pulse-slow animation-delay-900"></div>
        
        <div className="absolute top-0 left-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-ogclan/30 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-0 left-[80%] h-full w-[1px] bg-gradient-to-b from-transparent via-ogclan/40 to-transparent animate-pulse-slow animation-delay-600"></div>
      </div>
      
      {/* Gaming-themed overlay gradient with reduced opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80 opacity-50"></div>
      
      {/* Neon-like tech accents with increased size and intensity */}
      <div className="absolute top-40 -right-40 w-120 h-120 bg-blue-500/30 opacity-60 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -left-40 w-120 h-120 bg-ogclan/30 opacity-50 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-red-500/20 opacity-40 rounded-full blur-3xl animate-pulse-slow animation-delay-900"></div>
      
      {/* Digital noise effect with reduced opacity */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] opacity-40 mix-blend-overlay"></div>
    </div>
  );
};

export default HeroBackground;
