
import React from 'react';
import AnimatedContent from './AnimatedContent';
import SponsorSection from './SponsorSection';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-gradient-to-b from-black/95 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
              OUR PARTNERS
            </h2>
            <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
              The brands that support our vision and growth
            </p>
          </AnimatedContent>
        </div>
        
        <SponsorSection />
      </div>
    </section>
  );
};

export default PartnersSection;
