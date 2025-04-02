import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base dark background with tech gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      
      {/* Gaming image overlay with reduced opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      {/* Logo watermark background with increased size, opacity and blinging effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-35">
        <div className="relative w-[150%] max-w-[1200px] aspect-square animate-pulse-slow">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain drop-shadow-gold filter saturate-150 brightness-125" 
            aria-hidden="true"
            style={{filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.7))"}}
          />
        </div>
      </div>
      
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
