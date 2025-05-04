
import React from 'react';

interface SoldierCardHintProps {
  isMobile: boolean;
}

const SoldierCardHint = ({ isMobile }: SoldierCardHintProps) => {
  return (
    <div className="absolute top-2 right-2 text-xs text-ogclan/60 bg-black/50 px-2 py-1 rounded-full animate-pulse">
      {isMobile ? 'Tap for stats' : 'Click for stats'}
    </div>
  );
};

export default SoldierCardHint;
