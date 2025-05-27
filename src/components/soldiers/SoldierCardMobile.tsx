
import React, { useState, useCallback, memo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import SoldierCardHint from './SoldierCardHint';
import SoldierStatsOverlay from './SoldierStatsOverlay';

interface OptimizedParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity?: { x: number; y: number };
  type?: 'spark' | 'heart' | 'star' | 'crown';
  color?: string;
}

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
  isProCard?: boolean;
  showQuickStats: boolean;
  toggleQuickStats: (e: React.MouseEvent<HTMLDivElement>) => void;
  sparkParticles: OptimizedParticle[];
  princessParticles?: OptimizedParticle[];
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

const SoldierCardMobile = memo(({
  imageUrl,
  name,
  role,
  weapon,
  bio,
  tiktokUrl,
  favoriteMap,
  isActiveCard,
  isPrincessCard = false,
  isProCard = false,
  showQuickStats,
  toggleQuickStats,
  sparkParticles,
  princessParticles = [],
  onTouchMove,
  stats
}: SoldierCardMobileProps) => {
  const [touchFeedback, setTouchFeedback] = useState(false);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTouchFeedback(true);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTimeout(() => setTouchFeedback(false), 150);
  }, []);

  const getCardClasses = useCallback(() => {
    let classes = `overflow-hidden transition-all duration-200 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative will-change-transform soldier-card touch-manipulation ${
      showQuickStats ? 'quick-stats-active ring-2 ring-ogclan/50' : ''
    }`;
    
    if (isProCard) {
      classes += ` pro-card border-yellow-500/30 hover:border-yellow-500/70`;
      if (showQuickStats) {
        classes = classes.replace('ring-ogclan/50', 'ring-yellow-500/50');
      }
    } else if (isPrincessCard) {
      classes += ` princess-card border-pink-500/30 hover:border-pink-500/70`;
      if (showQuickStats) {
        classes = classes.replace('ring-ogclan/50', 'ring-pink-500/50');
      }
    } else if (isActiveCard) {
      classes += ` spotlight-card active`;
    } else {
      classes += ` spotlight-card`;
    }
    
    return classes;
  }, [showQuickStats, isProCard, isPrincessCard, isActiveCard]);

  // Render particles with performance optimization
  const renderParticles = useCallback(() => {
    const allParticles = [...sparkParticles, ...princessParticles];
    
    // Limit particles on mobile for better performance
    const limitedParticles = allParticles.slice(0, 10);
    
    return limitedParticles.map(particle => (
      <div 
        key={particle.id}
        className="absolute z-10 pointer-events-none gpu-accelerated"
        style={{
          left: `${particle.x}px`,
          top: `${particle.y}px`,
          opacity: particle.opacity,
          transform: `scale(${particle.size / 4})`,
          color: particle.color || '#D4AF37'
        }}
      >
        {particle.type === 'spark' ? (
          <div className="w-2 h-2 rounded-full bg-current" />
        ) : particle.type === 'heart' ? (
          '💖'
        ) : particle.type === 'star' ? (
          '⭐'
        ) : particle.type === 'crown' ? (
          '👑'
        ) : (
          <div className="w-2 h-2 rounded-full bg-current" />
        )}
      </div>
    ));
  }, [sparkParticles, princessParticles]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'tween', 
        duration: 0.3,
        ease: 'easeOut'
      }}
      style={{ willChange: 'transform' }}
    >
      <Card 
        className={getCardClasses()}
        onClick={toggleQuickStats}
        onTouchMove={onTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ 
          touchAction: 'manipulation',
          minHeight: '400px',
          maxWidth: '100%'
        }}
      >
        <div className="relative">
          {/* Optimized Scanner Line */}
          <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
            <div className={`absolute top-0 h-px w-full ${
              isProCard ? 'bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent' :
              isPrincessCard ? 'bg-gradient-to-r from-transparent via-pink-500/50 to-transparent' :
              'bg-gradient-to-r from-transparent via-ogclan/50 to-transparent'
            } animate-scanner-line`} />
          </div>

          {/* Render particles */}
          {renderParticles()}

          <CardContent className="p-3 relative soldier-card-content">
            <SoldierCardBody 
              imageUrl={imageUrl}
              name={name}
              role={role}
              weapon={weapon}
              bio={bio}
              isSpotlight={isActiveCard}
              isPrincess={isPrincessCard}
              isPro={isProCard}
              favoriteMap={favoriteMap}
            />
          </CardContent>
          
          <SoldierCardFooter tiktokUrl={tiktokUrl} name={name} />

          <SoldierStatsOverlay 
            isVisible={showQuickStats}
            onClose={(e) => {
              e.stopPropagation();
              toggleQuickStats(e);
            }}
            stats={stats}
          />

          <SoldierCardHint isMobile={true} />

          {/* Touch feedback */}
          <AnimatePresence>
            {touchFeedback && (
              <motion.div 
                className={`absolute inset-0 pointer-events-none rounded-lg ${
                  isProCard ? 'bg-yellow-500/5' : isPrincessCard ? 'bg-pink-500/5' : 'bg-ogclan/5'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
});

SoldierCardMobile.displayName = 'SoldierCardMobile';

export default SoldierCardMobile;
