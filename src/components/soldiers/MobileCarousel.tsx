
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

  console.log('MobileCarousel render:', { soldiers: soldiers.length, current, count });

  useEffect(() => {
    if (!api || soldiers.length === 0) return;

    setCount(soldiers.length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
      console.log('Carousel selected:', selected);
    };

    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, soldiers.length]);

  const handleDotClick = useCallback((index: number) => {
    if (api) {
      console.log('Dot clicked:', index);
      api.scrollTo(index);
    }
  }, [api]);

  if (soldiers.length === 0) {
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
        }}
      >
        <CarouselContent className="ml-0">
          {soldiers.map((soldier, index) => (
            <CarouselItem key={soldier.id} className="pl-4 basis-4/5 sm:basis-1/2">
              <div className="h-full">
                <SoldierCard soldier={soldier} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <div className="flex items-center justify-center mt-6 gap-4">
          <CarouselPrevious 
            className="relative static transform-none bg-black/60 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-300 h-10 w-10" 
          />
          
          {/* Dot indicators */}
          <div className="flex gap-2">
            {soldiers.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'bg-ogclan w-6' 
                    : 'bg-ogclan/30 hover:bg-ogclan/60 w-2'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to soldier ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselNext 
            className="relative static transform-none bg-black/60 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan transition-all duration-300 h-10 w-10"
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
