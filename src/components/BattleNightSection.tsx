
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-16 md:py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-3 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
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
