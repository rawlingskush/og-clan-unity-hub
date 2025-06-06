
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

const TacticalStats = () => {
  return (
    <AnimatedContent animation="fade-in" delay={1000}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-6 md:mt-8">
        {/* Status Card */}
        <div className="relative border border-ogclan/30 bg-black/70 backdrop-blur-sm p-3 md:p-4 text-center group hover:border-ogclan/60 transition-all duration-300">
          <div className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-ogclan font-orbitron text-xs md:text-sm mb-1">STATUS</div>
            <div className="text-ogclan font-bold text-sm md:text-lg">ACTIVE</div>
            <div className="text-gray-400 text-xs font-mono">100% READY</div>
          </div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/80"></div>
        </div>
        
        {/* Mission Card */}
        <div className="relative border border-ogclan/30 bg-black/70 backdrop-blur-sm p-3 md:p-4 text-center group hover:border-ogclan/60 transition-all duration-300">
          <div className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-ogclan font-orbitron text-xs md:text-sm mb-1">MISSION</div>
            <div className="text-ogclan font-bold text-sm md:text-lg">DOMINATION</div>
            <div className="text-gray-400 text-xs font-mono">IN PROGRESS</div>
          </div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/80"></div>
        </div>
        
        {/* Squad Size Card */}
        <div className="relative border border-ogclan/30 bg-black/70 backdrop-blur-sm p-3 md:p-4 text-center group hover:border-ogclan/60 transition-all duration-300">
          <div className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-ogclan font-orbitron text-xs md:text-sm mb-1">SQUAD SIZE</div>
            <div className="text-ogclan font-bold text-sm md:text-lg">21 OPS</div>
            <div className="text-gray-400 text-xs font-mono">FULL STRENGTH</div>
          </div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/80"></div>
        </div>
        
        {/* Readiness Card */}
        <div className="relative border border-ogclan/30 bg-black/70 backdrop-blur-sm p-3 md:p-4 text-center group hover:border-ogclan/60 transition-all duration-300">
          <div className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="text-ogclan font-orbitron text-xs md:text-sm mb-1">READINESS</div>
            <div className="text-ogclan font-bold text-sm md:text-lg">MAXIMUM</div>
            <div className="text-gray-400 text-xs font-mono">COMBAT READY</div>
          </div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/80"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/80"></div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default TacticalStats;
