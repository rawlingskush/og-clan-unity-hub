
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-ogclan/30 opacity-50 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-ogclan/30 opacity-40 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
    </div>
  );
};

export default HeroBackground;
