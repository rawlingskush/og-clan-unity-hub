import React from 'react';
import { soldiers } from '@/data/soldiers';
import AnimatedContent from './AnimatedContent';
import { ChevronLeft, ChevronRight, Trophy, Target, Star } from 'lucide-react';

const WarriorsSpotlight = () => {
  // Get featured warriors (first 6 soldiers for spotlight)
  const featuredWarriors = soldiers.slice(0, 6);
  
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredWarriors.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredWarriors.length) % featuredWarriors.length);
  };
  
  // Auto-advance every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
      {/* Background tactical elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-ogclan/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-ogclan/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-ogclan/30 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-24 bg-ogclan/20 animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4 animate-glow">
              WARRIORS SPOTLIGHT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-ogclan-light max-w-2xl mx-auto">
              Meet the legends who define our legacy on the battlefield
            </p>
          </div>
        </AnimatedContent>
        
        <div className="relative">
          {/* Main spotlight card */}
          <AnimatedContent animation="scale-in" delay={300}>
            <div className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden hover:border-ogclan/60 transition-all duration-500 hover:shadow-glow-ogclan group">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-ogclan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scanner line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-pulse"></div>
              
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                {/* Warrior Image */}
                <div className="relative">
                  <div className="aspect-square rounded-full border-4 border-ogclan/50 overflow-hidden hover:border-ogclan transition-all duration-300 hover:scale-105">
                    <img 
                      src={featuredWarriors[currentIndex]?.imageUrl} 
                      alt={featuredWarriors[currentIndex]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Rank badge */}
                  <div className="absolute -top-2 -right-2 bg-ogclan text-black px-3 py-1 rounded-full text-sm font-bold">
                    #{currentIndex + 1}
                  </div>
                </div>
                
                {/* Warrior Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-ogclan mb-2 animate-glow">
                      {featuredWarriors[currentIndex]?.name}
                    </h3>
                    <p className="text-ogclan-light text-lg mb-1">{featuredWarriors[currentIndex]?.role}</p>
                    <div className="flex items-center gap-2 text-ogclan-muted">
                      <Target className="w-4 h-4" />
                      <span>{featuredWarriors[currentIndex]?.weapon}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {featuredWarriors[currentIndex]?.bio}
                  </p>
                  
                  {/* Stats row */}
                  <div className="flex items-center gap-6 pt-4 border-t border-ogclan/20">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-ogclan" />
                      <span className="text-ogclan-light">Elite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-ogclan" />
                      <span className="text-ogclan-light">Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-ogclan" />
                      <span className="text-ogclan-light">Battle-Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-ogclan/20 border border-ogclan/40 hover:border-ogclan text-ogclan p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-ogclan/20 border border-ogclan/40 hover:border-ogclan text-ogclan p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredWarriors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-ogclan shadow-glow-ogclan' 
                  : 'bg-ogclan/30 hover:bg-ogclan/50'
              }`}
            />
          ))}
        </div>
        
        {/* Mini warrior cards preview */}
        <AnimatedContent animation="fade-in" delay={600}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">
            {featuredWarriors.map((warrior, index) => (
              <button
                key={warrior.id}
                onClick={() => setCurrentIndex(index)}
                className={`group relative p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  index === currentIndex 
                    ? 'border-ogclan bg-ogclan/10' 
                    : 'border-ogclan/30 hover:border-ogclan/60 hover:bg-ogclan/5'
                }`}
              >
                <div className="aspect-square rounded-full overflow-hidden mb-2 border-2 border-ogclan/30 group-hover:border-ogclan/60 transition-colors">
                  <img 
                    src={warrior.imageUrl} 
                    alt={warrior.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-ogclan-light font-medium truncate">
                  {warrior.name.replace('ФƓゝ ', '')}
                </p>
              </button>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default WarriorsSpotlight;