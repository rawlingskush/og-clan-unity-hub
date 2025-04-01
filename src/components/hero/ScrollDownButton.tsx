
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ArrowDown } from 'lucide-react';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/60 border-2 border-ogclan/50 hover:border-ogclan shadow-lg hover:shadow-ogclan/30 transition-all duration-300 hover:translate-y-1 group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-ogclan group-hover:text-ogclan-light animate-bounce animation-delay-1200" />
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
