
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ArrowDown, Flame, Calendar, Target } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-ogclan/30 opacity-50 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-ogclan/30 opacity-40 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:px-[34px] md:py-[19px]">
        <div className="text-center">
          <AnimatedContent animation="fade-in-up" delay={300}>
            <div className="flex justify-center mb-6">
              <Logo size="lg" withText={false} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ogclan mb-2">
              OG BATTLE NIGHT
            </h1>
            <p className="text-2xl md:text-3xl text-ogclan-light font-semibold">
              Where Legends are Born <Flame className="inline-block h-6 w-6 text-red-500" />
            </p>
          </AnimatedContent>

          <AnimatedContent animation="fade-in-up" delay={600}>
            <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed">
              Where gaming passion meets loyalty. We're a family in Cameroon building epic moments and big opportunities—join the movement!
            </p>
          </AnimatedContent>

          <AnimatedContent animation="fade-in-up" delay={900}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="btn-primary group">
                Join Your Squad
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#og-battle-night" className="inline-flex items-center justify-center px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 transition-colors">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </a>
                <a href="#og-battle-night" className="inline-flex items-center justify-center px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 transition-colors">
                  <Target className="mr-2 h-5 w-5" />
                  Challenge Our Squad
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Centered arrow button with improved styling */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <AnimatedContent animation="fade-in" delay={1500}>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/60 border border-ogclan/40 hover:border-ogclan/70 shadow-md hover:shadow-ogclan/20 transition-all duration-300 hover:translate-y-1 group"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-7 h-7 text-ogclan group-hover:text-ogclan-light animate-bounce animation-delay-1200" />
            </a>
          </AnimatedContent>
        </div>
      </div>
    </section>;
};

export default HeroSection;
