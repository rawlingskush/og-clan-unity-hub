
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Check, Users, Award, Gamepad2 } from 'lucide-react';
import { Button } from './ui/button';

const JoinSection = () => {
  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Be part of a supportive gaming family'
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: 'Join exclusive tournaments and events'
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      text: 'Opportunity to grow as a competitive player'
    },
    {
      icon: <Check className="w-5 h-5" />,
      text: 'Connect with passionate gamers in Cameroon'
    },
    {
      icon: <Check className="w-5 h-5" />,
      text: 'Help build the future of gaming in Africa'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-ogclan-muted rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-ogclan-light rounded-full blur-3xl opacity-20"></div>

      <div className="glass-card rounded-3xl p-8 md:p-12 border-t border-ogclan/20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedContent animation="slide-in-left">
              <h3 className="text-3xl font-bold text-gradient-gold mb-6">
                Become an OG Today
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Join OG Clan and become part of something bigger. We're not just gamers—we're a movement creating opportunities through passion.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <AnimatedContent 
                    key={index} 
                    animation="slide-in-left"
                    delay={300 + index * 150}
                  >
                    <li className="flex items-center gap-3 bg-ogclan/5 p-3 rounded-lg">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ogclan/10 flex items-center justify-center">
                        {benefit.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{benefit.text}</span>
                    </li>
                  </AnimatedContent>
                ))}
              </ul>
              
              <div className="hidden md:block">
                <p className="text-gray-500 italic mb-4">
                  "Gaming is better together. Join the OG family and level up with us!"
                </p>
                <Button variant="outline" className="border-ogclan text-ogclan hover:bg-ogclan/10">
                  Learn More About Us
                </Button>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent animation="scale-in" delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Join the OG Clan Family
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="gamerTag" className="block text-sm font-medium text-gray-700 mb-1">
                    Gamer Tag
                  </label>
                  <input
                    type="text"
                    id="gamerTag"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
                    placeholder="Your gamer tag"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to join?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ogclan focus:border-transparent outline-none transition-all"
                    placeholder="Tell us a bit about yourself..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-4"
                >
                  Sign Up Now
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By signing up, you agree to join our community and receive updates about events
                </p>
              </form>
            </div>
            
            <div className="md:hidden mt-8">
              <p className="text-gray-500 italic mb-4 text-center">
                "Gaming is better together. Join the OG family and level up with us!"
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="border-ogclan text-ogclan hover:bg-ogclan/10">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
