
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
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-ogclan/60 rounded-full animate-[float_${3 + (i % 3)}s_infinite] blur-[0.5px]`}
            style={{
              left: `${10 + (i * 7.5)}%`,
              top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Outer animated HUD glow borders with enhanced effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-5 sm:inset-12 border-2 border-ogclan/30 rounded-2xl animate-[spotlight_3s_infinite] shadow-glow-ogclan" />
        
        {/* Enhanced corner elements with pulse */}
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-ogclan/40 rounded-tl-2xl opacity-80" />
        <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-ogclan/40 rounded-tr-2xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-ogclan/40 rounded-bl-2xl opacity-80" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-ogclan/40 rounded-br-2xl opacity-80" />
        
        {/* Scanning lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[scan-horizontal_4s_infinite]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[scan-horizontal_4s_infinite]" style={{ animationDelay: '2s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-8 w-full relative z-20">
        <div className="relative mx-auto max-w-4xl shadow-glow-gold rounded-xl bg-black/70 backdrop-blur-md border border-ogclan/40 px-4 sm:px-8 py-6 sm:py-10 overflow-hidden animate-tactical-fade-in group hover:shadow-glow-ogclan transition-all duration-500">
          {/* Enhanced inner glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-ogclan/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <TacticalIconsRow />
          <HeroContent />
          <TacticalStatusBar />
          
          {/* Subtle data stream lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent animate-[data-flow_6s_infinite]" />
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent animate-[data-flow_6s_infinite]" style={{ animationDelay: '3s' }} />
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
