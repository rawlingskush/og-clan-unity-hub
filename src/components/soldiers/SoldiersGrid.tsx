
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { useIsMobile } from '@/hooks/use-mobile';
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
  const [animateItems, setAnimateItems] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const isMobile = useIsMobile();
  
  // Memoize filtered soldiers to prevent unnecessary recalculations
  const filteredSoldiers = useMemo(() => 
    filterSoldiers(soldiers, filter), 
    [soldiers, filter]
  );

  // Optimized tablet detection with proper cleanup
  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkTablet();
    
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkTablet, 150);
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Initialize animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized filter change animation
  useEffect(() => {
    if (animateItems) {
      setAnimateItems(false);
      const timer = setTimeout(() => {
        setAnimateItems(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [filter, animateItems]);

  // Memoized filter change handler
  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  // Loading state with better UX
  if (soldiers.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-ogclan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-ogclan">Loading Elite Squad...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filter Pills with improved mobile spacing */}
      <div className="px-4 md:px-0">
        <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />
      </div>
      
      {/* Responsive layouts with proper device detection */}
      <div className="min-h-[400px]">
        {isMobile ? (
          <MobileCarousel soldiers={filteredSoldiers} />
        ) : isTablet ? (
          <TabletGrid soldiers={filteredSoldiers} animateItems={animateItems} />
        ) : (
          <DesktopGrid soldiers={filteredSoldiers} animateItems={animateItems} />
        )}
      </div>
      
      {/* Join CTA with improved spacing */}
      <div className="mt-16">
        <JoinCTA />
      </div>
    </div>
  );
};

export default SoldiersGrid;
