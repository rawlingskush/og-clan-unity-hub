
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollDownButton = () => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    const timerSection = document.getElementById('battle-night-timer');
    if (timerSection) {
      window.scrollTo({
        top: timerSection.offsetTop - 100,
        behavior: 'auto'
      });
    } else {
      const nextSection = document.getElementById('og-battle-night');
      if (nextSection) {
        window.scrollTo({
          top: nextSection.offsetTop - 80,
          behavior: 'auto'
        });
      }
    }
  };

  return (
    <AnimatedContent animation="fade-in-up" delay={1200}>
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className={`group relative rounded-full ${isMobile ? 'p-2' : 'p-3'} bg-black/50 border border-ogclan/30 
                  hover:bg-black/80 hover:border-ogclan transition-all duration-300 backdrop-blur-sm
                  hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95`}
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full border border-ogclan/20 animate-ping opacity-0 group-hover:opacity-75"></span>
        <span className="absolute inset-2 rounded-full bg-ogclan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        
        <ChevronDown className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-ogclan group-hover:text-ogclan-light transition-all duration-200 animate-bounce relative z-10`} />
      </button>
    </AnimatedContent>
  );
};

export default ScrollDownButton;
