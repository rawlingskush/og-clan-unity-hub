
import React from 'react';
import JoinInfoSection from './join/JoinInfoSection';
import JoinForm from './join/JoinForm';
import { Button } from './ui/button';
import { Users } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const JoinSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-ogclan-muted rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-ogclan-light rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>

      <div className="glass-card rounded-3xl p-8 md:p-12 border-t border-ogclan/20 hover:border-ogclan/30 transition-all duration-500">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Info section */}
          <JoinInfoSection />
          
          {/* Right column: Form section */}
          <div>
            <JoinForm />
            
            {/* Enhanced mobile-only CTA block */}
            <div className="md:hidden mt-8">
              <AnimatedContent animation="fade-in-up" delay={600}>
                <div className="relative p-6 rounded-xl bg-gradient-to-r from-ogclan/5 via-ogclan/10 to-ogclan/5 border border-ogclan/20 backdrop-blur-sm text-center">
                  <p className="text-ogclan-light italic mb-4 text-base font-medium">
                    "Gaming is better together. Join the OG family and level up with us!"
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-ogclan/60 bg-black/40 text-ogclan hover:bg-ogclan/10 hover:border-ogclan hover:text-ogclan-light transition-all duration-300 px-6 py-3 font-semibold backdrop-blur-sm"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Learn More About Us
                  </Button>
                  
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-ogclan rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-ogclan rounded-full opacity-60"></div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
