import React from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, Users } from 'lucide-react';
import { ViewMode } from '@/types/tier';

interface ViewToggleProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  const getButtonPosition = () => {
    switch (currentView) {
      case 'gallery':
        return '4px';
      case 'tactical':
        return 'calc(33.333% + 2px)';
      case 'members':
        return 'calc(66.666% + 2px)';
      default:
        return '4px';
    }
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative flex bg-black/50 border border-white/10 rounded-lg p-1">
        {/* Background Slider */}
        <motion.div
          className="absolute top-1 bottom-1 bg-ogclan/20 border border-ogclan/40 rounded"
          initial={false}
          animate={{
            left: getButtonPosition(),
            width: 'calc(33.333% - 4px)'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Gallery Button */}
        <button
          onClick={() => onViewChange('gallery')}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded transition-colors text-sm ${
            currentView === 'gallery'
              ? 'text-ogclan font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Grid3X3 size={14} />
          <span className="hidden sm:inline">Gallery</span>
        </button>

        {/* Player Tracker Button */}
        <button
          onClick={() => onViewChange('tactical')}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded transition-colors text-sm ${
            currentView === 'tactical'
              ? 'text-ogclan font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Users size={14} />
          <span className="hidden sm:inline">Player Tracker</span>
        </button>

        {/* Members Button */}
        <button
          onClick={() => onViewChange('members')}
          className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded transition-colors text-sm ${
            currentView === 'members'
              ? 'text-ogclan font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Users size={14} />
          <span className="hidden sm:inline">Members</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;