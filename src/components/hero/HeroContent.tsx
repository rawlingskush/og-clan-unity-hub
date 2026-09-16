import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import '@/styles/hero-animations.css';

const HeroContent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center relative z-10 px-1 sm:px-0 transition-all duration-1000 ease-out hero-smooth">
      {/* Enhanced OG Clan Logo Background - Bigger & Brighter */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="relative w-full max-w-[1000px] aspect-square transition-all duration-2000 ease-out">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain filter brightness-150 saturate-150 contrast-110 transition-all duration-1500 ease-out hover:brightness-200 hover:saturate-200"
            style={{
              filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.4)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.2)) brightness(1.5) saturate(1.5) contrast(1.1)",
              animation: "float 6s ease-in-out infinite"
            }}
            loading="eager"
            decoding="async"
            {...{ fetchpriority: "high" }}
            sizes="(max-width: 640px) 100vw, 1000px"
            aria-hidden="true"
          />
        </div>
      </div>

      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative font-orbitron bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold transition-all duration-1000 ease-out hover:scale-105"
          style={{
            backgroundSize: "300% 300%",
            animation: "gradientShift 6s ease-in-out infinite, glow-pulse 3s infinite, letterGlow 4s ease-in-out infinite",
            textShadow: "0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4), 0 0 100px rgba(212, 175, 55, 0.2)"
          }}
        >
          WELCOME TO OG CLAN
          {/* Enhanced HUD dots with stronger glow and smooth animations */}
          <span className="absolute -left-4 top-1/2 h-[6px] w-[6px] rounded-full bg-ogclan shadow-[0_0_25px_gold,0_0_50px_rgba(212,175,55,0.6)] transition-all duration-500"></span>
          <span className="absolute -right-4 top-1/2 h-[6px] w-[6px] rounded-full bg-ogclan-light shadow-[0_0_25px_gold,0_0_50px_rgba(212,175,55,0.6)] transition-all duration-500 opacity-90"></span>
        </h1>
        {/* SLOGAN: One Tapping Since 2020 - Enhanced visibility */}
        <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-ogclan/60 bg-black/90 backdrop-blur-sm my-2 mb-3 shadow-lg transition-all duration-700 ease-out hover:border-ogclan hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-black/95">
          <span className="text-ogclan-light font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-500 hover:text-ogclan">
            ONE TAPPING SINCE 2020
          </span>
        </div>
        <p className="text-base xs:text-lg sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-1 sm:gap-2 relative transition-all duration-1000 ease-out">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-ogclan after:to-transparent after:transform-gpu animate-fade-in drop-shadow-sm transition-all duration-800 hover:after:h-[2px] hover:after:shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            Loyalty. Unity. Victory.
          </span>
          <Flame className="inline-block h-4 w-4 xs:h-5 xs:w-5 md:h-6 md:w-6 text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,1)] transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]" />
        </p>
      </AnimatedContent>
      <AnimatedContent animation="fade-in-up" delay={700}>
        <div className="flex items-center justify-center mt-2 sm:mt-3 mb-2 sm:mb-5 transition-all duration-1000 ease-out hover:scale-105">
          <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-ogclan mr-1 sm:mr-2 transition-all duration-500 hover:rotate-12 hover:text-ogclan-light" />
          <span className="text-base xs:text-lg md:text-2xl font-orbitron text-ogclan transition-all duration-700 hover:text-ogclan-light hover:tracking-widest">
            CALL OF DUTY MOBILE
          </span>
        </div>
        <p className="mt-2 md:mt-4 text-xs xs:text-sm sm:text-lg md:text-xl max-w-3xl sm:max-w-6xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-4 relative transition-all duration-1200 ease-out">
          <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm transition-all duration-1000 hover:from-gray-100 hover:via-white hover:to-gray-100">
            Since 2020, OG Clan has stood as Cameroon's strongest CODM squad, uniting 70+ loyal players under one banner. We're about more than wins — we're about growth, teamwork, and building a family that dominates together.
          </span>
          <span className="block text-balance bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-0.5 sm:mt-2 drop-shadow transition-all duration-1000 hover:from-ogclan hover:via-ogclan-light hover:to-ogclan">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
