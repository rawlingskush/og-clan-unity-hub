
import React from 'react';
import EnhancedImage from './enhanced-image';

interface TacticalAccentProps {
  variant?: 'red' | 'duo' | 'both';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  opacity?: number;
  className?: string;
}

const TacticalAccent = ({ 
  variant = 'red', 
  position = 'top-right', 
  opacity = 0.15,
  className = ""
}: TacticalAccentProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      case 'center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default:
        return 'top-0 right-0';
    }
  };

  return (
    <div className={`absolute w-1/2 h-1/2 pointer-events-none ${getPositionClasses()} ${className}`}>
      {variant === 'red' && (
        <div style={{ opacity }} className="w-full h-full">
          <EnhancedImage
            src="/lovable-uploads/0c704830-7af8-461b-8087-f18ad958ea7a.png"
            alt="Tactical Scene"
            className="w-full h-full object-cover"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      )}
      
      {variant === 'duo' && (
        <div style={{ opacity }} className="w-full h-full">
          <EnhancedImage
            src="/lovable-uploads/663adc16-1686-4cd2-ad80-6543f489a16e.png"
            alt="Tactical Operators"
            className="w-full h-full object-cover"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      )}
      
      {variant === 'both' && (
        <>
          <div style={{ opacity: opacity * 0.7 }} className="absolute inset-0">
            <EnhancedImage
              src="/lovable-uploads/0c704830-7af8-461b-8087-f18ad958ea7a.png"
              alt="Tactical Scene"
              className="w-full h-full object-cover"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div style={{ opacity: opacity * 0.5 }} className="absolute top-1/4 right-1/4 w-1/2 h-1/2">
            <EnhancedImage
              src="/lovable-uploads/663adc16-1686-4cd2-ad80-6543f489a16e.png"
              alt="Tactical Operators"
              className="w-full h-full object-cover"
              objectFit="cover"
              loading="lazy"
            />
          </div>
        </>
      )}
      
      {/* Tactical overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-ogclan/10"></div>
    </div>
  );
};

export default TacticalAccent;
