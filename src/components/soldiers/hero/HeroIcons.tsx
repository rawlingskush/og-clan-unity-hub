
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield, Target, Crosshair } from 'lucide-react';

const HeroIcons = () => {
  return (
    <AnimatedContent animation="fade-in" delay={400}>
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Shield className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
        <div className="relative w-16 h-1">
          <div className="absolute inset-0 bg-ogclan/40"></div>
          <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite]"></div>
        </div>
        <Target className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
        <div className="relative w-16 h-1">
          <div className="absolute inset-0 bg-ogclan/40"></div>
          <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite_reverse]"></div>
        </div>
        <Crosshair className="text-ogclan h-7 w-7 drop-shadow-gold animate-pulse-slow" />
      </div>
    </AnimatedContent>
  );
};

export default HeroIcons;
