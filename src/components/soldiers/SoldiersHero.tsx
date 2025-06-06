
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
  const [isMobile, setIsMobile] = useState(false);
  
  // Calculate opacity and transform based on scroll position - mobile optimized
  const opacity = Math.max(0.3, 1 - scrollPosition * 0.002);
  const scale = Math.max(0.85, 1 - scrollPosition * 0.0003);
  const translateY = scrollPosition * 0.2;
  
  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Reduce mouse effects on mobile for better performance
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 15,
          y: (e.clientY / window.innerHeight - 0.5) * 15
        });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <div className="relative bg-black py-12 md:py-20 overflow-hidden border-b border-ogclan/30 min-h-[70vh] md:min-h-[80vh] flex items-center">
      <TacticalOverlay mousePosition={mousePosition} />
      
      <div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" 
        ref={headerRef}
        style={{
          opacity: isVisible ? opacity : 0,
          transform: isVisible ? `scale(${scale}) translateY(${translateY}px)` : 'scale(0.95) translateY(10px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        }}
      >
        {/* Main HUD Container */}
        <HUDContainer />
        
        {/* Tactical Stats Grid */}
        <TacticalStats />
        
        {/* Tactical Status Indicators */}
        <StatusIndicators />
      </div>
      
      {/* Enhanced bottom tactical elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/40"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-ogclan to-transparent animate-[scanner-line_3s_linear_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-[1px] bg-gradient-to-l from-ogclan/60 to-transparent animate-pulse-slow"></div>
    </div>
  );
};

export default SoldiersHero;
