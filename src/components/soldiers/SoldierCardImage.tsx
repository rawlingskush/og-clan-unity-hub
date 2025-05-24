
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';

interface SoldierCardImageProps {
  imageUrl: string;
  name: string;
  role: string;
  isSpotlight: boolean;
}

const SoldierCardImage = ({ imageUrl, name, role, isSpotlight }: SoldierCardImageProps) => {
  return (
    <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 transition-all duration-300 ${
      isSpotlight 
        ? 'border-ogclan glow-medium animate-glow-pulse' 
        : 'border-ogclan glow-subtle animate-pulse-slow hover:glow-medium'
    }`}>
      <EnhancedImage
        src={imageUrl}
        alt={`${name} - ${role}`}
        className="rounded-full"
        aspectRatio="1/1"
        objectFit="cover"
        loading="lazy"
      />
    </div>
  );
};

export default SoldierCardImage;
