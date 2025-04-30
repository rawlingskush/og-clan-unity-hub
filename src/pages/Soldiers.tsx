
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
                Meet the elite members of OG Clan who dominate the battlefield with unmatched skill and precision.
              </p>
            </div>
          </div>
        </div>
        
        {/* Soldiers Grid Section */}
        <section className="section-container py-16">
          <SoldiersGrid soldiers={soldiers} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soldiers;
