
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';

interface DesktopGridProps {
  soldiers: Soldier[];
}

const DesktopGrid = ({ soldiers }: DesktopGridProps) => {
  console.log('DesktopGrid render:', { soldiers: soldiers.length });
  
  if (soldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-ogclan mb-4">No soldiers match the current filter</p>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-0">
      {soldiers.map((soldier, index) => (
        <div 
          key={soldier.id} 
          id={`og-${soldier.id.toLowerCase()}`}
          className={`scroll-mt-32 ${soldier.spotlight ? 'lg:col-span-2 xl:col-span-1' : ''}`}
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

export default DesktopGrid;
