
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Shield, Target, Zap, Users, Radar, Eye } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TacticalHUD from './TacticalHUD';
import ParticleSystem from './ParticleSystem';
import TacticalStatusBar from './TacticalStatusBar';
import TacticalStatsGrid from './TacticalStatsGrid';
import RadarDisplay from './RadarDisplay';
import TacticalIndicators from './TacticalIndicators';

interface EnhancedHeroSectionProps {
  scrollPosition: number;
}

const EnhancedHeroSection = ({ scrollPosition }: EnhancedHeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);

  // Initialize particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      setMousePosition({
        x: (mouseX - centerX) / centerX,
        y: (mouseY - centerY) / centerY
      });
      
      x.set((mouseX - centerX) * 0.1);
    }
  }, [x]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }
  }, [handleMouseMove]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative bg-black/95 py-4 sm:py-8 md:py-16 overflow-hidden border-b border-ogclan/30 min-h-[85vh] sm:min-h-[90vh] md:min-h-[80vh]"
    >
      {/* Enhanced tactical background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center bg-no-repeat"
        style={{ 
          x,
          scale: useTransform(scrollY, [0, 300], [1.1, 1.2])
        }}
      />
      
      {/* Multiple scanner overlays */}
      <div className="absolute inset-0 multi-scanner" />
      
      {/* Dynamic particle system */}
      <ParticleSystem particles={particles} mousePosition={mousePosition} />
      
      {/* Enhanced tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/75">
        <TacticalHUD />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Main HUD Interface */}
        <motion.div 
          className="relative w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Elite Squad Command Center - Enhanced mobile responsiveness */}
          <div className="relative mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 border border-ogclan/50 bg-black/70 backdrop-blur-md card-3d hover-glow">
            {/* Advanced corner decorations - Responsive sizing */}
            <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-ogclan" />
            <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-ogclan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-ogclan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-ogclan" />
            
            <TacticalStatusBar />
            
            {/* Main tactical display - Enhanced mobile layout */}
            <div className="text-center mb-6 sm:mb-8">
              <motion.div 
                className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 mb-4 sm:mb-6 flex-wrap gap-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {[Target, Shield, Zap, Users, Radar, Eye].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="touch-manipulation"
                  >
                    <Icon className="text-ogclan h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 filter drop-shadow-sm" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gradient-enhanced text-glow-tactical mb-3 sm:mb-4 text-glitch font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                ELITE TACTICAL UNIT
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-ogclan to-transparent flex-1 max-w-8 sm:max-w-16 md:max-w-none"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <Zap className="text-ogclan h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wider text-ogclan font-medium px-2 sm:px-4 whitespace-nowrap">
                  BATTLE-HARDENED OPERATORS
                </span>
                <Zap className="text-ogclan h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 flex-shrink-0" />
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-ogclan to-transparent flex-1 max-w-8 sm:max-w-16 md:max-w-none"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </motion.div>
              
              <motion.div 
                className="text-xs sm:text-sm md:text-base font-mono text-gray-300 tracking-wide space-y-1 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <span>[ MISSION STATUS: <span className="text-green-400 font-semibold">ACTIVE</span> ]</span>
                <span className="hidden sm:inline">|</span>
                <span>[ SQUAD READINESS: <span className="text-ogclan font-semibold">MAXIMUM</span> ]</span>
                <span className="hidden sm:inline">|</span>
                <span>[ THREAT LEVEL: <span className="text-red-400 font-semibold">ENGAGED</span> ]</span>
              </motion.div>
            </div>
          </div>
          
          <TacticalStatsGrid />
          <TacticalIndicators />
        </motion.div>
      </div>
      
      <RadarDisplay />
    </motion.div>
  );
};

export default EnhancedHeroSection;
