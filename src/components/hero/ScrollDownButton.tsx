
import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';

const ScrollDownButton = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('og-battle-night');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedContent animation="fade-in-up" delay={1200}>
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
        className="rounded-full p-2 bg-black/40 border border-ogclan/20 hover:bg-black/60 hover:border-ogclan/40 transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <ChevronDown className="h-4 w-4 text-ogclan" />
      </button>
    </AnimatedContent>
  );
};

export default ScrollDownButton;
