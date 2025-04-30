
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import { Separator } from '@/components/ui/separator';
import { Shield, Users } from 'lucide-react';

const Soldiers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative bg-black/80 py-16 overflow-hidden border-b border-ogclan/20">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/825f03cc-b2e3-4636-a959-2291c478da69.png')] bg-cover bg-center bg-no-repeat blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gradient-gold mb-2 animate-fade-in">
                Our Soldiers
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Shield className="text-ogclan h-5 w-5" />
                <Separator className="w-12 bg-ogclan/40" />
                <Users className="text-ogclan h-5 w-5" />
                <Separator className="w-12 bg-ogclan/40" />
                <Shield className="text-ogclan h-5 w-5" />
              </div>
              <p className="text-lg text-ogclan-muted max-w-2xl mx-auto animate-fade-in animation-delay-300">
                Meet the ten elite specialists who power OG Clan Cameroon. Each operator brings a unique combat role and signature loadout—together they form the backbone of our CODM domination.
              </p>
            </div>
          </div>
        </div>
        
        {/* Soldiers Grid Section */}
        <section className="section-container py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none"></div>
          
          {/* Add subtle camo pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5 pointer-events-none"></div>
          
          <div className="relative z-10">
            <SoldiersGrid soldiers={soldiers} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soldiers;
