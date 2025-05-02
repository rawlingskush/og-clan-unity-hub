
import React from 'react';

interface SoldierCardImageProps {
  imageUrl: string;
  name: string;
  role: string;
  isSpotlight: boolean;
}

const SoldierCardImage = ({ imageUrl, name, role, isSpotlight }: SoldierCardImageProps) => {
  return (
    <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 mb-4 ${
      isSpotlight 
        ? 'border-ogclan shadow-[0_0_15px_rgba(212,175,55,0.7)] animate-glow-pulse' 
        : 'border-ogclan shadow-[0_0_10px_rgba(212,175,55,0.4)] animate-pulse-slow'
    }`}>
      <img 
        src={imageUrl} 
        alt={`${name} - ${role}`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback image if the original fails to load
          const target = e.target as HTMLImageElement;
          target.src = "/lovable-uploads/25b0b30a-3357-4fa2-8db5-dfc1c6e81e56.png";
          target.onerror = null; // Prevent infinite error loop
        }}
      />
    </div>
  );
};

export default SoldierCardImage;
