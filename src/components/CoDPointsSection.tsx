
import React from 'react';
import { ArrowRight, Gift, CreditCard, Zap } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import { useToast } from '@/components/ui/use-toast';

const CoDPointsSection = () => {
  const { toast } = useToast();

  const handleAffiliateClick = () => {
    toast({
      title: "Coming Soon",
      description: "Affiliate link will be available soon. Stay tuned!",
      variant: "default",
    });
  };

  return (
    <section id="cod-points" className="py-14 md:py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d2b92710-be56-475b-b330-745dae42abad.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      </div>
      
      {/* Glowing accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
              GET COD POINTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mx-auto mb-4"></div>
          </div>
        </AnimatedContent>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <AnimatedContent animation="fade-in-up" delay={200}>
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Power up your Call of Duty game with CoD Points! Buy now using local payment methods in Cameroon and take your gaming experience to the next level.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                <span className="font-semibold">Buy CoD Points in Cameroon</span> easily and level up for multiplayer matches and Battle Royale drops in spots like <span className="font-semibold">Black Market</span> on maps like <span className="font-semibold">Isolated</span> and <span className="font-semibold">Krai</span>.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <div className="flex items-center bg-black/30 border border-gray-700/50 rounded-lg px-4 py-2">
                  <Zap className="text-ogclan w-5 h-5 mr-2" />
                  <span className="text-gray-300 text-sm">Instant delivery</span>
                </div>
                <div className="flex items-center bg-black/30 border border-gray-700/50 rounded-lg px-4 py-2">
                  <CreditCard className="text-ogclan w-5 h-5 mr-2" />
                  <span className="text-gray-300 text-sm">Local payment</span>
                </div>
                <div className="flex items-center bg-black/30 border border-gray-700/50 rounded-lg px-4 py-2">
                  <Gift className="text-ogclan w-5 h-5 mr-2" />
                  <span className="text-gray-300 text-sm">Special offers</span>
                </div>
              </div>
              
              <button 
                onClick={handleAffiliateClick}
                className="group relative overflow-hidden px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #e11d48 0%, #4f46e5 100%)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
                }}
              >
                <span className="relative z-10 flex items-center">
                  Buy CoD Points Now
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </AnimatedContent>
          
          {/* Right image */}
          <AnimatedContent animation="fade-in-up" delay={300}>
            <div className="relative group max-w-md mx-auto">
              <div className="overflow-hidden rounded-xl border border-ogclan/20 shadow-lg shadow-ogclan/5">
                <img 
                  src="/lovable-uploads/745bd77a-e4e3-4878-be47-30917382847b.png" 
                  alt="CoD Points with OG Clan" 
                  className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-ogclan/50 rounded-tr-xl -mt-2 -mr-2"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-ogclan/50 rounded-bl-xl -mb-2 -ml-2"></div>
            </div>
          </AnimatedContent>
        </div>
        
        <AnimatedContent animation="fade-in-up" delay={400}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 p-4 rounded-lg flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Choose Package</h3>
                <p className="text-gray-400 text-sm">Select from various CoD Points packages that fit your gaming needs.</p>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 p-4 rounded-lg flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Pay Locally</h3>
                <p className="text-gray-400 text-sm">Use popular Cameroonian payment methods including mobile money.</p>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 p-4 rounded-lg flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Game On</h3>
                <p className="text-gray-400 text-sm">Receive your CoD Points instantly and elevate your gaming experience.</p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default CoDPointsSection;
