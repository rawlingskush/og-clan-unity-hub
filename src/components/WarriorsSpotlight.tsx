import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Zap, Shield, Users } from 'lucide-react';
import { soldiers } from '@/data/soldiers';
import { generateSoldierStats } from '@/utils/soldierStats';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import EnhancedImage from '@/components/ui/enhanced-image';

const WarriorsSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { navigateToPage } = useAppNavigation();
  
  // Get soldiers with unique images for spotlight - ensure each has a different image
  const spotlightSoldiers = soldiers.filter(s => {
    // Only include soldiers with actual unique profile images (not placeholder)
    const uniqueImageSoldiers = ['kush', 'chambas', 'damage', 'swizzy', 'pato', 'johnwick', 'slim', 'shinobi'];
    return uniqueImageSoldiers.includes(s.id);
  });
  
  const featuredSoldiers = spotlightSoldiers.slice(0, 8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredSoldiers.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredSoldiers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredSoldiers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredSoldiers.length) % featuredSoldiers.length);
  };

  if (featuredSoldiers.length === 0) return null;

  const currentSoldier = featuredSoldiers[currentIndex];
  const stats = generateSoldierStats(currentSoldier.name);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-gold mb-4">
            WARRIORS SPOTLIGHT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This week's featured soldiers - Meet the legends who define our legacy on the battlefield
          </p>
        </div>

        {/* Main Spotlight Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card/30 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Soldier Image */}
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary/30">
                    <EnhancedImage 
                      src={currentSoldier.imageUrl} 
                      alt={currentSoldier.name}
                      className="w-full h-full object-cover"
                      aspectRatio="1/1"
                      objectFit="cover"
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* Soldier Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient-gold mb-2">
                    {currentSoldier.name}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <Target className="w-5 h-5" />
                    <span className="text-lg font-semibold">{currentSoldier.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent mb-6">
                    <Zap className="w-5 h-5" />
                    <span className="text-lg">{currentSoldier.weapon}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {currentSoldier.bio}
                </p>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-3">
                  {currentSoldier.pro && (
                    <div className="flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/30">
                      <Shield className="w-4 h-4" />
                      <span className="font-semibold">Elite</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="font-semibold">Active</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full border border-primary/30">
                    <Target className="w-4 h-4" />
                    <span className="font-semibold">Battle-Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredSoldiers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12 max-w-4xl mx-auto">
          {featuredSoldiers.map((soldier, index) => (
            <button
              key={soldier.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-primary scale-105' 
                  : 'hover:scale-105 opacity-60 hover:opacity-100'
              }`}
            >
              <EnhancedImage 
                src={soldier.imageUrl} 
                alt={soldier.name}
                className="w-full aspect-square object-cover"
                aspectRatio="1/1"
                objectFit="cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-xs font-semibold text-white truncate">
                  {soldier.name.replace('ФƓゝ ', '')}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Complete Roster CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigateToPage('/clan-members')}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/30 hover:border-primary/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] group"
            >
              <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>View Complete Roster</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigateToPage('/tier-tracker')}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 hover:from-emerald-600/30 hover:to-emerald-500/30 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group"
            >
              <Target className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Tier Tracker</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Discover all 70+ warriors and view our tier progression system
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarriorsSpotlight;