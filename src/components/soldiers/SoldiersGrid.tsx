
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
      active: (soldier: Soldier) => soldier.active === true,
      legend: (soldier: Soldier) => soldier.spotlight || soldier.role.toLowerCase().includes('commander'),
      pro: (soldier: Soldier) => soldier.pro || soldier.role.toLowerCase().includes('pro')
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
          <p className="text-xl text-ogclan-light max-w-3xl mx-auto mb-6">
            Battle-tested warriors ready to dominate any battlefield
          </p>
          
          {/* Enhanced description */}
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border border-ogclan/30 rounded-lg p-6 mb-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
              These aren't just soldiers — they're <span className="text-ogclan font-bold">OG Clan Cameroon</span>. 
              Forged in fire, raised in the isolated streets of <span className="text-red-400 font-semibold">Black Market</span>, 
              and built for war.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Each operator moves with purpose — armed with a signature loadout and the instincts of a killer. 
              From brutal close-quarters combat to surgical long-range takedowns, they've been 
              <span className="text-ogclan font-bold"> onetapping since 2019</span>.
            </p>
          </div>
        </div>
      </AnimatedContent>

      <FilterButtons 
        currentFilter={filter} 
        onFilterChange={handleFilterChange}
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
