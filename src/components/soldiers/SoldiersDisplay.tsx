
import React from 'react';
import { motion } from 'framer-motion';
import { Soldier } from '@/types/soldier';
import { useIsMobile, useIsTablet } from '@/hooks/use-mobile';
import EnhancedMobileCarousel from './EnhancedMobileCarousel';
import TabletGrid from './TabletGrid';
import DesktopGrid from './DesktopGrid';

interface SoldiersDisplayProps {
  soldiers: Soldier[];
}

const SoldiersDisplay = ({ soldiers }: SoldiersDisplayProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isMobile ? (
        <EnhancedMobileCarousel soldiers={soldiers} />
      ) : isTablet ? (
        <TabletGrid soldiers={soldiers} />
      ) : (
        <DesktopGrid soldiers={soldiers} />
      )}
    </motion.div>
  );
};

export default SoldiersDisplay;
