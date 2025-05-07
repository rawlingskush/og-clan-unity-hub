
import React from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { Shield } from 'lucide-react';
import BenefitsList from './BenefitsList';

const JoinInfoSection = () => {
  return (
    <div>
      <AnimatedContent animation="fade-in-up" delay={100}>
        <div className="flex items-center mb-4">
          <div className="mr-3 bg-ogclan/10 p-3 rounded-full border border-ogclan/30">
            <Shield className="h-6 w-6 text-ogclan" />
          </div>
          <h3 className="text-2xl font-bold">Join Our Ranks</h3>
        </div>
        
        <p className="text-gray-300 mb-6">
          OG Clan Cameroon is always looking for dedicated, skilled players who share our passion for excellence and teamwork. Apply today and take your gaming to the next level.
        </p>
        
        {/* Tactical separator */}
        <div className="relative h-px w-full my-8">
          <div className="absolute inset-0 bg-ogclan/20"></div>
          <div className="absolute top-0 left-0 h-full w-1/3 bg-ogclan/70 animate-[scanner-line_3s_linear_infinite]"></div>
        </div>
      </AnimatedContent>
      
      {/* Benefits List */}
      <div className="mt-6">
        <AnimatedContent animation="fade-in" delay={400}>
          <h4 className="text-xl font-semibold mb-6 text-gradient-gold">Member Benefits</h4>
        </AnimatedContent>
        
        <BenefitsList />
      </div>
      
      {/* Current member count with animated counter */}
      <AnimatedContent animation="fade-in" delay={800} className="mt-8">
        <div className="border border-ogclan/30 bg-black/50 p-4 inline-block">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-ogclan mr-2" />
            <div>
              <div className="text-2xl font-bold text-white">
                <span className="text-gradient-gold animate-pulse-slow">137</span> 
                <span className="text-sm ml-1 text-gray-400">members</span>
              </div>
              <div className="text-xs text-gray-400">and growing</div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default JoinInfoSection;
