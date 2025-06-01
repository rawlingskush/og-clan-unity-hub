
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
import PageWrapper from '@/components/layout/PageWrapper';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to OG Clan",
        description: "Explore our site and discover what makes us unique.",
        duration: 5000
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [toast]);
  
  return (
    <PageWrapper 
      title="OG Clan - Elite Call of Duty Mobile Gaming Community"
      description="Join OG Clan, Cameroon's premier Call of Duty Mobile gaming community. Compete in tournaments, master Battle Royale, and dominate multiplayer battles."
    >
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
    </PageWrapper>
  );
};

export default Index;
