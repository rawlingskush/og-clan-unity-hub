
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Gamepad2, Calendar, Trophy, Users } from 'lucide-react';

const HighlightsSection = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Highlight Card */}
        <AnimatedContent animation="fade-in-up" delay={300}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="highlight-card group relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/lovable-uploads/38729333-9d12-4049-82a6-74bbfc1d8621.png" 
                  alt="OG Clan Team" 
                  className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Gamepad2 className="w-5 h-5 mr-2 text-ogclan" />
                    <span className="text-ogclan font-medium">Team Showcase</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-ogclan transition-colors duration-300">Elite Squad Lineup</h3>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="glass-card border-ogclan/30 w-80">
              <div className="space-y-2">
                <h4 className="text-ogclan font-semibold">OG Clan Elite Squad</h4>
                <p className="text-sm text-gray-300">Our top-tier players represent OG Clan in high-stakes tournaments across Cameroon and beyond.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </AnimatedContent>

        {/* Second Highlight Card */}
        <AnimatedContent animation="fade-in-up" delay={500}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="highlight-card group relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/lovable-uploads/ebe544e6-9308-4353-bcda-3f8d94e8b911.png" 
                  alt="Battle Night Action" 
                  className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-ogclan" />
                    <span className="text-ogclan font-medium">Weekly Battle</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-ogclan transition-colors duration-300">Squad Combat</h3>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="glass-card border-ogclan/30 w-80">
              <div className="space-y-2">
                <h4 className="text-ogclan font-semibold">Intense Squad Action</h4>
                <p className="text-sm text-gray-300">Our teams compete in high-octane battles, showcasing superior tactics and legendary gameplay.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </AnimatedContent>

        {/* Third Highlight Card */}
        <AnimatedContent animation="fade-in-up" delay={700}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="highlight-card group relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/lovable-uploads/7537ecf0-3a5f-4e1d-b481-520c6826c62e.png" 
                  alt="Champion" 
                  className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-5 h-5 mr-2 text-ogclan" />
                    <span className="text-ogclan font-medium">Championships</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-ogclan transition-colors duration-300">Conquest Victory</h3>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="glass-card border-ogclan/30 w-80">
              <div className="space-y-2">
                <h4 className="text-ogclan font-semibold">Tournament Champions</h4>
                <p className="text-sm text-gray-300">Our elite operators dominate the field, claiming victory and establishing OG Clan's legacy.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </AnimatedContent>
      </div>

      {/* Additional Information */}
      <AnimatedContent animation="fade-in" delay={900}>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-black/60 border border-ogclan/30 rounded-lg">
            <Users className="w-5 h-5 mr-2 text-ogclan" />
            <span className="text-ogclan">Join the next Battle Night on July 15, 2023</span>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default HighlightsSection;
