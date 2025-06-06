
import React from 'react';
import { Zap, Activity } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import TacticalIcons from './TacticalIcons';

const HUDContainer = () => {
  return (
    <div className="relative border border-ogclan/40 bg-black/90 backdrop-blur-md p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Enhanced HUD Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-ogclan animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-ogclan animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-l-2 border-ogclan animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-ogclan animate-pulse-slow"></div>
      
      {/* Enhanced scanning line animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute h-[1px] md:h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/80 to-transparent animate-[tactical-scan_4s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Mobile-optimized grid overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="text-center relative z-10">
        {/* Tactical Icons Header */}
        <TacticalIcons />
        
        {/* Main Title - Mobile optimized */}
        <AnimatedContent animation="scale-in" delay={400}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-orbitron font-black text-ogclan mb-4 md:mb-6 tracking-wider relative">
            ELITE SQUAD
            <div className="absolute inset-0 text-ogclan/20 animate-text-flicker">ELITE SQUAD</div>
          </h1>
        </AnimatedContent>
        
        {/* Enhanced subtitle with tactical styling */}
        <AnimatedContent animation="fade-in" delay={600}>
          <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-6 md:mb-8">
            <Activity className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse" />
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-orbitron text-ogclan tracking-widest">
              BATTLE-TESTED WARRIORS
            </span>
            <Activity className="text-ogclan h-4 w-4 md:h-6 md:w-6 animate-pulse" />
          </div>
        </AnimatedContent>
        
        {/* Enhanced operational status */}
        <AnimatedContent animation="fade-in" delay={800}>
          <div className="font-mono text-gray-300 text-xs sm:text-sm md:text-base tracking-wider mb-8 md:mb-12 relative">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>[ OPERATIONAL STATUS: ACTIVE ]</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-ogclan rounded-full animate-pulse"></span>
                <span>[ MISSION READY ]</span>
              </span>
            </div>
          </div>
        </AnimatedContent>
      </div>
      
      {/* Enhanced corner tactical elements */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 text-ogclan/60 font-mono text-xs">
        <div className="animate-text-flicker">SYS_01</div>
      </div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-ogclan/60 font-mono text-xs">
        <div className="animate-text-flicker">PWR_100</div>
      </div>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-ogclan/60 font-mono text-xs">
        <div className="animate-text-flicker">VER_2.1</div>
      </div>
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-ogclan/60 font-mono text-xs">
        <div className="animate-text-flicker">CONN_OK</div>
      </div>
    </div>
  );
};

export default HUDContainer;
