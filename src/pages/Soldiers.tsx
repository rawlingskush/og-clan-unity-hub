
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

const Soldiers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isScrolled = scrollPosition > 100;
  
  // Initialize loading state with faster timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Optimized scroll handling with throttling
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
    
    // Smooth scroll to soldier card if URL has a fragment identifier
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
      }, 800);
      
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
              className="bg-ogclan text-black px-6 py-2 rounded-lg hover:bg-ogclan-light transition-colors mobile-tap-target"
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
        {/* Hero Section with enhanced animations */}
        <ParticleCanvas />
        <SoldiersHero scrollPosition={scrollPosition} />
        
        {/* Optimized loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-ogclan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-ogclan text-lg animate-pulse">Loading Elite Squad...</p>
            </div>
          </div>
        )}
        
        {/* Soldiers Grid Section with enhanced animations */}
        <section className="section-container py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none"></div>
          
          {/* Enhanced animated scanner lines */}
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
