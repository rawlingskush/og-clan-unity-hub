
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';

interface TacticalBackgroundImageProps {
  className?: string;
}

const TacticalBackgroundImage = ({ className = "" }: TacticalBackgroundImageProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Red tactical scene as background - more visible */}
      <div className="absolute inset-0 opacity-35">
        <EnhancedImage
          src="/lovable-uploads/0c704830-7af8-461b-8087-f18ad958ea7a.png"
          alt="Tactical Combat Scene"
          className="w-full h-full object-cover"
          objectFit="cover"
          loading="eager"
        />
      </div>
      
      {/* Tactical duo positioned strategically - more visible */}
      <div className="absolute bottom-0 right-0 w-1/2 h-3/4 opacity-45 hidden lg:block">
        <EnhancedImage
          src="/lovable-uploads/663adc16-1686-4cd2-ad80-6543f489a16e.png"
          alt="Tactical Operators"
          className="w-full h-full object-cover object-right"
          objectFit="cover"
          loading="eager"
        />
      </div>

      {/* Reduced overlay gradients for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      
      {/* Enhanced tactical grid overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Animated scanning effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default TacticalBackgroundImage;
