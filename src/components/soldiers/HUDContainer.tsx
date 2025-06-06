
import React from 'react';
import { Zap } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import TacticalIcons from './TacticalIcons';

const HUDContainer = () => {
  return (
    <div className="relative border border-ogclan/40 bg-black/80 backdrop-blur-sm p-8 md:p-12">
      {/* HUD Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-ogclan"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-ogclan"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-ogclan"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-ogclan"></div>
      
      {/* Scanning line animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[tactical-scan_4s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="text-center">
        {/* Tactical Icons Header */}
        <TacticalIcons />
        
        {/* Main Title */}
        <AnimatedContent animation="scale-in" delay={400}>
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-ogclan mb-6 tracking-wider">
            ELITE SQUAD
          </h1>
        </AnimatedContent>
        
        {/* Subtitle with tactical styling */}
        <AnimatedContent animation="fade-in" delay={600}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Zap className="text-ogclan h-6 w-6" />
            <span className="text-xl md:text-2xl font-orbitron text-ogclan tracking-widest">
              BATTLE-TESTED WARRIORS
            </span>
            <Zap className="text-ogclan h-6 w-6" />
          </div>
        </AnimatedContent>
        
        {/* Operational Status */}
        <AnimatedContent animation="fade-in" delay={800}>
          <div className="font-mono text-gray-300 text-sm md:text-base tracking-wider mb-12">
            [ OPERATIONAL STATUS: ACTIVE ] [ MISSION READY ]
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default HUDContainer;
