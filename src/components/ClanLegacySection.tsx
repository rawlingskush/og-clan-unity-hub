import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Button } from './ui/button';
import { Crown, Trophy, Users, Globe, Star, Shield, Target, Heart } from 'lucide-react';
import ogEsportsLogo from '@/assets/og-clan-esports-logo.jpg';
import cameroonFlag from '@/assets/cameroon-flag.png';

const ClanLegacySection = () => {
  return (
    <section id="clan-legacy" className="py-20 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-red-900/10"></div>
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-600"></div>
      <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-ogclan/5 rounded-full blur-3xl animate-pulse-slow animation-delay-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/10 to-red-500/10 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 text-sm font-bold tracking-wider uppercase mb-4 border border-blue-500/20">
              Our Legacy
            </span>
            
            {/* Cameroon Flag and Title */}
            <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
              <img 
                src={cameroonFlag} 
                alt="Flag of Cameroon" 
                className="w-16 h-12 md:w-20 md:h-15 object-cover rounded shadow-lg hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
              />
              <h2 className="text-4xl md:text-6xl font-bold text-center">
                <span className="text-gradient-gold">PROUD TO REPRESENT</span>{' '}
                <span className="text-white">CAMEROON</span>
              </h2>
              <img 
                src={cameroonFlag} 
                alt="Flag of Cameroon" 
                className="w-16 h-12 md:w-20 md:h-15 object-cover rounded shadow-lg hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
              />
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-ogclan to-red-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Since our foundation, <span className="font-bold text-ogclan">OG Clan has been honored to contribute</span> to the growth of Battle Royale gaming in Cameroon, 
              working alongside the community to elevate the scene together.
            </p>
          </AnimatedContent>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedContent animation="slide-in-left" delay={200}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full animate-pulse animation-delay-300"></div>
              
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5"></div>
                
                <img 
                  src={ogEsportsLogo} 
                  alt="OG Clan E-Sports Logo" 
                  className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gradient-gold mb-4">
                    OG CLAN E-SPORTS
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The shield that changed everything. From Cameroon to the world stage, 
                    we've built more than a clan - we've built a <span className="text-ogclan font-semibold">movement</span>.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent animation="slide-in-right" delay={400}>
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Crown className="h-8 w-8 text-ogclan" />
                  <h3 className="text-2xl font-bold text-white">Battle Royale Excellence</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We're passionate about Battle Royale gaming - <span className="font-bold text-blue-400">constantly improving and learning</span>. 
                  Our dedication to tactical gameplay in Alcatraz, Isolated, and Blackout has helped us earn respect 
                  within the Cameroonian gaming community.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="h-8 w-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Community Building</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-red-400">We believe in collaborative growth.</span> By working together with the gaming community, 
                  we've been fortunate to inspire fellow gamers and help foster a positive environment 
                  where everyone can pursue their esports dreams.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">Supporting Growth</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-emerald-400">We lift others as we rise.</span> By supporting smaller clans 
                  throughout Cameroon, we're building an ecosystem where everyone grows together, 
                  strengthening our entire gaming community.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Call to Action */}
        <AnimatedContent animation="fade-in-up" delay={1200}>
          <div className="text-center bg-gradient-to-r from-blue-600/10 via-black/50 to-red-600/10 rounded-2xl p-8 border border-ogclan/20">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-6">
              Join Our Growing Legacy
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              As we enter the world stage of esports, we continue building the strongest gaming community in Africa. 
              <span className="font-bold text-ogclan"> Your story starts here.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold group"
                onClick={() => window.open('/soldiers', '_self')}
              >
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Meet Our Champions
              </Button>
              
              <Button 
                variant="outline"
                className="border-ogclan/50 text-ogclan hover:bg-ogclan/10 hover:border-ogclan px-8 py-4 text-lg font-semibold group"
                onClick={() => window.open('/player-tracker', '_self')}
              >
                <Target className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Player Tracker
              </Button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ClanLegacySection;