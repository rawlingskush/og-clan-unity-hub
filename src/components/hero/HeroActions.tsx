
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Calendar, ArrowRight, Target } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroActions = () => {
  const isMobile = useIsMobile();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'auto'
      });
    }
  };

  return (
    <AnimatedContent animation="fade-in-up" delay={900}>
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#join" 
          className="btn-primary group relative overflow-hidden mx-auto sm:mx-0"
          onClick={(e) => handleSmoothScroll(e, 'join')}
        >
          <span className="relative z-10 flex items-center">
            Join OG Clan
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
          <a 
            href="#og-battle-night" 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 hover:border-ogclan/60 transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]"
            onClick={(e) => handleSmoothScroll(e, 'og-battle-night')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">Clan Events</span>
          </a>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 hover:border-ogclan/60 transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            <Target className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">About OG Clan</span>
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroActions;
