
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Soldier } from "@/types/soldier";
import { ExternalLink } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import AnimatedContent from "@/components/AnimatedContent";
import { useIsMobile } from "@/hooks/use-mobile";
import SoldierCardImage from './SoldierCardImage';
import SoldierCardBadges from './SoldierCardBadges';
import SoldierQuickStats from './SoldierQuickStats';
import SoldierSparkles from './SoldierSparkles';
import { motion } from 'framer-motion';

interface SoldierCardProps {
  soldier: Soldier;
  isActive?: boolean;
}

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const SoldierCard = ({ soldier, isActive = false }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [sparkParticles, setSparkParticles] = useState<SparkParticle[]>([]);
  const [favoriteMap, setFavoriteMap] = useState<string>('');
  
  // Mark card as active if it's a spotlight soldier or explicitly set as active
  const isActiveCard = isActive || soldier.spotlight;
  
  // Generate random favorite map on component mount
  useEffect(() => {
    const maps = ["ISOLATED", "BLACKOUT", "ALCATRAZ"];
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    setFavoriteMap(soldier.favoriteMap || randomMap);
  }, [soldier.favoriteMap]);

  // Special effect for spotlight soldiers - generate random spark particles on hover
  useEffect(() => {
    if ((isActiveCard) && sparkParticles.length > 0) {
      const timer = setInterval(() => {
        setSparkParticles(prev => 
          prev.map(particle => ({
            ...particle,
            y: particle.y - 1,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.98
          })).filter(p => p.opacity > 0)
        );
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [sparkParticles, isActiveCard]);
  
  // Generate random play styles
  const playStyles = [
    "Aggressive Pusher", 
    "Silent Eliminator", 
    "Strategic Anchor", 
    "Support Specialist", 
    "Objective Focused", 
    "Precision Marksman"
  ];
  
  // Generate random operator skills
  const operatorSkills = ["Purifier", "Death Machine", "War Machine", "H.I.V.E.", "Tempest", "Gravity Spikes"];
  
  // Quick stats data with randomized values
  const stats = {
    winRate: `${65 + Math.floor(Math.random() * 15)}%`,
    favMap: favoriteMap,
    kd: (3 + Math.random() * 2).toFixed(1),
    operatorSkill: operatorSkills[Math.floor(Math.random() * operatorSkills.length)],
    mvpTitles: `${Math.floor(3 + Math.random() * 8)}x`,
    clutchMoments: `${Math.floor(5 + Math.random() * 15)}`,
    playStyle: playStyles[Math.floor(Math.random() * playStyles.length)]
  };

  // Function to toggle quick stats on mobile and desktop
  const toggleQuickStats = () => {
    setShowQuickStats(prev => !prev);
  };

  // Function to generate spark particles for spotlight soldiers
  const generateSparkParticles = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActiveCard) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 40 - 20),
      size: 3 + Math.random() * 2,
      opacity: 0.8 + Math.random() * 0.2
    }));
    
    setSparkParticles(prev => [...prev, ...newParticles]);
  };

  // Get base color for card styling
  const weaponBadgeColors: Record<string, string> = {
    // Shotguns - red
    "BY15": "bg-red-600",
    "KRM-262": "bg-red-600",
    "HS0405": "bg-red-600",
    "R9-0": "bg-red-600",
    "Striker": "bg-red-600",
    
    // SMGs - yellow
    "QQ9": "bg-yellow-600",
    "FENNEC": "bg-red-600",
    "MAC-10": "bg-yellow-600",
    
    // Snipers - green
    "XPR-50": "bg-green-600",
    
    // ARs - blue
    "Kilo 141": "bg-blue-600",
    "AK117": "bg-blue-600"
  };
  
  const accentColor = weaponBadgeColors[soldier.weapon] || "bg-ogclan";

  // Common card body content - both mobile and desktop use this
  const CardBody = () => (
    <div className="flex flex-col items-center">
      <SoldierCardImage 
        imageUrl={soldier.imageUrl} 
        name={soldier.name} 
        role={soldier.role} 
        isSpotlight={isActiveCard} 
      />
      
      {/* Name with military font style */}
      <h3 className={`text-xl font-bold mb-1 tracking-wider ${
        isActiveCard ? 'text-gradient-gold animate-glow' : 'text-ogclan'
      }`}>{soldier.name}</h3>
      
      <SoldierCardBadges role={soldier.role} weapon={soldier.weapon} favoriteMap={favoriteMap} />
      
      {/* Bio */}
      <p className="text-center text-sm mb-4 text-gray-300">{soldier.bio}</p>
    </div>
  );

  return isMobile ? (
    <AnimatedContent animation="fade-in-up" delay={200}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Card 
          className={`overflow-hidden transition-all duration-300 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative ${
            showQuickStats ? 'quick-stats-active' : ''
          } ${isActiveCard ? 'spotlight-card active' : 'spotlight-card'}`}
          onClick={toggleQuickStats}
          onMouseMove={generateSparkParticles}
          onTouchMove={(e) => {
            // Convert touch event to mouse event for sparkles
            if (isActiveCard) {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const x = touch.clientX - rect.left;
              const y = touch.clientY - rect.top;
              
              const newParticles = Array.from({ length: 3 }, (_, i) => ({
                id: Date.now() + i,
                x: x + (Math.random() * 30 - 15),
                y: y + (Math.random() * 30 - 15),
                size: 2 + Math.random() * 2,
                opacity: 0.7 + Math.random() * 0.3
              }));
              
              setSparkParticles(prev => [...prev, ...newParticles]);
            }
          }}
        >
          <div className="relative">
            {/* Animated Scanner Line */}
            <div className="scanner-line"></div>

            {/* Spark particles for special card */}
            <SoldierSparkles particles={sparkParticles} />

            <CardContent className="p-4 relative">
              <CardBody />
              
              {/* Quick Stats for Mobile (Animated) */}
              {showQuickStats && (
                <div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
                >
                  <SoldierQuickStats 
                    winRate={stats.winRate} 
                    favMap={stats.favMap} 
                    kd={stats.kd}
                    operatorSkill={stats.operatorSkill}
                    mvpTitles={stats.mvpTitles}
                    clutchMoments={stats.clutchMoments}
                    playStyle={stats.playStyle}
                  />
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20">
              <a 
                href={soldier.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors"
                aria-label={`Follow ${soldier.name} on TikTok`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* TikTok Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                </svg>
                <span>Follow on TikTok</span>
                <ExternalLink size={14} />
              </a>
            </CardFooter>

            {/* Tap hint for mobile */}
            <div className="absolute top-2 right-2 text-xs text-ogclan/60 bg-black/50 px-2 py-1 rounded-full animate-pulse">
              Tap for stats
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatedContent>
  ) : (
    <AnimatedContent animation="fade-in-up" delay={200}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Card 
          className={`overflow-hidden transition-all duration-300 hover:translate-y-[-5px] border-ogclan/30 hover:border-ogclan/70 hover:shadow-[0_0_15px_${accentColor.replace('bg-', 'rgba(')},0.3)] bg-black h-full ${
            isActiveCard ? 'spotlight-card active' : 'spotlight-card'
          } ${showQuickStats ? 'stats-active' : ''}`}
          onClick={toggleQuickStats}
          onMouseMove={generateSparkParticles}
        >
          <div className="relative">
            {/* Animated Scanner Line */}
            <div className="scanner-line"></div>
            
            {/* Spark particles for special card */}
            <SoldierSparkles particles={sparkParticles} />
            
            <CardContent className="p-4">
              <CardBody />
              
              {/* Quick Stats for Desktop (Animated) */}
              {showQuickStats && (
                <div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out] z-10"
                >
                  <SoldierQuickStats 
                    winRate={stats.winRate} 
                    favMap={stats.favMap} 
                    kd={stats.kd}
                    operatorSkill={stats.operatorSkill}
                    mvpTitles={stats.mvpTitles}
                    clutchMoments={stats.clutchMoments}
                    playStyle={stats.playStyle}
                  />
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20">
              <a 
                href={soldier.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors"
                aria-label={`Follow ${soldier.name} on TikTok`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* TikTok Icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                </svg>
                <span>Follow on TikTok</span>
                <ExternalLink size={14} />
              </a>
            </CardFooter>

            {/* Click hint for desktop */}
            <div className="absolute top-2 right-2 text-xs text-ogclan/60 bg-black/50 px-2 py-1 rounded-full animate-pulse">
              Click for stats
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatedContent>
  );
};

export default SoldierCard;
