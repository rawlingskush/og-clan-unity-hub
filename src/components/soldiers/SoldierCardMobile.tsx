
import React, { useState, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { SparkParticle } from '@/hooks/useSoldierSparkles';
import { PrincessParticle } from '@/hooks/usePrincessSparkles';
import SoldierSparkles from './SoldierSparkles';
import PrincessSparkles from './PrincessSparkles';
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
  isPrincessCard?: boolean;
  showQuickStats: boolean;
  toggleQuickStats: (e: React.MouseEvent<HTMLDivElement>) => void;
  sparkParticles: SparkParticle[];
  princessParticles?: PrincessParticle[];
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
  isPrincessCard = false,
  showQuickStats,
  toggleQuickStats,
  sparkParticles,
  princessParticles = [],
  onTouchMove,
  stats
}: SoldierCardMobileProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [touchFeedback, setTouchFeedback] = useState(false);

  const handleTouchStart = useCallback(() => {
    setIsPressed(true);
    setTouchFeedback(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsPressed(false);
    setTimeout(() => setTouchFeedback(false), 200);
  }, []);

  const getCardClasses = () => {
    let classes = `overflow-hidden transition-all duration-300 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative ${
      showQuickStats ? 'quick-stats-active ring-2 ring-ogclan/50' : ''
    } ${
      isPressed ? 'shadow-lg shadow-ogclan/20 scale-[0.98]' : ''
    }`;
    
    if (isPrincessCard) {
      classes += ` princess-card border-pink-500/30 hover:border-pink-500/70`;
      if (showQuickStats) {
        classes = classes.replace('ring-ogclan/50', 'ring-pink-500/50');
      }
      if (isPressed) {
        classes = classes.replace('shadow-ogclan/20', 'shadow-pink-500/20');
      }
    } else if (isActiveCard) {
      classes += ` spotlight-card active`;
    } else {
      classes += ` spotlight-card`;
    }
    
    return classes;
  };

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
        className={getCardClasses()}
        onClick={toggleQuickStats}
        onTouchMove={onTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative">
          {/* Enhanced Scanner Line with theme-specific styling */}
          <div className="scanner-line">
            {isPrincessCard ? (
              <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent w-full animate-[scanner-line_4s_linear_infinite]"></div>
            ) : (
              <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent w-full animate-[scanner-line_4s_linear_infinite]"></div>
            )}
          </div>

          {/* Particle effects */}
          {isPrincessCard ? (
            <PrincessSparkles particles={princessParticles} />
          ) : (
            <SoldierSparkles particles={sparkParticles} />
          )}

          <CardContent className="p-4 relative">
            <SoldierCardBody 
              imageUrl={imageUrl}
              name={name}
              role={role}
              weapon={weapon}
              bio={bio}
              isSpotlight={isActiveCard}
              isPrincess={isPrincessCard}
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

          {/* Enhanced touch feedback indicator with theme colors */}
          <AnimatePresence>
            {touchFeedback && (
              <motion.div 
                className={`absolute inset-0 pointer-events-none rounded-lg ${
                  isPrincessCard ? 'bg-pink-500/10' : 'bg-ogclan/10'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default SoldierCardMobile;
