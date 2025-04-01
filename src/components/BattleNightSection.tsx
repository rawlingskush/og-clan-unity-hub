
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-20 md:py-28 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/a15dcbad-a5da-4907-9f61-2bb0814ccf9a.png')] opacity-5 bg-center bg-cover"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
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
