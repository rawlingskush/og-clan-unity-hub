
import React from 'react';
import Logo from '@/components/Logo';

interface HeroBackgroundProps {
  scrollPosition: number;
}

const HeroBackground = ({ scrollPosition }: HeroBackgroundProps) => {
  const parallaxOffset = scrollPosition * 0.3;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-radial from-ogclan/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      
      {/* Animated particles background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ogclan rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Logo background element with enhanced effects */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-8"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="relative">
          <Logo size="xl" withText={false} />
          {/* Logo glow effect */}
          <div className="absolute inset-0 bg-ogclan/20 blur-3xl animate-pulse-slow -z-10"></div>
        </div>
      </div>

      {/* Enhanced tactical grid overlay with animation */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />

      {/* Animated scanning lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-scanner-line"></div>
        <div 
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-scanner-line"
          style={{ animationDelay: '2s', animationDirection: 'reverse' }}
        ></div>
      </div>

      {/* Tactical corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ogclan/30 opacity-60"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-ogclan/30 opacity-60"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-ogclan/30 opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-ogclan/30 opacity-60"></div>

      {/* Enhanced central vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70"></div>
      
      {/* Enhanced bottom fade with glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ogclan/10 to-transparent"></div>
    </div>
  );
};

export default HeroBackground;
