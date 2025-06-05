
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import ScrollDownButton from './hero/ScrollDownButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { Target, Shield, Crosshair, Radar } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { scrollPosition } = useScrollSpy({ sectionIds: ['home'] });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <HeroBackground scrollPosition={scrollPosition} />
      
      {/* Minimal tactical HUD elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Corner tactical indicators */}
        <AnimatedContent animation="fade-in" delay={1500}>
          <div className="absolute top-8 left-8 w-12 h-12">
            <div className="w-full h-full border-l border-t border-ogclan/30 relative">
              <Crosshair className="absolute top-1 left-1 h-3 w-3 text-ogclan/40 animate-pulse" />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1700}>
          <div className="absolute top-8 right-8 w-12 h-12">
            <div className="w-full h-full border-r border-t border-ogclan/30 relative">
              <Radar className="absolute top-1 right-1 h-3 w-3 text-ogclan/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1900}>
          <div className="absolute bottom-8 left-8 w-12 h-12">
            <div className="w-full h-full border-l border-b border-ogclan/30 relative">
              <Target className="absolute bottom-1 left-1 h-3 w-3 text-ogclan/40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={2100}>
          <div className="absolute bottom-8 right-8 w-12 h-12">
            <div className="w-full h-full border-r border-b border-ogclan/30 relative">
              <Shield className="absolute bottom-1 right-1 h-3 w-3 text-ogclan/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </AnimatedContent>

        {/* Subtle scanning lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/20 to-transparent opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/20 to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-8 w-full relative z-10">
        <HeroContent />
        <HeroActions />
      </div>
      
      <div className={`absolute ${isMobile ? 'bottom-8' : 'bottom-12'} left-1/2 transform -translate-x-1/2 z-10`}>
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default HeroSection;
