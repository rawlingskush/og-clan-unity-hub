
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Check, Award, TrendingUp, Users, Calendar, Clock, MapPin, Youtube, TikTok } from 'lucide-react';

const HighlightsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Community Growth",
      description: "From a small group to hundreds of dedicated members across Cameroon, our clan continues to expand.",
      icon: <Users className="w-8 h-8 text-ogclan" />,
      stat: "66+",
      label: "Active Members"
    },
    {
      id: 2,
      title: "Tournament Success",
      description: "Consistent performance in regional and national gaming competitions, putting Cameroon on the esports map.",
      icon: <Award className="w-8 h-8 text-ogclan" />,
      stat: "12+",
      label: "Tournaments Won"
    },
    {
      id: 3,
      title: "Growing Influence",
      description: "Our social media presence and community impact continue to rise, creating opportunities for all members.",
      icon: <TrendingUp className="w-8 h-8 text-ogclan" />,
      stat: "69%",
      label: "Annual Growth"
    }
  ];

  const values = [
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
    <div className="relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-ogclan/5 to-transparent opacity-30"></div>
      <div className="absolute -top-40 right-20 w-80 h-80 bg-ogclan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-ogclan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <AnimatedContent 
              key={achievement.id} 
              animation="fade-in-up" 
              delay={300 + index * 150}
            >
              <div className="highlight-card h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-full bg-ogclan/10 w-fit">
                    {achievement.icon}
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-ogclan mb-1">{achievement.stat}</div>
                    <div className="text-sm uppercase tracking-wider text-ogclan-light font-medium">{achievement.label}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ogclan mb-3">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 mt-auto">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <div className="relative mb-20">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-ogclan/5 rounded-full blur-3xl"></div>
          <div className="glass-card p-8 rounded-2xl relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border-ogclan/40">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
                Next OG Battle Night Event
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-ogclan mr-2" />
                  <span className="text-gray-300">Every Sunday</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-ogclan mr-2" />
                  <span className="text-gray-300">10:00 PM WAT</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-ogclan mr-2" />
                  <span className="text-gray-300">For OG Clan Members</span>
                </div>
              </div>
              
              <p className="text-ogclan-light text-xl">
                Unite, Fight, Ignite! 🔥
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((feature, index) => (
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
              <p className="text-2xl font-bold text-gradient-gold mb-4">
                "For the OGs, by the OGs. Let's dominate together!" 💪
              </p>
              <p className="text-gray-400 mb-6">
                No team yet? Spectate on TikTok Live to find your squad!
              </p>
              
              <a href="#join" className="btn-primary">
                Register for Battle Night
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedContent animation="slide-in-left">
            <div className="overflow-hidden rounded-2xl border border-ogclan/20 transform transition-all duration-300 hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]">
              <img 
                src="/lovable-uploads/17e3bb79-3e72-4502-9527-d3ddbcaf50b7.png" 
                alt="OG Clan Gaming Event"
                className="w-full h-full object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </AnimatedContent>
          
          <AnimatedContent animation="slide-in-right">
            <div className="overflow-hidden rounded-2xl border border-ogclan/20 transform transition-all duration-300 hover:shadow-[0_5px_20px_rgba(212,175,55,0.2)]">
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
    </div>
  );
};

export default HighlightsSection;
