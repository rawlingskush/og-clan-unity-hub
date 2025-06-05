
import React from 'react';
import Logo from '@/components/Logo';

interface HeroBackgroundProps {
  scrollPosition: number;
}

const HeroBackground = ({ scrollPosition }: HeroBackgroundProps) => {
  const parallaxOffset = scrollPosition * 0.3;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Logo background element */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <Logo size="xl" withText={false} />
      </div>

      {/* Tactical grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />

      {/* Central vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroBackground;
