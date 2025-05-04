
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
  favoriteMap: string;
}

const SoldierCardBody = ({ 
  imageUrl, 
  name, 
  role, 
  weapon, 
  bio, 
  isSpotlight,
  favoriteMap
}: SoldierCardBodyProps) => {
  return (
    <div className="flex flex-col items-center">
      <SoldierCardImage 
        imageUrl={imageUrl} 
        name={name} 
        role={role} 
        isSpotlight={isSpotlight} 
      />
      
      {/* Name with military font style */}
      <h3 className={`text-xl font-bold mb-1 tracking-wider ${
        isSpotlight ? 'text-gradient-gold animate-glow' : 'text-ogclan'
      }`}>{name}</h3>
      
      <SoldierCardBadges role={role} weapon={weapon} favoriteMap={favoriteMap} />
      
      {/* Bio */}
      <p className="text-center text-sm mb-4 text-gray-300">{bio}</p>
    </div>
  );
};

export default SoldierCardBody;
