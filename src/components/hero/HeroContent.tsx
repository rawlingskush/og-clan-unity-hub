import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center relative z-10 px-1 sm:px-0">
      {/* Enhanced OG Clan Logo Background - Bigger & Brighter */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 pointer-events-none animate-pulse-slow">
        <div className="relative w-full max-w-[1000px] aspect-square">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain filter brightness-150 saturate-150 contrast-110"
            style={{
              filter: "drop-shadow(0 0 30px rgba(212, 175, 55, 0.4)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.2)) brightness(1.5) saturate(1.5) contrast(1.1)"
            }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, 1000px"
            aria-hidden="true"
          />
        </div>
      </div>

      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative font-orbitron bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold animate-gradient-blink"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease-in-out infinite, glow-pulse 2.2s infinite",
            textShadow: "0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.3)"
          }}
        >
          WELCOME TO OG CLAN
          {/* Enhanced HUD dots with stronger glow */}
          <span className="absolute -left-4 top-1/2 h-[6px] w-[6px] rounded-full bg-ogclan shadow-[0_0_20px_gold,0_0_40px_rgba(212,175,55,0.5)] animate-pulse-slow"></span>
          <span className="absolute -right-4 top-1/2 h-[6px] w-[6px] rounded-full bg-ogclan-light shadow-[0_0_20px_gold,0_0_40px_rgba(212,175,55,0.5)] animate-pulse-slow animation-delay-300"></span>
        </h1>
        {/* SLOGAN: One Tapping Since 2020 - Enhanced visibility */}
        <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-ogclan/60 bg-black/90 backdrop-blur-sm my-2 mb-3 shadow-lg">
          <span className="text-ogclan-light font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase">
            ONE TAPPING SINCE 2020
          </span>
        </div>
        <p className="text-base xs:text-lg sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-1 sm:gap-2 relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-ogclan after:to-transparent after:transform-gpu animate-fade-in drop-shadow-sm">
            Loyalty. Unity. Victory.
          </span>
          <Flame className="inline-block h-4 w-4 xs:h-5 xs:w-5 md:h-6 md:w-6 text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        </p>
      </AnimatedContent>
      <AnimatedContent animation="fade-in-up" delay={700}>
        <div className="flex items-center justify-center mt-2 sm:mt-3 mb-2 sm:mb-5">
          <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-ogclan mr-1 sm:mr-2" />
          <span className="text-base xs:text-lg md:text-2xl font-orbitron text-ogclan animate-pulse-slow">
            CALL OF DUTY MOBILE
          </span>
        </div>
        <p className="mt-2 md:mt-4 text-xs xs:text-sm sm:text-lg md:text-xl max-w-3xl sm:max-w-6xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-4 relative">
          <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm">
            Since 2020, OG Clan has stood as Cameroon's strongest CODM squad, uniting 50+ loyal players under one banner. We're about more than wins — we're about growth, teamwork, and building a family that dominates together.
          </span>
          <span className="block text-balance bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-0.5 sm:mt-2 drop-shadow">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
