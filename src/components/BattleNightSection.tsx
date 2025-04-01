
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-14 md:py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-3 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-16 h-1 bg-ogclan mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-ogclan-light max-w-3xl mx-auto">
              Join our flagship gaming event - where legends are born
            </p>
          </AnimatedContent>
        </div>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default BattleNightSection;
