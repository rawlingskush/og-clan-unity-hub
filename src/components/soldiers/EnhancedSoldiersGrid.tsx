import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { motion, AnimatePresence } from 'framer-motion';
import SoldiersControlPanel from './SoldiersControlPanel';
import SoldiersDisplay from './SoldiersDisplay';
import NoSoldiersFound from './NoSoldiersFound';
import JoinCTA from './JoinCTA';
import { filterSoldiers } from '@/utils/weaponCategories';

interface EnhancedSoldiersGridProps {
  soldiers: Soldier[];
}

const EnhancedSoldiersGrid = ({ soldiers }: EnhancedSoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);
  
  console.log('EnhancedSoldiersGrid render:', { 
    soldiers: soldiers.length, 
    filter, 
    searchTerm,
    isReady 
  });
  
  // Enhanced filtered soldiers - maintain original order
  const processedSoldiers = useMemo(() => {
    let filtered = filterSoldiers(soldiers, filter);
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(soldier => 
        soldier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        soldier.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        soldier.weapon.toLowerCase().includes(searchTerm.toLowerCase()) ||
        soldier.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Keep original order from soldiers data - no sorting
    console.log('Processed soldiers:', filtered.length);
    return filtered;
  }, [soldiers, filter, searchTerm]);

  // Initialize component ready state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Memoized handlers
  const handleFilterChange = useCallback((newFilter: string) => {
    console.log('Filter changed to:', newFilter);
    setFilter(newFilter);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setFilter("all");
  }, []);

  const toggleFavorite = useCallback((soldierId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(soldierId)) {
        newFavorites.delete(soldierId);
      } else {
        newFavorites.add(soldierId);
      }
      return newFavorites;
    });
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Control Panel */}
      <SoldiersControlPanel
        totalSoldiers={soldiers.length}
        filteredCount={processedSoldiers.length}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      
      {/* Results Display */}
      <motion.div 
        className="min-h-[400px]"
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {processedSoldiers.length === 0 ? (
            <NoSoldiersFound onClearFilters={handleClearFilters} />
          ) : (
            <SoldiersDisplay soldiers={processedSoldiers} />
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Enhanced Join CTA */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <JoinCTA />
      </motion.div>
    </motion.div>
  );
};

export default EnhancedSoldiersGrid;
