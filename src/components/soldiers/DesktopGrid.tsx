
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';

interface DesktopGridProps {
  soldiers: Soldier[];
  animateItems: boolean;
}

const DesktopGrid = ({ soldiers, animateItems }: DesktopGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {soldiers.map((soldier, index) => (
        <div 
          key={soldier.id} 
          id={`og-${soldier.id.toLowerCase()}`}
          className={`scroll-mt-32 ${soldier.spotlight ? 'col-span-2 md:col-span-1 row-span-1' : ''}`}
          style={{ 
            opacity: animateItems ? 1 : 0,
            transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
          }}
        >
          <SoldierCard soldier={soldier} />
        </div>
      ))}
    </div>
  );
};

export default DesktopGrid;
