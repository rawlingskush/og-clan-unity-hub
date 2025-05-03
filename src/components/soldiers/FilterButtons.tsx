
import React, { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { motion } from 'framer-motion';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = ({ currentFilter, onFilterChange }: FilterButtonsProps) => {
  const [filterButtonsVisible, setFilterButtonsVisible] = useState(false);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  // Initialize animation after component mounts
  useEffect(() => {
    setFilterButtonsVisible(true);
  }, []);

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "assault", label: "Assault Architect" },
    { id: "shotgun", label: "Shotgun Masters" },
    { id: "sniper", label: "Snipers" },
    { id: "smg", label: "SMG Specialists" },
    { id: "support", label: "Support Operatives" }
  ];

  return (
    <AnimatedContent animation="slide-in-right" className="mb-8">
      <div className="flex flex-wrap justify-center gap-3">
        {filterOptions.map((filterOption, index) => {
          const isActive = currentFilter === filterOption.id;
          const isHovered = hoveredFilter === filterOption.id;
          
          return (
            <motion.button 
              key={filterOption.id}
              className={`rounded-full px-5 py-2 text-sm font-medium filter-button ${
                isActive ? 'active bg-black/60 shadow-sm shadow-ogclan/20' : 
                'bg-black/40 text-gray-300 border border-ogclan/30 hover:text-ogclan-light'
              }`}
              onClick={() => onFilterChange(filterOption.id)}
              onMouseEnter={() => setHoveredFilter(filterOption.id)}
              onMouseLeave={() => setHoveredFilter(null)}
              aria-pressed={isActive}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: filterButtonsVisible ? 1 : 0,
                y: filterButtonsVisible ? 0 : 20,
                scale: isActive ? 1.05 : (isHovered ? 1.03 : 1)
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: isActive ? 1.05 : 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {filterOption.label}
              {isActive && (
                <motion.div 
                  className="h-0.5 bg-ogclan absolute bottom-1 left-0 right-0 mx-auto" 
                  initial={{ width: '0%' }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                  layoutId="activeFilterIndicator"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </AnimatedContent>
  );
};

export default FilterButtons;
