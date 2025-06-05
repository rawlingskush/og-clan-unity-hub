
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
      
      {/* Enhanced tactical HUD elements matching soldiers page */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ogclan/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-ogclan/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-ogclan/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Corner tactical brackets */}
        <AnimatedContent animation="fade-in" delay={1000}>
          <div className="absolute top-8 left-8 w-16 h-16">
            <div className="w-full h-full border-l-2 border-t-2 border-ogclan/40 relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-ogclan/60 rounded-full"></div>
              <Crosshair className="absolute top-1 left-1 h-3 w-3 text-ogclan/50 animate-pulse" />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1200}>
          <div className="absolute top-8 right-8 w-16 h-16">
            <div className="w-full h-full border-r-2 border-t-2 border-ogclan/40 relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-ogclan/60 rounded-full"></div>
              <Radar className="absolute top-1 right-1 h-3 w-3 text-ogclan/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1400}>
          <div className="absolute bottom-8 left-8 w-16 h-16">
            <div className="w-full h-full border-l-2 border-b-2 border-ogclan/40 relative">
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-ogclan/60 rounded-full"></div>
              <Target className="absolute bottom-1 left-1 h-3 w-3 text-ogclan/50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1600}>
          <div className="absolute bottom-8 right-8 w-16 h-16">
            <div className="w-full h-full border-r-2 border-b-2 border-ogclan/40 relative">
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-ogclan/60 rounded-full"></div>
              <Shield className="absolute bottom-1 right-1 h-3 w-3 text-ogclan/50 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </AnimatedContent>

        {/* Tactical scanning lines */}
        <AnimatedContent animation="fade-in" delay={800}>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent">
            <div className="absolute top-0 h-1 w-1 bg-ogclan/60 rounded-full animate-pulse" style={{ left: '20%' }}></div>
          </div>
        </AnimatedContent>

        <AnimatedContent animation="fade-in" delay={1000}>
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent">
            <div className="absolute top-0 h-1 w-1 bg-ogclan/60 rounded-full animate-pulse" style={{ right: '25%' }}></div>
          </div>
        </AnimatedContent>

        {/* Vertical tactical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ogclan/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ogclan/20 to-transparent"></div>
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
