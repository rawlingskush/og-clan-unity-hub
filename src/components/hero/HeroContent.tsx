
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <div className="relative">
          {/* Minimal tactical header */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-ogclan/60"></div>
            <div className="flex space-x-2">
              <Zap className="h-4 w-4 text-ogclan/80 animate-pulse" />
              <div className="w-1 h-1 bg-ogclan/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <Zap className="h-4 w-4 text-ogclan/80 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-ogclan/60"></div>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 relative ${isMobile ? 'px-3' : ''}`}>
            <span className="font-orbitron tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light relative animate-[fade-in_1s_ease-out]">
              WELCOME TO OG CLAN
            </span>
            
            {/* Simple animated underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-ogclan to-transparent mt-2 animate-[scale-in_0.8s_ease-out_0.5s_both]"></div>
          </h1>
        </div>
        
        <AnimatedContent animation="fade-in-up" delay={600}>
          <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 mt-6">
            <span className="animate-[fade-in_1s_ease-out_0.7s_both]">Loyalty. Unity. Victory.</span> 
            <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
          </p>
        </AnimatedContent>
      </AnimatedContent>

      <AnimatedContent animation="fade-in-up" delay={800}>
        <div className="flex items-center justify-center mt-6 mb-8">
          <Gamepad2 className="h-5 w-5 text-ogclan mr-2 animate-[bounce_2s_infinite]" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan animate-[fade-in_1s_ease-out_1s_both]">
            CALL OF DUTY MOBILE
          </span>
        </div>
        
        {/* Clean info section */}
        <div className="relative mt-6 md:mt-8 max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-sm border border-ogclan/20 rounded-lg p-6 relative overflow-hidden animate-[fade-in_1s_ease-out_1.2s_both]">
            {/* Subtle animated scanning line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent animate-[scanner-line_4s_linear_infinite]"></div>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-6">
              <span className="text-gray-200 font-medium">
                Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby.
              </span>
              <br className="hidden md:block" />
              <span className="text-ogclan-light font-semibold mt-2 inline-block">
                Join Us, level up your game, and help write our epic legacy. Let's own this together!
              </span>
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
