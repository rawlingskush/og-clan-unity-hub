
import React from 'react';
import SoldierCardImage from './SoldierCardImage';
import SoldierCardBadges from './SoldierCardBadges';

interface SoldierCardBodyProps {
  imageUrl: string;
  name: string;
  role: string;
  weapon: string;
  bio: string;
  isSpotlight: boolean;
  isPrincess?: boolean;
  favoriteMap: string;
}

const SoldierCardBody = ({ 
  imageUrl, 
  name, 
  role, 
  weapon, 
  bio, 
  isSpotlight,
  isPrincess = false,
  favoriteMap
}: SoldierCardBodyProps) => {
  const getNameClasses = () => {
    if (isPrincess) {
      return 'text-xl font-bold mb-1 tracking-wider text-gradient-princess animate-glow-princess';
    } else if (isSpotlight) {
      return 'text-xl font-bold mb-1 tracking-wider text-gradient-gold animate-glow';
    } else {
      return 'text-xl font-bold mb-1 tracking-wider text-ogclan';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <SoldierCardImage 
        imageUrl={imageUrl} 
        name={name} 
        role={role} 
        isSpotlight={isSpotlight}
        isPrincess={isPrincess}
      />
      
      {/* Name with theme-specific styling */}
      <h3 className={getNameClasses()}>{name}</h3>
      
      <SoldierCardBadges 
        role={role} 
        weapon={weapon} 
        favoriteMap={favoriteMap}
        isPrincess={isPrincess}
      />
      
      {/* Bio */}
      <p className="text-center text-sm mb-4 text-gray-300">{bio}</p>
    </div>
  );
};

export default SoldierCardBody;
