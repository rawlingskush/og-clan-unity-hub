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

  // Get tier-specific icon
  const getTierIcon = () => {
    switch (tier.id) {
      case 1: return "🛡️";
      case 2: return "🔥";
      case 3: return "⚒️";
      case 4: return "🌱";
      case 5: return "❄️";
      default: return "🎯";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-500"
      style={{ background: tier.theme.bg }}
    >
      {/* Animated Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl border-2 animate-pulse" style={{ borderColor: tier.theme.primary }} />
      </div>

      {/* Tier Header */}
      <div
        className="relative p-6 cursor-pointer hover:bg-white/5 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
          <div className="text-6xl rotate-12 transform translate-x-8 -translate-y-4">{getTierIcon()}</div>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-start gap-4 flex-1">
            {/* Tier Icon */}
            <div 
              className="p-3 rounded-xl backdrop-blur-sm border shadow-lg"
              style={{ 
                backgroundColor: `${tier.theme.primary}20`,
                borderColor: `${tier.theme.primary}40`
              }}
            >
              <span className="text-2xl">{getTierIcon()}</span>
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
              
              {/* Mobile title */}
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
              className="px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm border"
              style={{ 
                backgroundColor: `${tier.theme.primary}15`,
                borderColor: `${tier.theme.primary}30`,
                color: tier.theme.primary
              }}
            >
              {tier.soldiers.length} warriors
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
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
                <motion.div
                  key={soldier.name}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: soldierIndex * 0.05,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  className={`relative p-4 rounded-xl border backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group ${
                    soldier.hasProfile 
                      ? 'cursor-pointer hover:scale-105 hover:border-ogclan/60 bg-gradient-to-br from-black/60 to-black/40 hover:from-ogclan/10 hover:to-black/70' 
                      : 'bg-black/50 border-white/10 hover:bg-black/70'
                  }`}
                  style={{
                    borderColor: soldier.hasProfile ? `${tier.theme.primary}30` : undefined
                  }}
                  onClick={() => handleSoldierClick(soldier)}
                >
                  {/* Profile Indicator Glow */}
                  {soldier.hasProfile && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-ogclan/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  <div className="relative flex items-start gap-3">
                    {/* Emoji with enhanced styling */}
                    <div className="flex-shrink-0 text-xl sm:text-2xl relative">
                      {soldier.emoji}
                      {soldier.hasProfile && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-ogclan to-ogclan-glow animate-pulse shadow-sm" />
                      )}
                    </div>
                    
                    {/* Soldier Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-sm sm:text-base text-white truncate group-hover:text-ogclan transition-colors duration-300">
                          {soldier.name}
                        </h4>
                        {soldier.hasProfile && (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-ogclan shadow-sm" />
                            <span className="text-xs text-ogclan font-medium hidden sm:inline">Profile</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {soldier.status}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-ogclan/20 transition-colors duration-300" />
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