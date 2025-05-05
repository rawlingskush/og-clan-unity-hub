
import React, { useRef } from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroTitle from './hero/HeroTitle';
import HeroIcons from './hero/HeroIcons';
import HeroContent from './hero/HeroContent';
import { useSoldiersHeroEffect } from '@/hooks/useSoldiersHeroEffect';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { mousePosition, isVisible, opacity, scale, translateY } = useSoldiersHeroEffect(scrollPosition);

  return (
    <div className="relative bg-black/90 py-16 overflow-hidden border-b border-ogclan/30">
      {/* Background elements */}
      <HeroBackground mousePosition={mousePosition} />
      
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" 
        ref={headerRef}
        style={{
          opacity: isVisible ? opacity : 0,
          transform: isVisible ? `scale(${scale}) translateY(${translateY}px)` : 'scale(0.95) translateY(10px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="text-center">
          {/* Title section */}
          <HeroTitle isVisible={isVisible} />
          
          {/* Icons section */}
          <HeroIcons />
          
          {/* Main content section */}
          <HeroContent isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default SoldiersHero;
