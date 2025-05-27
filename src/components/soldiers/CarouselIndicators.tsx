
import React from 'react';

interface CarouselIndicatorsProps {
  currentIndex: number;
  totalCards: number;
  onDotClick: (index: number) => void;
}

const CarouselIndicators = ({ currentIndex, totalCards, onDotClick }: CarouselIndicatorsProps) => {
  const maxDotsToShow = 7;
  const showDots = totalCards <= maxDotsToShow;

  if (showDots) {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalCards }, (_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentIndex
                ? 'bg-ogclan scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to soldier ${index + 1}`}
          />
        ))}
      </div>
    );
  }

  // Progress bar for many cards
  const progressPercentage = ((currentIndex + 1) / totalCards) * 100;

  return (
    <div className="mt-4 px-4">
      <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-ogclan rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="text-center mt-2 text-xs text-white/70">
        {currentIndex + 1} of {totalCards} soldiers
      </div>
    </div>
  );
};

export default CarouselIndicators;
