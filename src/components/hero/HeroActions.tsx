
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Calendar, ArrowRight, Target, Users, Sparkles } from 'lucide-react';
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
      <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Enhanced primary CTA */}
        <a 
          href="#join" 
          className="btn-primary group relative overflow-hidden mx-auto sm:mx-0 bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] active:scale-[0.98] inline-flex items-center justify-center transform hover:scale-105"
          onClick={(e) => handleSmoothScroll(e, 'join')}
        >
          {/* Animated background effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          
          <span className="relative z-10 flex items-center">
            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
            Join OG Clan
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 bg-ogclan/20 blur-lg group-hover:blur-xl transition-all duration-300 -z-10"></span>
        </a>
        
        {/* Enhanced secondary actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
          <button 
            className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-tactical-highlight to-tactical-highlight/80 text-black font-medium rounded-lg transition-all duration-300 hover:from-tactical-highlight/90 hover:to-tactical-highlight hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.98] overflow-hidden"
            onClick={() => navigate('/soldiers')}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
            <Users className="mr-2 h-5 w-5 relative z-10" />
            <span className="text-sm sm:text-base relative z-10">Our Soldiers</span>
          </button>
          
          <a 
            href="#og-battle-night" 
            className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/40 rounded-lg text-ogclan bg-black/60 hover:bg-black/80 hover:border-ogclan/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] overflow-hidden backdrop-blur-sm"
            onClick={(e) => handleSmoothScroll(e, 'og-battle-night')}
          >
            <span className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Calendar className="mr-2 h-5 w-5 relative z-10" />
            <span className="text-sm sm:text-base relative z-10">Clan Events</span>
          </a>
          
          <a 
            href="#about" 
            className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-ogclan/40 rounded-lg text-ogclan bg-black/60 hover:bg-black/80 hover:border-ogclan/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] overflow-hidden backdrop-blur-sm"
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            <span className="absolute inset-0 bg-ogclan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Target className="mr-2 h-5 w-5 relative z-10" />
            <span className="text-sm sm:text-base relative z-10">About OG Clan</span>
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default HeroActions;
