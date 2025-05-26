
import React, { useState, useEffect, memo, useMemo, useCallback } from 'react';
import { Soldier } from "@/types/soldier";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSoldierSparkles } from "@/hooks/useSoldierSparkles";
import { usePrincessSparkles } from "@/hooks/usePrincessSparkles";
import { generateSoldierStats } from "@/utils/soldierStats";
import SoldierCardMobile from './SoldierCardMobile';
import SoldierCardDesktop from './SoldierCardDesktop';

interface SoldierCardProps {
  soldier: Soldier;
  isActive?: boolean;
}

const SoldierCard = memo(({ soldier, isActive = false }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [favoriteMap, setFavoriteMap] = useState<string>('');
  
  // Memoize stats to prevent regeneration on every render
  const stats = useMemo(() => generateSoldierStats(soldier.name), [soldier.name]);
  
  // Mark card properties
  const isActiveCard = isActive || soldier.spotlight;
  const isPrincessCard = soldier.princess;
  const isProCard = soldier.pro;
  
  // Use sparkle hooks only when needed
  const { sparkParticles, generateSparkParticles } = useSoldierSparkles(isActiveCard && !isProCard);
  const { princessParticles, generatePrincessParticles } = usePrincessSparkles(isPrincessCard);
  
  // Memoize favorite map
  useEffect(() => {
    setFavoriteMap(soldier.favoriteMap || stats.favMap);
  }, [soldier.favoriteMap, stats.favMap]);

  // Optimized toggle function
  const toggleQuickStats = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isFooter = target.closest('.card-footer') !== null;
    const isLink = target.closest('a') !== null;
    
    if (!isFooter && !isLink) {
      setShowQuickStats(prev => !prev);
    }
  }, []);

  // Memoize weapon badge colors
  const weaponBadgeColors: Record<string, string> = useMemo(() => ({
    "BY15": "bg-red-600",
    "KRM-262": "bg-red-600",
    "HS0405": "bg-red-600",
    "R9-0": "bg-red-600",
    "Striker": "bg-red-600",
    "QQ9": "bg-yellow-600",
    "FENNEC": isPrincessCard ? "bg-pink-600" : "bg-yellow-600",
    "MAC-10": "bg-yellow-600",
    "XPR-50": "bg-green-600",
    "DLQ33": "bg-green-600",
    "Kilo 141": "bg-blue-600",
    "AK117": "bg-blue-600",
    "Oden": "bg-blue-600"
  }), [isPrincessCard]);
  
  const accentColor = isProCard ? "bg-yellow-500" : weaponBadgeColors[soldier.weapon] || "bg-ogclan";

  // Optimized touch handlers
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (isPrincessCard) {
      generatePrincessParticles(e);
    } else if (isActiveCard && !isProCard) {
      generateSparkParticles(e);
    }
  }, [isPrincessCard, isActiveCard, isProCard, generatePrincessParticles, generateSparkParticles]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isPrincessCard) {
      generatePrincessParticles(e);
    } else if (isActiveCard && !isProCard) {
      generateSparkParticles(e);
    }
  }, [isPrincessCard, isActiveCard, isProCard, generatePrincessParticles, generateSparkParticles]);

  return isMobile ? (
    <SoldierCardMobile
      imageUrl={soldier.imageUrl}
      name={soldier.name}
      role={soldier.role}
      weapon={soldier.weapon}
      bio={soldier.bio}
      tiktokUrl={soldier.tiktokUrl}
      favoriteMap={favoriteMap}
      isActiveCard={isActiveCard}
      isPrincessCard={isPrincessCard}
      isProCard={isProCard}
      showQuickStats={showQuickStats}
      toggleQuickStats={toggleQuickStats}
      sparkParticles={sparkParticles}
      princessParticles={princessParticles}
      onTouchMove={handleTouchMove}
      stats={stats}
    />
  ) : (
    <SoldierCardDesktop
      imageUrl={soldier.imageUrl}
      name={soldier.name}
      role={soldier.role}
      weapon={soldier.weapon}
      bio={soldier.bio}
      tiktokUrl={soldier.tiktokUrl}
      favoriteMap={favoriteMap}
      isActiveCard={isActiveCard}
      isPrincessCard={isPrincessCard}
      isProCard={isProCard}
      showQuickStats={showQuickStats}
      toggleQuickStats={toggleQuickStats}
      generateSparkParticles={handleMouseMove}
      sparkParticles={sparkParticles}
      princessParticles={princessParticles}
      accentColor={accentColor}
      stats={stats}
    />
  );
});

SoldierCard.displayName = 'SoldierCard';

export default SoldierCard;
