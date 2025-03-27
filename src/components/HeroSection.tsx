
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-ogclan-muted opacity-40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-ogclan-light opacity-30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <AnimatedContent animation="fade-in-up" delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="relative inline-block">
                OG Clan
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-ogclan"></span>
              </span>
            </h1>
          </AnimatedContent>

          <AnimatedContent animation="fade-in-up" delay={600}>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed">
              Where gaming passion meets loyalty. We're a family in Cameroon building epic moments and big opportunities—join the movement!
            </p>
          </AnimatedContent>

          <AnimatedContent animation="fade-in-up" delay={900}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#join" 
                className="btn-primary group"
              >
                Become an OG
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a 
                href="#highlights" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Explore
              </a>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent animation="fade-in" delay={1500} className="mt-16 md:mt-24 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-gray-700" />
          </a>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
