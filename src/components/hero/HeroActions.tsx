
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
      <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Primary CTA */}
        <a 
          href="#join" 
          className="group bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transform hover:scale-105 inline-flex items-center justify-center"
          onClick={(e) => handleSmoothScroll(e, 'join')}
        >
          <span className="flex items-center">
            Join OG Clan
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
        
        {/* Secondary actions */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button 
            className="inline-flex items-center justify-center px-6 py-3 bg-black/50 border border-ogclan/30 text-ogclan font-medium rounded-lg transition-all duration-300 hover:bg-black/70 hover:border-ogclan/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            onClick={() => navigate('/soldiers')}
          >
            <Users className="mr-2 h-5 w-5" />
            <span>Our Soldiers</span>
          </button>
          
          <a 
            href="#og-battle-night" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black/50 border border-ogclan/30 text-ogclan font-medium rounded-lg transition-all duration-300 hover:bg-black/70 hover:border-ogclan/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            onClick={(e) => handleSmoothScroll(e, 'og-battle-night')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            <span>Clan Events</span>
          </a>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black/50 border border-ogclan/30 text-ogclan font-medium rounded-lg transition-all duration-300 hover:bg-black/70 hover:border-ogclan/60 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            <Target className="mr-2 h-5 w-5" />
            <span>About OG Clan</span>
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroActions;
