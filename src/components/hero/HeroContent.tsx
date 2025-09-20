import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { Flame, Gamepad2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center relative z-10 px-1 sm:px-0">
      {/* Enhanced OG Clan Logo Background - Bigger & Brighter */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-25 pointer-events-none">
        <div className="relative w-full max-w-[1000px] aspect-square animate-pulse-slow">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="" 
            className="w-full h-full object-contain scale-110 animate-[glow_4s_ease-in-out_infinite]"
            style={{
              filter: "drop-shadow(0 0 40px rgba(212, 175, 55, 0.6)) brightness(1.5) saturate(1.8) contrast(1.2)"
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
          className="text-3xl xs:text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-2 md:mb-3 relative font-orbitron bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold animate-[digital-glitch_6s_infinite]"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientShift 4s ease-in-out infinite, glow-pulse 2.2s infinite, textGlow 3s ease-in-out infinite",
            textShadow: "0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.4)"
          }}
        >
          ⚡ ELITE OG CLAN COMMAND ⚡
          {/* Enhanced HUD elements */}
          <span className="absolute -left-6 top-1/2 h-[8px] w-[8px] rounded-full bg-ogclan animate-[radar-ping_2s_infinite] shadow-[0_0_20px_gold]"></span>
          <span className="absolute -right-6 top-1/2 h-[8px] w-[8px] rounded-full bg-ogclan-light animate-[radar-ping_2s_infinite] shadow-[0_0_20px_gold]" style={{animationDelay: '1s'}}></span>
          
          {/* Tactical scanning lines */}
          <div className="absolute -top-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ogclan to-transparent animate-[scan-horizontal_3s_infinite]"></div>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent animate-[scan-horizontal_3s_infinite]" style={{animationDelay: '1.5s'}}></div>
        </h1>
        {/* Enhanced Status Badge */}
        <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-ogclan bg-gradient-to-r from-black via-black/95 to-black backdrop-blur-md my-3 mb-4 shadow-[0_0_30px_rgba(212,175,55,0.5)] animate-[tactical-target_3s_infinite]">
          <span className="text-ogclan font-orbitron font-bold text-sm sm:text-lg tracking-widest uppercase animate-[digital-glitch_4s_infinite]">
            🎯 DOMINATING SINCE 2020 🎯
          </span>
        </div>
        <div className="relative inline-block">
          <p className="text-lg xs:text-xl sm:text-3xl md:text-4xl text-ogclan-light font-bold flex items-center justify-center gap-2 sm:gap-3 relative animate-[tactical-fade-in_2s_ease-out]">
            <Flame className="inline-block h-6 w-6 xs:h-7 xs:w-7 md:h-8 md:w-8 text-red-500 animate-[radar-ping_1.5s_infinite]" />
            <span className="relative bg-gradient-to-r from-ogclan via-gold to-ogclan-light bg-clip-text text-transparent font-orbitron tracking-wide">
              LOYALTY • UNITY • VICTORY
            </span>
            <Flame className="inline-block h-6 w-6 xs:h-7 xs:w-7 md:h-8 md:w-8 text-red-500 animate-[radar-ping_1.5s_infinite]" style={{animationDelay: '0.75s'}} />
          </p>
          {/* Tactical grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(212,175,55,0.1)_50%,transparent_51%),linear-gradient(rgba(212,175,55,0.1)_49%,transparent_50%,transparent_51%)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>
        </div>
      </AnimatedContent>
      <AnimatedContent animation="fade-in-up" delay={700}>
        <div className="flex items-center justify-center mt-2 sm:mt-3 mb-2 sm:mb-5">
          <Gamepad2 className="h-5 w-5 sm:h-6 sm:w-6 text-ogclan mr-1 sm:mr-2" />
          <span className="text-base xs:text-lg md:text-2xl font-orbitron text-ogclan animate-pulse-slow">
            CALL OF DUTY MOBILE
          </span>
        </div>
        <div className="relative mt-4 md:mt-6 max-w-4xl sm:max-w-6xl mx-auto px-2 xs:px-4 sm:px-6">
          {/* Enhanced mission briefing */}
          <div className="bg-gradient-to-r from-black/80 via-black/90 to-black/80 backdrop-blur-lg rounded-xl border border-ogclan/40 p-4 sm:p-6 shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-[tactical-fade-in_1.5s_ease-out]">
            <div className="text-center relative">
              <div className="inline-block px-3 py-1 bg-ogclan/20 rounded-full border border-ogclan/40 mb-3">
                <span className="text-xs sm:text-sm font-orbitron font-bold text-ogclan tracking-widest uppercase">MISSION BRIEFING</span>
              </div>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed mb-3">
                <span className="text-balance inline-block bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent font-medium">
                  🎮 Welcome to the battlefield, soldier! You've infiltrated OG Clan's command center - Cameroon's most elite Call of Duty Mobile unit operating since 2020.
                </span>
              </p>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed mb-3">
                <span className="text-balance bg-gradient-to-r from-ogclan-light via-gold to-ogclan-light bg-clip-text text-transparent font-semibold">
                  Our 50+ tactical operators are battle-tested legends who dominate every match. Ready to join the ranks and forge gaming history?
                </span>
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ogclan/20 to-gold/20 rounded-lg border border-ogclan/60">
                <span className="text-sm sm:text-base font-orbitron font-bold bg-gradient-to-r from-ogclan to-gold bg-clip-text text-transparent">
                  STATUS: RECRUITING ELITE WARRIORS
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HeroContent;
