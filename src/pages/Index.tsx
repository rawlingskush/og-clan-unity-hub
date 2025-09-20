
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BattleNightSection from '@/components/BattleNightSection';
import ClanStatsSection from '@/components/ClanStatsSection';
import TournamentResults from '@/components/results/TournamentResults';
import AboutSection from '@/components/AboutSection';
import JoinUsSection from '@/components/JoinUsSection';
import PartnersSection from '@/components/PartnersSection';
import CoDPointsSection from '@/components/CoDPointsSection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const Index = () => {
  const { toast } = useToast();
  
  usePerformanceOptimization();
  
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
        <div id="home">
          <HeroSection />
        </div>
        <BattleNightSection />
        <ClanStatsSection />
        <TournamentResults />
        <AboutSection />
        <CoDPointsSection />
        <JoinUsSection />
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
