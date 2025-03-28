
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ArrowDown, Flame, Calendar } from 'lucide-react';
import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-ogclan/30 opacity-50 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-ogclan/30 opacity-40 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
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
              <a 
                href="#join" 
                className="btn-primary group"
              >
                Join Your Squad
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a 
                href="#og-battle-night" 
                className="inline-flex items-center justify-center px-6 py-3 border border-ogclan/30 rounded-lg text-ogclan bg-black/50 hover:bg-black/70 transition-colors"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </a>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent animation="fade-in" delay={1500} className="mt-16 md:mt-24 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-ogclan/30 hover:border-ogclan/50 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-ogclan" />
          </a>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
