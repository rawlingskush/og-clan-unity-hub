
import React, { memo } from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCardImage from './SoldierCardImage';
import SoldierCardBadges from './SoldierCardBadges';
import SoldierCardBody from './SoldierCardBody';
import SoldierCardFooter from './SoldierCardFooter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface OptimizedSoldierCardProps {
  soldier: Soldier;
  priority?: boolean;
}

const OptimizedSoldierCard = memo(({ soldier, priority = false }: OptimizedSoldierCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardClasses = cn(
    "soldier-card relative bg-gradient-to-b from-black/90 to-black/95 rounded-2xl border-2 transition-all duration-500 group overflow-hidden h-full flex flex-col",
    soldier.spotlight ? "border-ogclan glow-medium animate-glow-pulse" : "border-ogclan/30 hover:border-ogclan/60",
    soldier.isPrincess && "border-pink-500 glow-princess animate-glow-princess",
    soldier.isPro && "border-yellow-500 shadow-lg shadow-yellow-500/20",
    "hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:scale-105 transform-gpu will-change-transform"
  );

  return (
    <div ref={ref} className={cardClasses}>
      {/* Only render content when in view or high priority */}
      {(isIntersecting || priority) && (
        <>
          {/* Scanner line effect */}
          <div className="scanner-line"></div>
          
          <div className="p-4 md:p-6 text-center flex-grow flex flex-col">
            {/* Badges */}
            <SoldierCardBadges soldier={soldier} />
            
            {/* Profile Image */}
            <SoldierCardImage
              imageUrl={soldier.imageUrl}
              name={soldier.name}
              role={soldier.role}
              isSpotlight={soldier.spotlight}
              isPrincess={soldier.isPrincess}
              isPro={soldier.isPro}
            />
            
            {/* Card Body */}
            <div className="flex-grow">
              <SoldierCardBody soldier={soldier} />
            </div>
            
            {/* Card Footer */}
            <SoldierCardFooter soldier={soldier} />
          </div>
        </>
      )}
      
      {/* Loading placeholder */}
      {!isIntersecting && !priority && (
        <div className="p-6 h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
});

OptimizedSoldierCard.displayName = 'OptimizedSoldierCard';

export default OptimizedSoldierCard;
