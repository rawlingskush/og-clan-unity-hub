
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  // Hide the button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToNextSection = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <button
      onClick={scrollToNextSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      aria-label="Scroll down"
    >
      <div className="flex flex-col items-center">
        <div className="text-xs text-ogclan mb-1">Scroll Down</div>
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Animated pulse backdrop */}
          <div 
            className={`absolute w-full h-full rounded-full bg-ogclan/10 transform transition-all duration-300 ${
              isHovered ? 'scale-150 opacity-70' : 'scale-100 opacity-30'
            }`}
          ></div>
          
          {/* Outer ring */}
          <div 
            className={`absolute w-full h-full rounded-full border border-ogclan/50 transform transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          ></div>
          
          {/* Arrow icon with bounce animation */}
          <ChevronDown 
            className={`relative z-10 text-ogclan w-5 h-5 transition-transform ${
              isHovered ? 'animate-[float_1s_infinite_ease-in-out]' : ''
            }`} 
          />
        </div>
      </div>
    </button>
  );
};

export default ScrollDownButton;
