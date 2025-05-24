
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

  // Create extended soldiers array for infinite loop effect
  const extendedSoldiers = React.useMemo(() => {
    if (soldiers.length === 0) return [];
    // Add copies at the beginning and end for seamless infinite scrolling
    return [...soldiers.slice(-2), ...soldiers, ...soldiers.slice(0, 2)];
  }, [soldiers]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);

    // Handle infinite loop
    api.on("settle", () => {
      const selected = api.selectedScrollSnap();
      const total = api.scrollSnapList().length;
      
      // If we're at the duplicated items, jump to the real ones
      if (selected === 0) {
        api.scrollTo(soldiers.length, false);
      } else if (selected === total - 1) {
        api.scrollTo(soldiers.length - 1, false);
      }
    });

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, soldiers.length]);

  // Auto-advance carousel
  useEffect(() => {
    if (!api || !autoplayEnabled) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api, autoplayEnabled]);

  const handleInteraction = useCallback(() => {
    setAutoplayEnabled(false);
    // Re-enable autoplay after 10 seconds of inactivity
    const timer = setTimeout(() => setAutoplayEnabled(true), 10000);
    return () => clearTimeout(timer);
  }, []);

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
          loop: false, // We handle infinite loop manually
          skipSnaps: false,
          dragFree: true,
        }}
        onMouseEnter={handleInteraction}
        onTouchStart={handleInteraction}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {extendedSoldiers.map((soldier, index) => (
            <CarouselItem key={`${soldier.id}-${index}`} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
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
          
          {/* Dot indicators */}
          <div className="flex gap-2">
            {soldiers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  ((current - 3 + soldiers.length) % soldiers.length) === index 
                    ? 'bg-ogclan w-4' 
                    : 'bg-ogclan/30 hover:bg-ogclan/60'
                }`}
                onClick={() => {
                  api?.scrollTo(index + 2); // +2 to account for duplicated items at start
                  handleInteraction();
                }}
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
          {((current - 3 + soldiers.length) % soldiers.length) + 1} of {soldiers.length}
        </div>
      </Carousel>
    </AnimatedContent>
  );
};

export default MobileCarousel;
