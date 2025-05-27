import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import AnimatedContent from '@/components/AnimatedContent';
import SoldiersHero from '@/components/soldiers/SoldiersHero';
import ParticleCanvas from '@/components/soldiers/ParticleCanvas';
import CommandUnitSection from '@/components/soldiers/CommandUnitSection';
import RecruitmentNote from '@/components/soldiers/RecruitmentNote';

const Soldiers = React.memo(() => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  // Optimized scroll handling with throttling
  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const throttledScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = 0;
      });
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
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
        window.removeEventListener('scroll', throttledScroll);
        clearTimeout(timer);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

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
          {/* Simplified background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none" />
          
          {/* Optimized scanner lines */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div className="h-px bg-ogclan/20 w-full" />
            <div className="absolute top-0 h-px bg-gradient-to-r from-transparent via-ogclan/80 to-transparent w-1/4 animate-scanner-line" />
          </div>
          
          <AnimatedContent animation="fade-in" className="relative z-10">
            <SoldiersGrid soldiers={soldiers} />
          </AnimatedContent>
        </section>
        
        {/* Other sections */}
        <RecruitmentNote />
        <CommandUnitSection />
      </main>
      
      <Footer />
    </div>
  );
});

Soldiers.displayName = 'Soldiers';

export default Soldiers;
