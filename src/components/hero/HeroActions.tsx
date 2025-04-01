
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Calendar, Target } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActions = () => {
  const isMobile = useIsMobile();
  
  return (
    <AnimatedContent animation="fade-in-up" delay={900}>
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#join" className="btn-primary group">
          Join Your Squad
          <span className="inline-block ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            →
          </span>
        </a>
        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
          <a href="#og-battle-night" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 hover:border-ogclan/50 hover:text-ogclan-light transition-all duration-300 ease-in-out hover-lift hover-glow">
            <Calendar className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">Upcoming Events</span>
          </a>
          <a href="#og-battle-night" className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 hover:border-ogclan/50 hover:text-ogclan-light transition-all duration-300 ease-in-out hover-lift hover-glow">
            <Target className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">Challenge Our Squad</span>
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroActions;
