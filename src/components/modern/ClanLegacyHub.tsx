import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Trophy, Users, Star, Sword, Crown, Target, Zap } from 'lucide-react';

const ClanLegacyHub = () => {
  const [activeStory, setActiveStory] = useState(0);

  const timeline = [
    {
      year: 2020,
      title: "The Genesis",
      description: "OG Clan formed with a vision to unite Cameroon's elite gamers",
      icon: Crown,
      color: "text-purple-400"
    },
    {
      year: 2021,
      title: "First Victories",
      description: "Dominated local tournaments, establishing our reputation",
      icon: Trophy,
      color: "text-ogclan"
    },
    {
      year: 2022,
      title: "International Recognition", 
      description: "Gained attention from global gaming communities",
      icon: Target,
      color: "text-blue-400"
    },
    {
      year: 2023,
      title: "Elite Status",
      description: "Became the most feared clan in African Call of Duty scene",
      icon: Sword,
      color: "text-red-400"
    },
    {
      year: 2024,
      title: "Legacy Continues",
      description: "50+ elite warriors, 200+ victories, infinite potential",
      icon: Zap,
      color: "text-ogclan-light"
    }
  ];

  const legendaryStories = [
    {
      title: "The Alcatraz Massacre",
      subtitle: "Kush's Legendary 1v4 Clutch",
      description: "In the final circle of an Alcatraz Battle Royale, Kush single-handedly eliminated an entire enemy squad with nothing but an AK-47 and pure skill.",
      hero: "Kush",
      map: "Alcatraz",
      achievement: "Quad Kill Victory"
    },
    {
      title: "Black Market Domination",
      subtitle: "Wizard's Strategic Masterclass", 
      description: "Leading the squad through the chaos of Black Market hot drops, Wizard's tactical genius resulted in 15 consecutive wins.",
      hero: "Wizard",
      map: "Blackout",
      achievement: "15 Win Streak"
    },
    {
      title: "The Isolated Legends",
      subtitle: "Exodus & Damage Tag Team",
      description: "The unstoppable duo that terrorized Isolated map, combining Exodus's precision and Damage's aggression for countless victories.",
      hero: "Exodus & Damage",
      map: "Isolated", 
      achievement: "Duo Champions"
    }
  ];

  const clanLegends = [
    {
      name: "Kush",
      title: "The Founder",
      description: "Visionary leader who built OG Clan from the ground up",
      achievements: ["Clan Founder", "Master Strategist", "Alcatraz King"],
      image: "/lovable-uploads/4173fde6-af6e-4572-9e29-450aabf69ecf.png"
    },
    {
      name: "Wizard",
      title: "The Tactician", 
      description: "Strategic mastermind behind our greatest victories",
      achievements: ["Black Market Expert", "Team Captain", "Win Rate: 89%"],
      image: "/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png"
    },
    {
      name: "Exodus", 
      title: "The Sniper",
      description: "Precision shooter with legendary accuracy",
      achievements: ["Headshot Master", "Long Range Specialist", "Clutch King"],
      image: "/lovable-uploads/bf526ad4-9c9b-4af1-ada0-4e60faba51b0.png"
    }
  ];

  return (
    <section id="legacy" className="py-20 bg-gradient-to-b from-black via-tactical-darkgray to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <Star className="mr-2 h-4 w-4" />
            CLAN CHRONICLES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ogclan via-white to-ogclan mb-6">
            OUR LEGACY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four years of dominance, legendary battles, and unforgettable moments that shaped the future of gaming in Cameroon
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ogclan via-ogclan-light to-ogclan" />
            
            {timeline.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-16`}
                >
                  <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-black/70 border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan">
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : ''}`}>
                          <Icon className={`h-5 w-5 ${event.color}`} />
                          <span className="text-2xl font-bold text-ogclan">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ogclan rounded-full border-4 border-black" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Legendary Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">LEGENDARY</span> BATTLES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {legendaryStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveStory(index)}
              >
                <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/20 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sword className="h-5 w-5 text-red-400" />
                      <Badge variant="outline" className="text-ogclan border-ogclan/50">
                        {story.map}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-ogclan transition-colors">
                      {story.title}
                    </h4>
                    <p className="text-ogclan-light text-sm mb-3">{story.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{story.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500">HERO</p>
                        <p className="text-sm font-semibold text-ogclan">{story.hero}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">ACHIEVEMENT</p>
                        <p className="text-sm font-semibold text-white">{story.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clan Legends Spotlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">HALL OF</span> LEGENDS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clanLegends.map((legend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-b from-black/80 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan overflow-hidden">
                  <div className="relative">
                    <img 
                      src={legend.image} 
                      alt={legend.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-xl font-bold text-white">{legend.name}</h4>
                      <p className="text-ogclan text-sm">{legend.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-300 text-sm mb-4">{legend.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {legend.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-ogclan/40 text-ogclan-light">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClanLegacyHub;