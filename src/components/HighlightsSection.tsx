
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Calendar, Trophy, Users, Flame, Gamepad2 } from 'lucide-react';
import { Check } from 'lucide-react';

const HighlightsSection = () => {
  const teams = [
    {
      id: 1,
      title: "Fire Stars 🔥",
      description: "Blazing through the competition with unstoppable momentum and fierce tactics.",
      tagline: "1 pro ignites, 1 newbie flares up!",
      imageUrl: "/lovable-uploads/45ffa98e-e5e3-4e69-aa01-40bec47f9d28.png",
      icon: <Flame className="w-5 h-5 text-red-500" />,
      category: "Offensive"
    },
    {
      id: 2,
      title: "Ice Crew ❄️",
      description: "Freezing out the opposition with cool precision and calculated strategy.",
      tagline: "1 pro chills, 1 newbie freezes out!",
      imageUrl: "/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png",
      icon: <Trophy className="w-5 h-5" />,
      category: "Tactical"
    },
    {
      id: 3,
      title: "Thunder Crew ⚡",
      description: "Shocking the battlefield with electrifying plays and lightning-fast reflexes.",
      tagline: "1 pro roars, 1 newbie thunders up!",
      imageUrl: "/lovable-uploads/afb763c8-53f8-4c32-92ad-20ef2c253f23.png",
      icon: <Gamepad2 className="w-5 h-5" />,
      category: "Speed"
    },
  ];

  const features = [
    {
      id: 1,
      title: "Celebrate Loyalty",
      description: "Join us for an epic gaming event where OG Clan members honor our Cameroon roots while strengthening clan bonds."
    },
    {
      id: 2,
      title: "Everyone Belongs",
      description: "Veterans share wisdom. Inactive members reconnect. Newcomers find their place. We grow stronger together."
    },
    {
      id: 3,
      title: "Level Up Together",
      description: "Face thrilling challenges. Earn exclusive rewards. Sharpen your skills in friendly competition."
    }
  ];

  return (
    <section id="highlights" className="py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ogclan mb-4">
              Squad Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your team and dominate the battlefield together
            </p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teams.map((team, index) => (
            <AnimatedContent 
              key={team.id} 
              animation="fade-in-up" 
              delay={300 + index * 150}
            >
              <div className="highlight-card h-full">
                <div className="p-6 border-b border-ogclan/20">
                  <h3 className="text-2xl font-bold text-ogclan mb-2">
                    {team.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {team.description}
                  </p>
                  <p className="text-sm text-ogclan-light font-medium">
                    {team.tagline}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <div className="relative mb-20">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-ogclan/5 rounded-full blur-3xl"></div>
          <div className="glass-card p-8 rounded-2xl relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-ogclan mb-2">
                OG Battle Night: Unite, Fight, Ignite! 🔥
              </h3>
              <p className="text-gray-300">
                Join us for an epic gaming event on March 17, 2025 at 10pm
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.id} className="flex">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-ogclan/10 text-ogclan">
                    <Check className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-ogclan-light">{feature.title}</h4>
                    <p className="mt-1 text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-ogclan mb-4">
                "For the OGs, by the OGs. Let's dominate together!" 💪
              </p>
              <p className="text-gray-400">
                No team yet? Spectate on TikTok Live to find your squad!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedContent animation="slide-in-left">
            <div className="overflow-hidden rounded-2xl border border-ogclan/20">
              <img 
                src="/lovable-uploads/17e3bb79-3e72-4502-9527-d3ddbcaf50b7.png" 
                alt="OG Clan Gaming Event"
                className="w-full h-full object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-right">
            <div className="overflow-hidden rounded-2xl border border-ogclan/20">
              <img 
                src="/lovable-uploads/45ffa98e-e5e3-4e69-aa01-40bec47f9d28.png" 
                alt="OG Clan Members"
                className="w-full h-full object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
