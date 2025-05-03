
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Soldier } from "@/types/soldier";
import { motion } from 'framer-motion';
import AnimatedContent from "@/components/AnimatedContent";
import { useSoldierSparkles } from './hooks/useSoldierSparkles';
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import SoldierSparkles from './SoldierSparkles';
import SoldierQuickStats from './SoldierQuickStats';
import SoldierCardHint from './SoldierCardHint';
import { generateDeterministicStats } from './utils/soldierStats';

interface SoldierCardMobileProps {
  soldier: Soldier;
  favoriteMap: string;
  isActiveCard: boolean;
}

const SoldierCardMobile = ({ 
  soldier, 
  favoriteMap, 
  isActiveCard 
}: SoldierCardMobileProps) => {
  const [showQuickStats, setShowQuickStats] = useState(false);
  const { sparkParticles, generateSparkParticles, handleTouchMove } = useSoldierSparkles(isActiveCard);
  const stats = generateDeterministicStats(soldier.id);

  // Function to toggle quick stats on mobile
  const toggleQuickStats = () => {
    setShowQuickStats(prev => !prev);
  };

  return (
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
          onTouchMove={handleTouchMove}
        >
          <div className="relative">
            {/* Animated Scanner Line */}
            <div className="scanner-line"></div>

            {/* Spark particles for special card */}
            <SoldierSparkles particles={sparkParticles} />

            <CardContent className="p-4 relative">
              <SoldierCardBody 
                name={soldier.name}
                role={soldier.role}
                weapon={soldier.weapon}
                bio={soldier.bio}
                imageUrl={soldier.imageUrl}
                isActiveCard={isActiveCard}
                favoriteMap={favoriteMap}
              />
              
              {/* Quick Stats for Mobile (Animated) */}
              {showQuickStats && (
                <div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
                >
                  <SoldierQuickStats 
                    winRate={stats.winRate} 
                    favMap={favoriteMap} 
                    kd={stats.kd}
                    operatorSkill={stats.operatorSkill}
                    mvpTitles={stats.mvpTitles}
                    clutchMoments={stats.clutchMoments}
                    playStyle={stats.playStyle}
                  />
                </div>
              )}
            </CardContent>
            
            <SoldierCardFooter name={soldier.name} tiktokUrl={soldier.tiktokUrl} />

            {/* Tap hint for mobile */}
            <SoldierCardHint isMobile={true} />
          </div>
        </Card>
      </motion.div>
    </AnimatedContent>
  );
};

export default SoldierCardMobile;
