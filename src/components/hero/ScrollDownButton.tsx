
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ArrowDown } from 'lucide-react';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-black/60 border border-ogclan/40 hover:border-ogclan transition-all duration-300 hover:scale-105 group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-ogclan group-hover:text-ogclan-light group-hover:drop-shadow-gold transition-colors duration-300 animate-bounce animation-delay-1200" />
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
