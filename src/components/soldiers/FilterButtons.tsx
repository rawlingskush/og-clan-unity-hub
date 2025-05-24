
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
    setFilterButtonsVisible(true);
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
      <div className={`${isMobile ? 'overflow-x-auto pb-2' : ''}`}>
        <div className={`flex ${isMobile ? 'gap-3 px-4 min-w-max' : 'flex-wrap justify-center gap-3'}`}>
          {filterOptions.map((filterOption, index) => (
            <motion.button 
              key={filterOption.id}
              className={`rounded-full mobile-tap-target transition-all duration-300 font-medium filter-button relative overflow-hidden ${
                isMobile ? 'px-4 py-2 text-sm min-w-[80px]' : 'px-6 py-2 text-sm'
              } ${
                currentFilter === filterOption.id ? 
                'active bg-ogclan text-black shadow-lg shadow-ogclan/30 scale-105' : 
                'bg-black/60 text-gray-300 border border-ogclan/30 hover:text-ogclan-light hover:border-ogclan/60 hover:bg-black/80'
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
                type: 'spring',
                stiffness: 120
              }}
              whileHover={{ 
                scale: currentFilter === filterOption.id ? 1.05 : 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active background animation */}
              {currentFilter === filterOption.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ogclan via-ogclan-light to-ogclan"
                  layoutId="activeFilter"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              
              {/* Button text */}
              <span className="relative z-10">
                {isMobile ? filterOption.shortLabel : filterOption.label}
              </span>
              
              {/* Ripple effect on tap */}
              <motion.div
                className="absolute inset-0 bg-ogclan/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator for mobile */}
      {isMobile && (
        <div className="flex justify-center mt-2">
          <div className="text-xs text-ogclan/50 animate-pulse">
            ← Swipe to see more filters →
          </div>
        </div>
      )}
    </AnimatedContent>
  );
};

export default FilterButtons;
