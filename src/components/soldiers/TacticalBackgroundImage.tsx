
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';

interface TacticalBackgroundImageProps {
  className?: string;
}

const TacticalBackgroundImage = ({ className = "" }: TacticalBackgroundImageProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Red tactical scene as background */}
      <div className="absolute inset-0 opacity-20">
        <EnhancedImage
          src="/lovable-uploads/0c704830-7af8-461b-8087-f18ad958ea7a.png"
          alt="Tactical Combat Scene"
          className="w-full h-full object-cover"
          objectFit="cover"
          loading="eager"
        />
      </div>
      
      {/* Tactical duo positioned strategically */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-30 hidden lg:block">
        <EnhancedImage
          src="/lovable-uploads/663adc16-1686-4cd2-ad80-6543f489a16e.png"
          alt="Tactical Operators"
          className="w-full h-full object-cover object-right"
          objectFit="cover"
          loading="eager"
        />
      </div>

      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
    </div>
  );
};

export default TacticalBackgroundImage;
