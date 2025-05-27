
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import FilterButtons from './FilterButtons';
import OptimizedSoldierCard from './OptimizedSoldierCard';
import JoinCTA from './JoinCTA';
import { filterSoldiers } from '@/utils/weaponCategories';

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = React.memo(({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  // Memoize filtered soldiers
  const filteredSoldiers = useMemo(() => {
    return filterSoldiers(soldiers, filter);
  }, [soldiers, filter]);

  // Initialize component ready state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Memoized filter change handler
  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  // Optimized grid rendering
  const renderGrid = useCallback(() => {
    if (filteredSoldiers.length === 0) {
      return (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-ogclan mb-4">No soldiers match the current filter</p>
            <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      );
    }

    const gridClasses = isMobile 
      ? "grid grid-cols-1 gap-4 px-4"
      : isTablet 
      ? "grid grid-cols-2 md:grid-cols-3 gap-6 px-4"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-0";

    return (
      <div className={gridClasses}>
        {filteredSoldiers.map((soldier, index) => (
          <div 
            key={soldier.id} 
            id={`og-${soldier.id.toLowerCase()}`}
            className="scroll-mt-32 gpu-accelerated"
            style={{ 
              animationDelay: `${index * 0.05}s` // Reduced delay for better performance
            }}
          >
            <OptimizedSoldierCard 
              soldier={soldier} 
              isActive={soldier.active || soldier.spotlight}
            />
          </div>
        ))}
      </div>
    );
  }, [filteredSoldiers, isMobile, isTablet]);

  // Show loading state
  if (soldiers.length === 0 || !isReady) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ogclan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-ogclan">Loading Elite Squad...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filter Pills */}
      <div className="px-4 md:px-0">
        <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />
      </div>
      
      {/* Optimized Grid */}
      <div className="min-h-[400px]">
        {renderGrid()}
      </div>
      
      {/* Join CTA */}
      <div className="mt-16">
        <JoinCTA />
      </div>
    </div>
  );
});

SoldiersGrid.displayName = 'SoldiersGrid';

export default SoldiersGrid;
