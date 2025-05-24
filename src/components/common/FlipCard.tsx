
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
}

const FlipCard = ({ 
  front, 
  back, 
  className, 
  flipOnHover = false, 
  flipOnClick = true 
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (flipOnHover) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (flipOnHover) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full h-full transition-all duration-600 transform-gpu preserve-3d",
        isFlipped ? "animate-flip-card" : "animate-flip-back",
        className
      )}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front of card */}
      <div 
        className={cn(
          "absolute inset-0 w-full h-full backface-hidden",
          isFlipped ? "opacity-0" : "opacity-100"
        )}
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)'
        }}
      >
        {front}
      </div>
      
      {/* Back of card */}
      <div 
        className={cn(
          "absolute inset-0 w-full h-full backface-hidden",
          isFlipped ? "opacity-100" : "opacity-0"
        )}
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        {back}
      </div>
    </div>
  );
};

export default FlipCard;
