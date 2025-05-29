
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-14 md:py-16 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Battle Night background with blended overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png')] bg-no-repeat bg-right-top opacity-5 mix-blend-overlay transform scale-75 lg:scale-50 rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Weekly Call of Duty Mobile tournaments where legends are born and necks are being pressed.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Our Battle Nights are all about multiplayer chaos and Battle Royale glory, dropping into maps like <span className="font-semibold">Alcatraz</span>, <span className="font-semibold">Isolated</span>, <span className="font-semibold">Blackout</span>, and <span className="font-semibold">Krai</span>. Hot drops like <span className="font-semibold">Black Market</span>? We own them.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Join <span className="font-semibold">OG Clan for Call of Duty multiplayer in Cameroon</span> and dominate <span className="font-semibold">Battle Royale on Blackout</span> with our expert <span className="font-semibold">Black Market hot drop strategies</span>.
            </p>
          </AnimatedContent>
        </div>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default BattleNightSection;
