
import React, { useState, useCallback, useEffect } from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';
import CarouselNavigation from './CarouselNavigation';
import CarouselIndicators from './CarouselIndicators';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

interface EnhancedMobileCarouselProps {
  soldiers: Soldier[];
}

const EnhancedMobileCarousel = ({ soldiers }: EnhancedMobileCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  console.log('EnhancedMobileCarousel render:', { soldiers: soldiers.length, current });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && canScrollPrev) {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight' && canScrollNext) {
        event.preventDefault();
        scrollNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [canScrollPrev, canScrollNext, scrollPrev, scrollNext]);

  if (soldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 px-4">
        <div className="text-center">
          <p className="text-ogclan mb-4">No soldiers match the current filter</p>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 select-none">
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full touch-manipulation"
        >
          <CarouselContent className="-ml-4">
            {soldiers.map((soldier, index) => (
              <CarouselItem 
                key={soldier.id} 
                className="pl-4 basis-[85%] carousel-item"
              >
                <div 
                  id={`og-${soldier.id.toLowerCase()}`}
                  className="scroll-mt-32 h-full gpu-accelerated"
                  style={{ 
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <SoldierCard soldier={soldier} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Enhanced Navigation */}
          <CarouselNavigation
            currentIndex={current}
            totalCards={count}
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
            onPrevious={scrollPrev}
            onNext={scrollNext}
          />
        </Carousel>

        {/* Progress Indicators */}
        <CarouselIndicators
          currentIndex={current}
          totalCards={count}
          onDotClick={scrollTo}
        />
      </div>
    </div>
  );
};

export default EnhancedMobileCarousel;
