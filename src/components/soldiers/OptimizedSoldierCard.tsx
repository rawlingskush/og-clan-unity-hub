
import React, { useState, useCallback, memo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Soldier } from "@/types/soldier";
import { useIsMobile } from "@/hooks/use-mobile";
import { useOptimizedSparkles } from "@/hooks/useOptimizedSparkles";
import { generateSoldierStats } from "@/utils/soldierStats";
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import SoldierStatsOverlay from './SoldierStatsOverlay';

interface OptimizedSoldierCardProps {
  soldier: Soldier;
  isActive?: boolean;
}

const OptimizedSoldierCard = memo(({ soldier, isActive = false }: OptimizedSoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  
  // Optimize sparkle effects
  const isSparkleActive = isActive || soldier.spotlight || soldier.princess;
  const { particles, generateParticles } = useOptimizedSparkles(isSparkleActive);
  
  // Memoize stats generation
  const stats = React.useMemo(() => generateSoldierStats(soldier.name), [soldier.name]);
  
  // Optimize toggle function
  const toggleQuickStats = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.card-footer') && !target.closest('a')) {
      setShowQuickStats(prev => !prev);
    }
  }, []);

  // Optimize touch/mouse handlers
  const handleInteraction = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (isSparkleActive) {
      const particleType = soldier.princess ? 'princess' : 'spark';
      generateParticles(e, particleType);
    }
  }, [isSparkleActive, soldier.princess, generateParticles]);

  // Memoize card classes
  const cardClasses = React.useMemo(() => {
    let classes = `overflow-hidden transition-all duration-200 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative gpu-accelerated ${
      showQuickStats ? 'quick-stats-active ring-2 ring-ogclan/50' : ''
    }`;
    
    if (soldier.pro) {
      classes += ` pro-card border-yellow-500/30 hover:border-yellow-500/70`;
    } else if (soldier.princess) {
      classes += ` princess-card border-pink-500/30 hover:border-pink-500/70`;
    } else if (isActive) {
      classes += ` spotlight-card active`;
    }
    
    return classes;
  }, [showQuickStats, soldier.pro, soldier.princess, isActive]);

  return (
    <Card 
      className={cardClasses}
      onClick={toggleQuickStats}
      onMouseMove={isMobile ? undefined : handleInteraction}
      onTouchMove={isMobile ? handleInteraction : undefined}
      style={{ touchAction: 'manipulation' }}
    >
      <div className="relative">
        {/* Optimized scanner line */}
        <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
          <div className={`absolute top-0 h-px w-full ${
            soldier.pro ? 'bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent' :
            soldier.princess ? 'bg-gradient-to-r from-transparent via-pink-500/50 to-transparent' :
            'bg-gradient-to-r from-transparent via-ogclan/50 to-transparent'
          } animate-scanner-line`} />
        </div>

        {/* Render particles */}
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="absolute z-10 pointer-events-none gpu-accelerated"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: `scale(${particle.size / 4})`,
              color: particle.color
            }}
          >
            {particle.type === 'spark' ? (
              <div className="w-2 h-2 rounded-full bg-current" />
            ) : particle.type === 'heart' ? (
              '💖'
            ) : particle.type === 'star' ? (
              '⭐'
            ) : (
              '👑'
            )}
          </div>
        ))}

        <CardContent className="p-4 relative">
          <SoldierCardBody 
            imageUrl={soldier.imageUrl}
            name={soldier.name}
            role={soldier.role}
            weapon={soldier.weapon}
            bio={soldier.bio}
            isSpotlight={isActive}
            isPrincess={soldier.princess}
            isPro={soldier.pro}
            favoriteMap={soldier.favoriteMap || stats.favMap}
          />
        </CardContent>
        
        <SoldierCardFooter tiktokUrl={soldier.tiktokUrl} name={soldier.name} />

        <SoldierStatsOverlay 
          isVisible={showQuickStats}
          onClose={(e) => {
            e.stopPropagation();
            toggleQuickStats(e);
          }}
          stats={stats}
        />
      </div>
    </Card>
  );
});

OptimizedSoldierCard.displayName = 'OptimizedSoldierCard';

export default OptimizedSoldierCard;
