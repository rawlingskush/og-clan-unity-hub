
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Shield, Target, Zap, Users, Activity, Radar, Eye } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
      className="relative bg-black/95 py-8 md:py-16 overflow-hidden border-b border-ogclan/30 min-h-[90vh] md:min-h-[80vh]"
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
      <div className="particle-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: `${particle.x + mousePosition.x * 20}%`,
              y: `${particle.y + mousePosition.y * 20}%`
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/75">
        {/* 3D HUD corners */}
        {[
          { position: 'top-4 right-4 md:top-8 md:right-8', rotate: '0deg' },
          { position: 'top-4 left-4 md:top-8 md:left-8', rotate: '90deg' },
          { position: 'bottom-4 right-4 md:bottom-8 md:right-8', rotate: '270deg' },
          { position: 'bottom-4 left-4 md:bottom-8 md:left-8', rotate: '180deg' }
        ].map((corner, index) => (
          <motion.div
            key={index}
            className={`absolute ${corner.position} w-20 h-20 md:w-28 md:h-28 border border-ogclan/40 glitch-box`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            style={{ rotate: corner.rotate }}
          >
            <div className="absolute inset-2 border border-ogclan/60" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ogclan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ogclan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ogclan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ogclan" />
            <motion.div 
              className="absolute inset-0 bg-ogclan/10"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Main HUD Interface */}
        <motion.div 
          className="relative w-full max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Elite Squad Command Center */}
          <div className="relative mb-8 md:mb-12 p-6 md:p-8 border border-ogclan/50 bg-black/70 backdrop-blur-md card-3d hover-glow">
            {/* Advanced corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-ogclan" />
            <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-ogclan" />
            <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-ogclan" />
            <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-ogclan" />
            
            {/* Tactical status bar */}
            <div className="flex items-center justify-between mb-6 text-caption text-ogclan">
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="flex items-center space-x-2"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Activity className="w-3 h-3" />
                  <span>LIVE</span>
                </motion.div>
                <span>SECTOR: ALPHA-7</span>
                <span>TIME: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>STATUS: OPERATIONAL</span>
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
            
            {/* Main tactical display */}
            <div className="text-center mb-8">
              <motion.div 
                className="flex items-center justify-center space-x-4 md:space-x-8 mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {[Target, Shield, Zap, Users, Radar, Eye].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-ogclan h-5 w-5 md:h-8 md:w-8" />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.h1 
                className="text-display-1 text-gradient-enhanced text-glow-tactical mb-4 text-glitch"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                ELITE TACTICAL UNIT
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center space-x-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-ogclan to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <Zap className="text-ogclan h-4 w-4 md:h-6 md:w-6" />
                <span className="text-heading-4 tracking-wider text-ogclan font-medium px-4">
                  BATTLE-HARDENED OPERATORS
                </span>
                <Zap className="text-ogclan h-4 w-4 md:h-6 md:w-6" />
                <motion.div 
                  className="h-px bg-gradient-to-r from-transparent via-ogclan to-transparent flex-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </motion.div>
              
              <motion.div 
                className="text-body font-mono text-gray-300 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                [ MISSION STATUS: <span className="text-green-400 font-semibold">ACTIVE</span> ] 
                [ SQUAD READINESS: <span className="text-ogclan font-semibold">MAXIMUM</span> ] 
                [ THREAT LEVEL: <span className="text-red-400 font-semibold">ENGAGED</span> ]
              </motion.div>
            </div>
          </div>
          
          {/* Enhanced tactical grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[
              { label: 'SQUAD STATUS', value: 'ACTIVE', subtext: '100% OPERATIONAL', color: 'text-green-400', icon: Shield },
              { label: 'MISSION', value: 'DOMINATION', subtext: 'IN PROGRESS', color: 'text-yellow-400', icon: Target },
              { label: 'OPERATORS', value: '21 ACTIVE', subtext: 'FULL STRENGTH', color: 'text-blue-400', icon: Users },
              { label: 'COMBAT READY', value: 'MAXIMUM', subtext: 'WEAPONS HOT', color: 'text-red-400', icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black/80 border border-ogclan/40 p-4 md:p-6 text-center backdrop-blur-sm hover-lift card-3d stagger-fade-in"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-ogclan" />
                </div>
                <div className="text-caption text-ogclan mb-2 tracking-wider">{stat.label}</div>
                <motion.div 
                  className={`text-heading-4 font-bold ${stat.color} mb-1`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-body-small text-gray-400">{stat.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Real-time tactical indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center space-x-6 md:space-x-10 text-body-small font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {[
              { label: 'COMMS ACTIVE', color: 'bg-green-400' },
              { label: 'GPS LOCKED', color: 'bg-yellow-400' },
              { label: 'THERMAL ONLINE', color: 'bg-blue-400' },
              { label: 'WEAPONS HOT', color: 'bg-red-400' }
            ].map((indicator, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.7 + index * 0.1 }}
              >
                <motion.div 
                  className={`w-3 h-3 ${indicator.color} rounded-full`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                />
                <span className="text-gray-300">{indicator.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Advanced radar display */}
      <motion.div 
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-32 h-32 md:w-40 md:h-40 opacity-40"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 1, type: "spring" }}
      >
        <div className="absolute inset-0 rounded-full border border-ogclan/60" />
        <div className="absolute inset-[15%] rounded-full border border-ogclan/50" />
        <div className="absolute inset-[30%] rounded-full border border-ogclan/40" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-ogclan/50" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-ogclan/50" />
        
        {/* Rotating sweep */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-ogclan/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Radar blips */}
        {[
          { x: '30%', y: '40%', delay: 0 },
          { x: '70%', y: '60%', delay: 1 },
          { x: '50%', y: '25%', delay: 2 }
        ].map((blip, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-ogclan rounded-full"
            style={{ left: blip.x, top: blip.y }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: blip.delay 
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EnhancedHeroSection;
