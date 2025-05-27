
import React from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MobileCarouselProps {
  soldiers: Soldier[];
}

const MobileCarousel = ({ soldiers }: MobileCarouselProps) => {
  console.log('MobileCarousel render:', { soldiers: soldiers.length });
  
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
    <div className="w-full px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {soldiers.map((soldier, index) => (
            <CarouselItem 
              key={soldier.id} 
              className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3"
            >
              <div 
                id={`og-${soldier.id.toLowerCase()}`}
                className="scroll-mt-32 h-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <SoldierCard soldier={soldier} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-8 bg-black/50 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan text-ogclan" />
        <CarouselNext className="hidden sm:flex -right-8 bg-black/50 border-ogclan/30 hover:bg-ogclan/20 hover:border-ogclan text-ogclan" />
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
