
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2, Zap, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative ${isMobile ? 'px-3' : ''}`}>
          <span className="relative inline-block overflow-hidden group">
            {/* Enhanced main text with multiple effects */}
            <span className="font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light drop-shadow-gold relative z-10 animate-text-flicker">
              WELCOME TO OG CLAN
            </span>
            
            {/* Enhanced glitch effect layers */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500/50 via-ogclan/50 to-blue-500/50 blur-[1px] animate-pulse opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500/30 via-ogclan/40 to-red-500/30 blur-[3px] animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-500"></span>
            
            {/* Enhanced tech line effects */}
            <span className="absolute -left-3 top-0 h-0 w-[3px] bg-gradient-to-b from-ogclan to-red-500 group-hover:h-full transition-all duration-700 delay-100 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
            <span className="absolute -right-3 bottom-0 h-0 w-[3px] bg-gradient-to-t from-ogclan to-blue-500 group-hover:h-full transition-all duration-700 delay-100 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
            
            {/* Enhanced neon underline with multiple layers */}
            <span className="absolute bottom-0 left-0 w-0 h-[4px] bg-gradient-to-r from-blue-500 via-ogclan to-red-500 group-hover:w-full transition-all duration-800 ease-in-out shadow-[0_0_15px_rgba(212,175,55,1)]"></span>
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-ogclan group-hover:w-full transition-all duration-900 ease-in-out shadow-[0_0_8px_rgba(212,175,55,0.8)] delay-200"></span>
            
            {/* Enhanced tech highlight flare */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-ogclan-dark/0 via-ogclan/40 to-ogclan-light/0 transition-all duration-600"></span>
          </span>
          
          {/* Enhanced background glow with pulsing effect */}
          <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-ogclan/50 to-red-500/20 blur-2xl opacity-80 animate-glow-pulse -z-10"></span>
          <span className="absolute -inset-4 bg-gradient-to-r from-ogclan/10 via-ogclan/20 to-ogclan/10 blur-3xl opacity-60 animate-pulse-slow -z-20"></span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="h-6 w-6 text-blue-400 animate-pulse" />
          <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center gap-2 relative">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-ogclan/60 after:to-transparent after:transform-gpu animate-fade-in">
              Loyalty. Unity. Victory.
            </span> 
            <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
            
            {/* Enhanced tech accents */}
            <span className="absolute -right-6 top-1/2 h-[6px] w-[6px] rounded-full bg-red-500 shadow-[0_0_15px_red] animate-pulse-slow"></span>
            <span className="absolute -left-6 top-1/2 h-[6px] w-[6px] rounded-full bg-blue-500 shadow-[0_0_15px_blue] animate-pulse-slow animation-delay-600"></span>
          </p>
          <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
        </div>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <div className="flex items-center justify-center mt-3 mb-5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ogclan/10 to-transparent blur-xl"></div>
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2 relative z-10 animate-float" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan animate-text-flicker relative z-10">
            CALL OF DUTY MOBILE
          </span>
          <div className="ml-2 flex space-x-1">
            <div className="w-2 h-2 bg-ogclan rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="relative">
          <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl max-w-6xl mx-auto leading-relaxed px-4 sm:px-6 relative">
            <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm">
              Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby. Whether you're here to frag out or vibe with the crew, there's a spot for you.
            </span>
            <span className="text-balance inline-block bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-2 drop-shadow">
              Join Us, level up your game, and help write our epic legacy. Let's own this together!
            </span>
          </p>
          
          {/* Enhanced text glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ogclan/5 to-transparent blur-lg -z-10"></div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
