
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers/index';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import AnimatedContent from '@/components/AnimatedContent';
import SoldiersHero from '@/components/soldiers/SoldiersHero';
import ParticleCanvas from '@/components/soldiers/ParticleCanvas';
import CommandUnitSection from '@/components/soldiers/CommandUnitSection';
import RecruitmentNote from '@/components/soldiers/RecruitmentNote';

const Soldiers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  console.log('Soldiers page render:', { soldiers: soldiers.length });
  
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

  // Error boundary
  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl text-ogclan mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-ogclan text-black px-6 py-2 rounded-lg hover:bg-ogclan-light transition-colors"
            >
              Reload Page
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
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
    </div>
  );
};

export default Soldiers;
