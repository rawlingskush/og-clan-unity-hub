
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative">
          <span className="relative inline-block">
            {/* Main text with enhanced styling */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light drop-shadow-gold inline-block relative">
              WELCOME TO OG CLAN
            </span>
            
            {/* Text glow effect */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light blur-[2px] opacity-70 animate-pulse-slow"></span>
            
            {/* Horizontal lines for gaming aesthetic */}
            <span className="absolute -left-4 sm:-left-6 md:-left-10 top-1/2 w-3 sm:w-5 md:w-8 h-[2px] bg-ogclan"></span>
            <span className="absolute -right-4 sm:-right-6 md:-right-10 top-1/2 w-3 sm:w-5 md:w-8 h-[2px] bg-ogclan"></span>
          </span>
          
          {/* Background glow */}
          <span className="absolute -inset-1 bg-gradient-to-r from-ogclan-dark/0 via-ogclan/20 to-ogclan-light/0 blur-xl opacity-30 animate-pulse-slow -z-10"></span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/50 after:transform-gpu animate-fade-in">
            Loyalty. Unity. Victory.
          </span> 
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
        </p>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={600}>
        <p className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-balance leading-relaxed px-2">
          Welcome to OG Clan—Cameroon's biggest gaming crew, uniting 35 passionate players since 2020. We're all about loyalty, growth, and crushing it in every match. Join us to level up, make memories, and become part of a legacy that's just getting started.
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
