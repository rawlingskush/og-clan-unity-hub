
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';

interface HeroTitleProps {
  isVisible: boolean;
}

const HeroTitle = ({ isVisible }: HeroTitleProps) => {
  return (
    <AnimatedContent animation="scale-in" delay={200}>
      <div className="relative mb-3">
        {/* Tactical decoration */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 flex">
          <div className="flex-1 h-full bg-ogclan/20"></div>
          <div className="w-20 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-ogclan/20"></div>
            <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
          </div>
          <div className="flex-1 h-full bg-ogclan/20"></div>
        </div>
        
        <h1 
          className="text-5xl font-orbitron font-bold text-gradient-gold mb-2 relative inline-block tracking-wider"
          style={{ animation: 'digital-glitch 8s infinite' }}
        >
          {/* Letter-by-letter animation */}
          {"OUR SOLDIERS".split("").map((letter, index) => (
            <span 
              key={index} 
              className="inline-block"
              style={{
                animation: `fade-in 0.5s ease-out forwards, scale-in 0.3s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(10px)'
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        
        {/* Enhanced tactical bottom border */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-1 flex">
          <div className="flex-1 h-full bg-ogclan/20"></div>
          <div className="w-20 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-ogclan/20"></div>
            <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan animate-[scanner-line_3s_linear_infinite_reverse]"></div>
          </div>
          <div className="flex-1 h-full bg-ogclan/20"></div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroTitle;
