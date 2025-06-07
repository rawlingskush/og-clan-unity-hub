
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap } from 'lucide-react';

const TacticalStatsGrid = () => {
  const stats = [
    { label: 'SQUAD STATUS', value: 'ACTIVE', subtext: '100% OPERATIONAL', color: 'text-green-400', icon: Shield },
    { label: 'MISSION', value: 'DOMINATION', subtext: 'IN PROGRESS', color: 'text-yellow-400', icon: Target },
    { label: 'OPERATORS', value: '21 ACTIVE', subtext: 'FULL STRENGTH', color: 'text-blue-400', icon: Users },
    { label: 'COMBAT READY', value: 'MAXIMUM', subtext: 'WEAPONS HOT', color: 'text-red-400', icon: Zap }
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-black/80 border border-ogclan/40 p-4 md:p-6 text-center backdrop-blur-sm hover-lift card-3d stagger-fade-in"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-center mb-3">
            <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-ogclan" />
          </div>
          <div className="text-caption text-ogclan mb-2 tracking-wider">{stat.label}</div>
          <motion.div 
            className={`text-heading-4 font-bold ${stat.color} mb-1`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 + index * 0.1, type: "spring" }}
          >
            {stat.value}
          </motion.div>
          <div className="text-body-small text-gray-400">{stat.subtext}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TacticalStatsGrid;
