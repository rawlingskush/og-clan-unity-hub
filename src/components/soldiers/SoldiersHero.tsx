
import React, { useRef, useEffect, useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Award, Target, Crosshair } from 'lucide-react';

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
    <div className="relative bg-black/90 py-16 overflow-hidden border-b border-ogclan/30">
      {/* Enhanced tactical background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-[url('/lovable-uploads/380c7e90-171d-4704-9af6-45d26921ddb2.png')] bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px) scale(1.1)` }}
      ></div>
      
      {/* Dynamic tactical overlay with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70">
        {/* Enhanced tactical grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDIxMiwxNzUsNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" 
          style={{ 
            opacity: 0.15,
            animation: 'fadeInOut 8s infinite alternate' 
          }}
        ></div>
        
        {/* HUD targeting circle elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-ogclan/10 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-ogclan/10 rounded-full opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-ogclan/20 rounded-full opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Digital scan lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InNjYW4iIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgwKSI+PGxpbmUgeDE9IjAiIHkxPSIxIiB4Mj0iOCIgeTI9IjEiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbikiLz48L3N2Zz4=')]" 
            style={{opacity: 0.3}}></div>
      </div>
      
      {/* Enhanced moving light and tactical effects - SELECTED ELEMENT */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central tactical glow */}
        <div className="absolute -inset-[10%] w-[120%] h-[120%] opacity-10"
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
        
        {/* Targeting HUD elements */}
        <div className="absolute top-[20%] left-[30%] w-24 h-24"
            style={{
              border: '1px solid rgba(212,175,55,0.15)',
              borderRadius: '50%',
              opacity: 0.4,
              animation: 'pulse 4s infinite ease-in-out'
            }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border border-ogclan/30 rounded-full"></div>
            <div className="absolute w-2 h-2 bg-ogclan/30 rounded-full animate-pulse-slow"></div>
          </div>
          <div className="absolute top-0 left-1/2 w-px h-2 bg-ogclan/30"></div>
          <div className="absolute bottom-0 left-1/2 w-px h-2 bg-ogclan/30"></div>
          <div className="absolute left-0 top-1/2 h-px w-2 bg-ogclan/30"></div>
          <div className="absolute right-0 top-1/2 h-px w-2 bg-ogclan/30"></div>
        </div>
        
        {/* Tactical data indicators */}
        <div className="absolute bottom-[15%] right-[20%] w-40 opacity-20">
          <div className="flex space-x-1 items-center">
            <div className="w-2 h-2 bg-ogclan/50 rounded-full animate-pulse-slow"></div>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
          </div>
          <div className="mt-3 flex space-x-1 items-center">
            <div className="w-2 h-2 bg-ogclan/50 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Digital noise overlay for tactical feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]"
            style={{
              opacity: 0.03,
              mixBlendMode: 'overlay'
            }}>
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
            <div className="flex items-center justify-center mb-2">
              <Crosshair className="h-5 w-5 text-ogclan/70 mr-2" />
              <h1 className="text-4xl font-orbitron tracking-wider text-gradient-gold relative inline-block">
                {/* Enhanced letter-by-letter animation */}
                {"OUR SOLDIERS".split("").map((letter, index) => (
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
              <Crosshair className="h-5 w-5 text-ogclan/70 ml-2" />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={400}>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="text-ogclan h-6 w-6 animate-pulse-slow" />
              <div className="relative w-20 h-0.5">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite]"></div>
              </div>
              <Target className="text-ogclan h-7 w-7 animate-pulse-slow" />
              <div className="relative w-20 h-0.5">
                <div className="absolute inset-0 bg-ogclan/40"></div>
                <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite_reverse]"></div>
              </div>
              <Shield className="text-ogclan h-6 w-6 animate-pulse-slow" />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={600} className="text-balance max-w-2xl mx-auto">
            <p className="text-lg text-ogclan-muted relative">
              <span 
                className="block font-medium"
                style={{
                  animation: 'fade-in 0.8s ease-out forwards, scale-in 0.8s ease-out forwards',
                }}
              >
                These aren't just soldiers — they're <span className="text-ogclan font-bold">OG Clan Cameroon</span>.
                Forged in fire, raised in the isolated streets of Black Market, and <span className="text-ogclan/90">built for war</span>.
                Each operator moves with purpose — armed with a signature loadout and the instincts of a killer.
                From brutal close-quarters combat to surgical long-range takedowns, they've been <span className="text-ogclan font-bold">onetapping since 2019</span>.
                <span 
                  className="block mt-4 text-xl font-orbitron tracking-wider bg-gradient-to-r from-ogclan via-ogclan-light to-ogclan-muted bg-clip-text text-transparent animate-pulse-slow"
                  style={{
                    textShadow: '0 0 8px rgba(212,175,55,0.3)',
                    position: 'relative',
                  }}
                >
                  <span className="relative inline-block">
                    Unshaken. Unmatched. Cold as hell. 🥶
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-ogclan to-blue-400/40 bg-clip-text text-transparent blur-[2px] opacity-60"
                      style={{
                        animation: 'flicker 4s infinite linear',
                        filter: 'brightness(1.2)'
                      }}
                    >
                      Unshaken. Unmatched. Cold as hell. 🥶
                    </span>
                  </span>
                </span>
              </span>
            </p>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Enhanced animated scanning elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      
      {/* Enhanced vertical scanning effect */}
      <div className="absolute left-0 w-1/4 h-full pointer-events-none overflow-hidden">
        <div className="absolute h-[1px] w-full bg-ogclan/40 top-1/2 animate-[vertical-scanner_15s_ease-in-out_infinite]"></div>
      </div>
      <div className="absolute right-0 w-1/4 h-full pointer-events-none overflow-hidden">
        <div className="absolute h-[1px] w-full bg-ogclan/40 top-3/4 animate-[vertical-scanner_12s_ease-in-out_infinite_reverse]"></div>
      </div>
      
      {/* New glowing divider to transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-[3px] bg-gradient-to-r from-transparent via-ogclan/70 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-[3px] w-full">
            <div className="absolute left-0 h-full w-1/3 bg-ogclan/80 animate-[scanner-line_4s_ease-in-out_infinite]" 
                 style={{ filter: 'blur(1px)', boxShadow: '0 0 8px rgba(212,175,55,0.6)' }}></div>
          </div>
        </div>
        <div className="h-[1px] mt-1 bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default SoldiersHero;
