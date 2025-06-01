
import React, { useState, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import FilterButtons from './FilterButtons';
import DesktopGrid from './DesktopGrid';
import TabletGrid from './TabletGrid';
import EnhancedMobileCarousel from './EnhancedMobileCarousel';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import AnimatedContent from '../AnimatedContent';

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'legend' | 'pro'>('all');
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const filteredSoldiers = useMemo(() => {
    if (filter === 'all') return soldiers;
    
    const filterMap = {
      active: (soldier: Soldier) => soldier.status === 'active',
      legend: (soldier: Soldier) => soldier.spotlight || soldier.role.toLowerCase().includes('commander'),
      pro: (soldier: Soldier) => soldier.isPro || soldier.role.toLowerCase().includes('pro')
    };

    return soldiers.filter(filterMap[filter] || (() => true));
  }, [soldiers, filter]);

  const handleFilterChange = useCallback((newFilter: typeof filter) => {
    setFilter(newFilter);
  }, []);

  if (!soldiers || soldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-ogclan mb-4">Loading soldiers...</p>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8">
      <AnimatedContent animation="fade-in-up">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Meet Our Elite Squad
          </h2>
          <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
            Battle-tested warriors ready to dominate any battlefield
          </p>
        </div>
      </AnimatedContent>

      <FilterButtons 
        activeFilter={filter} 
        onFilterChange={handleFilterChange}
        soldierCounts={{
          all: soldiers.length,
          active: soldiers.filter(s => s.status === 'active').length,
          legend: soldiers.filter(s => s.spotlight || s.role.toLowerCase().includes('commander')).length,
          pro: soldiers.filter(s => s.isPro || s.role.toLowerCase().includes('pro')).length
        }}
      />

      <div className="mt-8">
        {isMobile ? (
          <EnhancedMobileCarousel soldiers={filteredSoldiers} />
        ) : isTablet ? (
          <TabletGrid soldiers={filteredSoldiers} />
        ) : (
          <DesktopGrid soldiers={filteredSoldiers} />
        )}
      </div>
    </section>
  );
};

export default SoldiersGrid;
