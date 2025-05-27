
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarouselNavigationProps {
  currentIndex: number;
  totalCards: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselNavigation = ({
  currentIndex,
  totalCards,
  canScrollPrev,
  canScrollNext,
  onPrevious,
  onNext
}: CarouselNavigationProps) => {
  return (
    <div className="relative w-full">
      {/* Mobile Navigation Counter */}
      <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-xs text-white font-medium">
          {currentIndex + 1} of {totalCards}
        </span>
      </div>

      {/* Mobile Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        disabled={!canScrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm border border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan text-white disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation"
        aria-label="Previous soldier"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={!canScrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm border border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan text-white disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation"
        aria-label="Next soldier"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default CarouselNavigation;
