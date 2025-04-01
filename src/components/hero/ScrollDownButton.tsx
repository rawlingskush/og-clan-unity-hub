
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ArrowDown } from 'lucide-react';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black/60 border-2 border-ogclan/50 hover:border-ogclan shadow-lg hover:shadow-ogclan/30 transition-all duration-500 ease-in-out hover:translate-y-1 group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-ogclan group-hover:text-ogclan-light transition-colors duration-300 ease-in-out animate-bounce animation-delay-1200" />
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
