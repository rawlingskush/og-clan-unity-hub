
import React from 'react';
import AnimatedContent from './AnimatedContent';
import JoinSection from './JoinSection';

const JoinUsSection = () => {
  return (
    <section id="join" className="py-14 md:py-20 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-3">
              JOIN YOUR SQUAD
            </h2>
            <div className="w-16 h-1 bg-ogclan mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-ogclan-light max-w-3xl mx-auto">
              Become part of something bigger than just gaming
            </p>
          </AnimatedContent>
        </div>
        
        <JoinSection />
      </div>
    </section>
  );
};

export default JoinUsSection;
