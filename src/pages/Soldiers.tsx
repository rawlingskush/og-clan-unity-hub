
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import AnimatedContent from '@/components/AnimatedContent';
import SoldiersHero from '@/components/soldiers/SoldiersHero';
import ParticleCanvas from '@/components/soldiers/ParticleCanvas';
import CommandUnitSection from '@/components/soldiers/CommandUnitSection';
import RecruitmentNote from '@/components/soldiers/RecruitmentNote';
import PageWrapper from '@/components/layout/PageWrapper';
import { preloadImages } from '@/utils/performance';

const Soldiers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Preload critical images
  useEffect(() => {
    const criticalImages = soldiers
      .filter(soldier => soldier.spotlight || soldier.isPro)
      .map(soldier => soldier.imageUrl)
      .slice(0, 5); // Preload first 5 important soldiers
    
    preloadImages(criticalImages);
  }, []);
  
  // Optimized scroll handling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle URL fragments
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 1000);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageWrapper
      title="Our Elite Squad - OG Clan Soldiers"
      description="Meet the elite soldiers of OG Clan. Battle-tested warriors, legendary commanders, and rising stars ready to dominate any Call of Duty Mobile battlefield."
    >
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <ParticleCanvas />
        <SoldiersHero scrollPosition={scrollPosition} />
        
        {/* Soldiers Grid Section */}
        <section className="section-container py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none"></div>
          
          {/* Scanner lines */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/80 to-transparent w-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/80 to-transparent w-1/3 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
          </div>
          
          <AnimatedContent animation="fade-in" className="relative z-10">
            <SoldiersGrid soldiers={soldiers} />
          </AnimatedContent>
        </section>
        
        {/* Recruitment Note Section */}
        <RecruitmentNote />
        
        {/* Command Unit Section */}
        <CommandUnitSection />
      </main>
      
      <Footer />
    </PageWrapper>
  );
};

export default Soldiers;
