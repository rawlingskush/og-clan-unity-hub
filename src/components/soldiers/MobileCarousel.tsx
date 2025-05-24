
import React, { useCallback, useEffect, useState } from 'react';
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
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!api || soldiers.length === 0) return;

    setCount(soldiers.length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, soldiers.length]);

  // Auto-advance carousel with proper cleanup
  useEffect(() => {
    if (!api || !autoplayEnabled || soldiers.length === 0) return;

    const autoplay = setInterval(() => {
      const nextIndex = (current + 1) % soldiers.length;
      api.scrollTo(nextIndex);
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api, autoplayEnabled, current, soldiers.length]);

  const handleInteraction = useCallback(() => {
    setAutoplayEnabled(false);
    const timer = setTimeout(() => setAutoplayEnabled(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
      handleInteraction();
    }
  }, [api, handleInteraction]);

  if (soldiers.length === 0) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-pulse text-ogclan mb-2">Loading soldiers...</div>
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <AnimatedContent animation="fade-in" className="w-full">
      <Carousel 
        className="w-full"
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        onMouseEnter={handleInteraction}
        onTouchStart={handleInteraction}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {soldiers.map((soldier, index) => (
            <CarouselItem key={soldier.id} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <SoldierCard soldier={soldier} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced navigation with better mobile UX */}
        <div className="flex items-center justify-center mt-6 gap-4">
          <CarouselPrevious 
            className="relative static transform-none bg-black/60 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-300 mobile-tap-target" 
            onClick={handleInteraction}
          />
          
          {/* Dot indicators with proper index calculation */}
          <div className="flex gap-2">
            {soldiers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 mobile-tap-target ${
                  current === index 
                    ? 'bg-ogclan w-4' 
                    : 'bg-ogclan/30 hover:bg-ogclan/60'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to soldier ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselNext 
            className="relative static transform-none bg-black/60 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-300 mobile-tap-target"
            onClick={handleInteraction}
          />
        </div>

        {/* Progress indicator */}
        <div className="mt-4 text-center text-sm text-ogclan/60">
          {current + 1} of {soldiers.length}
        </div>
      </Carousel>
    </AnimatedContent>
  );
};

export default MobileCarousel;
