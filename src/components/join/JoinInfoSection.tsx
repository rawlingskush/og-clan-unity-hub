
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedContent from '../AnimatedContent';
import BenefitsList from './BenefitsList';

const JoinInfoSection = () => {
  return (
    <AnimatedContent animation="slide-in-left">
      <h3 className="text-3xl font-bold text-gradient-gold mb-6">
        Become an OG Today
      </h3>
      <p className="text-lg text-gray-700 mb-4">
        Join OG Clan and become part of something bigger. We're not just gamers—we're a movement creating opportunities through passion.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        <span className="font-semibold">Join our squad to buy CoD Points in Cameroon</span> and play <span className="font-semibold">multiplayer or Battle Royale</span> on maps like <span className="font-semibold">Isolated</span> and <span className="font-semibold">Krai</span>.
      </p>

      <BenefitsList />
      
      <div className="hidden md:block">
        <p className="text-gray-500 italic mb-4">
          "Gaming is better together. Join the OG family and level up with us!"
        </p>
        <Button variant="outline" className="border-ogclan text-ogclan hover:bg-ogclan/10">
          Learn More About Us
        </Button>
      </div>
    </AnimatedContent>
  );
};

export default JoinInfoSection;
