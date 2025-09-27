
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WarriorsSpotlight from '@/components/WarriorsSpotlight';
import ClanLegacySection from '@/components/ClanLegacySection';
import BattleNightSection from '@/components/BattleNightSection';
import MPBattleNightSection from '@/components/MPBattleNightSection';
import BattlefieldDominance from '@/components/BattlefieldDominance';
import BattleFootageSection from '@/components/BattleFootageSection';
import TournamentResults from '@/components/results/TournamentResults';
import AboutSection from '@/components/AboutSection';
import JoinUsSection from '@/components/JoinUsSection';
import PartnersSection from '@/components/PartnersSection';
import CoDPointsSection from '@/components/CoDPointsSection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  usePerformanceOptimization();
  
  useEffect(() => {
    // Enhanced welcome toast with mobile optimization
    setTimeout(() => {
      toast({
        title: "Welcome to OG Clan",
        description: "Explore our site and discover what makes us unique.",
        duration: isMobile ? 3000 : 5000, // Shorter duration on mobile
        className: "bg-black/85 backdrop-blur-md border-ogclan/40 shadow-2xl shadow-ogclan/25 text-ogclan-light animate-in slide-in-from-top-4 duration-700 rounded-lg",
      });
    }, 1500);
  }, [toast, isMobile]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <WarriorsSpotlight />
        <ClanLegacySection />
        <BattleNightSection />
        <MPBattleNightSection />
        <BattlefieldDominance />
        <BattleFootageSection />
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
