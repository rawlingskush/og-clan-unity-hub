
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';
import SoldierCardBadges from './SoldierCardBadges';

interface SoldierCardBodyProps {
  imageUrl: string;
  name: string;
  role: string;
  weapon: string;
  bio: string;
  isSpotlight?: boolean;
  isPrincess?: boolean;
  isPro?: boolean;
  favoriteMap: string;
}

const SoldierCardBody = ({
  imageUrl,
  name,
  role,
  weapon,
  bio,
  isSpotlight = false,
  isPrincess = false,
  isPro = false,
  favoriteMap
}: SoldierCardBodyProps) => {
  return (
    <div className="space-y-3">
      {/* Image */}
      <div className="relative">
        <EnhancedImage
          src={imageUrl}
          alt={`${name} - OG Clan Soldier`}
          className="w-full h-48 rounded-lg"
          aspectRatio="16/10"
          objectFit="cover"
        />
        <div className="absolute top-2 right-2">
          <SoldierCardBadges 
            weapon={weapon}
            isPro={isPro}
            isPrincess={isPrincess}
            isSpotlight={isSpotlight}
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="space-y-1">
        <h3 className={`text-lg font-bold ${
          isPro ? 'text-yellow-400' : 
          isPrincess ? 'text-pink-400' : 
          isSpotlight ? 'text-ogclan' : 'text-white'
        }`}>
          {name}
        </h3>
        <p className="text-sm text-gray-400">{role}</p>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-300 line-clamp-3">{bio}</p>

      {/* Favorite Map */}
      <div className="text-xs text-gray-500">
        <span className="opacity-70">Favorite Map:</span> {favoriteMap}
      </div>
    </div>
  );
};

export default SoldierCardBody;
