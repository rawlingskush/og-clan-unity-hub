
import React, { useState, useEffect } from 'react';
import AnimatedContent from '@/components/AnimatedContent';

interface FilterButtonsProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = ({ currentFilter, onFilterChange }: FilterButtonsProps) => {
  const [filterButtonsVisible, setFilterButtonsVisible] = useState(false);

  // Initialize animation after component mounts
  useEffect(() => {
    setFilterButtonsVisible(true);
  }, []);

  const filterButtonClass = (filter: string) => 
    `rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
      currentFilter === filter 
        ? 'bg-ogclan text-black shadow-sm shadow-ogclan/40'
        : 'bg-black/40 text-ogclan/80 border border-ogclan/30 hover:bg-black/60 hover:border-ogclan/50'
    }`;

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
      <div className="flex flex-wrap justify-center gap-2">
        {filterOptions.map((filterOption, index) => (
          <button 
            key={filterOption.id}
            className={`${filterButtonClass(filterOption.id)} ${filterButtonsVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => onFilterChange(filterOption.id)}
            aria-pressed={currentFilter === filterOption.id}
            style={{ 
              transition: 'all 0.3s ease-out',
              transitionDelay: `${index * 100}ms`,
              transform: filterButtonsVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {filterOption.label}
          </button>
        ))}
      </div>
    </AnimatedContent>
  );
};

export default FilterButtons;
