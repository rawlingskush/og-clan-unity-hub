
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { soldiers } from '@/data/soldiers';
import SoldiersGrid from '@/components/soldiers/SoldiersGrid';
import { Separator } from '@/components/ui/separator';
import { Shield, Users, Star, Award } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const Soldiers = () => {
  const particlesRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Add scroll reveal animation effect
  useEffect(() => {
    // Smooth scroll to soldier card if URL has a fragment identifier
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 1000); // Delay to ensure elements are rendered
    }
    
    // Parallax effect on scroll
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(0.2, 1 - scrollPosition * 0.003);
        const scale = Math.max(0.8, 1 - scrollPosition * 0.0005);
        const translateY = scrollPosition * 0.3;
        
        headerRef.current.style.opacity = opacity.toString();
        headerRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animate particles
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Particles configuration
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];
    
    const colors = [
      'rgba(212, 175, 55, 0.4)',  // Gold
      'rgba(212, 175, 55, 0.2)',  // Lighter gold
      'rgba(255, 255, 255, 0.2)', // White
      'rgba(30, 30, 30, 0.3)'     // Dark
    ];
    
    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: -(Math.random() * 0.5 + 0.2),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      });
    }
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Reset if out of bounds
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(0, 0, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with enhanced animations */}
        <div className="relative bg-black/80 py-16 overflow-hidden border-b border-ogclan/20">
          {/* Particle Canvas */}
          <canvas 
            ref={particlesRef} 
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: 'none' }}
          ></canvas>
          
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/lovable-uploads/825f03cc-b2e3-4636-a959-2291c478da69.png')] bg-cover bg-center bg-no-repeat blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={headerRef}>
            <div className="text-center">
              <AnimatedContent animation="fade-in" delay={200}>
                <h1 className="text-4xl font-bold text-gradient-gold mb-2 relative inline-block">
                  {/* Letter-by-letter animation */}
                  {"Our Soldiers".split("").map((letter, index) => (
                    <span 
                      key={index} 
                      className="inline-block"
                      style={{
                        animation: `fade-in 0.5s ease-out forwards`,
                        animationDelay: `${index * 0.08}s`,
                        opacity: 0,
                        transform: 'translateY(10px)'
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </h1>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in" delay={400}>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <div className="relative w-12 h-0.5">
                    <div className="absolute inset-0 bg-ogclan/40"></div>
                    <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite]"></div>
                  </div>
                  <Award className="text-ogclan h-5 w-5 animate-pulse-slow" />
                  <div className="relative w-12 h-0.5">
                    <div className="absolute inset-0 bg-ogclan/40"></div>
                    <div className="absolute top-0 left-0 h-full w-1/4 bg-ogclan/90 animate-[scanner-line_3s_linear_infinite_reverse]"></div>
                  </div>
                  <Shield className="text-ogclan h-5 w-5 animate-pulse-slow" />
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in" delay={600} className="text-balance max-w-2xl mx-auto">
                <p className="text-lg text-ogclan-muted relative">
                  <span className="block transform transition-all duration-800"
                    style={{
                      animation: 'fade-in 0.8s ease-out forwards, scale-in 0.8s ease-out forwards',
                    }}
                  >
                    Meet the elite specialists who form the backbone of OG Clan Cameroon. From breach masters to precision scouts, each operator's unique loadout and combat prowess drive our CODM domination.
                  </span>
                </p>
              </AnimatedContent>
            </div>
          </div>
          
          {/* Add animated scanner lines */}
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
