
import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';
import codmTwilightHeist from '@/assets/codm-twilight-heist.png';

const BattleNightSection = () => {
  return (
    <section id="og-battle-night" className="py-14 md:py-16 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Epic Twilight Heist Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${codmTwilightHeist})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
        </div>
        
        {/* Dynamic overlay effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-900"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Epic vehicle combat and explosive tournaments featuring Season 8 Twilight Heist action.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Experience high-octane warfare across diverse battlefields - from intense vehicle chases to strategic base infiltrations. Master every terrain and combat scenario.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Join <span className="font-semibold">OG Clan for Call of Duty multiplayer in Cameroon</span> and experience <span className="font-semibold">next-level tactical warfare</span> with our expert <span className="font-semibold">Twilight Heist strategies</span>.
            </p>
          </AnimatedContent>
        </div>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default BattleNightSection;
