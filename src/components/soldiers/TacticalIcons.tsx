
import React from 'react';
import { Shield, Target, Crosshair, Users, Zap, Radar } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const TacticalIcons = () => {
  return (
    <AnimatedContent animation="fade-in" delay={200}>
      <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-6 md:mb-8">
        <div className="relative group">
          <Target className="text-ogclan h-5 w-5 md:h-8 md:w-8 animate-pulse-slow transition-all duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping"></div>
        </div>
        <div className="relative group">
          <Shield className="text-ogclan h-5 w-5 md:h-8 md:w-8 animate-pulse-slow transition-all duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="relative group">
          <Zap className="text-ogclan h-5 w-5 md:h-8 md:w-8 animate-pulse-slow transition-all duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative group">
          <Crosshair className="text-ogclan h-5 w-5 md:h-8 md:w-8 animate-pulse-slow transition-all duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="relative group">
          <Users className="text-ogclan h-5 w-5 md:h-8 md:w-8 animate-pulse-slow transition-all duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default TacticalIcons;
