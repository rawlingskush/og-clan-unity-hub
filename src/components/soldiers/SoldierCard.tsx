
import React, { useState, useEffect } from 'react';
import { Soldier } from "@/types/soldier";
import { useIsMobile } from "@/hooks/use-mobile";
import SoldierCardMobile from './SoldierCardMobile';
import SoldierCardDesktop from './SoldierCardDesktop';

interface SoldierCardProps {
  soldier: Soldier;
  isActive?: boolean;
}

const SoldierCard = ({ soldier, isActive = false }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [favoriteMap, setFavoriteMap] = useState<string>('');
  
  // Mark card as active if it's a spotlight soldier or explicitly set as active
  const isActiveCard = isActive || soldier.spotlight || soldier.active;
  
  // Generate favorite map on component mount
  useEffect(() => {
    const maps = ["ISOLATED", "BLACKOUT", "ALCATRAZ"];
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    setFavoriteMap(soldier.favoriteMap || randomMap);
  }, [soldier.favoriteMap]);

  return isMobile ? (
    <SoldierCardMobile 
      soldier={soldier} 
      favoriteMap={favoriteMap} 
      isActiveCard={isActiveCard} 
    />
  ) : (
    <SoldierCardDesktop 
      soldier={soldier} 
      favoriteMap={favoriteMap} 
      isActiveCard={isActiveCard} 
    />
  );
};

export default SoldierCard;
