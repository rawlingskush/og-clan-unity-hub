
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollDownButton = () => {
  return (
    <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 flex justify-center">
      <AnimatedContent animation="fade-in" delay={1500}>
        <a 
          href="#about" 
          className="relative group"
          aria-label="Scroll down"
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Button container */}
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-black to-black/80 rounded-full border-2 border-ogclan overflow-hidden z-10 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-500 group-hover:scale-110">
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-ogclan/5 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Moving light effect on hover */}
            <div className="absolute inset-0 before:absolute before:content-[''] before:top-0 before:left-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-ogclan/0 before:via-ogclan/20 before:to-ogclan/0 group-hover:before:w-full before:transition-all before:duration-700"></div>
            
            {/* Arrow with animation */}
            <div className="relative flex items-center justify-center transform group-hover:translate-y-1 transition-transform duration-300">
              <ChevronDown className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-ogclan/50 animate-pulse" />
              <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-ogclan group-hover:text-ogclan-light transition-colors duration-300" />
            </div>
          </div>
          
          {/* Text label that appears on hover */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-ogclan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Scroll Down
          </div>
        </a>
      </AnimatedContent>
    </div>
  );
};

export default ScrollDownButton;
