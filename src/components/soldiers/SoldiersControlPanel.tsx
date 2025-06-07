
import React, { useState } from 'react';
import { Search, Filter, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterButtons from './FilterButtons';
import { useIsMobile } from '@/hooks/use-mobile';

interface SoldiersControlPanelProps {
  totalSoldiers: number;
  filteredCount: number;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  onFilterChange: (filter: string) => void;
}

const SoldiersControlPanel = ({
  totalSoldiers,
  filteredCount,
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange
}: SoldiersControlPanelProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();

  return (
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
                {filteredCount} of {totalSoldiers} operators
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
                  onChange={onSearchChange}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-ogclan/30 rounded-lg text-white placeholder-gray-400 focus:border-ogclan focus:outline-none transition-colors"
                />
                {searchTerm && (
                  <motion.button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => onSearchChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                )}
              </div>

              {/* Filter Pills */}
              <FilterButtons currentFilter={filter} onFilterChange={onFilterChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SoldiersControlPanel;
