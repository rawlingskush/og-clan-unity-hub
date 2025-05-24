
import React, { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = ({ currentFilter, onFilterChange }: FilterButtonsProps) => {
  const [filterButtonsVisible, setFilterButtonsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Initialize animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterButtonsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filterOptions = [
    { id: "all", label: "All", shortLabel: "All" },
    { id: "assault", label: "Assault Architect", shortLabel: "Assault" },
    { id: "shotgun", label: "Shotgun Masters", shortLabel: "Shotgun" },
    { id: "sniper", label: "Snipers", shortLabel: "Sniper" },
    { id: "smg", label: "SMG Specialists", shortLabel: "SMG" },
    { id: "support", label: "Support Operatives", shortLabel: "Support" }
  ];

  return (
    <AnimatedContent animation="slide-in-right" className="mb-8">
      <div className={`${isMobile ? 'overflow-x-auto pb-2 scrollbar-hide' : ''}`}>
        <div className={`flex ${isMobile ? 'gap-3 px-4 min-w-max' : 'flex-wrap justify-center gap-3'}`}>
          {filterOptions.map((filterOption, index) => (
            <motion.button 
              key={filterOption.id}
              className={`rounded-lg mobile-tap-target transition-all duration-300 font-medium filter-button relative overflow-hidden ${
                isMobile ? 'px-6 py-3 text-sm min-w-[90px]' : 'px-6 py-2.5 text-sm'
              } ${
                currentFilter === filterOption.id ? 
                'active bg-gradient-to-r from-ogclan-dark to-ogclan text-black shadow-lg shadow-ogclan/40 scale-105 border border-ogclan/50' : 
                'bg-black/80 text-gray-300 border border-gray-600/50 hover:text-white hover:border-ogclan/60 hover:bg-black/90 hover:shadow-md hover:shadow-ogclan/20'
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
                delay: index * 0.08,
                type: 'spring',
                stiffness: 120
              }}
              whileHover={{ 
                scale: currentFilter === filterOption.id ? 1.05 : 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background animation */}
              {currentFilter === filterOption.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ogclan via-ogclan-light to-ogclan opacity-90"
                  layoutId="activeFilter"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              
              {/* Button text */}
              <span className="relative z-10 font-semibold">
                {isMobile ? filterOption.shortLabel : filterOption.label}
              </span>
              
              {/* Enhanced ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Improved scroll indicator for mobile */}
      {isMobile && (
        <motion.div 
          className="flex justify-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs text-ogclan/60 animate-pulse flex items-center gap-1">
            <span>←</span>
            <span>Swipe to see more filters</span>
            <span>→</span>
          </div>
        </motion.div>
      )}
    </AnimatedContent>
  );
};

export default FilterButtons;
