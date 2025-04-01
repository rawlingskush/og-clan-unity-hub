
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-20 md:py-28 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-ogclan/5 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ogclan/5 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
              OG BATTLE NIGHT
            </h2>
            <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6 transition-all duration-300 ease-in-out hover:w-24 hover:bg-ogclan-light"></div>
            <p className="text-xl text-ogclan-light max-w-3xl mx-auto transition-all duration-300 ease-in-out hover:text-ogclan">
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
