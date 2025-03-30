import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import SponsorSection from '@/components/SponsorSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import AnimatedContent from '@/components/AnimatedContent';
import { useToast } from '@/components/ui/use-toast';
import { Flame, ArrowRight } from 'lucide-react';
const Index = () => {
  const {
    toast
  } = useToast();
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
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="about" className="py-20 bg-gradient-to-b from-black to-black/95 md:py-[15px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedContent animation="fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                  OUR VISION
                </h2>
                <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
                  Building the future of gaming in Cameroon and beyond
                </p>
              </AnimatedContent>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedContent animation="slide-in-left">
                <div className="glass-card p-8 rounded-2xl border-l-4 border-ogclan shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <h3 className="text-2xl font-bold text-ogclan mb-6">
                    A Movement, Not Just a Clan
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    OG Clan is more than just a gaming collective—we're a movement dedicated to uniting passionate gamers in Cameroon and across Africa. Our mission is to create opportunities through gaming, foster talent, and build a supportive community.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founded on principles of loyalty, excellence, and unity, we strive to elevate gaming culture while nurturing the next generation of gaming talents. Together, we're building something extraordinary.
                  </p>
                  <div className="mt-8">
                    <a href="#join" className="inline-flex items-center group">
                      <span className="text-ogclan group-hover:text-ogclan-light transition-colors">Join our movement</span>
                      <ArrowRight className="ml-2 h-4 w-4 text-ogclan group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="slide-in-right" delay={300}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-ogclan/20 rounded-xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ogclan/20 rounded-xl animate-pulse-slow animation-delay-600"></div>
                  <div className="glass-card rounded-2xl overflow-hidden relative z-10 shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]">
                    <img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="African gamers on mobile" className="w-full h-full object-cover aspect-video" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-ogclan font-bold text-xl mb-2">Our Commitment</p>
                        <p className="text-white/90">Empowering mobile gamers across Cameroon to reach their full potential</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>
        
        <section id="og-battle-night" className="py-20 md:py-28 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedContent animation="fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                  OG BATTLE NIGHT
                </h2>
                <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
                  Join our flagship gaming event - where legends are born
                </p>
              </AnimatedContent>
            </div>
            
            <HighlightsSection />
          </div>
        </section>
        
        <section id="join" className="py-20 md:py-28 bg-gradient-to-b from-black to-black/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedContent animation="fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                  JOIN YOUR SQUAD
                </h2>
                <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
                  Become part of something bigger than just gaming
                </p>
              </AnimatedContent>
            </div>
            
            <JoinSection />
          </div>
        </section>

        <section id="partners" className="py-20 md:py-28 bg-gradient-to-b from-black/95 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <AnimatedContent animation="fade-in-up">
                <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
                  OUR PARTNERS
                </h2>
                <div className="w-20 h-1 bg-ogclan mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
                  The brands that support our vision and growth
                </p>
              </AnimatedContent>
            </div>
            
            <SponsorSection />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Index;