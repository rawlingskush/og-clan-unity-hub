import React from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, Users } from 'lucide-react';
import { ViewMode } from '@/types/tier';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative flex bg-black/50 border border-white/10 rounded-lg p-1">
        {/* Background Slider */}
        <motion.div
          className="absolute top-1 bottom-1 bg-ogclan/20 border border-ogclan/40 rounded"
          initial={false}
          animate={{
            left: currentView === 'gallery' ? '4px' : '50%',
            width: currentView === 'gallery' ? 'calc(50% - 4px)' : 'calc(50% - 4px)'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Gallery Button */}
        <button
          onClick={() => onViewChange('gallery')}
          className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded transition-colors ${
            currentView === 'gallery'
              ? 'text-ogclan font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Grid3X3 size={16} />
          <span>Gallery View</span>
        </button>

        {/* Tactical Button */}
        <button
          onClick={() => onViewChange('tactical')}
          className={`relative z-10 flex items-center gap-2 px-6 py-2 rounded transition-colors ${
            currentView === 'tactical'
              ? 'text-ogclan font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Users size={16} />
          <span>Tactical Roster</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;