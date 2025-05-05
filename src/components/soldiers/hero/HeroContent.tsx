
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent = ({ isVisible }: HeroContentProps) => {
  return (
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
        
        {/* Horizontal scanning line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/50 to-transparent animate-[tactical-scan_4s_ease-in-out_infinite_alternate]"></div>
        </div>
        
        <p className="text-lg text-gray-200">
          {/* Tactical briefing text with animated intro */}
          <span className="block mb-4 transform transition-all duration-800"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '0.4s',
              clipPath: isVisible ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              transition: 'clip-path 1.2s ease-out'
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
              clipPath: isVisible ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              transition: 'clip-path 1.5s ease-out 0.4s'
            }}
          >
            Each operator moves with purpose — armed with a signature loadout and the instincts of a killer.
            From brutal close-quarters combat to surgical long-range takedowns, they've been <span className="font-bold text-ogclan">onetapping since 2019</span>.
          </span>
          
          <span className="block mt-4 font-orbitron text-xl tracking-wider font-medium animate-glow"
            style={{
              animation: 'holographic-flicker 3s infinite',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1.2s ease-out 0.8s'
            }}
          >
            <span className="text-gradient-gold">-Unshaken. Unmatched. Cold as hell. 🥶-</span>
          </span>
        </p>
      </div>
    </AnimatedContent>
  );
};

export default HeroContent;
