
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light drop-shadow-gold inline-block animate-glow">
            WELCOME TO OG CLAN
          </span>
          <span className="absolute -inset-1 bg-gradient-to-r from-ogclan-dark/0 via-ogclan/20 to-ogclan-light/0 blur-xl opacity-30 animate-pulse-slow -z-10"></span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/50 after:transform-gpu animate-fade-in">Loyalty. Unity. Victory.</span> 
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance leading-relaxed px-2">
          Welcome to OG Clan—Cameroon's biggest gaming crew, uniting 35 passionate players since 2020. We're all about loyalty, growth, and crushing it in every match. Join us to level up, make memories, and become part of a legacy that's just getting started.
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
