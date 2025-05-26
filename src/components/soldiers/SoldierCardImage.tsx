
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';

interface SoldierCardImageProps {
  imageUrl: string;
  name: string;
  role: string;
  isSpotlight: boolean;
  isPrincess?: boolean;
  isPro?: boolean;
}

const SoldierCardImage = ({ imageUrl, name, role, isSpotlight, isPrincess = false, isPro = false }: SoldierCardImageProps) => {
  const getImageClasses = () => {
    if (isPro) {
      return 'w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 transition-all duration-300 border-yellow-500 shadow-lg shadow-yellow-500/30 animate-pulse';
    } else if (isPrincess) {
      return 'w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 transition-all duration-300 border-pink-500 glow-princess animate-glow-princess';
    } else if (isSpotlight) {
      return 'w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 transition-all duration-300 border-ogclan glow-medium animate-glow-pulse';
    } else {
      return 'w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 transition-all duration-300 border-ogclan glow-subtle animate-pulse-slow hover:glow-medium';
    }
  };

  return (
    <div className={getImageClasses()}>
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
