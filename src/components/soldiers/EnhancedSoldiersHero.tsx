
import React, { useRef, useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Target, Crosshair, Zap, Users } from 'lucide-react';

interface EnhancedSoldiersHeroProps {
  scrollPosition: number;
}

const EnhancedSoldiersHero = ({ scrollPosition }: EnhancedSoldiersHeroProps) => {
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
    <div className="relative bg-black/95 py-8 md:py-16 overflow-hidden border-b border-ogclan/30 min-h-[80vh] md:min-h-[70vh]">
      {/* Enhanced tactical background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(1.1)` }}
      ></div>
      
      {/* Tactical overlay with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/75">
        {/* Enhanced tactical grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ 
            opacity: 0.2,
            animation: 'fadeInOut 8s infinite alternate' 
          }}
        ></div>
        
        {/* Corner HUD elements - Mobile optimized */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-24 md:h-24 border border-ogclan/30 opacity-40 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/50"></div>
          <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t border-l border-ogclan/80"></div>
          <div className="absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t border-r border-ogclan/80"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b border-r border-ogclan/80"></div>
        </div>
        
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-24 md:h-24 border border-ogclan/30 opacity-40 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/50"></div>
          <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 border-t border-l border-ogclan/80"></div>
          <div className="absolute top-0 right-0 w-2 h-2 md:w-3 md:h-3 border-t border-r border-ogclan/80"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 md:w-3 md:h-3 border-b border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 border-b border-r border-ogclan/80"></div>
        </div>
        
        {/* Scanning lines */}
        <div className="absolute h-full w-1/2 left-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/50 top-0 left-1/3 animate-[vertical-scanner_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute h-full w-1/2 right-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/50 top-0 left-2/3 animate-[vertical-scanner_12s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>
      
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-[60vh]" 
        ref={headerRef}
        style={{
          opacity: isVisible ? opacity : 0,
          transform: isVisible ? `scale(${scale}) translateY(${translateY}px)` : 'scale(0.95) translateY(10px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}
      >
        {/* Main HUD Container */}
        <div className="relative w-full max-w-4xl">
          {/* Elite Squad Header */}
          <AnimatedContent animation="scale-in" delay={200}>
            <div className="relative mb-6 md:mb-8 p-4 md:p-6 border border-ogclan/40 bg-black/60 backdrop-blur-sm">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-ogclan/80"></div>
              <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-ogclan/80"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-ogclan/80"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-ogclan/80"></div>
              
              {/* Tactical icons row */}
              <div className="flex items-center justify-center space-x-3 md:space-x-6 mb-4 md:mb-6">
                <Target className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse-slow" />
                <Shield className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse-slow" />
                <Zap className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse-slow" />
                <Users className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse-slow" />
              </div>
              
              {/* Main title */}
              <h1 className="text-3xl md:text-6xl font-orbitron font-bold text-center mb-2 md:mb-4 tracking-wider text-gradient-gold">
                ELITE SQUAD
              </h1>
              
              {/* Subtitle */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-3 md:mb-4">
                <Zap className="text-ogclan h-3 w-3 md:h-4 md:w-4" />
                <span className="text-sm md:text-xl font-orbitron tracking-wider text-ogclan font-medium">
                  BATTLE-TESTED WARRIORS
                </span>
                <Zap className="text-ogclan h-3 w-3 md:h-4 md:w-4" />
              </div>
              
              {/* Status indicators */}
              <div className="text-center text-xs md:text-sm font-mono text-gray-300 tracking-wide">
                [ OPERATIONAL STATUS: <span className="text-green-400">ACTIVE</span> ] [ MISSION <span className="text-ogclan">READY</span> ]
              </div>
            </div>
          </AnimatedContent>
          
          {/* Status Grid - Mobile responsive */}
          <AnimatedContent animation="fade-in" delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {/* Status Card 1 */}
              <div className="bg-black/70 border border-ogclan/30 p-3 md:p-4 text-center backdrop-blur-sm">
                <div className="text-xs md:text-sm font-orbitron text-ogclan mb-1 md:mb-2 tracking-wider">STATUS</div>
                <div className="text-sm md:text-lg font-bold text-green-400 mb-1">ACTIVE</div>
                <div className="text-xs text-gray-400">100% READY</div>
              </div>
              
              {/* Status Card 2 */}
              <div className="bg-black/70 border border-ogclan/30 p-3 md:p-4 text-center backdrop-blur-sm">
                <div className="text-xs md:text-sm font-orbitron text-ogclan mb-1 md:mb-2 tracking-wider">MISSION</div>
                <div className="text-sm md:text-lg font-bold text-yellow-400 mb-1">DOMINATION</div>
                <div className="text-xs text-gray-400">IN PROGRESS</div>
              </div>
              
              {/* Status Card 3 */}
              <div className="bg-black/70 border border-ogclan/30 p-3 md:p-4 text-center backdrop-blur-sm">
                <div className="text-xs md:text-sm font-orbitron text-ogclan mb-1 md:mb-2 tracking-wider">SQUAD SIZE</div>
                <div className="text-sm md:text-lg font-bold text-blue-400 mb-1">21 OPERATORS</div>
                <div className="text-xs text-gray-400">FULL STRENGTH</div>
              </div>
              
              {/* Status Card 4 */}
              <div className="bg-black/70 border border-ogclan/30 p-3 md:p-4 text-center backdrop-blur-sm">
                <div className="text-xs md:text-sm font-orbitron text-ogclan mb-1 md:mb-2 tracking-wider">READINESS</div>
                <div className="text-sm md:text-lg font-bold text-red-400 mb-1">MAXIMUM</div>
                <div className="text-xs text-gray-400">COMBAT READY</div>
              </div>
            </div>
          </AnimatedContent>
          
          {/* Combat Status Indicators */}
          <AnimatedContent animation="fade-in" delay={600}>
            <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8 text-xs md:text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">COMMS ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">GPS LOCKED</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">WEAPONS HOT</span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Bottom scanner line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/40"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      
      {/* Radar display - Mobile optimized */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-24 h-24 md:w-32 md:h-32 opacity-30">
        <div className="absolute inset-0 rounded-full border border-ogclan/60 animate-pulse-slow"></div>
        <div className="absolute inset-[15%] rounded-full border border-ogclan/50"></div>
        <div className="absolute inset-[30%] rounded-full border border-ogclan/40"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ogclan/50"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-ogclan/50"></div>
        <div className="absolute inset-0 rounded-full border-2 border-ogclan/30 animate-[radar-ping_4s_cubic-bezier(0,0,.2,1)_infinite]"></div>
      </div>
    </div>
  );
};

export default EnhancedSoldiersHero;
