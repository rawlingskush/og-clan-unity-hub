
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
    { id: "all", label: "All" },
    { id: "assault", label: "Assault Architect" },
    { id: "shotgun", label: "Shotgun Masters" },
    { id: "sniper", label: "Snipers" },
    { id: "smg", label: "SMG Specialists" },
    { id: "support", label: "Support Operatives" }
  ];

  return (
    <AnimatedContent animation="slide-in-right" className="mb-8">
      <div className={`flex flex-wrap justify-center ${isMobile ? 'gap-2 px-1' : 'gap-3'}`}>
        {filterOptions.map((filterOption, index) => (
          <motion.button 
            key={filterOption.id}
            className={`rounded-full ${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-1.5 text-sm'} font-medium filter-button ${
              currentFilter === filterOption.id ? 'active bg-black/60 shadow-sm shadow-ogclan/20' : 
              'bg-black/40 text-gray-300 border border-ogclan/30 hover:text-ogclan-light'
            }`}
            onClick={() => onFilterChange(filterOption.id)}
            aria-pressed={currentFilter === filterOption.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: filterButtonsVisible ? 1 : 0,
              y: filterButtonsVisible ? 0 : 20,
              scale: currentFilter === filterOption.id ? 1.05 : 1
            }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {filterOption.label}
          </motion.button>
        ))}
      </div>
    </AnimatedContent>
  );
};

export default FilterButtons;
