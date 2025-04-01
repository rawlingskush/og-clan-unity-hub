
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:px-8 lg:py-24 w-full relative z-10">
        <HeroContent />
        <HeroActions />
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default HeroSection;
