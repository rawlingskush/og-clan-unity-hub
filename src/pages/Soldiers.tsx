
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import { Separator } from '@/components/ui/separator';
import { Shield, Users } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import ParticleBackground from '@/components/effects/ParticleBackground';
import AnimatedText from '@/components/effects/AnimatedText';

const Soldiers = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0.2);
  
  // Add scroll reveal animation effect and shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Shrink header when scrolled past threshold
      if (scrollPosition > 150) {
        setShrinkHeader(true);
        setBgOpacity(Math.min(0.4, 0.2 + scrollPosition * 0.001)); // Gradually increase opacity
      } else {
        setShrinkHeader(false);
        setBgOpacity(0.2);
      }
      
      // Smooth scroll to soldier card if URL has a fragment identifier
      const hash = window.location.hash;
      if (hash && !scrolledToHash.current) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            scrolledToHash.current = true;
          }
        }, 1000); // Delay to ensure elements are rendered
      }
    };

    const scrolledToHash = { current: false };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with enhanced animations */}
        <div 
          className={`relative py-16 overflow-hidden border-b border-ogclan/20 transition-all duration-700 ease-in-out ${
            shrinkHeader ? 'py-10' : 'py-16'
          }`}
        >
          {/* Moving Gradient Background */}
          <div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black/90 to-[#0A3200] animate-gradient-slow"
            style={{ opacity: bgOpacity }}
          ></div>
          
          {/* Particle Effect */}
          <div className="absolute inset-0 z-0 opacity-20">
            <ParticleBackground />
          </div>
          
          {/* Background Image with Parallax Effect */}
          <div 
            className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/825f03cc-b2e3-4636-a959-2291c478da69.png')] bg-cover bg-center bg-no-repeat blur-md transform transition-transform duration-700 ease-out"
            style={{
              transform: shrinkHeader ? 'scale(1.05)' : 'scale(1)',
              opacity: shrinkHeader ? 0.15 : 0.2,
            }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              {/* Animated Title Text */}
              <AnimatedText 
                text="Our Soldiers" 
                className="text-4xl font-bold text-gradient-gold mb-2" 
                animation="letter-reveal" 
                delay={100}
              />
              
              <AnimatedContent animation="fade-in" delay={400}>
                <div className="flex items-center justify-center space-x-2 mb-4 relative">
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <div className="relative w-12">
                    <Separator className="w-12 bg-ogclan/40" />
                    {/* Pulsing light effect */}
                    <div className="absolute top-0 h-full">
                      <div className="w-3 h-[3px] bg-ogclan rounded-full animate-scanner-pulse-fast"></div>
                    </div>
                  </div>
                  <Users className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <div className="relative w-12">
                    <Separator className="w-12 bg-ogclan/40" />
                    {/* Pulsing light effect */}
                    <div className="absolute top-0 h-full">
                      <div className="w-3 h-[3px] bg-ogclan rounded-full animate-scanner-pulse-fast-reverse"></div>
                    </div>
                  </div>
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in" delay={600} className="transition-all duration-500">
                <p className="text-lg text-ogclan-muted max-w-2xl mx-auto animate-text-glow">
                  Meet the twelve elite specialists who form the backbone of OG Clan Cameroon. 
                  From breach masters to precision scouts, each operator's unique loadout and 
                  combat prowess drive our CODM domination.
                </p>
              </AnimatedContent>
            </div>
          </div>
          
          {/* Add animated scanner line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ogclan/30"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-ogclan animate-[scanner-line_3s_linear_infinite]"></div>
        </div>
        
        {/* Soldiers Grid Section with enhanced animations */}
        <section className="section-container py-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[rgba(0,20,0,0.9)] pointer-events-none"></div>
          
          {/* Add subtle camo pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5 pointer-events-none"></div>
          
          {/* Add animated scanner lines across the screen */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute top-0 h-[1px] bg-ogclan/60 w-1/4 animate-[scanner-line_6s_linear_infinite]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-[1px] bg-ogclan/20 w-full"></div>
            <div className="absolute bottom-0 h-[1px] bg-ogclan/60 w-1/3 animate-[scanner-line_8s_linear_infinite_reverse]"></div>
          </div>
          
          <AnimatedContent animation="fade-in" className="relative z-10">
            <SoldiersGrid soldiers={soldiers} />
          </AnimatedContent>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soldiers;
