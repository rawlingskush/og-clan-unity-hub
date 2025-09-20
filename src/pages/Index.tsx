
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/modern/EnhancedHeroSection';
import ClanLegacyHub from '@/components/modern/ClanLegacyHub';
import BattleCommandCenter from '@/components/modern/BattleCommandCenter';
import EnhancedTierShowcase from '@/components/modern/EnhancedTierShowcase';
import CallOfDutyArena from '@/components/modern/CallOfDutyArena';
import CommunityNewsHub from '@/components/modern/CommunityNewsHub';
import EnhancedRecruitmentPortal from '@/components/modern/EnhancedRecruitmentPortal';
import PartnersSection from '@/components/PartnersSection';
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
          <EnhancedHeroSection />
        </div>
        <ClanLegacyHub />
        <BattleCommandCenter />
        <EnhancedTierShowcase />
        <CallOfDutyArena />
        <CommunityNewsHub />
        <EnhancedRecruitmentPortal />
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
