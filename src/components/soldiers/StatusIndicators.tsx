
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

const StatusIndicators = () => {
  return (
    <AnimatedContent animation="fade-in" delay={1200}>
      <div className="flex items-center justify-center space-x-8 mt-8 text-sm font-mono">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-gray-300">COMMS ACTIVE</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-ogclan animate-pulse"></div>
          <span className="text-gray-300">GPS LOCKED</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-gray-300">WEAPONS HOT</span>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default StatusIndicators;
