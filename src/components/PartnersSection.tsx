
import React from 'react';
import AnimatedContent from './AnimatedContent';
import SponsorSection from './SponsorSection';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-3">
              OUR PARTNERS
            </h2>
            <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-ogclan-light max-w-2xl mx-auto">
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
