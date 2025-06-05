
import React from 'react';
import { Target, Shield, Zap, Users, Crosshair, Radar } from 'lucide-react';
import TacticalBackgroundImage from './TacticalBackgroundImage';
import AnimatedContent from '../AnimatedContent';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  const parallaxOffset = scrollPosition * 0.5;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced tactical background with more visible images */}
      <TacticalBackgroundImage />
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ogclan/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-ogclan/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-ogclan/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Enhanced tactical HUD elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Corner brackets with enhanced design */}
        <div className="absolute top-8 left-8 w-20 h-20">
          <div className="w-full h-full border-l-3 border-t-3 border-ogclan/60 relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-ogclan/80 rounded-full"></div>
            <Crosshair className="absolute top-2 left-2 h-4 w-4 text-ogclan/70 animate-pulse" />
          </div>
        </div>
        <div className="absolute top-8 right-8 w-20 h-20">
          <div className="w-full h-full border-r-3 border-t-3 border-ogclan/60 relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-ogclan/80 rounded-full"></div>
            <Radar className="absolute top-2 right-2 h-4 w-4 text-ogclan/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        <div className="absolute bottom-8 left-8 w-20 h-20">
          <div className="w-full h-full border-l-3 border-b-3 border-ogclan/60 relative">
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-ogclan/80 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 w-20 h-20">
          <div className="w-full h-full border-r-3 border-b-3 border-ogclan/60 relative">
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-ogclan/80 rounded-full"></div>
          </div>
        </div>
        
        {/* Enhanced scanning lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/50 to-transparent">
          <div className="absolute top-0 h-2 w-2 bg-ogclan/80 rounded-full animate-pulse" style={{ left: '25%' }}></div>
        </div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/50 to-transparent">
          <div className="absolute top-0 h-2 w-2 bg-ogclan/80 rounded-full animate-pulse" style={{ right: '30%' }}></div>
        </div>
        
        {/* Vertical scanning lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ogclan/30 to-transparent"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ogclan/30 to-transparent"></div>
      </div>

      {/* Main content with enhanced design */}
      <div className="tactical-hero-container relative z-10 text-center px-4 max-w-5xl mx-auto">
        <AnimatedContent animation="fade-in-up">
          {/* Mission briefing header with enhanced styling */}
          <div className="tactical-briefing mb-8 p-8 bg-black/30 backdrop-blur-lg border border-ogclan/40 rounded-xl shadow-2xl">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="tactical-line w-16 h-px bg-gradient-to-r from-transparent to-ogclan"></div>
              <div className="icon-container flex space-x-4">
                <Target className="tactical-icon h-7 w-7 text-ogclan animate-pulse" />
                <Shield className="tactical-icon h-7 w-7 text-ogclan animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Zap className="tactical-icon h-7 w-7 text-ogclan animate-pulse" style={{ animationDelay: '1s' }} />
                <Users className="tactical-icon h-7 w-7 text-ogclan animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="tactical-line w-16 h-px bg-gradient-to-l from-transparent to-ogclan"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-6 tracking-wider relative">
              ELITE SQUAD
              <div className="absolute inset-0 text-ogclan/20 blur-sm -z-10">ELITE SQUAD</div>
            </h1>
            
            <div className="tactical-motto text-xl md:text-2xl text-ogclan-light font-medium tracking-widest mb-4">
              ⚡ BATTLE-TESTED WARRIORS ⚡
            </div>
            
            <div className="text-sm md:text-base text-gray-300 font-mono tracking-wider">
              [ OPERATIONAL STATUS: ACTIVE ] [ MISSION READY ]
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in-up" delay={300}>
          {/* Enhanced mission status grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="tactical-stat bg-black/40 backdrop-blur-sm p-4 border border-ogclan/30 rounded-lg hover:border-ogclan/60 transition-all duration-300">
              <div className="text-ogclan font-bold text-xs mb-1">STATUS</div>
              <div className="text-green-400 font-semibold">ACTIVE</div>
              <div className="text-xs text-gray-400 mt-1">100% READY</div>
            </div>
            <div className="tactical-stat bg-black/40 backdrop-blur-sm p-4 border border-ogclan/30 rounded-lg hover:border-ogclan/60 transition-all duration-300">
              <div className="text-ogclan font-bold text-xs mb-1">MISSION</div>
              <div className="text-yellow-400 font-semibold">DOMINATION</div>
              <div className="text-xs text-gray-400 mt-1">IN PROGRESS</div>
            </div>
            <div className="tactical-stat bg-black/40 backdrop-blur-sm p-4 border border-ogclan/30 rounded-lg hover:border-ogclan/60 transition-all duration-300">
              <div className="text-ogclan font-bold text-xs mb-1">SQUAD SIZE</div>
              <div className="text-blue-400 font-semibold">21 OPERATORS</div>
              <div className="text-xs text-gray-400 mt-1">FULL STRENGTH</div>
            </div>
            <div className="tactical-stat bg-black/40 backdrop-blur-sm p-4 border border-ogclan/30 rounded-lg hover:border-ogclan/60 transition-all duration-300">
              <div className="text-ogclan font-bold text-xs mb-1">READINESS</div>
              <div className="text-red-400 font-semibold">MAXIMUM</div>
              <div className="text-xs text-gray-400 mt-1">COMBAT READY</div>
            </div>
          </div>
        </AnimatedContent>
        
        {/* Additional tactical info */}
        <AnimatedContent animation="fade-in-up" delay={600}>
          <div className="mt-8 flex justify-center space-x-8 text-xs text-gray-400 font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>COMMS ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>GPS LOCKED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>WEAPONS HOT</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default SoldiersHero;
