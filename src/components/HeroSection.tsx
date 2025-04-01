
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:px-8 lg:py-20 w-full">
        <HeroContent />
        <HeroActions />
      </div>
      
      {/* Added a margin-bottom to create space */}
      <div className="mb-24 sm:mb-36">
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default HeroSection;
