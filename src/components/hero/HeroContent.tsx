
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40">
            <img 
              src="/lovable-uploads/5bfd821e-f0b3-4f77-8754-6df282e60305.png" 
              alt="OG Clan Cameroon Logo" 
              className="w-full h-full object-contain drop-shadow-gold"
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ogclan mb-3 md:mb-4">
          OG BATTLE NIGHT
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold">
          Where Legends are Born <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500" />
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed px-2">
          Where gaming passion meets loyalty. We're a family in Cameroon building epic moments and big opportunities—join the movement!
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
