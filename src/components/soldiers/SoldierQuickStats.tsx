
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface QuickStatsProps {
  winRate: string;
  favMap: string;
  kd: string;
  operatorSkill?: string;
  mvpTitles?: string;
  clutchMoments?: string;
  playStyle?: string;
}

const SoldierQuickStats = ({ 
  winRate, 
  favMap, 
  kd, 
  operatorSkill = "Purifier",
  mvpTitles = "5x",
  clutchMoments = "12",
  playStyle = "Aggressive Pusher"
}: QuickStatsProps) => {
  // Convert win rate to number for progress bar
  const winRateValue = parseInt(winRate.replace('%', ''), 10);
  // Convert KD to number for progress bar
  const kdValue = parseFloat(kd);
  const kdPercent = Math.min((kdValue / 5) * 100, 100); // Max KD of 5 for 100%
  
  return (
    <div className="space-y-3 p-1 w-full">
      <h4 className="text-sm font-semibold text-ogclan border-b border-ogclan/30 pb-1 mb-2">Quick Stats</h4>
      
      <div className="space-y-2">
        <div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-ogclan-muted">Win Rate</div>
            <div className="text-xs font-semibold text-ogclan-light">{winRate}</div>
          </div>
          <div className="stat-progress">
            <div className="stat-progress-bar" style={{ width: `${winRateValue}%` }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs text-ogclan-muted">K/D Ratio</div>
            <div className="text-xs font-semibold text-ogclan-light">{kd}</div>
          </div>
          <div className="stat-progress">
            <div className="stat-progress-bar" style={{ width: `${kdPercent}%` }}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-1 gap-y-2 text-xs mt-3">
          <div className="text-ogclan-muted">Favorite Map</div>
          <div className="text-right font-semibold text-ogclan-light">{favMap}</div>
          
          <div className="text-ogclan-muted">Operator Skill</div>
          <div className="text-right font-semibold text-ogclan-light">{operatorSkill}</div>
          
          <div className="text-ogclan-muted">MVP Titles</div>
          <div className="text-right font-semibold text-ogclan-light">{mvpTitles}</div>
          
          <div className="text-ogclan-muted flex items-center">
            Clutch Moments
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-block ml-1 cursor-help">
                    <Info className="h-3 w-3 text-ogclan/60" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-black/90 border border-ogclan/50 text-xs p-2">
                  <p>1v3+ wins or match-sealing plays</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-right font-semibold text-ogclan-light">{clutchMoments}</div>
          
          <div className="text-ogclan-muted">Play Style</div>
          <div className="text-right font-semibold text-ogclan-light">{playStyle}</div>
        </div>
      </div>
    </div>
  );
};

export default SoldierQuickStats;
