
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Calendar, Target } from 'lucide-react';

const HeroActions = () => {
  return (
    <AnimatedContent animation="fade-in-up" delay={900}>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#join" className="btn-primary group">
          Join Your Squad
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#og-battle-night" className="inline-flex items-center justify-center px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 transition-colors">
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Events
          </a>
          <a href="#og-battle-night" className="inline-flex items-center justify-center px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 transition-colors">
            <Target className="mr-2 h-5 w-5" />
            Challenge Our Squad
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroActions;
