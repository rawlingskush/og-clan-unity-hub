
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:px-8 md:py-20">
        <HeroContent />
        <HeroActions />
      </div>
      
      <ScrollDownButton />
    </section>
  );
};

export default HeroSection;
