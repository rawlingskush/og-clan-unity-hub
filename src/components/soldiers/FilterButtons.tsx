
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
              className={`rounded-lg transition-all duration-200 font-medium filter-button relative overflow-hidden touch-manipulation ${
                isMobile ? 'px-5 py-3 text-sm min-w-[85px]' : 'px-6 py-2.5 text-sm'
              } ${
                currentFilter === filterOption.id ? 
                'active bg-ogclan text-black shadow-md shadow-ogclan/30 scale-[1.02] border border-ogclan/40' : 
                'bg-black/80 text-gray-300 border border-gray-600/40 hover:text-white hover:border-ogclan/50 hover:bg-black/90 hover:shadow-sm hover:shadow-ogclan/15'
              }`}
              onClick={() => onFilterChange(filterOption.id)}
              aria-pressed={currentFilter === filterOption.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: filterButtonsVisible ? 1 : 0,
                y: filterButtonsVisible ? 0 : 15,
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: 'easeOut'
              }}
              whileHover={{ 
                scale: currentFilter === filterOption.id ? 1.02 : 1.01,
                transition: { duration: 0.15 }
              }}
              whileTap={{ scale: 0.97 }}
              style={{ minHeight: '44px' }}
            >
              <span className={`relative z-10 font-semibold ${
                currentFilter === filterOption.id ? 'text-black' : 'text-gray-300'
              }`}>
                {isMobile ? filterOption.shortLabel : filterOption.label}
              </span>
              
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1.2, opacity: [0, 0.2, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
      
      {isMobile && (
        <motion.div 
          className="flex justify-center mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-xs text-ogclan/50 flex items-center gap-1">
            <span>←</span>
            <span>Swipe to see more filters</span>
            <span>→</span>
          </div>
        </motion.div>
      )}
    </AnimatedContent>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;
