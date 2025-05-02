
import React, { useState, useEffect } from 'react';
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
  const isMobile = useIsMobile();
  
  // Filter soldiers based on selected filter
  const filteredSoldiers = filterSoldiers(soldiers, filter);

  // Initialize animation after component mounts with staggered delays
  useEffect(() => {
    // Animate the cards after filter buttons
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  // Reset and trigger animations when filter changes
  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [filter]);

  // Handle filter change
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  // Determine if we should show grid or carousel based on screen size
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  return (
    <div>
      {/* Filter Pills */}
      <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />
      
      {/* Responsive layouts */}
      {isMobile ? (
        <MobileCarousel soldiers={filteredSoldiers} />
      ) : isTablet ? (
        <TabletGrid soldiers={filteredSoldiers} animateItems={animateItems} />
      ) : (
        <DesktopGrid soldiers={filteredSoldiers} animateItems={animateItems} />
      )}
      
      {/* Join CTA */}
      <JoinCTA />
    </div>
  );
};

export default SoldiersGrid;
