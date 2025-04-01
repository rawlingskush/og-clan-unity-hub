
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
    <section id="cod-points" className="py-20 md:py-24 relative overflow-hidden">
      {/* Main background image with overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d2b92710-be56-475b-b330-745dae42abad.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a1a]/80"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/10 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-900/10 opacity-30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column: Image */}
          <AnimatedContent animation="fade-in-up">
            <div className="p-4 relative group">
              <div className="overflow-hidden rounded-xl border-2 border-ogclan/30 shadow-lg shadow-ogclan/10">
                <img 
                  src="/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png" 
                  alt="CoD Points with OG Clan" 
                  className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-ogclan/70 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-ogclan/70 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-ogclan/70 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-ogclan/70 rounded-br-lg"></div>
            </div>
          </AnimatedContent>
          
          {/* Right column: Content */}
          <AnimatedContent animation="fade-in-up" delay={200}>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                GET COD POINTS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 md:mx-0 mx-auto mb-6"></div>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Power up your Call of Duty game with CoD Points! Buy now using local payment methods in Cameroon and take your gaming experience to the next level.
              </p>
              
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
        </div>
        
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
