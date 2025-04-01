
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative group">
            <img 
              src="/lovable-uploads/5bfd821e-f0b3-4f77-8754-6df282e60305.png" 
              alt="OG Clan Cameroon Logo" 
              className="w-full h-full object-contain drop-shadow-gold transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ogclan/5 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ogclan mb-2 md:mb-3">
          OG BATTLE NIGHT
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold">
          Where Legends are Born <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500" />
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance leading-relaxed px-2">
          Where gaming passion meets loyalty. We're a family in Cameroon building epic moments and big opportunities—join the movement!
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
