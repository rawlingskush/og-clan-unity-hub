
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ArrowDown } from 'lucide-react';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black/60 border border-ogclan/40 hover:border-ogclan transition-all duration-300 hover:scale-105 group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-ogclan group-hover:text-ogclan-light group-hover:drop-shadow-gold transition-colors duration-300 animate-bounce animation-delay-1200" />
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
