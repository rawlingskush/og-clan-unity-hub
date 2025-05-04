
import React, { useRef, useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Award } from 'lucide-react';

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
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black/80 py-16 overflow-hidden border-b border-ogclan/20">
      {/* Battle teams background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-[url('/lovable-uploads/380c7e90-171d-4704-9af6-45d26921ddb2.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px) scale(1.1)` }}
      ></div>
      
      {/* Dynamic overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50">
        {/* Animated grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ 
            opacity: 0.1,
            animation: 'fadeInOut 8s infinite alternate' 
          }}
        ></div>
        
        {/* Moving light effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] w-[120%] h-[120%] opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)',
                top: `calc(50% - 150px + ${mousePosition.y}px)`,
                left: `calc(50% - 150px + ${mousePosition.x}px)`,
                width: '300px',
                height: '300px',
                transition: 'all 0.3s ease-out',
                animation: 'pulsingGlow 6s infinite alternate'
              }}>
          </div>
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
          <AnimatedContent animation="fade-in" delay={200}>
            <h1 className="text-4xl font-bold text-gradient-gold mb-2 relative inline-block">
              {/* Letter-by-letter animation */}
              {"Our Soldiers".split("").map((letter, index) => (
                <span 
                  key={index} 
                  className="inline-block"
                  style={{
                    animation: `fade-in 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0,
                    transform: 'translateY(10px)'
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={400}>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
              <div className="relative w-12 h-0.5">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite]"></div>
              </div>
              <Award className="text-ogclan h-5 w-5 animate-pulse-slow" />
              <div className="relative w-12 h-0.5">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite_reverse]"></div>
              </div>
              <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={600} className="text-balance max-w-2xl mx-auto">
            <p className="text-lg text-ogclan-muted relative">
              <span className="block transform transition-all duration-800"
                style={{
                  animation: 'fade-in 0.8s ease-out forwards, scale-in 0.8s ease-out forwards',
                }}
              >
                These aren't just soldiers — they're OG Clan Cameroon.
                Forged in fire, raised in the isolated streets of Black Market, and built for war.
                Each operator moves with purpose — armed with a signature loadout and the instincts of a killer.
                From brutal close-quarters combat to surgical long-range takedowns, they've been onetapping since 2019.
                <span className="block mt-2 text-ogclan font-medium animate-pulse-slow">-Unshaken. Unmatched. Cold as hell. 🥶-</span>
              </span>
            </p>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Enhanced animated scanner lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      
      {/* Add a scanning line that moves vertically */}
      <div className="absolute left-0 w-1/4 h-full pointer-events-none overflow-hidden">
        <div className="absolute h-[1px] w-full bg-ogclan/40 top-1/2 animate-[vertical-scanner_15s_ease-in-out_infinite]"></div>
      </div>
      <div className="absolute right-0 w-1/4 h-full pointer-events-none overflow-hidden">
        <div className="absolute h-[1px] w-full bg-ogclan/40 top-3/4 animate-[vertical-scanner_12s_ease-in-out_infinite_reverse]"></div>
      </div>
    </div>
  );
};

export default SoldiersHero;
