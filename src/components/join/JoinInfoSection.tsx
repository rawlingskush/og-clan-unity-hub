
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import BenefitsList from './BenefitsList';

const JoinInfoSection = () => {
  return (
    <AnimatedContent animation="slide-in-left">
      <div className="relative">
        {/* Enhanced heading with better gradient and glow */}
        <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-ogclan via-ogclan-light to-ogclan bg-clip-text text-transparent drop-shadow-gold">
            Become an OG Today
          </span>
          {/* Subtle glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-ogclan via-ogclan-light to-ogclan bg-clip-text text-transparent blur-sm opacity-50 -z-10">
            Become an OG Today
          </span>
        </h3>
        
        {/* Enhanced description with better contrast and spacing */}
        <div className="space-y-4 mb-8">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-medium">
            Join OG Clan and become part of something bigger. We're not just gamers—we're a 
            <span className="text-ogclan-light font-semibold"> movement creating opportunities</span> through passion.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            <span className="font-semibold text-ogclan">Join our squad to buy CoD Points in Cameroon</span> and play 
            <span className="font-semibold text-ogclan-light"> multiplayer or Battle Royale</span> on maps like 
            <span className="font-semibold text-ogclan"> Isolated</span> and 
            <span className="font-semibold text-ogclan"> Krai</span>.
          </p>
        </div>

        <BenefitsList />
        
        {/* Enhanced desktop-only section with better styling */}
        <div className="hidden md:block">
          <AnimatedContent animation="fade-in-up" delay={800}>
            <div className="relative p-6 rounded-xl bg-gradient-to-r from-ogclan/5 via-ogclan/10 to-ogclan/5 border border-ogclan/20 backdrop-blur-sm">
              <p className="text-ogclan-light italic mb-4 text-lg font-medium text-center">
                "Gaming is better together. Join the OG family and level up with us!"
              </p>
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="border-ogclan/60 bg-black/40 text-ogclan hover:bg-ogclan/10 hover:border-ogclan hover:text-ogclan-light transition-all duration-300 px-6 py-3 font-semibold backdrop-blur-sm"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Learn More About Us
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-ogclan rounded-full opacity-60"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-ogclan rounded-full opacity-60"></div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default JoinInfoSection;
