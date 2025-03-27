
import React from 'react';
import { ArrowRight, TrendingUp, Users, Medal, Award } from 'lucide-react';
import AnimatedContent from './AnimatedContent';
import { Button } from './ui/button';

const SponsorSection = () => {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-ogclan/5 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-ogclan/5 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3 text-center">
            Fuel the Future of Cameroonian Gaming
          </h2>
          <div className="w-24 h-1 bg-ogclan mx-auto mb-8"></div>
        </AnimatedContent>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedContent animation="slide-in-left" delay={200}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                OG Clan is Cameroon's fastest-growing gaming community, driven by loyalty, passion, and a vision to unite gamers across the country.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Growing Community</h3>
                    <p className="text-gray-400">With 500+ active members, 10K+ TikTok followers, and regular events like OG Battle Night pulling in 200+ participants, we're building a movement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Partner Benefits</h3>
                    <p className="text-gray-400">Sponsors get shoutouts on our socials, logo placements at events, and a chance to connect with Cameroon's most dedicated gamers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Proven Track Record</h3>
                    <p className="text-gray-400">We've hosted many successful tournaments, grown our clan by 100% in the last year, and are gearing up for even bigger things.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Medal className="w-6 h-6 text-ogclan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ogclan-light">Future Vision</h3>
                    <p className="text-gray-400">Join us in creating a thriving ecosystem for Cameroonian gamers and be at the forefront of a growing industry in Africa.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-right" delay={400}>
            <div className="glass-card rounded-2xl p-8 border border-ogclan/30">
              <h3 className="text-2xl font-bold text-ogclan mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6">
                Want to back the next big thing in Cameroonian gaming? Hit us up and let's create something amazing together.
              </p>
              
              <form className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company/Organization" 
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your interest in sponsoring OG Clan" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/80 border border-ogclan/30 text-white focus:border-ogclan focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button 
                  className="w-full bg-ogclan hover:bg-ogclan-dark text-black font-medium py-3 transition-all duration-300"
                >
                  Send Request <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
