import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SoldierCardProps {
  soldier: {
    name: string;
    emoji: string;
    status: string;
    hasProfile?: boolean;
  };
  soldierIndex: number;
  tierTheme: {
    primary: string;
  };
  onClick: (soldier: any) => void;
}

const SoldierCard = memo(({ soldier, soldierIndex, tierTheme, onClick }: SoldierCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: soldierIndex * 0.03,
        duration: 0.2,
        ease: "easeOut"
      }}
      className={`relative p-4 rounded-xl border shadow-lg transition-all duration-200 group ${
        soldier.hasProfile 
          ? 'cursor-pointer hover:scale-[1.02] hover:border-ogclan/60 bg-gradient-to-br from-black/60 to-black/40 hover:shadow-xl' 
          : 'bg-black/50 border-white/10 hover:bg-black/70'
      }`}
      style={{
        borderColor: soldier.hasProfile ? `${tierTheme.primary}30` : undefined
      }}
      onClick={() => onClick(soldier)}
    >
      <div className="relative flex items-start gap-3">
        {/* Optimized Emoji */}
        <div className="flex-shrink-0 text-xl sm:text-2xl relative">
          {soldier.emoji}
          {soldier.hasProfile && (
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-ogclan" />
          )}
        </div>
        
        {/* Soldier Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-sm sm:text-base text-white truncate group-hover:text-ogclan transition-colors duration-200">
              {soldier.name}
            </h4>
            {soldier.hasProfile && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-ogclan" />
                <span className="text-xs text-ogclan font-medium hidden sm:inline">Profile</span>
              </div>
            )}
          </div>
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
            {soldier.status}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

SoldierCard.displayName = 'SoldierCard';

export default SoldierCard;