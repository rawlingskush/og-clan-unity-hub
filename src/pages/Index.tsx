
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import SponsorSection from '@/components/SponsorSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import AnimatedContent from '@/components/AnimatedContent';
import { useToast } from '@/components/ui/use-toast';
import { Flame, ArrowRight, Users, Trophy, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast();
  
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
        
        <section id="about" className="py-24 bg-gradient-to-b from-black to-black/95 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute -top-40 right-0 w-96 h-96 bg-ogclan/10 rounded-full blur-3xl" />
            <div className="absolute top-60 -left-20 w-72 h-72 bg-ogclan/5 rounded-full blur-3xl" />
            
            <div className="text-center mb-16 relative">
              <AnimatedContent animation="fade-in-up">
                <span className="inline-block px-4 py-1.5 bg-ogclan/10 rounded-full text-ogclan-light text-sm font-medium tracking-wider uppercase mb-4">
                  Our Purpose
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
                  OUR VISION
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light mx-auto rounded-full mb-8"></div>
                <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
                  Building the future of gaming in Cameroon and beyond
                </p>
              </AnimatedContent>
            </div>
            
            {/* Vision cards - 3 column layout with icons and improved visuals */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedContent animation="fade-in-up" delay={150}>
                <div className="vision-card group">
                  <div className="icon-container">
                    <Users className="vision-icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-ogclan mt-6 mb-4 group-hover:text-ogclan-light transition-colors">
                    Build Community
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Uniting passionate gamers across Cameroon to create a supportive family that celebrates both victories and growth experiences.
                  </p>
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in-up" delay={300}>
                <div className="vision-card group">
                  <div className="icon-container">
                    <Trophy className="vision-icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-ogclan mt-6 mb-4 group-hover:text-ogclan-light transition-colors">
                    Foster Excellence
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Developing local talent through training, competition, and mentorship to elevate Cameroon's presence on the global gaming stage.
                  </p>
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="fade-in-up" delay={450}>
                <div className="vision-card group">
                  <div className="icon-container">
                    <Target className="vision-icon" />
                  </div>
                  <h3 className="text-2xl font-bold text-ogclan mt-6 mb-4 group-hover:text-ogclan-light transition-colors">
                    Create Opportunities
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transforming gaming passion into real-world opportunities through sponsorships, competitions, and professional development.
                  </p>
                </div>
              </AnimatedContent>
            </div>
            
            {/* Feature highlight with image */}
            <div className="grid md:grid-cols-5 gap-12 items-center mt-20">
              <AnimatedContent animation="slide-in-left" className="md:col-span-2">
                <div className="glass-card p-8 rounded-2xl border-l-4 border-ogclan shadow-[0_0_25px_rgba(212,175,55,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ogclan/5 rounded-bl-full"></div>
                  
                  <h3 className="text-3xl font-bold text-ogclan mb-6">
                    A Movement, Not Just a Clan
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ogclan/20 flex items-center justify-center mt-1">
                        <ArrowRight className="h-3.5 w-3.5 text-ogclan" />
                      </div>
                      <p className="ml-3 text-gray-300">
                        <span className="text-ogclan-light font-medium">Loyalty</span> - Building a foundation of trust and support within our gaming family
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ogclan/20 flex items-center justify-center mt-1">
                        <ArrowRight className="h-3.5 w-3.5 text-ogclan" />
                      </div>
                      <p className="ml-3 text-gray-300">
                        <span className="text-ogclan-light font-medium">Opportunity</span> - Creating pathways for members to grow and succeed
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ogclan/20 flex items-center justify-center mt-1">
                        <ArrowRight className="h-3.5 w-3.5 text-ogclan" />
                      </div>
                      <p className="ml-3 text-gray-300">
                        <span className="text-ogclan-light font-medium">Growth</span> - Constantly evolving to meet the needs of our community
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="text-ogclan hover:text-ogclan-light border-ogclan/50 hover:border-ogclan hover:bg-ogclan/10 transition-all group">
                    Learn our story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </AnimatedContent>
              
              <AnimatedContent animation="slide-in-right" delay={300} className="md:col-span-3">
                <div className="relative group">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-ogclan/10 rounded-xl animate-pulse-slow"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ogclan/10 rounded-xl animate-pulse-slow animation-delay-600"></div>
                  
                  <div className="glass-card rounded-2xl overflow-hidden relative z-10 shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_15px_40px_-12px_rgba(212,175,55,0.4)] transition-all duration-500">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="African gamers on mobile" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end">
                        <div className="p-8">
                          <div className="flex items-center mb-4">
                            <Globe className="text-ogclan h-5 w-5 mr-2" />
                            <p className="text-ogclan font-bold text-lg">Our Global Impact</p>
                          </div>
                          <p className="text-white/90 text-lg max-w-xl">
                            From local tournaments to international recognition, OG Clan is putting Cameroon on the global gaming map and creating new opportunities for African gamers.
                          </p>
                        </div>
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
