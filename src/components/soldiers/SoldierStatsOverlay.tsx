
import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SoldierStatsOverlayProps {
  isVisible: boolean;
  onClose: (e: React.MouseEvent) => void;
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
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/95 backdrop-blur-sm z-20 p-4 rounded-lg border border-ogclan/50"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-ogclan font-semibold">Quick Stats</h4>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Win Rate:</span>
              <span className="text-ogclan font-semibold">{stats.winRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">K/D:</span>
              <span className="text-ogclan font-semibold">{stats.kd}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Operator Skill:</span>
              <span className="text-ogclan font-semibold">{stats.operatorSkill}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">MVP Titles:</span>
              <span className="text-ogclan font-semibold">{stats.mvpTitles}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Clutch Moments:</span>
              <span className="text-ogclan font-semibold">{stats.clutchMoments}</span>
            </div>
            <div className="col-span-2">
              <span className="text-gray-400">Play Style:</span>
              <p className="text-white text-xs mt-1">{stats.playStyle}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SoldierStatsOverlay;
