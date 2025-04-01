
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import { useToast } from '@/components/ui/use-toast';

const CoDPointsSection = () => {
  const { toast } = useToast();

  const handleAffiliateClick = () => {
    // This function will handle the affiliate link click
    // For now, show a toast notification since the link is not available yet
    toast({
      title: "Coming Soon",
      description: "Affiliate link will be available soon. Stay tuned!",
      variant: "default",
    });
  };

  return (
    <section id="cod-points" className="py-20 md:py-24 bg-gradient-to-b from-black to-[#0a0a1a] relative overflow-hidden">
      {/* Background elements for aesthetic */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/5 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-900/5 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
              GET COD POINTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Power up your Call of Duty game with CoD Points! Buy now using local payment methods in Cameroon.
            </p>
          </div>
        </AnimatedContent>
        
        <AnimatedContent animation="fade-in-up" delay={200}>
          <div className="flex justify-center mt-10">
            <button 
              onClick={handleAffiliateClick}
              className="group relative overflow-hidden px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              style={{
                background: "linear-gradient(135deg, #e11d48 0%, #4f46e5 100%)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
              }}
            >
              <span className="relative z-10 flex items-center">
                Buy CoD Points Now
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Hover effect overlay */}
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </AnimatedContent>
        
        <AnimatedContent animation="fade-in-up" delay={400}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Choose Your Package</h3>
              <p className="text-gray-300">Select from various CoD Points packages that fit your gaming needs and budget.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Payment</h3>
              <p className="text-gray-300">Pay with popular Cameroonian payment methods including mobile money.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Get Gaming</h3>
              <p className="text-gray-300">Receive your CoD Points instantly and elevate your gaming experience.</p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default CoDPointsSection;
