
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
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5 text-xs sm:text-sm gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg border border-ogclan/40 bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
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
          <Shield className="w-4 h-4 flex-shrink-0 text-green-400 animate-glow" />
          <span className="text-gray-300">MISSION STATUS:</span>
          <span className="text-green-400 font-bold tracking-wider animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">LIVE</span>
        </motion.div>
        <span className="text-ogclan/60">|</span>
        <div className="flex items-center space-x-1">
          <span className="text-gray-300">ZONE:</span>
          <span className="text-red-400 font-bold tracking-wider drop-shadow-[0_0_8px_rgba(248,113,113,0.8)] animate-pulse">BLACK MARKET</span>
        </div>
        <span className="text-ogclan/60">|</span>
        <div className="flex items-center space-x-1">
          <span className="text-gray-300">TIME:</span>
          <span className="text-cyan-400 font-mono font-semibold tracking-wider drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">{cameroonTime} CAT</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 mt-1 sm:mt-0">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-gray-300">THREAT:</span>
          <span className="text-orange-400 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]">ELEVATED</span>
          <motion.div 
            className="w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.8)]"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-gray-300">READINESS:</span>
          <span className="text-ogclan font-bold animate-glow tracking-wider drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">MAX</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TacticalStatusBar;
