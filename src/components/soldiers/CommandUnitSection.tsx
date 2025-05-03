
import React from 'react';
import { CommandMember, commandUnit } from '@/types/commandUnit';
import CommandUnitCard from './CommandUnitCard';
import { motion } from 'framer-motion';
import AnimatedContent from '@/components/AnimatedContent';

const CommandUnitSection = () => {
  return (
    <div className="relative py-16">
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 pointer-events-none"></div>
      
      {/* Golden line separator */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-ogclan/40 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <AnimatedContent animation="fade-in">
          <h2 className="text-3xl font-orbitron text-center mb-3 text-gradient-gold">Command Unit</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm">
            The strategic minds behind OG Clan's operations — leadership that guides from beyond the battlefield.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commandUnit.map((member, index) => (
              <div 
                key={member.id}
                className="transition-all duration-500"
                style={{ 
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`
                }}
              >
                <CommandUnitCard member={member} />
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default CommandUnitSection;
