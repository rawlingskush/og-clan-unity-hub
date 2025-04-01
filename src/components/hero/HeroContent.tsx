
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ogclan mb-2 md:mb-3">
          WELCOME TO OG CLAN
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold">
          Loyalty. Unity. Victory. <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500" />
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
