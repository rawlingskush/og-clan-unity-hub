
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { ViewMode } from '@/types/tier';
import { motion, AnimatePresence } from 'framer-motion';
import SoldiersControlPanel from './SoldiersControlPanel';
import SoldiersDisplay from './SoldiersDisplay';
import NoSoldiersFound from './NoSoldiersFound';
import JoinCTA from './JoinCTA';
import ViewToggle from './ViewToggle';
import TierRosterSection from './TierRosterSection';
import { filterSoldiers } from '@/utils/weaponCategories';

interface EnhancedSoldiersGridProps {
  soldiers: Soldier[];
}

const EnhancedSoldiersGrid = React.memo(({ soldiers }: EnhancedSoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  
  // Enhanced filtered soldiers - maintain original order and memoize properly
  const processedSoldiers = useMemo(() => {
    let filtered = filterSoldiers(soldiers, filter);
    
    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(soldier => 
        soldier.name.toLowerCase().includes(searchLower) ||
        soldier.role.toLowerCase().includes(searchLower) ||
        soldier.weapon.toLowerCase().includes(searchLower) ||
        soldier.bio.toLowerCase().includes(searchLower)
      );
    }
    
    return filtered;
  }, [soldiers, filter, searchTerm]);

  // Initialize component ready state
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Memoized handlers
  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setFilter("all");
  }, []);

  // Loading states
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

  if (!isReady) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`h-4 bg-ogclan/20 rounded skeleton`} style={{ width: `${60 + i * 20}%` }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* View Toggle */}
      <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
      
      {viewMode === 'gallery' ? (
        <>
          <SoldiersControlPanel
            totalSoldiers={soldiers.length}
            filteredCount={processedSoldiers.length}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
          
          <motion.div 
            className="min-h-[400px]"
            layout
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {processedSoldiers.length === 0 ? (
                <NoSoldiersFound onClearFilters={handleClearFilters} />
              ) : (
                <SoldiersDisplay soldiers={processedSoldiers} />
              )}
            </AnimatePresence>
          </motion.div>
        </>
      ) : (
        <TierRosterSection />
      )}
      
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <JoinCTA />
      </motion.div>
    </motion.div>
  );
});

EnhancedSoldiersGrid.displayName = 'EnhancedSoldiersGrid';

export default EnhancedSoldiersGrid;
