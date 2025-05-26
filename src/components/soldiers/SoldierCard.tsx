
import React, { useState, useEffect } from 'react';
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

const SoldierCard = ({ soldier, isActive = false }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [favoriteMap, setFavoriteMap] = useState<string>('');
  const [stats, setStats] = useState(generateSoldierStats(soldier.name));
  
  // Mark card as active if it's a spotlight soldier or explicitly set as active
  const isActiveCard = isActive || soldier.spotlight;
  const isPrincessCard = soldier.princess;
  const isProCard = soldier.pro;
  
  // Use the sparkle hooks
  const { sparkParticles, generateSparkParticles } = useSoldierSparkles(isActiveCard || isProCard);
  const { princessParticles, generatePrincessParticles } = usePrincessSparkles(isPrincessCard);
  
  // Generate random favorite map on component mount
  useEffect(() => {
    setFavoriteMap(soldier.favoriteMap || stats.favMap);
  }, [soldier.favoriteMap, stats.favMap]);

  // Function to toggle quick stats
  const toggleQuickStats = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't toggle stats if clicking the footer (TikTok link area)
    const target = e.target as HTMLElement;
    const isFooter = target.closest('.card-footer') !== null;
    const isLink = target.closest('a') !== null;
    
    if (!isFooter && !isLink) {
      setShowQuickStats(prev => !prev);
    }
  };

  // Get base color for card styling
  const weaponBadgeColors: Record<string, string> = {
    // Shotguns - red
    "BY15": "bg-red-600",
    "KRM-262": "bg-red-600",
    "HS0405": "bg-red-600",
    "R9-0": "bg-red-600",
    "Striker": "bg-red-600",
    
    // SMGs - yellow/pink for princess/gold for pro
    "QQ9": isProCard ? "bg-yellow-500" : "bg-yellow-600",
    "FENNEC": isPrincessCard ? "bg-pink-600" : isProCard ? "bg-yellow-500" : "bg-yellow-600",
    "MAC-10": isProCard ? "bg-yellow-500" : "bg-yellow-600",
    
    // Snipers - green
    "XPR-50": "bg-green-600",
    "DLQ33": "bg-green-600",
    
    // ARs - blue
    "Kilo 141": "bg-blue-600",
    "AK117": "bg-blue-600",
    "Oden": "bg-blue-600"
  };
  
  const accentColor = weaponBadgeColors[soldier.weapon] || "bg-ogclan";

  // Handle touch move for mobile effects
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isPrincessCard) {
      generatePrincessParticles(e);
    } else if (isActiveCard || isProCard) {
      generateSparkParticles(e);
    }
  };

  // Handle mouse move for desktop effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPrincessCard) {
      generatePrincessParticles(e);
    } else if (isActiveCard || isProCard) {
      generateSparkParticles(e);
    }
  };

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
};

export default SoldierCard;
