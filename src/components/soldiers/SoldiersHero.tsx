
import React, { useRef } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Award } from 'lucide-react';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Calculate opacity and transform based on scroll position
  const opacity = Math.max(0.2, 1 - scrollPosition * 0.003);
  const scale = Math.max(0.8, 1 - scrollPosition * 0.0005);
  const translateY = scrollPosition * 0.3;

  return (
    <div className="relative bg-black/80 py-16 overflow-hidden border-b border-ogclan/20">
      {/* Battle teams background image */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/lovable-uploads/380c7e90-171d-4704-9af6-45d26921ddb2.png')] bg-cover bg-center bg-no-repeat"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50"></div>
      
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
                These aren’t just soldiers — they’re OG Clan Cameroon.
Forged in fire, raised on recoil, and built for war.
Each operator moves with purpose, armed with a signature loadout and the instincts of a killer.
From brutal close-quarters to surgical long-range takedowns — they’ve been onetapping since 2019.
--Unshaken. Unmatched. Cold as hell. 🥶--
              </span>
            </p>
          </AnimatedContent>
        </div>
      </div>
      
      {/* Add animated scanner lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
    </div>
  );
};

export default SoldiersHero;
