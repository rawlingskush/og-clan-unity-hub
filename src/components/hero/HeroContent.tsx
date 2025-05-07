
import React, { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';

// Stats that will be animated
const clanStats = [
  { label: 'Pro Players', value: 23, suffix: '+' },
  { label: 'Tournaments', value: 48, suffix: '+' },
  { label: 'Victories', value: 357, suffix: '' },
];

const HeroContent = () => {
  // Animation state for counting effect
  const [counters, setCounters] = useState(clanStats.map(() => 0));
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Trigger counting animation when component is visible
  useEffect(() => {
    if (!animationTriggered) {
      const timer = setTimeout(() => {
        setAnimationTriggered(true);
      }, 600);
      
      return () => clearTimeout(timer);
    }
    
    if (animationTriggered) {
      const intervals = clanStats.map((stat, index) => {
        return setInterval(() => {
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(
                newCounters[index] + Math.max(1, Math.floor(stat.value / 50)),
                stat.value
              );
            }
            return newCounters;
          });
        }, 30);
      });
      
      return () => intervals.forEach(clearInterval);
    }
  }, [animationTriggered]);

  return (
    <div className="text-center max-w-3xl mx-auto relative z-20">
      <AnimatedContent animation="fade-in" delay={300}>
        <h1 className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-light text-ogclan mb-2">WELCOME TO</span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient-gold">
            OG CLAN CAMEROON
          </span>
        </h1>
      </AnimatedContent>
      
      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Cameroon's elite gaming community, where passion meets skill and loyalty is rewarded. From casual matches to competitive tournaments, we bring players together.
        </p>
      </AnimatedContent>
      
      {/* Tactical separator with animated scanner line */}
      <div className="relative h-px w-40 mx-auto my-8">
        <div className="absolute inset-0 bg-ogclan/30"></div>
        <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
      </div>
      
      {/* Animated stats counters */}
      <AnimatedContent animation="scale-in" delay={900}>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
          {clanStats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Tactical corner elements */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/60"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ogclan/60"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ogclan/60"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/60"></div>
              
              <div className="px-4 py-3 bg-black/30 backdrop-blur-sm border border-ogclan/20">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
      
      {/* Additional tactical decoration */}
      <div className="relative h-px w-full max-w-xl mx-auto mt-12">
        <div className="absolute inset-0 bg-ogclan/20"></div>
        <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/80 animate-[scanner-line_4s_linear_infinite_reverse]"></div>
      </div>
    </div>
  );
};

export default HeroContent;
