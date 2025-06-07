
import React from 'react';
import { motion } from 'framer-motion';

const TacticalIndicators = () => {
  const indicators = [
    { label: 'COMMS ACTIVE', color: 'bg-green-400' },
    { label: 'GPS LOCKED', color: 'bg-yellow-400' },
    { label: 'THERMAL ONLINE', color: 'bg-blue-400' },
    { label: 'WEAPONS HOT', color: 'bg-red-400' }
  ];

  return (
    <motion.div 
      className="flex flex-wrap items-center justify-center space-x-6 md:space-x-10 text-body-small font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      {indicators.map((indicator, index) => (
        <motion.div 
          key={index}
          className="flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.7 + index * 0.1 }}
        >
          <motion.div 
            className={`w-3 h-3 ${indicator.color} rounded-full`}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
          />
          <span className="text-gray-300">{indicator.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TacticalIndicators;
