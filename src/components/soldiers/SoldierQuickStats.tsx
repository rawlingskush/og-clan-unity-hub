
import React from 'react';

interface QuickStatsProps {
  winRate: string;
  favMap: string;
  kd: string;
}

const SoldierQuickStats = ({ winRate, favMap, kd }: QuickStatsProps) => {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-ogclan">Quick Stats</h4>
      <div className="grid grid-cols-2 gap-1 text-xs">
        <div className="text-ogclan-muted">Win Rate</div>
        <div className="text-right font-semibold text-ogclan-light">{winRate}</div>
        
        <div className="text-ogclan-muted">Favorite Map</div>
        <div className="text-right font-semibold text-ogclan-light">{favMap}</div>
        
        <div className="text-ogclan-muted">K/D Ratio</div>
        <div className="text-right font-semibold text-ogclan-light">{kd}</div>
      </div>
    </div>
  );
};

export default SoldierQuickStats;
