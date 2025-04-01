
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      {/* Logo watermark background - increased opacity from 0.07 to 0.12 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <div className="relative w-[120%] max-w-[1000px] aspect-square animate-pulse-slow">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain" 
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Gaming-themed overlay elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80 opacity-70"></div>
      
      {/* Neon-like accent elements */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-ogclan/30 opacity-50 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-ogclan/30 opacity-40 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      
      {/* Additional gaming-themed accent */}
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-red-500/10 opacity-30 rounded-full blur-3xl animate-pulse-slow animation-delay-900"></div>
    </div>
  );
};

export default HeroBackground;
