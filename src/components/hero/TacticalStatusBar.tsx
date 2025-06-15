
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const barVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.4 } }
};

const TacticalStatusBar = () => {
  const [cameroonTime, setCameroonTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCameroonTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Douala',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5 text-xs sm:text-sm text-ogclan gap-2 sm:gap-4"
      variants={barVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
        <motion.div 
          className="flex items-center space-x-1 sm:space-x-2"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Shield className="w-4 h-4 flex-shrink-0 animate-glow" />
          <span>MISSION STATUS: <span className="text-green-400 font-medium animate-pulse">LIVE</span></span>
        </motion.div>
        <span>|</span>
        <span>ZONE: BRAVO-1</span>
        <span>|</span>
        <span>TIME: {cameroonTime} CAT</span>
      </div>
      <div className="flex items-center space-x-2 mt-1 sm:mt-0">
        <span>THREAT: <span className="text-red-400 animate-pulse">ELEVATED</span></span>
        <motion.div 
          className="w-2 h-2 bg-red-400 rounded-full"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <span>READINESS: <span className="text-ogclan font-semibold animate-glow">MAX</span></span>
      </div>
    </motion.div>
  );
};

export default TacticalStatusBar;
