
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <HeroBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:px-6 lg:py-14 w-full relative z-10">
        <HeroContent />
        <HeroActions />
      </div>
      
      <div className={`absolute ${isMobile ? 'bottom-6' : 'bottom-8'} left-1/2 transform -translate-x-1/2 z-10`}>
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default HeroSection;
