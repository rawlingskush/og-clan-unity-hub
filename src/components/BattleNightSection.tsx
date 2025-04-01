
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-20 md:py-24 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Battle Night background with blended overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png')] bg-no-repeat bg-right-top opacity-5 mix-blend-overlay transform scale-75 lg:scale-50 rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Weekly Call of Duty Mobile tournaments where legends are born
            </p>
          </AnimatedContent>
        </div>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default BattleNightSection;
