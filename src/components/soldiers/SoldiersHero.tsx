
import React, { useRef, useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Target, Crosshair } from 'lucide-react';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Calculate opacity and transform based on scroll position
  const opacity = Math.max(0.2, 1 - scrollPosition * 0.003);
  const scale = Math.max(0.8, 1 - scrollPosition * 0.0005);
  const translateY = scrollPosition * 0.3;
  
  // Parallax effect for background on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black/90 py-16 overflow-hidden border-b border-ogclan/30">
      {/* Tactical overlay background with enhanced parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-[url('/lovable-uploads/380c7e90-171d-4704-9af6-45d26921ddb2.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px) scale(1.1)` }}
      ></div>
      
      {/* Enhanced tactical overlay with grid patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/70">
        {/* Tactical grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ 
            opacity: 0.15,
            animation: 'fadeInOut 8s infinite alternate' 
          }}
        ></div>
        
        {/* Targeting HUD elements */}
        <div className="absolute top-0 right-0 w-24 h-24 border border-ogclan/20 opacity-30 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/40"></div>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/60"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/60"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/60"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/60"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-24 h-24 border border-ogclan/20 opacity-30 animate-pulse-slow">
          <div className="absolute inset-0 border border-ogclan/40"></div>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/60"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/60"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/60"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/60"></div>
        </div>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] w-[120%] h-[120%] opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)',
                top: `calc(50% - 150px + ${mousePosition.y * 0.5}px)`,
                left: `calc(50% - 150px + ${mousePosition.x * 0.5}px)`,
                width: '300px',
                height: '300px',
                transition: 'all 0.3s ease-out',
                animation: 'pulsingGlow 6s infinite alternate'
              }}>
          </div>
        </div>
        
        {/* Scanning line effect */}
        <div className="absolute h-full w-1/2 left-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/40 top-0 left-1/3 animate-[vertical-scanner_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute h-full w-1/2 right-0 overflow-hidden">
          <div className="absolute h-full w-[1px] bg-ogclan/40 top-0 left-2/3 animate-[vertical-scanner_12s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>
      
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" 
        ref={headerRef}
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY}px)`
        }}
      >
        <div className="text-center">
          <AnimatedContent animation="scale-in" delay={200}>
            <div className="relative mb-3">
              {/* Tactical decoration */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 flex">
                <div className="flex-1 h-full bg-ogclan/20"></div>
                <div className="w-20 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-ogclan/20"></div>
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
                </div>
                <div className="flex-1 h-full bg-ogclan/20"></div>
              </div>
              
              <h1 className="text-5xl font-orbitron font-bold text-gradient-gold mb-2 relative inline-block tracking-wider">
                {/* Letter-by-letter animation */}
                {"OUR SOLDIERS".split("").map((letter, index) => (
                  <span 
                    key={index} 
                    className="inline-block"
                    style={{
                      animation: `fade-in 0.5s ease-out forwards, scale-in 0.3s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      transform: 'translateY(10px)'
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </h1>
              
              {/* Enhanced tactical bottom border */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-1 flex">
                <div className="flex-1 h-full bg-ogclan/20"></div>
                <div className="w-20 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-ogclan/20"></div>
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan animate-[scanner-line_3s_linear_infinite_reverse]"></div>
                </div>
                <div className="flex-1 h-full bg-ogclan/20"></div>
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={400}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
              <div className="relative w-16 h-1">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite]"></div>
              </div>
              <Target className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
              <div className="relative w-16 h-1">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite_reverse]"></div>
              </div>
              <Crosshair className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={600} className="max-w-2xl mx-auto px-4">
            <div className="relative p-6 border border-ogclan/20 bg-black/50 backdrop-blur-sm">
              {/* Corner tactical decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ogclan/60"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ogclan/60"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ogclan/60"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ogclan/60"></div>
              
              {/* Tactical scanner line */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 h-[1px] w-full bg-ogclan/10 animate-[scanner-line_5s_linear_infinite]"></div>
              </div>
              
              <p className="text-lg text-gray-200">
                {/* Tactical briefing text with animated intro */}
                <span className="block mb-4 transform transition-all duration-800"
                  style={{
                    animation: 'fade-in 0.8s ease-out forwards',
                    animationDelay: '0.4s',
                  }}
                >
                  These aren't just soldiers — they're <span className="font-bold text-gradient-gold">OG Clan Cameroon</span>.
                  Forged in fire, raised in the isolated streets of Black Market, and built for war.
                </span>
                
                <span className="block mb-4"
                  style={{
                    animation: 'fade-in 0.8s ease-out forwards',
                    animationDelay: '0.8s',
                    opacity: 0,
                  }}
                >
                  Each operator moves with purpose — armed with a signature loadout and the instincts of a killer.
                  From brutal close-quarters combat to surgical long-range takedowns, they've been <span className="font-bold text-ogclan">onetapping since 2019</span>.
                </span>
                
                <span className="block mt-4 font-orbitron text-xl tracking-wider font-medium animate-glow"
                  style={{
                    animation: 'fade-in 1s ease-out forwards, glow 3s infinite ease-in-out',
                    animationDelay: '1.2s',
                    opacity: 0,
                  }}
                >
                  <span className="text-gradient-gold">-Unshaken. Unmatched. Cold as hell. 🥶-</span>
                </span>
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Enhanced animated scanner lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      
      {/* Enhanced targeting HUD decoration */}
      <div className="absolute bottom-6 right-6 w-40 h-40 opacity-20">
        <div className="absolute inset-0 rounded-full border border-ogclan/50 animate-pulse-slow"></div>
        <div className="absolute inset-[10px] rounded-full border border-ogclan/40"></div>
        <div className="absolute inset-[20px] rounded-full border border-ogclan/30"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ogclan/40"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-ogclan/40"></div>
      </div>
    </div>
  );
};

export default SoldiersHero;
