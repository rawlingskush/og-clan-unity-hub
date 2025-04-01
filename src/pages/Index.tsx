
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BattleNightSection from '@/components/BattleNightSection';
import ClanStatsSection from '@/components/ClanStatsSection';
import AboutSection from '@/components/AboutSection';
import JoinUsSection from '@/components/JoinUsSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import SupabaseConnectionTest from '@/components/SupabaseConnectionTest';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to OG Clan",
        description: "Explore our site and discover what makes us unique.",
        duration: 5000
      });
    }, 1500);
  }, [toast]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        <div className="container mx-auto my-8">
          <SupabaseConnectionTest />
        </div>
        <BattleNightSection />
        <ClanStatsSection />
        <AboutSection />
        <JoinUsSection />
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
