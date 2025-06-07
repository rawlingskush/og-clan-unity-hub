
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import EnhancedSoldiersGrid from '@/components/soldiers/EnhancedSoldiersGrid';
import AnimatedContent from '@/components/AnimatedContent';
import SoldiersHero from '@/components/soldiers/SoldiersHero';
import ParticleCanvas from '@/components/soldiers/ParticleCanvas';
import CommandUnitSection from '@/components/soldiers/CommandUnitSection';
import RecruitmentNote from '@/components/soldiers/RecruitmentNote';

const Soldiers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  console.log('Enhanced Soldiers page render:', { soldiers: soldiers.length });
  
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
    
    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle URL fragments with improved timing
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
      }, 1200); // Increased delay for better UX
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced error boundary
  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="text-heading-2 text-red-400 mb-4">System Error</h1>
            <p className="text-body text-gray-400 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Mission
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
        {/* Enhanced Hero Section */}
        <ParticleCanvas />
        <SoldiersHero scrollPosition={scrollPosition} />
        
        {/* Enhanced Soldiers Grid Section */}
        <section className="section-container py-16 md:py-24 relative">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/98 to-black pointer-events-none"></div>
          
          {/* Multi-layer scanner effects */}
          <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
            <div className="absolute top-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/80 to-transparent w-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
            <div className="absolute top-1 h-[1px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent w-1/3 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
            <div className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent via-ogclan/80 to-transparent w-1/3 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
            <div className="absolute bottom-1 h-[1px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent w-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
          </div>
          
          {/* Tactical corner elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border border-ogclan/30 opacity-20">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ogclan"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ogclan"></div>
          </div>
          <div className="absolute top-8 right-8 w-16 h-16 border border-ogclan/30 opacity-20">
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ogclan"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ogclan"></div>
          </div>
          
          <AnimatedContent animation="fade-in" className="relative z-10">
            <EnhancedSoldiersGrid soldiers={soldiers} />
          </AnimatedContent>
        </section>
        
        {/* Enhanced Recruitment Note Section */}
        <AnimatedContent animation="fade-in">
          <RecruitmentNote />
        </AnimatedContent>
        
        {/* Enhanced Command Unit Section */}
        <AnimatedContent animation="fade-in">
          <CommandUnitSection />
        </AnimatedContent>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soldiers;
