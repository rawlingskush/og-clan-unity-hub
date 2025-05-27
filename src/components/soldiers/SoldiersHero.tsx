
import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Target, Crosshair } from 'lucide-react';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = React.memo(({ scrollPosition }: SoldiersHeroProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const mouseHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);
  
  // Memoize calculated values to prevent unnecessary re-renders
  const parallaxValues = useMemo(() => ({
    opacity: Math.max(0.2, 1 - scrollPosition * 0.003),
    scale: Math.max(0.8, 1 - scrollPosition * 0.0005),
    translateY: scrollPosition * 0.3
  }), [scrollPosition]);
  
  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newPosition = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    };
    setMousePosition(newPosition);
  }, []);
  
  // Optimized mouse event setup
  useEffect(() => {
    let rafId: number;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = 0;
      });
    };
    
    mouseHandlerRef.current = throttledMouseMove;
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    // Animation entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      if (mouseHandlerRef.current) {
        window.removeEventListener('mousemove', mouseHandlerRef.current);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(timer);
    };
  }, [handleMouseMove]);

  return (
    <div className="relative bg-black/90 py-16 overflow-hidden border-b border-ogclan/30">
      {/* Optimized background with memoized transform */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out gpu-accelerated"
        style={{ 
          transform: `translate3d(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px, 0) scale(1.1)`
        }}
      />
      
      {/* Simplified tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/70">
        {/* Optimized grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Simplified HUD elements */}
        <div className="absolute top-4 right-4 w-16 h-16 border border-ogclan/20 opacity-30 animate-pulse-slow gpu-accelerated">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/60" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ogclan/60" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ogclan/60" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/60" />
        </div>
        
        {/* Optimized scanning lines */}
        <div className="absolute h-full w-1/2 left-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/40 top-0 left-1/3 animate-[vertical-scanner_10s_ease-in-out_infinite] gpu-accelerated" />
        </div>
      </div>
      
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gpu-accelerated" 
        ref={headerRef}
        style={{
          opacity: isVisible ? parallaxValues.opacity : 0,
          transform: `scale(${isVisible ? parallaxValues.scale : 0.95}) translateY(${isVisible ? parallaxValues.translateY : 10}px)`,
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        <div className="text-center">
          <AnimatedContent animation="scale-in" delay={200}>
            <div className="relative mb-3">
              {/* Simplified tactical decoration */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-ogclan/20">
                <div className="absolute top-0 left-0 h-px w-1/4 bg-ogclan animate-scanner-line" />
              </div>
              
              <h1 className="text-5xl font-orbitron font-bold text-gradient-gold mb-2 relative inline-block tracking-wider">
                OUR SOLDIERS
              </h1>
              
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-ogclan/20">
                <div className="absolute top-0 left-0 h-px w-1/4 bg-ogclan animate-scanner-line" />
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={400}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="text-ogclan h-6 w-6 animate-pulse-slow" />
              <div className="w-12 h-px bg-ogclan/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-1/4 bg-ogclan animate-scanner-line" />
              </div>
              <Target className="text-ogclan h-6 w-6 animate-pulse-slow" />
              <div className="w-12 h-px bg-ogclan/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-1/4 bg-ogclan animate-scanner-line" />
              </div>
              <Crosshair className="text-ogclan h-6 w-6 animate-pulse-slow" />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={600} className="max-w-2xl mx-auto px-4">
            <div className="relative p-6 border border-ogclan/20 bg-black/50 backdrop-blur-sm">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/60" />
              
              <p className="text-lg text-gray-200 space-y-4">
                <span className="block">
                  These aren't just soldiers — they're <span className="font-bold text-gradient-gold">OG Clan Cameroon</span>.
                  Forged in fire, raised in the isolated streets of Black Market, and built for war.
                </span>
                
                <span className="block">
                  Each operator moves with purpose — armed with a signature loadout and the instincts of a killer.
                  From brutal close-quarters combat to surgical long-range takedowns, they've been <span className="font-bold text-ogclan">onetapping since 2019</span>.
                </span>
                
                <span className="block mt-4 font-orbitron text-xl tracking-wider font-medium text-gradient-gold">
                  -Unshaken. Unmatched. Cold as hell. 🥶-
                </span>
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Bottom scanner line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-ogclan/30">
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-ogclan animate-scanner-line" />
      </div>
    </div>
  );
});

SoldiersHero.displayName = 'SoldiersHero';

export default SoldiersHero;
