
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';

interface TabletGridProps {
  soldiers: Soldier[];
  animateItems: boolean;
}

const TabletGrid = ({ soldiers, animateItems }: TabletGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">
      {soldiers.map((soldier, index) => (
        <div 
          key={soldier.id} 
          id={`og-${soldier.id.toLowerCase()}`}
          className={`scroll-mt-32 ${soldier.spotlight ? 'col-span-3 md:col-span-1' : ''}`}
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

export default TabletGrid;
