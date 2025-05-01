
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
  shotgun: ["BY15", "KRM-262", "HS0405", "R9-0"],
  smg: ["QQ9", "Striker", "MAC-10"],
  sniper: ["XPR-50"]
}

interface SoldiersGridProps {
  soldiers: Soldier[];
}

const SoldiersGrid = ({ soldiers }: SoldiersGridProps) => {
  const [filter, setFilter] = useState<string>("all");
  const [animateItems, setAnimateItems] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
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

  // Initialize animation after component mounts
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFilters(true);
    }, 800);
    
    const timer2 = setTimeout(() => {
      setAnimateItems(true);
    }, 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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
    `rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-500 ${
      filter === currentFilter 
        ? 'bg-ogclan text-black shadow-sm shadow-ogclan/40'
        : 'bg-black/40 text-ogclan/80 border border-ogclan/30 hover:bg-black/60 hover:border-ogclan/50'
    }`;

  // Determine if we should show a grid or carousel based on screen size
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

  const filterButtons = [
    { name: "All", filter: "all", delay: 0 },
    { name: "Breachers", filter: "breacher", delay: 100 },
    { name: "Shotgun Masters", filter: "shotgun", delay: 200 },
    { name: "Snipers", filter: "sniper", delay: 300 },
    { name: "SMG Specialists", filter: "smg", delay: 400 }
  ];

  return (
    <div>
      {/* Filter Pills with Animation */}
      <div className="mb-8 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-2">
          {filterButtons.map((btn, index) => (
            <button 
              key={btn.filter}
              className={`${filterButtonClass(btn.filter)} transform transition-all duration-500 ${
                showFilters 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${btn.delay}ms` 
              }}
              onClick={() => setFilter(btn.filter)}
              aria-pressed={filter === btn.filter}
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Carousel with enhanced animations */}
      {isMobile ? (
        <AnimatedContent animation="fade-in">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredSoldiers.map((soldier, index) => (
                <CarouselItem key={soldier.id} className="md:basis-1/2 lg:basis-1/3">
                  <div id={`og-${soldier.id.toLowerCase()}`} className="scroll-mt-32">
                    <SoldierCard 
                      soldier={soldier} 
                      animate={animateItems}
                      delay={index * 100} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static transform-none animate-pulse-slow hover:bg-ogclan hover:text-black" />
              <CarouselNext className="relative static transform-none animate-pulse-slow hover:bg-ogclan hover:text-black" />
            </div>
          </Carousel>
        </AnimatedContent>
      ) : isTablet ? (
        <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">
          {filteredSoldiers.map((soldier, index) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className="scroll-mt-32"
            >
              <SoldierCard 
                soldier={soldier} 
                animate={animateItems}
                delay={index * 100} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredSoldiers.map((soldier, index) => (
            <div 
              key={soldier.id} 
              id={`og-${soldier.id.toLowerCase()}`}
              className="scroll-mt-32"
            >
              <SoldierCard 
                soldier={soldier} 
                animate={animateItems}
                delay={index * 100} 
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Join CTA with enhanced animation */}
      <AnimatedContent animation="fade-in" className="mt-16" delay={500}>
        <div className="flex justify-center">
          <Link to="/#join">
            <Button 
              size="lg" 
              className="bg-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full before:animate-none hover:before:animate-[scanner-line_1s_ease-in-out]
                after:absolute after:inset-0 after:bg-transparent after:border-2 after:border-ogclan/0 after:opacity-0 hover:after:opacity-100 hover:after:border-ogclan/50 after:transition-all after:duration-500"
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
