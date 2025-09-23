import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Button } from './ui/button';
import { ArrowRight, Users, Trophy, Target, Globe, Calendar, Star, Shield } from 'lucide-react';
import codmBattleRoyaleEpic from '@/assets/codm-battle-royale-epic.png';
import { useAppNavigation } from '@/hooks/useAppNavigation';
const AboutSection = () => {
  const { navigateToPage } = useAppNavigation();
  return <section id="about" className="py-16 bg-gradient-to-b from-black/95 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-ogclan/10 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-20 w-72 h-72 bg-ogclan/5 rounded-full blur-3xl" />
        
        <div className="text-center mb-12 relative">
          <AnimatedContent animation="fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-ogclan/10 rounded-full text-ogclan-light text-sm font-medium tracking-wider uppercase mb-4">
              Our Purpose
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
              OUR VISION
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-ogclan-light max-w-3xl mx-auto">
              Building the future of gaming in Cameroon and beyond
            </p>
            <p className="text-lg text-ogclan-light max-w-3xl mx-auto mt-4">
              We're a crew that thrives in multiplayer showdowns and Battle Royale wars, mastering maps like <span className="font-semibold">Alcatraz</span>, <span className="font-semibold">Isolated</span>, <span className="font-semibold">Blackout</span>, and <span className="font-semibold">Krai</span>.
            </p>
            <p className="text-lg text-ogclan-light max-w-3xl mx-auto mt-4">
              <span className="font-semibold">OG Clan leads Call of Duty multiplayer in Cameroon</span>, excelling in <span className="font-semibold">Battle Royale on Alcatraz</span> with exclusive <span className="font-semibold">Black Market hot drop tips</span>.
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
        
        {/* Improved Global Impact section with the new OG Clan logo */}
        <div className="grid md:grid-cols-5 gap-8 items-center mt-14">
          <AnimatedContent animation="slide-in-right" delay={300} className="md:col-span-3 order-2 md:order-1">
            <div className="glass-card p-6 rounded-2xl overflow-hidden relative z-10 shadow-[0_0_40px_rgba(0,130,255,0.15),0_0_20px_rgba(212,0,55,0.15)]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20 flex items-center justify-center">
                    <Shield className="text-ogclan-light h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gradient-gold">OG Legacy Since 2020</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-center bg-black/30 rounded-xl p-4 border border-ogclan/10 hover:border-ogclan/30 transition-all duration-300">
                    <Calendar className="h-8 w-8 text-blue-400 mb-2" />
                    <span className="text-2xl font-bold text-white">2020</span>
                    <span className="text-sm text-gray-400">Established</span>
                  </div>
                  
                  <div className="flex flex-col items-center bg-black/30 rounded-xl p-4 border border-ogclan/10 hover:border-ogclan/30 transition-all duration-300">
                    <Star className="h-8 w-8 text-red-400 mb-2" />
                    <span className="text-2xl font-bold text-white">50+</span>
                    <span className="text-sm text-gray-400">Active Members</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                    <p className="text-gray-300">First gaming clan in Cameroon with international recognition</p>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                    <p className="text-gray-300">Building a bridge between African gamers and global opportunities</p>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-ogclan mr-3"></div>
                    <p className="text-gray-300">Creating new career paths through gaming and esports in Africa</p>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    className="text-ogclan hover:text-ogclan-light border-ogclan/50 hover:border-ogclan hover:bg-ogclan/10 transition-all group"
                    onClick={() => navigateToPage('/soldiers')}
                  >
                    Meet Our Warriors
                    <Users className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="text-emerald-400 hover:text-emerald-300 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all group"
                    onClick={() => navigateToPage('/player-tracker')}
                  >
                    Player Tracker
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-left" delay={300} className="md:col-span-2 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-red-500/20 rounded-full opacity-60" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute -bottom-8 left-1/2 w-16 h-16 bg-ogclan/20 rounded-full opacity-60" style={{ animationDelay: '0.9s' }}></div>
              
              <div className="glass-card p-0 rounded-2xl relative overflow-hidden hover-border-glow transition-all duration-500 aspect-video">
                {/* Epic Battle Royale Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${codmBattleRoyaleEpic})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-ogclan/20 backdrop-blur-sm rounded-full text-ogclan text-sm font-bold mb-2">
                      ⚡ BATTLE READY
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-gradient-gold mb-2">
                      ELITE WARFARE
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Tactical dominance across Cameroon's most challenging battlefields
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                      <p className="text-ogclan text-lg font-bold">OG CLAN</p>
                      <p className="text-gray-300 text-xs">Battle Royale Champions</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-400 font-medium">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>;
};
export default AboutSection;
