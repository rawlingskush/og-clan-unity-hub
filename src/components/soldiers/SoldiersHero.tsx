
import React from 'react';
import { Target, Shield, Zap, Users } from 'lucide-react';
import TacticalBackgroundImage from './TacticalBackgroundImage';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const parallaxOffset = scrollPosition * 0.5;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced tactical background */}
      <TacticalBackgroundImage />
      
      {/* Tactical HUD elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ogclan/40"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-ogclan/40"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-ogclan/40"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-ogclan/40"></div>
        
        {/* Scanning lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="tactical-hero-container relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Mission briefing header */}
        <div className="tactical-briefing mb-8 p-6 bg-black/40 backdrop-blur-sm border border-ogclan/30 rounded-lg">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="tactical-line w-12 h-px bg-ogclan"></div>
            <div className="icon-container flex space-x-3">
              <Target className="tactical-icon h-6 w-6 text-ogclan animate-pulse" />
              <Shield className="tactical-icon h-6 w-6 text-ogclan animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Zap className="tactical-icon h-6 w-6 text-ogclan animate-pulse" style={{ animationDelay: '1s' }} />
              <Users className="tactical-icon h-6 w-6 text-ogclan animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            <div className="tactical-line w-12 h-px bg-ogclan"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient-gold mb-4 tracking-wider">
            ELITE SQUAD
          </h1>
          
          <div className="tactical-motto text-lg md:text-xl text-ogclan-light font-medium tracking-widest">
            ⚡ BATTLE-TESTED WARRIORS ⚡
          </div>
        </div>

        {/* Mission status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="tactical-stat bg-black/30 backdrop-blur-sm p-3 border border-ogclan/20 rounded">
            <div className="text-ogclan font-bold">STATUS</div>
            <div className="text-green-400">ACTIVE</div>
          </div>
          <div className="tactical-stat bg-black/30 backdrop-blur-sm p-3 border border-ogclan/20 rounded">
            <div className="text-ogclan font-bold">MISSION</div>
            <div className="text-yellow-400">DOMINATION</div>
          </div>
          <div className="tactical-stat bg-black/30 backdrop-blur-sm p-3 border border-ogclan/20 rounded">
            <div className="text-ogclan font-bold">SQUAD SIZE</div>
            <div className="text-blue-400">21 OPERATORS</div>
          </div>
          <div className="tactical-stat bg-black/30 backdrop-blur-sm p-3 border border-ogclan/20 rounded">
            <div className="text-ogclan font-bold">READINESS</div>
            <div className="text-red-400">MAXIMUM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoldiersHero;
