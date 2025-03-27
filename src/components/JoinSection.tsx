
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Check } from 'lucide-react';

const JoinSection = () => {
  const benefits = [
    'Be part of a supportive gaming family',
    'Join exclusive tournaments and events',
    'Opportunity to grow as a competitive player',
    'Connect with passionate gamers in Cameroon',
    'Help build the future of gaming in Africa'
  ];

  return (
    <section id="join" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-ogclan-muted rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-ogclan-light rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedContent animation="slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to level up with us?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Join OG Clan and become part of something bigger. We're not just gamers—we're a movement creating opportunities through passion.
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <AnimatedContent 
                      key={index} 
                      animation="slide-in-left"
                      delay={300 + index * 150}
                    >
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ogclan/10 flex items-center justify-center mr-3">
                          <Check className="w-4 h-4 text-ogclan" />
                        </span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    </AnimatedContent>
                  ))}
                </ul>
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
                </form>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
