
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SoldierCard from './SoldierCard';
import AnimatedContent from '@/components/AnimatedContent';
import { Soldier } from '@/types/soldier';

interface MobileCarouselProps {
  soldiers: Soldier[];
}

const MobileCarousel = ({ soldiers }: MobileCarouselProps) => {
  return (
    <AnimatedContent animation="fade-in" className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {soldiers.map((soldier) => (
            <CarouselItem key={soldier.id} className="md:basis-1/2 lg:basis-1/3">
              <div id={`og-${soldier.id.toLowerCase()}`} className="scroll-mt-32">
                <SoldierCard soldier={soldier} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious className="relative static transform-none animate-pulse-slow" />
          <CarouselNext className="relative static transform-none animate-pulse-slow" />
        </div>
      </Carousel>
    </AnimatedContent>
  );
};

export default MobileCarousel;
