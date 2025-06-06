
import React, { useRef, useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Target, Crosshair, Users, Zap } from 'lucide-react';

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
      {/* Background with tactical overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat"
        style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(1.1)` }}
      ></div>
      
      {/* Dark tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95">
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ opacity: 0.1 }}
        ></div>
        
        {/* Corner tactical elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>
        
        <div className="absolute top-8 right-8 w-16 h-16 border border-ogclan/30 opacity-40">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ogclan"></div>
        </div>
      </div>
      
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
        <div className="relative border border-ogclan/40 bg-black/80 backdrop-blur-sm p-8 md:p-12">
          {/* HUD Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-ogclan"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-ogclan"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-ogclan"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-ogclan"></div>
          
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[tactical-scan_4s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="text-center">
            {/* Tactical Icons Header */}
            <AnimatedContent animation="fade-in" delay={200}>
              <div className="flex items-center justify-center space-x-8 mb-8">
                <Target className="text-ogclan h-8 w-8 animate-pulse-slow" />
                <Shield className="text-ogclan h-8 w-8 animate-pulse-slow" />
                <Zap className="text-ogclan h-8 w-8 animate-pulse-slow" />
                <Crosshair className="text-ogclan h-8 w-8 animate-pulse-slow" />
                <Users className="text-ogclan h-8 w-8 animate-pulse-slow" />
              </div>
            </AnimatedContent>
            
            {/* Main Title */}
            <AnimatedContent animation="scale-in" delay={400}>
              <h1 className="text-6xl md:text-8xl font-orbitron font-black text-ogclan mb-6 tracking-wider">
                ELITE SQUAD
              </h1>
            </AnimatedContent>
            
            {/* Subtitle with tactical styling */}
            <AnimatedContent animation="fade-in" delay={600}>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Zap className="text-ogclan h-6 w-6" />
                <span className="text-xl md:text-2xl font-orbitron text-ogclan tracking-widest">
                  BATTLE-TESTED WARRIORS
                </span>
                <Zap className="text-ogclan h-6 w-6" />
              </div>
            </AnimatedContent>
            
            {/* Operational Status */}
            <AnimatedContent animation="fade-in" delay={800}>
              <div className="font-mono text-gray-300 text-sm md:text-base tracking-wider mb-12">
                [ OPERATIONAL STATUS: ACTIVE ] [ MISSION READY ]
              </div>
            </AnimatedContent>
          </div>
        </div>
        
        {/* Tactical Stats Grid */}
        <AnimatedContent animation="fade-in" delay={1000}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {/* Status Card */}
            <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
              <div className="text-ogclan font-orbitron text-sm mb-1">STATUS</div>
              <div className="text-ogclan font-bold text-lg">ACTIVE</div>
              <div className="text-gray-400 text-xs font-mono">100% READY</div>
            </div>
            
            {/* Mission Card */}
            <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
              <div className="text-ogclan font-orbitron text-sm mb-1">MISSION</div>
              <div className="text-ogclan font-bold text-lg">DOMINATION</div>
              <div className="text-gray-400 text-xs font-mono">IN PROGRESS</div>
            </div>
            
            {/* Squad Size Card */}
            <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
              <div className="text-ogclan font-orbitron text-sm mb-1">SQUAD SIZE</div>
              <div className="text-ogclan font-bold text-lg">21 OPERATORS</div>
              <div className="text-gray-400 text-xs font-mono">FULL STRENGTH</div>
            </div>
            
            {/* Readiness Card */}
            <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
              <div className="text-ogclan font-orbitron text-sm mb-1">READINESS</div>
              <div className="text-ogclan font-bold text-lg">MAXIMUM</div>
              <div className="text-gray-400 text-xs font-mono">COMBAT READY</div>
            </div>
          </div>
        </AnimatedContent>
        
        {/* Tactical Status Indicators */}
        <AnimatedContent animation="fade-in" delay={1200}>
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-300">COMMS ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-ogclan animate-pulse"></div>
              <span className="text-gray-300">GPS LOCKED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-gray-300">WEAPONS HOT</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
      
      {/* Bottom tactical line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/40"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
    </div>
  );
};

export default SoldiersHero;
