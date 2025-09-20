import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target } from 'lucide-react';
import { TierData } from '@/types/tier';

interface TierCardProps {
  tier: TierData;
  index: number;
  onSoldierClick?: (soldier: any) => void;
}

const TierCard = ({ tier, index, onSoldierClick }: TierCardProps) => {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First tier expanded by default

  const handleSoldierClick = (soldier: any) => {
    if (soldier.hasProfile && onSoldierClick) {
      const element = document.querySelector(`#og-${soldier.profileId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      style={{ background: tier.theme.bg }}
    >
      {/* Tier Header */}
      <div
        className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target size={20} style={{ color: tier.theme.primary }} />
            <div>
              <h3 className="font-semibold text-lg" style={{ color: tier.theme.primary }}>
                {tier.name} – {tier.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{tier.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-white/10 px-2 py-1 rounded">
              {tier.soldiers.length} soldiers
            </span>
            <ChevronDown
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              size={16}
            />
          </div>
        </div>
      </div>

      {/* Soldiers Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10"
          >
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {tier.soldiers.map((soldier, soldierIndex) => (
                <motion.div
                  key={soldier.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: soldierIndex * 0.05 }}
                  className={`p-4 rounded-lg border border-white/10 bg-black/40 hover:bg-black/60 hover:scale-[1.02] transition-all duration-300 group shadow-lg hover:shadow-xl ${
                    soldier.hasProfile ? 'cursor-pointer hover:border-ogclan/50 hover:bg-gradient-to-br hover:from-ogclan/10 hover:to-black/60' : ''
                  }`}
                  onClick={() => handleSoldierClick(soldier)}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{soldier.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm text-white truncate">
                          {soldier.name}
                        </h4>
                        {soldier.hasProfile && (
                          <div className="w-2 h-2 rounded-full bg-ogclan flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {soldier.status}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TierCard;