
import React from 'react';
import { Shield, Target, Crosshair, Users, Zap } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const TacticalIcons = () => {
  return (
    <AnimatedContent animation="fade-in" delay={200}>
      <div className="flex items-center justify-center space-x-8 mb-8">
        <Target className="text-ogclan h-8 w-8 animate-pulse-slow" />
        <Shield className="text-ogclan h-8 w-8 animate-pulse-slow" />
        <Zap className="text-ogclan h-8 w-8 animate-pulse-slow" />
        <Crosshair className="text-ogclan h-8 w-8 animate-pulse-slow" />
        <Users className="text-ogclan h-8 w-8 animate-pulse-slow" />
      </div>
    </AnimatedContent>
  );
};

export default TacticalIcons;
