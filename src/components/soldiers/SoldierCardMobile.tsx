
import React from 'react';
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
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <Card 
        className={`overflow-hidden transition-all duration-300 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative ${
          showQuickStats ? 'quick-stats-active' : ''
        } ${isActiveCard ? 'spotlight-card active' : 'spotlight-card'}`}
        onClick={toggleQuickStats}
        onTouchMove={onTouchMove}
      >
        <div className="relative">
          {/* Animated Scanner Line */}
          <div className="scanner-line"></div>

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

          {/* Quick Stats Overlay */}
          <SoldierStatsOverlay 
            isVisible={showQuickStats}
            onClose={(e) => {
              e.stopPropagation();
              toggleQuickStats(e);
            }}
            stats={stats}
          />

          {/* Tap hint for mobile */}
          <SoldierCardHint isMobile={true} />
        </div>
      </Card>
    </motion.div>
  );
};

export default SoldierCardMobile;
