
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Button } from './ui/button';
import { ArrowRight, Users, Trophy, Target, Globe, Calendar, Star, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-black to-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-ogclan/10 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-20 w-72 h-72 bg-ogclan/5 rounded-full blur-3xl" />
        
        <div className="text-center mb-12 relative">
          <AnimatedContent animation="fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-ogclan/10 rounded-full text-ogclan-light text-sm font-medium tracking-wider uppercase mb-3">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              OUR VISION
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-ogclan-light max-w-2xl mx-auto">
              Building the future of gaming in Cameroon and beyond
            </p>
          </AnimatedContent>
        </div>
        
        {/* Vision cards - 3 column layout with icons and improved visuals */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <AnimatedContent animation="fade-in-up" delay={150}>
            <div className="vision-card group">
              <div className="icon-container">
                <Users className="vision-icon" />
              </div>
              <h3 className="text-xl font-bold text-ogclan mt-5 mb-3 group-hover:text-ogclan-light transition-colors">
                Build Community
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Uniting passionate gamers across Cameroon to create a supportive family that celebrates both victories and growth experiences.
              </p>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={300}>
            <div className="vision-card group">
              <div className="icon-container">
                <Trophy className="vision-icon" />
              </div>
              <h3 className="text-xl font-bold text-ogclan mt-5 mb-3 group-hover:text-ogclan-light transition-colors">
                Foster Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Developing local talent through training, competition, and mentorship to elevate Cameroon's presence on the global gaming stage.
              </p>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={450}>
            <div className="vision-card group">
              <div className="icon-container">
                <Target className="vision-icon" />
              </div>
              <h3 className="text-xl font-bold text-ogclan mt-5 mb-3 group-hover:text-ogclan-light transition-colors">
                Create Opportunities
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Transforming gaming passion into real-world opportunities through sponsorships, competitions, and professional development.
              </p>
            </div>
          </AnimatedContent>
        </div>
        
        {/* Improved Global Impact section with the new OG Clan logo */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <AnimatedContent animation="slide-in-right" delay={300} className="order-2 md:order-1">
            <div className="glass-card p-6 md:p-8 rounded-2xl overflow-hidden relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_1px_rgba(212,175,55,0.3)]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20 flex items-center justify-center">
                    <Shield className="text-ogclan-light h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient-gold">OG Legacy Since 2020</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col items-center bg-black/50 rounded-xl p-3 border border-ogclan/10 hover:border-ogclan/30 transition-all duration-300">
                    <Calendar className="h-6 w-6 text-blue-400 mb-2" />
                    <span className="text-xl font-bold text-white">2020</span>
                    <span className="text-xs text-gray-400">Established</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-black/50 rounded-xl p-3 border border-ogclan/10 hover:border-ogclan/30 transition-all duration-300">
                    <Star className="h-6 w-6 text-red-400 mb-2" />
                    <span className="text-xl font-bold text-white">250+</span>
                    <span className="text-xs text-gray-400">Active Members</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                    <p className="text-gray-300">First gaming clan in Cameroon with international recognition</p>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></div>
                    <p className="text-gray-300">Building a bridge between African gamers and global opportunities</p>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-ogclan mr-2"></div>
                    <p className="text-gray-300">Creating new career paths through gaming and esports in Africa</p>
                  </li>
                </ul>
                
                <Button variant="outline" className="mt-auto text-ogclan hover:text-ogclan-light border-ogclan/50 hover:border-ogclan hover:bg-ogclan/10 transition-all group self-start">
                  Join our legacy
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-left" delay={300} className="order-1 md:order-2">
            <div className="relative group">
              {/* Animated elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-red-500/20 rounded-full animate-pulse-slow animation-delay-600"></div>
              <div className="absolute -bottom-8 left-1/2 w-16 h-16 bg-ogclan/20 rounded-full animate-pulse-slow animation-delay-900"></div>
              
              <div className="glass-card p-4 md:p-6 rounded-2xl relative overflow-hidden hover-border-glow transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-red-500/10"></div>
                
                <img 
                  src="/lovable-uploads/e5378274-2a94-43fe-b1fd-30596884f957.png" 
                  alt="OG Clan Cameroon" 
                  className="w-full h-auto drop-shadow-lg animate-float"
                />
                
                <div className="mt-4 p-3 bg-black/80 backdrop-blur-sm rounded-xl border border-white/5">
                  <p className="text-ogclan text-lg font-bold mb-1">OG CLAN CAMEROON</p>
                  <p className="text-gray-400 text-xs">Pioneering esports excellence across Africa since 2020</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
