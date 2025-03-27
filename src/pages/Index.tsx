
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import AnimatedContent from '@/components/AnimatedContent';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to OG Clan",
        description: "Explore our site and discover what makes us unique.",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="about" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedContent animation="slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  OG Clan is more than just a gaming collective—we're a movement dedicated to uniting passionate gamers in Cameroon and across Africa. Our mission is to create opportunities through gaming, foster talent, and build a supportive community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded on principles of loyalty, excellence, and unity, we strive to elevate gaming culture while nurturing the next generation of gaming talents. Together, we're building something extraordinary.
                </p>
              </AnimatedContent>
              
              <AnimatedContent animation="slide-in-right" delay={300}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-ogclan/10 rounded-xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ogclan/10 rounded-xl animate-pulse-slow animation-delay-600"></div>
                  <div className="glass-card rounded-2xl overflow-hidden relative z-10">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="OG Clan Gaming"
                      className="w-full h-full object-cover aspect-video"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>
        
        <HighlightsSection />
        <JoinSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
