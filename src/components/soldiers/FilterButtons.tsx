
import React, { useState, useEffect, memo } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = memo(({ currentFilter, onFilterChange }: FilterButtonsProps) => {
  const [filterButtonsVisible, setFilterButtonsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterButtonsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const filterOptions = [
    { id: "all", label: "All Elite", shortLabel: "All" },
    { id: "active", label: "Active Soldiers", shortLabel: "Active" },
    { id: "legend", label: "Legendary", shortLabel: "Legend" },
    { id: "pro", label: "Pro Players", shortLabel: "Pro" }
  ];

  return (
    <AnimatedContent animation="slide-in-right" className="mb-8">
      <div className={`${isMobile ? 'overflow-x-auto pb-2 scrollbar-hide' : ''}`}>
        <div className={`flex ${isMobile ? 'gap-3 px-4 min-w-max' : 'flex-wrap justify-center gap-4'}`}>
          {filterOptions.map((filterOption, index) => (
            <motion.button 
              key={filterOption.id}
              className={`rounded-lg transition-all duration-300 font-medium filter-button relative overflow-hidden touch-manipulation shadow-lg ${
                isMobile ? 'px-6 py-3 text-sm min-w-[90px]' : 'px-8 py-3 text-base'
              } ${
                currentFilter === filterOption.id ? 
                'active bg-gradient-to-r from-ogclan to-yellow-500 text-black shadow-xl shadow-ogclan/40 scale-105 border-2 border-ogclan/60' : 
                'bg-gradient-to-br from-black/90 to-gray-900/90 text-gray-300 border-2 border-gray-600/40 hover:text-white hover:border-ogclan/60 hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:shadow-lg hover:shadow-ogclan/20 hover:scale-102'
              }`}
              onClick={() => onFilterChange(filterOption.id)}
              aria-pressed={currentFilter === filterOption.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: filterButtonsVisible ? 1 : 0,
                y: filterButtonsVisible ? 0 : 20,
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ 
                scale: currentFilter === filterOption.id ? 1.05 : 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ minHeight: '48px' }}
            >
              {/* Tactical scanner line effect */}
              <div className={`absolute top-0 left-0 w-full h-[2px] ${
                currentFilter === filterOption.id ? 
                'bg-gradient-to-r from-transparent via-white/80 to-transparent' :
                'bg-gradient-to-r from-transparent via-ogclan/50 to-transparent'
              } animate-[scanner-line_3s_linear_infinite]`}></div>
              
              <span className={`relative z-10 font-bold tracking-wide ${
                currentFilter === filterOption.id ? 'text-black drop-shadow-sm' : 'text-gray-300'
              }`}>
                {isMobile ? filterOption.shortLabel : filterOption.label}
              </span>
              
              {/* Active state glow effect */}
              {currentFilter === filterOption.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ogclan/20 to-yellow-500/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              
              {/* Hover ripple effect */}
              <motion.div
                className="absolute inset-0 bg-ogclan/10 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1.2, opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
      
      {isMobile && (
        <motion.div 
          className="flex justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-xs text-ogclan/60 flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-ogclan/20">
            <span>←</span>
            <span>Swipe to explore filters</span>
            <span>→</span>
          </div>
        </motion.div>
      )}
    </AnimatedContent>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;
