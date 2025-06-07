
import React from 'react';
import { motion } from 'framer-motion';

const TacticalHUD = () => {
  const corners = [
    { position: 'top-4 right-4 md:top-8 md:right-8', rotate: '0deg' },
    { position: 'top-4 left-4 md:top-8 md:left-8', rotate: '90deg' },
    { position: 'bottom-4 right-4 md:bottom-8 md:right-8', rotate: '270deg' },
    { position: 'bottom-4 left-4 md:bottom-8 md:left-8', rotate: '180deg' }
  ];

  return (
    <>
      {corners.map((corner, index) => (
        <motion.div
          key={index}
          className={`absolute ${corner.position} w-20 h-20 md:w-28 md:h-28 border border-ogclan/40 glitch-box`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          style={{ rotate: corner.rotate }}
        >
          <div className="absolute inset-2 border border-ogclan/60" />
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ogclan" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ogclan" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ogclan" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ogclan" />
          <motion.div 
            className="absolute inset-0 bg-ogclan/10"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default TacticalHUD;
