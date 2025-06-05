
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-4 relative ${isMobile ? 'px-3' : ''}`}>
          <span className="font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light">
            WELCOME TO OG CLAN
          </span>
          
          {/* Clean underline effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-ogclan to-transparent mt-2"></div>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 mt-6">
          <span>Loyalty. Unity. Victory.</span> 
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500" />
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <div className="flex items-center justify-center mt-4 mb-6">
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan">
            CALL OF DUTY MOBILE
          </span>
        </div>
        
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
          <span className="text-gray-200 font-medium">
            Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby.
          </span>
          <br className="hidden md:block" />
          <span className="text-ogclan-light font-semibold mt-2 inline-block">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
