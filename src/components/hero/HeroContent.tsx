
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative ${isMobile ? 'px-3' : ''}`}>
          <span className="relative inline-block overflow-hidden group">
            {/* Main text with enhanced cyberpunk/gaming style */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light drop-shadow-gold relative z-10">
              WELCOME TO OG CLAN
            </span>
            
            {/* Glitch effect layer with reduced intensity */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500/40 via-ogclan/40 to-blue-500/40 blur-[2px] animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
            
            {/* Tech line effects */}
            <span className="absolute -left-2 top-0 h-0 w-[2px] bg-ogclan group-hover:h-full transition-all duration-700 delay-100"></span>
            <span className="absolute -right-2 bottom-0 h-0 w-[2px] bg-ogclan group-hover:h-full transition-all duration-700 delay-100"></span>
            
            {/* Neon underline with animation */}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-500 via-ogclan to-red-500 group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            
            {/* Tech highlight flare with higher opacity */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-ogclan-dark/0 via-ogclan/30 to-ogclan-light/0 transition-all duration-500"></span>
            
            {/* Digital circuit pattern overlay with reduced opacity */}
            <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNEMkE4MjEiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDBoMHY0MCIvPjwvZz48L3N2Zz4=')] opacity-25 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-700"></span>
          </span>
          
          {/* High-tech background glow with increased intensity */}
          <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 via-ogclan/40 to-red-500/15 blur-xl opacity-70 animate-pulse-slow -z-10"></span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/50 after:transform-gpu animate-fade-in">
            Loyalty. Unity. Victory.
          </span> 
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
          
          {/* Tech accent with increased glow */}
          <span className="absolute -right-4 top-1/2 h-[4px] w-[4px] rounded-full bg-red-500 shadow-[0_0_12px_red] animate-pulse-slow"></span>
          <span className="absolute -left-4 top-1/2 h-[4px] w-[4px] rounded-full bg-blue-500 shadow-[0_0_12px_blue] animate-pulse-slow animation-delay-600"></span>
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl max-w-6xl mx-auto text-balance leading-relaxed px-4 sm:px-2 text-gray-300 relative">
          Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier gaming squad since 2020. We're 50 hardcore players strong, fueled by loyalty, growth, and dominating every lobby. Whether you're here to frag out or vibe with the crew, there's a spot for you. Join Us, level up your game, and help write our epic legacy. Let's own this together!
          
          {/* Tech scanline effect with increased intensity */}
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-ogclan/10 to-transparent bg-[length:100%_4px] bg-repeat-y animate-pulse-slow opacity-40 pointer-events-none"></span>
        </p>
      </AnimatedContent>
    </div>;
};

export default HeroContent;
