
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ArrowDown } from 'lucide-react';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/60 border border-ogclan/40 hover:border-ogclan transition-all duration-300 hover:scale-105 group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-ogclan group-hover:text-ogclan-light transition-colors duration-300 animate-bounce animation-delay-1200" />
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
