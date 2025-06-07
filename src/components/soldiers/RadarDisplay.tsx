
import React from 'react';
import { motion } from 'framer-motion';

const RadarDisplay = () => {
  const blips = [
    { x: '30%', y: '40%', delay: 0 },
    { x: '70%', y: '60%', delay: 1 },
    { x: '50%', y: '25%', delay: 2 }
  ];

  return (
    <motion.div 
      className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-32 h-32 md:w-40 md:h-40 opacity-40"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, duration: 1, type: "spring" }}
    >
      <div className="absolute inset-0 rounded-full border border-ogclan/60" />
      <div className="absolute inset-[15%] rounded-full border border-ogclan/50" />
      <div className="absolute inset-[30%] rounded-full border border-ogclan/40" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-ogclan/50" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-ogclan/50" />
      
      {/* Rotating sweep */}
      <motion.div 
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-ogclan/80"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Radar blips */}
      {blips.map((blip, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-ogclan rounded-full"
          style={{ left: blip.x, top: blip.y }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: blip.delay 
          }}
        />
      ))}
    </motion.div>
  );
};

export default RadarDisplay;
