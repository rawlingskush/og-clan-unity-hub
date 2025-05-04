
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { SparkParticle } from '@/hooks/useSoldierSparkles';
import SoldierSparkles from './SoldierSparkles';
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import SoldierCardHint from './SoldierCardHint';
import SoldierStatsOverlay from './SoldierStatsOverlay';

interface SoldierCardDesktopProps {
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
  generateSparkParticles: (e: React.MouseEvent<HTMLDivElement>) => void;
  sparkParticles: SparkParticle[];
  accentColor: string;
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

const SoldierCardDesktop = ({
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
  generateSparkParticles,
  sparkParticles,
  accentColor,
  stats
}: SoldierCardDesktopProps) => {
  return (
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

          {/* Click hint for desktop */}
          <SoldierCardHint isMobile={false} />
        </div>
      </Card>
    </motion.div>
  );
};

export default SoldierCardDesktop;
