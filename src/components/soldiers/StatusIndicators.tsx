
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

const StatusIndicators = () => {
  return (
    <AnimatedContent animation="fade-in" delay={1200}>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 mt-6 md:mt-8 text-xs md:text-sm font-mono">
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500/30 animate-ping"></div>
          </div>
          <span className="text-gray-300 group-hover:text-green-400 transition-colors duration-300">COMMS ACTIVE</span>
        </div>
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-ogclan animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-ogclan/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <span className="text-gray-300 group-hover:text-ogclan transition-colors duration-300">GPS LOCKED</span>
        </div>
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-500/30 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          <span className="text-gray-300 group-hover:text-red-400 transition-colors duration-300">WEAPONS HOT</span>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default StatusIndicators;
