
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollDownButton = () => {
  const isMobile = useIsMobile();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('og-battle-night');
    if (nextSection) {
      // Using scrollIntoView with options that work well across devices
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
        className={`group relative rounded-full ${isMobile ? 'p-1.5' : 'p-2'} bg-black/40 border border-ogclan/20 
                  hover:bg-black/70 hover:border-ogclan transition-all duration-200`}
      >
        <ChevronDown className={`${isMobile ? 'h-3.5 w-3.5' : 'h-4 w-4'} text-ogclan group-hover:text-ogclan-light transition-all duration-200 animate-bounce`} />
      </button>
    </AnimatedContent>
  );
};

export default ScrollDownButton;
