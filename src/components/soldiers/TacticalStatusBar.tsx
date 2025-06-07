
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const TacticalStatusBar = () => {
  return (
    <div className="flex items-center justify-between mb-6 text-caption text-ogclan">
      <div className="flex items-center space-x-4">
        <motion.div 
          className="flex items-center space-x-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Activity className="w-3 h-3" />
          <span>LIVE</span>
        </motion.div>
        <span>SECTOR: ALPHA-7</span>
        <span>TIME: {new Date().toLocaleTimeString()}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>STATUS: OPERATIONAL</span>
        <motion.div 
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default TacticalStatusBar;
