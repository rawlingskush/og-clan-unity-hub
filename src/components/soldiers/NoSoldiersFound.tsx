
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface NoSoldiersFoundProps {
  onClearFilters: () => void;
}

const NoSoldiersFound = ({ onClearFilters }: NoSoldiersFoundProps) => {
  return (
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
          onClick={onClearFilters}
          whileTap={{ scale: 0.95 }}
        >
          Clear Filters
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NoSoldiersFound;
