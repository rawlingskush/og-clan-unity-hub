import React, { useState, memo, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TierData } from '@/types/tier';
import SoldierCard from './OptimizedSoldierCard';

interface TierCardProps {
  tier: TierData;
  index: number;
  onSoldierClick?: (soldier: any) => void;
}

const TierCard = memo(({ tier, index, onSoldierClick }: TierCardProps) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  // Memoize tier icon
  const tierIcon = useMemo(() => {
    switch (tier.id) {
      case 1: return "🛡️";
      case 2: return "🔥";
      case 3: return "⚒️";
      case 4: return "🌱";
      case 5: return "❄️";
      default: return "🎯";
    }
  }, [tier.id]);

  // Optimize click handler
  const handleSoldierClick = useCallback((soldier: any) => {
    if (soldier.hasProfile && onSoldierClick) {
      const element = document.querySelector(`#og-${soldier.profileId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [onSoldierClick]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-sm shadow-xl transition-shadow duration-300 hover:shadow-2xl"
      style={{ background: tier.theme.bg }}
    >
      {/* Tier Header */}
      <div
        className="relative p-6 cursor-pointer transition-colors duration-200 hover:bg-white/5"
        onClick={toggleExpanded}
      >
        {/* Simplified Background Pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
          <div className="text-4xl rotate-12 transform translate-x-6 -translate-y-2">{tierIcon}</div>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-start gap-4 flex-1">
            {/* Simplified Tier Icon */}
            <div 
              className="p-3 rounded-xl border"
              style={{ 
                backgroundColor: `${tier.theme.primary}20`,
                borderColor: `${tier.theme.primary}40`
              }}
            >
              <span className="text-2xl">{tierIcon}</span>
            </div>
            
            {/* Tier Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 
                  className="font-bold text-xl md:text-2xl tracking-wider"
                  style={{ color: tier.theme.primary }}
                >
                  {tier.name}
                </h3>
                <div className="hidden sm:block w-px h-6 bg-white/20" />
                <span className="hidden sm:inline text-lg font-medium text-gray-300">
                  {tier.title}
                </span>
              </div>
              
              <h4 className="sm:hidden text-lg font-medium text-gray-300 mb-2">
                {tier.title}
              </h4>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {tier.description}
              </p>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 ml-4">
            <div 
              className="px-3 py-1.5 rounded-lg text-xs font-medium border"
              style={{ 
                backgroundColor: `${tier.theme.primary}15`,
                borderColor: `${tier.theme.primary}30`,
                color: tier.theme.primary
              }}
            >
              {tier.soldiers.length} warriors
            </div>
            <ChevronDown
              className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              size={20}
              style={{ color: tier.theme.primary }}
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
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier.soldiers.map((soldier, soldierIndex) => (
                <SoldierCard
                  key={soldier.name}
                  soldier={soldier}
                  soldierIndex={soldierIndex}
                  tierTheme={tier.theme}
                  onClick={handleSoldierClick}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

TierCard.displayName = 'TierCard';

export default TierCard;