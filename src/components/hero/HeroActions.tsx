
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Calendar, ArrowRight, Target, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const HeroActions = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Special case for og-battle-night - scroll to the timer directly
    if (targetId === 'og-battle-night') {
      const timerSection = document.getElementById('battle-night-timer');
      if (timerSection) {
        const offsetTop = timerSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'auto'
        });
        return;
      }
    }
    
    // For other sections, use normal scrolling
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
          className="btn-primary group relative overflow-hidden mx-auto sm:mx-0 bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98] inline-flex items-center justify-center"
          onClick={(e) => handleSmoothScroll(e, 'join')}
        >
          <span className="relative z-10 flex items-center">
            Join OG Clan
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
          <button 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-tactical-highlight to-tactical-highlight/80 text-black font-medium rounded-lg transition-all duration-300 hover:from-tactical-highlight/90 hover:to-tactical-highlight hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-[0.98]"
            onClick={() => navigate('/soldiers')}
          >
            <Users className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">Our Soldiers</span>
          </button>
          
          <button 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-500 hover:to-purple-400 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] active:scale-[0.98]"
            onClick={() => navigate('/soldiers?view=tiers')}
          >
            <Target className="mr-2 h-5 w-5" />
            <span className="text-sm sm:text-base">Tier Tracker</span>
          </button>
          
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
