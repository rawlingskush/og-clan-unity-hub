
import React from 'react';
import { Target, Shield, Zap, Users, Radar } from 'lucide-react';
import { motion } from 'framer-motion';

// Icon and color setup for animation
const icons = [
  { Icon: Target, class: "text-ogclan" },
  { Icon: Shield, class: "text-ogclan" },
  { Icon: Zap, class: "text-ogclan" },
  { Icon: Users, class: "text-ogclan" },
  { Icon: Radar, class: "text-ogclan" }
];

const TacticalIconsRow = () => (
  <motion.div
    className="flex items-center justify-center space-x-4 mb-5 sm:mb-8"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
  >
    {icons.map(({ Icon, class: className }, i) => (
      <motion.span
        key={i}
        whileHover={{ scale: 1.14, rotate: 10 }}
        whileTap={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="rounded shadow-gold"
      >
        <Icon className={`h-6 w-6 filter drop-shadow-glow-gold ${className}`} />
      </motion.span>
    ))}
  </motion.div>
);

export default TacticalIconsRow;
