
import React, { useRef, useEffect, useState } from 'react';
import TacticalOverlay from './TacticalOverlay';
import HUDContainer from './HUDContainer';
import TacticalStats from './TacticalStats';
import StatusIndicators from './StatusIndicators';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculate opacity and transform based on scroll position
  const opacity = Math.max(0.2, 1 - scrollPosition * 0.003);
  const scale = Math.max(0.8, 1 - scrollPosition * 0.0005);
  const translateY = scrollPosition * 0.3;
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative bg-black py-20 overflow-hidden border-b border-ogclan/30 min-h-[80vh] flex items-center">
      <TacticalOverlay mousePosition={mousePosition} />
      
      <div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" 
        ref={headerRef}
        style={{
          opacity: isVisible ? opacity : 0,
          transform: isVisible ? `scale(${scale}) translateY(${translateY}px)` : 'scale(0.95) translateY(10px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        {/* Main HUD Container */}
        <HUDContainer />
        
        {/* Tactical Stats Grid */}
        <TacticalStats />
        
        {/* Tactical Status Indicators */}
        <StatusIndicators />
      </div>
      
      {/* Bottom tactical line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/40"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
    </div>
  );
};

export default SoldiersHero;
