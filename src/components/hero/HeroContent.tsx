
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <div className="relative">
          {/* Tactical header with enhanced styling */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-ogclan"></div>
            <div className="flex space-x-3">
              <Zap className="h-5 w-5 text-ogclan animate-pulse" />
              <div className="w-2 h-2 bg-ogclan/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <Zap className="h-5 w-5 text-ogclan animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-ogclan"></div>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-4 relative ${isMobile ? 'px-3' : ''}`}>
            <span className="font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light relative">
              WELCOME TO OG CLAN
              {/* Tactical glow effect */}
              <div className="absolute inset-0 text-ogclan/20 blur-sm -z-10 font-orbitron tracking-wider">
                WELCOME TO OG CLAN
              </div>
            </span>
            
            {/* Enhanced underline with animation */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-ogclan to-transparent mt-2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ogclan/80 to-transparent animate-pulse"></div>
            </div>
          </h1>
        </div>
        
        <AnimatedContent animation="fade-in-up" delay={500}>
          <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 mt-6">
            <span>Loyalty. Unity. Victory.</span> 
            <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
          </p>
        </AnimatedContent>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <div className="flex items-center justify-center mt-4 mb-6">
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan">
            CALL OF DUTY MOBILE
          </span>
        </div>
        
        {/* Enhanced tactical info display */}
        <div className="relative mt-4 md:mt-6 max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm border border-ogclan/30 rounded-lg p-6 relative">
            {/* Corner indicators */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-ogclan/60"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-ogclan/60"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-ogclan/60"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-ogclan/60"></div>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-6">
              <span className="text-gray-200 font-medium">
                Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby.
              </span>
              <br className="hidden md:block" />
              <span className="text-ogclan-light font-semibold mt-2 inline-block">
                Join Us, level up your game, and help write our epic legacy. Let's own this together!
              </span>
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
