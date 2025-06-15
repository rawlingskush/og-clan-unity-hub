
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative font-orbitron bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold`}>
          WELCOME TO OG CLAN
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/50 after:transform-gpu animate-fade-in">
            Loyalty. Unity. Victory.
          </span>
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
          <span className="absolute -right-4 top-1/2 h-[4px] w-[4px] rounded-full bg-red-500 shadow-[0_0_12px_red] animate-pulse-slow"></span>
          <span className="absolute -left-4 top-1/2 h-[4px] w-[4px] rounded-full bg-blue-500 shadow-[0_0_12px_blue] animate-pulse-slow animation-delay-600"></span>
        </p>
      </AnimatedContent>
      <AnimatedContent animation="fade-in-up" delay={600}>
        <div className="flex items-center justify-center mt-3 mb-5">
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan animate-pulse-slow">
            CALL OF DUTY MOBILE
          </span>
        </div>
        <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl max-w-6xl mx-auto leading-relaxed px-4 sm:px-6 relative">
          <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm">Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby. Whether you're here to frag out or vibe with the crew, there's a spot for you.</span>
          <span className="text-balance inline-block bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-2 drop-shadow">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
