import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Trophy, Target, Zap, Play, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const EnhancedHeroSection = () => {
  const isMobile = useIsMobile();
  const [activeStats, setActiveStats] = useState(0);

  const stats = [
    { icon: Users, value: "50+", label: "Elite Warriors", color: "text-blue-400" },
    { icon: Trophy, value: "200+", label: "Victories", color: "text-ogclan" },
    { icon: Target, value: "100%", label: "Dedication", color: "text-red-400" },
    { icon: Zap, value: "2020", label: "Est.", color: "text-purple-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-tactical-black to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Tactical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow" />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-ogclan/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Tactical HUD Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-8 left-8 border-l-2 border-t-2 border-ogclan/40 w-16 h-16" />
          <div className="absolute top-8 right-8 border-r-2 border-t-2 border-ogclan/40 w-16 h-16" />
          <div className="absolute bottom-8 left-8 border-l-2 border-b-2 border-ogclan/40 w-16 h-16" />
          <div className="absolute bottom-8 right-8 border-r-2 border-b-2 border-ogclan/40 w-16 h-16" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-6 py-2 text-ogclan border-ogclan/50 bg-black/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            ACTIVE STATUS • RECRUITING NOW
          </Badge>
        </motion.div>

        {/* Main Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-ogclan via-ogclan-light to-white mb-4 tracking-wider">
            OG
          </h1>
          <div className="text-2xl md:text-4xl font-mono text-ogclan-light tracking-[0.3em] mb-2">
            CLAN
          </div>
          <div className="text-lg md:text-xl text-gray-400 font-light tracking-wider">
            CAMEROON • EST. 2020
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ONE TAPPING SINCE 
            <span className="text-ogclan ml-3">2020</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Elite Call of Duty Mobile warriors dominating 
            <span className="text-ogclan font-semibold"> Alcatraz</span>,
            <span className="text-blue-400 font-semibold"> Isolated</span>, and
            <span className="text-red-400 font-semibold"> Blackout</span>
          </p>
        </motion.div>

        {/* Live Stats Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isActive = index === activeStats;
              
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-500 ${
                    isActive 
                      ? 'border-ogclan/50 bg-ogclan/10 shadow-glow-ogclan' 
                      : 'border-white/20 bg-black/30'
                  }`}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                >
                  <Icon className={`h-8 w-8 mb-2 ${isActive ? stat.color : 'text-gray-400'}`} />
                  <div className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isActive ? 'text-ogclan' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="px-8 py-4 text-lg bg-ogclan hover:bg-ogclan-light text-black font-bold rounded-xl shadow-glow-ogclan hover:shadow-glow-ogclan-strong transition-all duration-300 group"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            JOIN THE FIGHT
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-ogclan/50 text-ogclan hover:bg-ogclan/10 rounded-xl group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            WATCH HIGHLIGHTS
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-ogclan">
            <div className="text-sm mb-2 tracking-wider">SCROLL TO EXPLORE</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;