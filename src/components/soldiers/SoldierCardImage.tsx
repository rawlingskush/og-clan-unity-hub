
import React from 'react';

interface SoldierCardImageProps {
  imageUrl: string;
  name: string;
  role: string;
  isSpotlight?: boolean;
  isPrincess?: boolean;
  isPro?: boolean;
}

const SoldierCardImage = ({ 
  imageUrl, 
  name, 
  role, 
  isSpotlight = false, 
  isPrincess = false,
  isPro = false 
}: SoldierCardImageProps) => {
  const getImageClasses = () => {
    let classes = "w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 transition-all duration-300";
    
    if (isPro) {
      classes += " border-gradient-pro shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70";
    } else if (isPrincess) {
      classes += " border-pink-400 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70";
    } else if (isSpotlight) {
      classes += " border-ogclan shadow-lg shadow-ogclan/50 hover:shadow-ogclan/70";
    } else {
      classes += " border-ogclan/50 hover:border-ogclan";
    }
    
    return classes;
  };

  const getContainerClasses = () => {
    if (isPro) {
      return "relative group hover:scale-105 transition-transform duration-300";
    }
    return "relative group";
  };

  return (
    <div className={getContainerClasses()}>
      <img 
        src={imageUrl} 
        alt={`${name} - ${role}`}
        className={getImageClasses()}
        loading="lazy"
      />
      
      {/* Pro glow effect */}
      {isPro && (
        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-sm group-hover:blur-md transition-all duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default SoldierCardImage;
