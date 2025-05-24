
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import FilterButtons from './FilterButtons';
import MobileCarousel from './MobileCarousel';
import TabletGrid from './TabletGrid';
import DesktopGrid from './DesktopGrid';
import JoinCTA from './JoinCTA';
import { filterSoldiers } from '@/utils/weaponCategories';

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  console.log('SoldiersGrid render:', { 
    soldiers: soldiers.length, 
    filter, 
    isMobile, 
    isTablet,
    isReady 
  });
  
  // Memoize filtered soldiers
  const filteredSoldiers = useMemo(() => {
    const filtered = filterSoldiers(soldiers, filter);
    console.log('Filtered soldiers:', filtered.length);
    return filtered;
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
    console.log('Filter changed to:', newFilter);
    setFilter(newFilter);
  }, []);

  // Show loading state if soldiers not loaded
  if (soldiers.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ogclan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-ogclan">Loading Elite Squad...</p>
        </div>
      </div>
    );
  }

  // Show loading state if not ready
  if (!isReady) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-ogclan text-sm">Initializing...</p>
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
      
      {/* Responsive layouts */}
      <div className="min-h-[400px]">
        {isMobile ? (
          <MobileCarousel soldiers={filteredSoldiers} />
        ) : isTablet ? (
          <TabletGrid soldiers={filteredSoldiers} />
        ) : (
          <DesktopGrid soldiers={filteredSoldiers} />
        )}
      </div>
      
      {/* Join CTA */}
      <div className="mt-16">
        <JoinCTA />
      </div>
    </div>
  );
};

export default SoldiersGrid;
