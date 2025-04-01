
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative ${isMobile ? 'px-3' : ''}`}>
          <span className="relative inline-block overflow-hidden group">
            {/* Main text with enhanced cyberpunk/gaming style */}
            <span className="font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light drop-shadow-gold relative z-10">
              WELCOME TO OG CLAN
            </span>
            
            {/* Enhanced glitch effect with higher intensity and blink animation */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500/70 via-ogclan/70 to-blue-500/70 blur-[2px] animate-blink opacity-50 group-hover:opacity-90 transition-opacity duration-300"></span>
            
            {/* Tech line effects with improved visibility */}
            <span className="absolute -left-2 top-0 h-0 w-[3px] bg-ogclan group-hover:h-full transition-all duration-700 delay-100 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            <span className="absolute -right-2 bottom-0 h-0 w-[3px] bg-ogclan group-hover:h-full transition-all duration-700 delay-100 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            
            {/* Enhanced neon underline with animation */}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-500 via-ogclan to-red-500 group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(212,175,55,0.9)]"></span>
            
            {/* Enhanced tech highlight flare with higher opacity */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-ogclan-dark/10 via-ogclan/40 to-ogclan-light/10 transition-all duration-500"></span>
          </span>
          
          {/* Stronger high-tech background glow */}
          <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-ogclan/50 to-red-500/20 blur-xl opacity-80 animate-pulse-slow -z-10"></span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/70 after:transform-gpu animate-fade-in">
            Loyalty. Unity. Victory.
          </span> 
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-blink" />
          
          {/* Enhanced tech accents with increased glow */}
          <span className="absolute -right-4 top-1/2 h-[5px] w-[5px] rounded-full bg-red-500 shadow-[0_0_15px_red] animate-blink"></span>
          <span className="absolute -left-4 top-1/2 h-[5px] w-[5px] rounded-full bg-blue-500 shadow-[0_0_15px_blue] animate-blink animation-delay-600"></span>
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <div className="flex items-center justify-center mt-3 mb-5">
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2 animate-blink" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan animate-glow relative">
            CALL OF DUTY MOBILE
            <Zap className="absolute -right-7 top-0 h-4 w-4 text-ogclan-light animate-blink" />
          </span>
        </div>
        
        <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl max-w-6xl mx-auto leading-relaxed px-4 sm:px-6 relative">
          <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm">Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby. Whether you're here to frag out or vibe with the crew, there's a spot for you.</span>
          <span className="text-balance inline-block bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-2 drop-shadow-gold">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
