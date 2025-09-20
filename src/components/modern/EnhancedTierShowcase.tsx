import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Shield, Sword, Star, Zap, Trophy, Users, Eye } from 'lucide-react';
import { tierData } from '@/data/tiers';
import { soldiers } from '@/data/soldiers';

const EnhancedTierShowcase = () => {
  const [selectedTier, setSelectedTier] = useState(tierData[0]);
  const [featuredMember, setFeaturedMember] = useState(0);

  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case 'founders': return Crown;
      case 'veterans': return Shield; 
      case 'elite': return Sword;
      case 'rising': return Star;
      case 'recruits': return Zap;
      default: return Users;
    }
  };

  const getTierMembers = (tierId: string) => {
    return soldiers.filter(soldier => soldier.tierId === tierId);
  };

  const featuredMembers = [
    {
      name: "Kush",
      title: "Clan Founder & Strategist", 
      image: "/lovable-uploads/4173fde6-af6e-4572-9e29-450aabf69ecf.png",
      stats: { wins: 340, kd: "2.8", rank: "Legendary" },
      achievements: ["Founder", "Master Tactician", "Alcatraz King"],
      specialty: "Black Market Hot Drops"
    },
    {
      name: "Wizard",
      title: "Master Tactician",
      image: "/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png", 
      stats: { wins: 298, kd: "2.6", rank: "Legendary" },
      achievements: ["Strategic Genius", "Team Captain", "Win Streak Champion"],
      specialty: "Team Coordination"
    },
    {
      name: "Exodus", 
      title: "Precision Sniper",
      image: "/lovable-uploads/bf526ad4-9c9b-4af1-ada0-4e60faba51b0.png",
      stats: { wins: 276, kd: "3.1", rank: "Legendary" },
      achievements: ["Headshot Master", "Long Range Expert", "Clutch King"],
      specialty: "Long Range Elimination"
    }
  ];

  return (
    <section id="tier-showcase" className="py-20 bg-gradient-to-b from-tactical-darkgray via-black to-tactical-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <Trophy className="mr-2 h-4 w-4" />
            WARRIOR HIERARCHY
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ogclan via-white to-ogclan mb-6">
            OUR WARRIORS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the elite fighters who make OG Clan the most feared team in African Call of Duty Mobile
          </p>
        </motion.div>

        {/* Featured Member Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <motion.div
                key={featuredMember}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={featuredMembers[featuredMember].image}
                  alt={featuredMembers[featuredMember].name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-ogclan text-black mb-3">
                    FEATURED WARRIOR
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {featuredMembers[featuredMember].name}
                  </h3>
                  <p className="text-ogclan-light text-lg">
                    {featuredMembers[featuredMember].title}
                  </p>
                </div>
              </motion.div>

              {/* Member Navigation */}
              <div className="flex justify-center mt-6 gap-3">
                {featuredMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setFeaturedMember(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === featuredMember ? 'bg-ogclan' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <motion.div
              key={featuredMember}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Combat Statistics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(featuredMembers[featuredMember].stats).map(([key, value]) => (
                    <div key={key} className="bg-black/60 border border-ogclan/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-ogclan">{value}</div>
                      <div className="text-sm text-gray-400 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredMembers[featuredMember].achievements.map((achievement, index) => (
                    <Badge key={index} variant="outline" className="border-ogclan/40 text-ogclan-light">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Combat Specialty</h4>
                <p className="text-gray-300 bg-black/40 border border-ogclan/20 rounded-lg p-4">
                  <span className="text-ogclan font-semibold">
                    {featuredMembers[featuredMember].specialty}
                  </span>
                  <br />
                  Master of tactical warfare with unmatched precision and strategic thinking.
                </p>
              </div>

              <Button className="w-full bg-ogclan hover:bg-ogclan-light text-black font-semibold">
                <Eye className="mr-2 h-4 w-4" />
                View Full Profile
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Tier Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {tierData.map((tier, index) => {
              const Icon = getTierIcon(tier.id);
              const memberCount = getTierMembers(tier.id).length;
              
              return (
                <Button
                  key={tier.id}
                  variant={selectedTier.id === tier.id ? "default" : "outline"}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-6 py-3 ${
                    selectedTier.id === tier.id
                      ? 'bg-ogclan text-black hover:bg-ogclan-light'
                      : 'border-ogclan/30 text-ogclan hover:bg-ogclan/10'
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {tier.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {memberCount}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Tier Display */}
        <motion.div
          key={selectedTier.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className={`bg-gradient-to-br from-black/90 to-tactical-darkgray border-2 mb-8 ${selectedTier.theme.border}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(getTierIcon(selectedTier.id), {
                  className: `h-8 w-8 ${selectedTier.theme.text}`
                })}
                <div>
                  <h3 className={`text-3xl font-bold ${selectedTier.theme.text}`}>
                    {selectedTier.name}
                  </h3>
                  <p className="text-gray-300">{selectedTier.description}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-2xl font-bold text-white">
                    {getTierMembers(selectedTier.id).length}
                  </div>
                  <div className="text-sm text-gray-400">Warriors</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {getTierMembers(selectedTier.id).map((soldier, index) => (
                  <motion.div
                    key={soldier.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      soldier.hasProfile 
                        ? `${selectedTier.theme.bgHover} ${selectedTier.theme.border} hover:shadow-glow-ogclan` 
                        : 'bg-black/40 border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{soldier.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold ${soldier.hasProfile ? selectedTier.theme.text : 'text-gray-300'}`}>
                          {soldier.name}
                        </div>
                        <div className="text-sm text-gray-400">{soldier.status}</div>
                      </div>
                      {soldier.hasProfile && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Progress Tracker CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-ogclan/10 via-black/80 to-ogclan/10 border-ogclan/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see detailed warrior profiles and progression?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive Progress Tracker to see individual stats, achievements, 
              and the journey of each OG Clan warrior from recruit to legend.
            </p>
            <Button size="lg" className="bg-ogclan hover:bg-ogclan-light text-black font-semibold">
              <Trophy className="mr-2 h-5 w-5" />
              View Progress Tracker
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTierShowcase;