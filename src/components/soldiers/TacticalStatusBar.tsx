
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const TacticalStatusBar = () => {
  const [cameroonTime, setCameroonTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Cameroon is in Central Africa Time (CAT) - UTC+1
      const now = new Date();
      const cameroonTimeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Douala', // Cameroon timezone
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCameroonTime(cameroonTimeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 text-caption text-ogclan gap-2 sm:gap-4">
      <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
        <motion.div 
          className="flex items-center space-x-1 sm:space-x-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Activity className="w-3 h-3 flex-shrink-0" />
          <span className="text-xs sm:text-sm">LIVE</span>
        </motion.div>
        <span className="text-xs sm:text-sm">SECTOR: ALPHA-7</span>
        <span className="text-xs sm:text-sm">TIME: {cameroonTime} CAT</span>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <span className="text-xs sm:text-sm">STATUS: OPERATIONAL</span>
        <motion.div 
          className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default TacticalStatusBar;
