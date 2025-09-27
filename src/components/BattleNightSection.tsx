
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-14 md:py-16 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Battle Night background with blended overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        {/* Day of the Dead Character - Left side accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-15 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/4aff45e6-a800-4a02-8a26-f5cc53f2c562.png')] bg-cover bg-center bg-no-repeat transform scale-105 hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80"></div>
        </div>
        
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
              Our Saturday Battle Nights feature intense <span className="font-semibold">multiplayer grinding</span> in modes like <span className="font-semibold">Hard-Point</span>, <span className="font-semibold">Search and Destroy</span>, and <span className="font-semibold">Domination</span>, plus epic <span className="font-semibold">Battle Royale</span> action on maps like <span className="font-semibold">Alcatraz</span>, <span className="font-semibold">Isolated</span>, <span className="font-semibold">Blackout</span>, and <span className="font-semibold">Krai</span>.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Join <span className="font-semibold">OG Clan for both MP and BR dominance</span> every Saturday night and experience our tactical superiority in <span className="font-semibold">competitive multiplayer</span> and <span className="font-semibold">Battle Royale hot drops</span> like <span className="font-semibold">Black Market</span>.
            </p>
          </AnimatedContent>
        </div>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default BattleNightSection;
