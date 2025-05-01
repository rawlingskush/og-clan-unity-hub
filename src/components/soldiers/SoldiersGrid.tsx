
import React, { useState } from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const weaponCategories = {
  shotgun: ["BY15", "KRM-262", "HS0405", "R9-0"],
  smg: ["QQ9", "Striker", "MAC-10"],
  sniper: ["XPR-50"]
}

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const isMobile = useIsMobile();
  
  const filteredSoldiers = filter === "all" 
    ? soldiers 
    : soldiers.filter(soldier => {
        switch(filter) {
          case "shotgun":
            return weaponCategories.shotgun.includes(soldier.weapon);
          case "sniper":
            return weaponCategories.sniper.includes(soldier.weapon);
          case "smg":
            return weaponCategories.smg.includes(soldier.weapon);
          case "breacher":
            return soldier.role.toLowerCase().includes("breach");
          default:
            return true;
        }
      });

  const filterButtonClass = (currentFilter: string) => 
    `rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
      filter === currentFilter 
        ? 'bg-ogclan text-black shadow-sm shadow-ogclan/40'
        : 'bg-black/40 text-ogclan/80 border border-ogclan/30 hover:bg-black/60 hover:border-ogclan/50'
    }`;

  // Determine if we should show a grid or carousel based on screen size
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          className={filterButtonClass("all")}
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          All
        </button>
        <button 
          className={filterButtonClass("breacher")}
          onClick={() => setFilter("breacher")}
          aria-pressed={filter === "breacher"}
        >
          Breachers
        </button>
        <button 
          className={filterButtonClass("shotgun")}
          onClick={() => setFilter("shotgun")}
          aria-pressed={filter === "shotgun"}
        >
          Shotgun Masters
        </button>
        <button 
          className={filterButtonClass("sniper")}
          onClick={() => setFilter("sniper")}
          aria-pressed={filter === "sniper"}
        >
          Snipers
        </button>
        <button 
          className={filterButtonClass("smg")}
          onClick={() => setFilter("smg")}
          aria-pressed={filter === "smg"}
        >
          SMG Specialists
        </button>
      </div>
      
      {/* Desktop Grid, Tablet Grid, or Mobile Carousel */}
      {isMobile ? (
        <Carousel className="w-full">
          <CarouselContent>
            {filteredSoldiers.map((soldier) => (
              <CarouselItem key={soldier.id} className="md:basis-1/2 lg:basis-1/3">
                <div id={`og-${soldier.id.toLowerCase()}`} className="scroll-mt-32">
                  <SoldierCard soldier={soldier} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
      ) : isTablet ? (
        <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">
          {filteredSoldiers.map((soldier) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className="scroll-mt-32"
            >
              <SoldierCard soldier={soldier} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredSoldiers.map((soldier) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className="scroll-mt-32"
            >
              <SoldierCard soldier={soldier} />
            </div>
          ))}
        </div>
      )}
      
      {/* Join CTA */}
      <div className="mt-16 flex justify-center">
        <Link to="/#join">
          <Button 
            size="lg" 
            className="bg-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg animate-pulse-slow"
          >
            <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Join the Ranks
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SoldiersGrid;
