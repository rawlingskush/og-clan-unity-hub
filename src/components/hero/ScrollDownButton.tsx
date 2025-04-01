
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollDownButton = () => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('og-battle-night');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: 'auto'
      });
    }
  };

  return (
    <AnimatedContent animation="fade-in-up" delay={1200}>
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className={`group relative rounded-full ${isMobile ? 'p-1' : 'p-1.5'} bg-black/40 border border-ogclan/20 
                  hover:bg-black/70 hover:border-ogclan/50 transition-all duration-300`}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-ogclan/0 via-ogclan/20 to-ogclan/0 opacity-0 group-hover:opacity-60"></span>
        <ChevronDown className={`${isMobile ? 'h-3 w-3' : 'h-3.5 w-3.5'} text-ogclan group-hover:text-ogclan-light transition-all duration-300`} />
      </button>
    </AnimatedContent>
  );
};

export default ScrollDownButton;
