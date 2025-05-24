
import React, { useState, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { SparkParticle } from '@/hooks/useSoldierSparkles';
import SoldierSparkles from './SoldierSparkles';
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import SoldierCardHint from './SoldierCardHint';
import SoldierStatsOverlay from './SoldierStatsOverlay';

interface SoldierCardMobileProps {
  imageUrl: string;
  name: string;
  role: string;
  weapon: string;
  bio: string;
  tiktokUrl: string;
  favoriteMap: string;
  isActiveCard: boolean;
  showQuickStats: boolean;
  toggleQuickStats: (e: React.MouseEvent<HTMLDivElement>) => void;
  sparkParticles: SparkParticle[];
  onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  stats: {
    winRate: string;
    favMap: string;
    kd: string;
    operatorSkill: string;
    mvpTitles: string;
    clutchMoments: string;
    playStyle: string;
  };
}

const SoldierCardMobile = ({
  imageUrl,
  name,
  role,
  weapon,
  bio,
  tiktokUrl,
  favoriteMap,
  isActiveCard,
  showQuickStats,
  toggleQuickStats,
  sparkParticles,
  onTouchMove,
  stats
}: SoldierCardMobileProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsPressed(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        duration: 0.6 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card 
        className={`overflow-hidden transition-all duration-300 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative ${
          showQuickStats ? 'quick-stats-active ring-2 ring-ogclan/50' : ''
        } ${isActiveCard ? 'spotlight-card active' : 'spotlight-card'} ${
          isPressed ? 'shadow-lg shadow-ogclan/20 scale-[0.98]' : ''
        }`}
        onClick={toggleQuickStats}
        onTouchMove={onTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative">
          {/* Enhanced Scanner Line with mobile optimization */}
          <div className="scanner-line">
            <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent w-full animate-[scanner-line_4s_linear_infinite]"></div>
          </div>

          {/* Spark particles for special card */}
          <SoldierSparkles particles={sparkParticles} />

          <CardContent className="p-4 relative">
            <SoldierCardBody 
              imageUrl={imageUrl}
              name={name}
              role={role}
              weapon={weapon}
              bio={bio}
              isSpotlight={isActiveCard}
              favoriteMap={favoriteMap}
            />
          </CardContent>
          
          <SoldierCardFooter tiktokUrl={tiktokUrl} name={name} />

          {/* Enhanced Quick Stats Overlay with mobile gestures */}
          <SoldierStatsOverlay 
            isVisible={showQuickStats}
            onClose={(e) => {
              e.stopPropagation();
              toggleQuickStats(e);
            }}
            stats={stats}
          />

          {/* Enhanced tap hint for mobile with better visibility */}
          <SoldierCardHint isMobile={true} />

          {/* Touch feedback indicator */}
          {isPressed && (
            <div className="absolute inset-0 bg-ogclan/10 pointer-events-none rounded-lg transition-opacity duration-150" />
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default SoldierCardMobile;
