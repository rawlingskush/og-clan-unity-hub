
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {soldiers.map((soldier) => (
        <SoldierCard key={soldier.id} soldier={soldier} />
      ))}
    </div>
  );
};

export default SoldiersGrid;
