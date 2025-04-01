
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollDownButton = () => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('og-battle-night');
    if (nextSection) {
      // Use scrollTo with specific offset for better iOS compatibility
      window.scrollTo({
        top: nextSection.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatedContent animation="fade-in-up" delay={1200}>
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className={`group relative rounded-full ${isMobile ? 'p-2.5' : 'p-3'} bg-black/40 border border-ogclan/20 
                  hover:bg-black/70 hover:border-ogclan transition-all duration-300
                  before:absolute before:inset-0 before:rounded-full before:bg-ogclan/0 
                  before:z-[-1] hover:before:bg-ogclan/20 before:transition-all before:duration-500
                  after:absolute after:inset-[-2px] after:rounded-full after:bg-gradient-to-r 
                  after:from-ogclan/0 after:via-ogclan/80 after:to-ogclan/0 after:opacity-0 
                  hover:after:opacity-100 after:blur-sm after:z-[-2] after:transition-opacity after:duration-500
                  active:scale-95`}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-ogclan/0 via-ogclan/30 to-ogclan/0 opacity-0 group-hover:opacity-100 animate-pulse-slow"></span>
        <ChevronDown className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-ogclan group-hover:text-ogclan-light group-hover:drop-shadow-gold-lg transition-all duration-300 group-hover:scale-110 animate-float`} />
      </button>
    </AnimatedContent>
  );
};

export default ScrollDownButton;
