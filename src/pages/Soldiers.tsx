
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import { Separator } from '@/components/ui/separator';
import { Shield, Users } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const Soldiers = () => {
  // Add scroll reveal animation effect
  useEffect(() => {
    // Smooth scroll to soldier card if URL has a fragment identifier
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1000); // Delay to ensure elements are rendered
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with enhanced animations */}
        <div className="relative bg-black/80 py-16 overflow-hidden border-b border-ogclan/20">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/825f03cc-b2e3-4636-a959-2291c478da69.png')] bg-cover bg-center bg-no-repeat blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <AnimatedContent animation="fade-in" delay={200}>
                <h1 className="text-4xl font-bold text-gradient-gold mb-2">
                  Our Soldiers
                </h1>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in" delay={400}>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <Separator className="w-12 bg-ogclan/40" />
                  <Users className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <Separator className="w-12 bg-ogclan/40" />
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in" delay={600}>
                <p className="text-lg text-ogclan-muted max-w-2xl mx-auto">
                  Meet the elite specialists who form the backbone of OG Clan Cameroon. From breach masters to precision scouts, each operator's unique loadout and combat prowess drive our CODM domination.
                </p>
              </AnimatedContent>
            </div>
          </div>
          
          {/* Add animated scanner line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
        </div>
        
        {/* Soldiers Grid Section with enhanced animations */}
        <section className="section-container py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none"></div>
          
          {/* Add subtle camo pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5 pointer-events-none"></div>
          
          {/* Add animated scanner lines across the screen */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute top-0 h-[1px] bg-ogclan/60 w-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute bottom-0 h-[1px] bg-ogclan/60 w-1/3 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
          </div>
          
          <AnimatedContent animation="fade-in" className="relative z-10">
            <SoldiersGrid soldiers={soldiers} />
          </AnimatedContent>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soldiers;
