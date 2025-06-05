
import React from 'react';

interface HeroBackgroundProps {
  scrollPosition: number;
}

const HeroBackground = ({ scrollPosition }: HeroBackgroundProps) => {
  const parallaxOffset = scrollPosition * 0.3;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ogclan/10 to-transparent animate-pulse-slow"></div>
      </div>

      {/* Minimal tactical grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: `translateY(${parallaxOffset * 0.3}px)`
        }}
      />

      {/* Central focus gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroBackground;
