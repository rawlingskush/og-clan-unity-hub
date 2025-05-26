
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import SoldierCard from './SoldierCard';
import AnimatedContent from '@/components/AnimatedContent';
import { Soldier } from '@/types/soldier';

interface MobileCarouselProps {
  soldiers: Soldier[];
}

const MobileCarousel = ({ soldiers }: MobileCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Memoize soldiers to prevent unnecessary re-renders
  const memoizedSoldiers = useMemo(() => soldiers, [soldiers]);

  useEffect(() => {
    if (!api || memoizedSoldiers.length === 0) return;

    setCount(memoizedSoldiers.length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
    };

    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, memoizedSoldiers.length]);

  const handleDotClick = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  if (memoizedSoldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-pulse text-ogclan mb-2">No soldiers found</div>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <AnimatedContent animation="fade-in" className="w-full px-4">
      <Carousel 
        className="w-full"
        setApi={setApi}
        opts={{
          align: "center",
          loop: false,
          skipSnaps: false,
          dragFree: false,
          containScroll: "trimSnaps",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="ml-0 -webkit-overflow-scrolling-touch">
          {memoizedSoldiers.map((soldier, index) => (
            <CarouselItem key={soldier.id} className="pl-4 basis-4/5 sm:basis-1/2">
              <div className="h-full">
                <SoldierCard soldier={soldier} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Optimized Navigation */}
        <div className="flex items-center justify-center mt-6 gap-4">
          <CarouselPrevious 
            className="relative static transform-none bg-black/70 border-ogclan/40 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-200 h-10 w-10 touch-manipulation" 
          />
          
          {/* Optimized dot indicators with better touch targets */}
          <div className="flex gap-3 max-w-xs overflow-x-auto scrollbar-hide px-2">
            {memoizedSoldiers.map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-200 touch-manipulation min-w-[12px] ${
                  current === index 
                    ? 'bg-ogclan w-8 shadow-sm shadow-ogclan/30' 
                    : 'bg-ogclan/30 hover:bg-ogclan/60 w-3'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to soldier ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselNext 
            className="relative static transform-none bg-black/70 border-ogclan/40 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-200 h-10 w-10 touch-manipulation"
          />
        </div>

        {/* Simplified progress indicator */}
        <div className="mt-3 text-center text-sm text-ogclan/70">
          {current + 1} of {memoizedSoldiers.length}
        </div>
      </Carousel>
    </AnimatedContent>
  );
};

export default React.memo(MobileCarousel);
