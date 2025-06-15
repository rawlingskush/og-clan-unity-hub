
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center relative z-10">
      <AnimatedContent animation="fade-in-up" delay={300}>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 md:mb-3 relative font-orbitron bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold animate-gradient-blink"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease-in-out infinite, glow-pulse 2.2s infinite"
          }}
        >
          WELCOME TO OG CLAN
          {/* Blinking HUD dots left/right */}
          <span className="absolute -left-4 top-1/2 h-[5px] w-[5px] rounded-full bg-ogclan shadow-[0_0_12px_gold] animate-pulse-slow"></span>
          <span className="absolute -right-4 top-1/2 h-[5px] w-[5px] rounded-full bg-ogclan-light shadow-[0_0_12px_gold] animate-pulse-slow animation-delay-300"></span>
        </h1>
        {/* SLOGAN: One Tapping Since 2020 */}
        <div 
          className="inline-block px-5 py-2 rounded-lg border border-ogclan/30 bg-black/40 shadow-[0_0_24px_3px_rgba(212,175,55,0.06)] my-2 mb-3
            text-gradient-gold font-orbitron text-lg sm:text-xl md:text-2xl tracking-wide
            animate-pulse-slow transition-all 
            hover:text-glitch hover:drop-shadow-gold"
        >
          <span className="glitch-box" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.13em'}}>
            ONE TAPPING SINCE 2020
          </span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-ogclan-light font-semibold flex items-center justify-center gap-2 relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-ogclan/50 after:transform-gpu animate-fade-in">
            Loyalty. Unity. Victory.
          </span>
          <Flame className="inline-block h-5 w-5 md:h-6 md:w-6 text-red-500 animate-pulse" />
        </p>
      </AnimatedContent>
      <AnimatedContent animation="fade-in-up" delay={700}>
        <div className="flex items-center justify-center mt-3 mb-5">
          <Gamepad2 className="h-6 w-6 text-ogclan mr-2" />
          <span className="text-xl md:text-2xl font-orbitron text-ogclan animate-pulse-slow">
            CALL OF DUTY MOBILE
          </span>
        </div>
        <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl max-w-6xl mx-auto leading-relaxed px-4 sm:px-6 relative">
          <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-clip-text text-transparent font-medium drop-shadow-sm">Gear up, gamer! You've just landed at OG Clan, Cameroon's top-tier Call of Duty Mobile squad since 2020. We're 50+ hardcore players strong, fueled by loyalty, growth, and dominating every lobby. Whether you're here to frag out or vibe with the crew, there's a spot for you.</span>
          <span className="text-balance inline-block bg-gradient-to-r from-ogclan-light/90 via-ogclan/80 to-ogclan-light/90 bg-clip-text text-transparent font-semibold mt-2 drop-shadow">
            Join Us, level up your game, and help write our epic legacy. Let's own this together!
          </span>
        </p>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;

