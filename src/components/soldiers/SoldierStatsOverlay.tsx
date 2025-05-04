
import React from 'react';
import SoldierQuickStats from './SoldierQuickStats';

interface SoldierStatsOverlayProps {
  isVisible: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
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

const SoldierStatsOverlay = ({ isVisible, onClose, stats }: SoldierStatsOverlayProps) => {
  if (!isVisible) return null;
  
  return (
    <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out] z-10"
      onClick={onClose}
    >
      <SoldierQuickStats 
        winRate={stats.winRate} 
        favMap={stats.favMap} 
        kd={stats.kd}
        operatorSkill={stats.operatorSkill}
        mvpTitles={stats.mvpTitles}
        clutchMoments={stats.clutchMoments}
        playStyle={stats.playStyle}
      />
    </div>
  );
};

export default SoldierStatsOverlay;
