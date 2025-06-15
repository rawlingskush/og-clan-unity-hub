
import React from 'react';
import TacticalBackground from './hero/TacticalBackground';
import TacticalIconsRow from './hero/TacticalIconsRow';
import TacticalStatusBar from './hero/TacticalStatusBar';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 bg-black">
      <TacticalBackground />
      {/* Outer animated HUD glow borders */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-5 sm:inset-12 border-2 border-ogclan/30 rounded-2xl animate-[spotlight_3s_infinite] shadow-glow-ogclan" />
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-ogclan/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-ogclan/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-ogclan/40 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-ogclan/40 rounded-br-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-8 w-full relative z-20">
        <div className="relative mx-auto max-w-4xl shadow-glow-gold rounded-xl bg-black/70 backdrop-blur-md border border-ogclan/40 px-4 sm:px-8 py-6 sm:py-10 overflow-hidden animate-tactical-fade-in">
          <TacticalIconsRow />
          <HeroContent />
          <TacticalStatusBar />
        </div>
        <HeroActions />
      </div>
      <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12'} left-1/2 transform -translate-x-1/2 z-30`}>
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default HeroSection;
