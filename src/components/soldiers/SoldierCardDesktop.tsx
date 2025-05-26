
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { SparkParticle } from '@/hooks/useSoldierSparkles';
import { PrincessParticle } from '@/hooks/usePrincessSparkles';
import SoldierSparkles from './SoldierSparkles';
import PrincessSparkles from './PrincessSparkles';
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
  isPrincessCard?: boolean;
  isProCard?: boolean;
  showQuickStats: boolean;
  toggleQuickStats: (e: React.MouseEvent<HTMLDivElement>) => void;
  generateSparkParticles: (e: React.MouseEvent<HTMLDivElement>) => void;
  sparkParticles: SparkParticle[];
  princessParticles?: PrincessParticle[];
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
  isPrincessCard = false,
  isProCard = false,
  showQuickStats,
  toggleQuickStats,
  generateSparkParticles,
  sparkParticles,
  princessParticles = [],
  accentColor,
  stats
}: SoldierCardDesktopProps) => {
  const getCardClasses = () => {
    let classes = `overflow-hidden transition-all duration-300 hover:translate-y-[-5px] border-ogclan/30 hover:border-ogclan/70 bg-black h-full ${
      showQuickStats ? 'stats-active' : ''
    }`;
    
    if (isProCard) {
      classes += ` pro-card border-yellow-500/30 hover:border-yellow-500/70 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]`;
    } else if (isPrincessCard) {
      classes += ` princess-card border-pink-500/30 hover:border-pink-500/70 hover:shadow-[0_0_15px_rgba(255,105,180,0.3)]`;
    } else if (isActiveCard) {
      classes += ` spotlight-card active hover:shadow-[0_0_15px_${accentColor.replace('bg-', 'rgba(')},0.3)]`;
    } else {
      classes += ` spotlight-card hover:shadow-[0_0_15px_${accentColor.replace('bg-', 'rgba(')},0.3)]`;
    }
    
    return classes;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <Card 
        className={getCardClasses()}
        onClick={toggleQuickStats}
        onMouseMove={generateSparkParticles}
      >
        <div className="relative">
          {/* Scanner Line - different for pro and princess */}
          <div className={`scanner-line ${isProCard ? 'pro-scanner' : isPrincessCard ? 'princess-scanner' : ''}`}>
            {isProCard ? (
              <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent w-full animate-[scanner-line_3s_linear_infinite]"></div>
            ) : isPrincessCard ? (
              <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent w-full animate-[scanner-line_4s_linear_infinite]"></div>
            ) : (
              <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent w-full animate-[scanner-line_3s_linear_infinite]"></div>
            )}
          </div>
          
          {/* Particle effects */}
          {isPrincessCard ? (
            <PrincessSparkles particles={princessParticles} />
          ) : (
            <SoldierSparkles particles={sparkParticles} />
          )}
          
          <CardContent className="p-4">
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
