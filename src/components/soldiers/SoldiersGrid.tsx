
import React, { useState, useEffect } from 'react';
import { Soldier } from '@/types/soldier';
import SoldierCard from './SoldierCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const weaponCategories = {
  shotgun: ["BY15", "KRM-262", "HS0405", "R9-0", "Striker"],
  smg: ["QQ9", "FENNEC", "MAC-10"],
  sniper: ["XPR-50", "DLQ33"],
  ar: ["Kilo 141", "M13", "Type 25"]
}

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [animateItems, setAnimateItems] = useState(false);
  const [filterButtonsVisible, setFilterButtonsVisible] = useState(false);
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
          case "ar":
            return weaponCategories.ar.includes(soldier.weapon);
          case "assault":
            return soldier.role.toLowerCase().includes("breach");
          case "support":
            return soldier.role.toLowerCase().includes("support") || soldier.role.includes("🛡️");
          default:
            return true;
        }
      });

  // Initialize animation after component mounts with staggered delays
  useEffect(() => {
    // First animate the filter buttons
    setFilterButtonsVisible(true);
    
    // Then after a delay, animate the cards
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  // Reset and trigger animations when filter changes
  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [filter]);

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
      {/* Filter Pills with Advanced Animation */}
      <AnimatedContent animation="slide-in-right" className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {["all", "assault", "shotgun", "sniper", "smg", "ar", "support"].map((filterType, index) => (
            <button 
              key={filterType}
              className={`${filterButtonClass(filterType)} ${filterButtonsVisible ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setFilter(filterType)}
              aria-pressed={filter === filterType}
              style={{ 
                transition: 'all 0.3s ease-out',
                transitionDelay: `${index * 100}ms`,
                transform: filterButtonsVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {filterType === "all" && "All"}
              {filterType === "assault" && "Assault Architect"}
              {filterType === "shotgun" && "Shotgun Masters"}
              {filterType === "sniper" && "Snipers"}
              {filterType === "smg" && "SMG Specialists"}
              {filterType === "ar" && "AR Operators"}
              {filterType === "support" && "Support Operatives"}
            </button>
          ))}
        </div>
      </AnimatedContent>
      
      {/* Mobile Carousel with enhanced animations */}
      {isMobile ? (
        <AnimatedContent animation="fade-in" className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredSoldiers.map((soldier, index) => (
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
      ) : isTablet ? (
        <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">
          {filteredSoldiers.map((soldier, index) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className={`scroll-mt-32 ${soldier.spotlight ? 'col-span-3 md:col-span-1' : ''}`}
              style={{ 
                opacity: animateItems ? 1 : 0,
                transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <SoldierCard soldier={soldier} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSoldiers.map((soldier, index) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className={`scroll-mt-32 ${soldier.spotlight ? 'col-span-2 md:col-span-1 row-span-1' : ''}`}
              style={{ 
                opacity: animateItems ? 1 : 0,
                transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <SoldierCard soldier={soldier} />
            </div>
          ))}
        </div>
      )}
      
      {/* Join CTA with enhanced animation */}
      <AnimatedContent animation="bounce" className="mt-16" delay={500}>
        <div className="flex justify-center">
          <Link to="/#join">
            <Button 
              size="lg" 
              className="bg-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg animate-pulse-slow relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:animate-[scanner-line_1s_ease-in-out]"
            >
              <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Join the Ranks
            </Button>
          </Link>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default SoldiersGrid;
