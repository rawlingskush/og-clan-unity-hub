
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Soldier } from '@/types/soldier';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import { Search, Filter, SortAsc, Heart, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterButtons from './FilterButtons';
import EnhancedMobileCarousel from './EnhancedMobileCarousel';
import TabletGrid from './TabletGrid';
import DesktopGrid from './DesktopGrid';
import JoinCTA from './JoinCTA';
import { filterSoldiers } from '@/utils/weaponCategories';

interface EnhancedSoldiersGridProps {
  soldiers: Soldier[];
}

const EnhancedSoldiersGrid = ({ soldiers }: EnhancedSoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<'name' | 'role' | 'weapon'>('name');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  console.log('EnhancedSoldiersGrid render:', { 
    soldiers: soldiers.length, 
    filter, 
    searchTerm,
    isMobile, 
    isTablet,
    isReady 
  });
  
  // Enhanced filtered and sorted soldiers
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
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'role':
          return a.role.localeCompare(b.role);
        case 'weapon':
          return a.weapon.localeCompare(b.weapon);
        default:
          return 0;
      }
    });
    
    console.log('Processed soldiers:', filtered.length);
    return filtered;
  }, [soldiers, filter, searchTerm, sortBy]);

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

  const handleSortChange = useCallback((newSort: 'name' | 'role' | 'weapon') => {
    setSortBy(newSort);
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
      {/* Enhanced Control Panel */}
      <div className="px-4 md:px-0">
        <motion.div 
          className="bg-black/60 border border-ogclan/40 rounded-lg p-4 md:p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Stats Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Users className="w-5 h-5 text-ogclan" />
              <div>
                <h3 className="text-heading-4 text-ogclan">Squad Roster</h3>
                <p className="text-body-small text-gray-400">
                  {processedSoldiers.length} of {soldiers.length} operators
                </p>
              </div>
            </div>
            
            {/* Mobile filter toggle */}
            {isMobile && (
              <motion.button
                className="btn-ghost p-2"
                onClick={() => setShowFilters(!showFilters)}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-5 h-5" />
              </motion.button>
            )}
          </div>

          {/* Search and Controls */}
          <AnimatePresence>
            {(!isMobile || showFilters) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search soldiers..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-3 bg-black/50 border border-ogclan/30 rounded-lg text-white placeholder-gray-400 focus:border-ogclan focus:outline-none transition-colors"
                  />
                  {searchTerm && (
                    <motion.button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setSearchTerm("")}
                      whileTap={{ scale: 0.9 }}
                    >
                      ×
                    </motion.button>
                  )}
                </div>

                {/* Sort Controls */}
                <div className="flex items-center space-x-2 text-body-small">
                  <SortAsc className="w-4 h-4 text-ogclan" />
                  <span className="text-gray-400">Sort by:</span>
                  {['name', 'role', 'weapon'].map((sort) => (
                    <motion.button
                      key={sort}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        sortBy === sort 
                          ? 'bg-ogclan text-black' 
                          : 'bg-ogclan/20 text-ogclan hover:bg-ogclan/30'
                      }`}
                      onClick={() => handleSortChange(sort as any)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {sort.charAt(0).toUpperCase() + sort.slice(1)}
                    </motion.button>
                  ))}
                </div>

                {/* Filter Pills */}
                <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Results Display */}
      <motion.div 
        className="min-h-[400px]"
        layout
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {processedSoldiers.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center h-96"
            >
              <div className="text-center">
                <Users className="w-16 h-16 text-ogclan/50 mx-auto mb-4" />
                <h3 className="text-heading-3 text-ogclan mb-2">No Soldiers Found</h3>
                <p className="text-body text-gray-400 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <motion.button
                  className="btn-secondary"
                  onClick={() => {
                    setSearchTerm("");
                    setFilter("all");
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {isMobile ? (
                <EnhancedMobileCarousel soldiers={processedSoldiers} />
              ) : isTablet ? (
                <TabletGrid soldiers={processedSoldiers} />
              ) : (
                <DesktopGrid soldiers={processedSoldiers} />
              )}
            </motion.div>
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
