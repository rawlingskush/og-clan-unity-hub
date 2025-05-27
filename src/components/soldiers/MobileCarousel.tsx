
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';

interface MobileCarouselProps {
  soldiers: Soldier[];
}

const MobileCarousel = ({ soldiers }: MobileCarouselProps) => {
  console.log('MobileCarousel render:', { soldiers: soldiers.length });
  
  if (soldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 px-4">
        <div className="text-center">
          <p className="text-ogclan mb-4">No soldiers match the current filter</p>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-grid space-y-6">
      {soldiers.map((soldier, index) => (
        <div 
          key={soldier.id} 
          id={`og-${soldier.id.toLowerCase()}`}
          className="mobile-card scroll-mt-32"
          style={{ 
            animationDelay: `${index * 0.1}s`
          }}
        >
          <SoldierCard soldier={soldier} />
        </div>
      ))}
    </div>
  );
};

export default MobileCarousel;
