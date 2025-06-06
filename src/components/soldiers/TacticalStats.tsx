
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

const TacticalStats = () => {
  return (
    <AnimatedContent animation="fade-in" delay={1000}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Status Card */}
        <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
          <div className="text-ogclan font-orbitron text-sm mb-1">STATUS</div>
          <div className="text-ogclan font-bold text-lg">ACTIVE</div>
          <div className="text-gray-400 text-xs font-mono">100% READY</div>
        </div>
        
        {/* Mission Card */}
        <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
          <div className="text-ogclan font-orbitron text-sm mb-1">MISSION</div>
          <div className="text-ogclan font-bold text-lg">DOMINATION</div>
          <div className="text-gray-400 text-xs font-mono">IN PROGRESS</div>
        </div>
        
        {/* Squad Size Card */}
        <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
          <div className="text-ogclan font-orbitron text-sm mb-1">SQUAD SIZE</div>
          <div className="text-ogclan font-bold text-lg">21 OPERATORS</div>
          <div className="text-gray-400 text-xs font-mono">FULL STRENGTH</div>
        </div>
        
        {/* Readiness Card */}
        <div className="border border-ogclan/30 bg-black/60 backdrop-blur-sm p-4 text-center">
          <div className="text-ogclan font-orbitron text-sm mb-1">READINESS</div>
          <div className="text-ogclan font-bold text-lg">MAXIMUM</div>
          <div className="text-gray-400 text-xs font-mono">COMBAT READY</div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default TacticalStats;
