
import React from 'react';
import JoinInfoSection from './join/JoinInfoSection';
import JoinForm from './join/JoinForm';
import { Button } from './ui/button';

const JoinSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-ogclan-muted rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-ogclan-light rounded-full blur-3xl opacity-20"></div>

      <div className="glass-card rounded-3xl p-8 md:p-12 border-t border-ogclan/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column: Info section */}
          <JoinInfoSection />
          
          {/* Right column: Form section */}
          <div>
            <JoinForm />
            
            {/* Mobile-only CTA block - moved to component */}
            <div className="md:hidden mt-8">
              <p className="text-gray-500 italic mb-4 text-center">
                "Gaming is better together. Join the OG family and level up with us!"
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="border-ogclan text-ogclan hover:bg-ogclan/10">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
