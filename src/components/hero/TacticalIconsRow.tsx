
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

// Animations: Staggered entrance, hover glow
const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.4,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 18 } }
};

const TacticalIconsRow = () => (
  <motion.div
    className="flex items-center justify-center space-x-4 mb-5 sm:mb-8"
    variants={containerStagger}
    initial="hidden"
    animate="show"
  >
    {icons.map(({ Icon, class: className }, i) => (
      <motion.span
        key={i}
        variants={itemVariants}
        whileHover={{
          scale: 1.19,
          rotate: 8,
          transition: { type: "spring", stiffness: 260 }
        }}
        whileTap={{ scale: 1.10 }}
        className="rounded shadow-gold transition-shadow duration-200"
        style={{ boxShadow: '0 0 10px 1px rgba(212,175,55,0.15)' }}
      >
        <Icon className={`h-7 w-7 filter drop-shadow-glow-gold ${className} transition-all duration-200`} />
      </motion.span>
    ))}
  </motion.div>
);

export default TacticalIconsRow;
