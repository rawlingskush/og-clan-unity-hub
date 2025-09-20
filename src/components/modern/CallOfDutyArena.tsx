import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Map, Crosshair, Target, Trophy, Play, Star, 
  Zap, Shield, Sword, Eye, ArrowRight 
} from 'lucide-react';

const CallOfDutyArena = () => {
  const [selectedMap, setSelectedMap] = useState(0);

  const maps = [
    {
      name: "Alcatraz",
      description: "Our legendary battleground where champions are made",
      image: "/lovable-uploads/229f6b94-869b-4b77-a3e2-3ab364bc9edf.png",
      specialties: ["Hot Drop Mastery", "Prison Break Tactics", "Zone Control"],
      winRate: "94%",
      favoriteSpots: ["Prison Blocks", "Dock Area", "Lighthouse"],
      tips: "Master the art of early game aggression and mid-game positioning for maximum success"
    },
    {
      name: "Isolated", 
      description: "Wide open battlefields testing strategic prowess",
      image: "/lovable-uploads/17e3bb79-3e72-4502-9527-d3ddbcaf50b7.png",
      specialties: ["Long Range Combat", "Vehicle Tactics", "Zone Rotation"],
      winRate: "89%",
      favoriteSpots: ["Crash", "Launch Base", "Nuclear Plant"],
      tips: "Perfect your rotations and vehicle positioning to dominate the vast landscapes"
    },
    {
      name: "Blackout",
      description: "Classic battleground requiring perfect team coordination", 
      image: "/lovable-uploads/1cb31bbb-4233-43e5-81db-f5f2fabe0ac5.png",
      specialties: ["Team Coordination", "Urban Combat", "Resource Management"],
      winRate: "87%",
      favoriteSpots: ["Nuketown", "Firing Range", "Estates"],
      tips: "Focus on early looting efficiency and maintaining team formation throughout"
    },
    {
      name: "Krai",
      description: "Frozen battleground demanding tactical adaptation",
      image: "/lovable-uploads/2dd54b8a-fb91-4217-ac97-e496c43e46a4.png", 
      specialties: ["Cold Weather Tactics", "Terrain Advantage", "Stealth Operations"],
      winRate: "91%",
      favoriteSpots: ["Frozen Lake", "Mountain Base", "Ice Caves"],
      tips: "Utilize the unique terrain features and weather conditions for tactical advantage"
    }
  ];

  const weaponMastery = [
    {
      category: "Assault Rifles",
      weapons: ["AK-47", "M4", "ASM10"],
      specialty: "Versatile mid-range dominance",
      masterPlayer: "Kush",
      icon: <Target className="h-6 w-6 text-red-400" />
    },
    {
      category: "Sniper Rifles", 
      weapons: ["DL Q33", "Locus", "Arctic .50"],
      specialty: "Long-range precision elimination",
      masterPlayer: "Exodus",
      icon: <Crosshair className="h-6 w-6 text-blue-400" />
    },
    {
      category: "SMGs",
      weapons: ["QXR", "Fennec", "RUS-79U"], 
      specialty: "Close-quarters speed demon",
      masterPlayer: "Damage",
      icon: <Zap className="h-6 w-6 text-ogclan" />
    },
    {
      category: "LMGs",
      weapons: ["Chopper", "RPD", "UL736"],
      specialty: "Heavy suppression and area denial",
      masterPlayer: "Wizard",
      icon: <Shield className="h-6 w-6 text-purple-400" />
    }
  ];

  const tacticalGuides = [
    {
      title: "Black Market Hot Drop Strategy",
      description: "Master the art of high-risk, high-reward landings in the most contested zones",
      difficulty: "Expert",
      author: "Kush & Wizard",
      views: "12.5K",
      rating: 4.9
    },
    {
      title: "Alcatraz Prison Break Tactics",
      description: "Dominate the iconic prison blocks with coordinated team movements", 
      difficulty: "Advanced",
      author: "Exodus",
      views: "8.3K", 
      rating: 4.8
    },
    {
      title: "Zone Rotation Mastery",
      description: "Perfect timing and positioning for consistent top 3 placements",
      difficulty: "Intermediate",
      author: "Damage",
      views: "15.2K",
      rating: 4.7
    }
  ];

  return (
    <section id="cod-arena" className="py-20 bg-gradient-to-b from-tactical-black via-tactical-darkgray to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <Map className="mr-2 h-4 w-4" />
            BATTLEFIELD MASTERY
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-ogclan to-blue-400 mb-6">
            COD MOBILE ARENA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dominating every battlefield with tactical superiority, weapon mastery, and unmatched team coordination
          </p>
        </motion.div>

        {/* Interactive Map Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-ogclan">CONQUERED</span> BATTLEGROUNDS
              </h3>
              
              {maps.map((map, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMap(index)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedMap === index
                      ? 'bg-ogclan/10 border-ogclan shadow-glow-ogclan'
                      : 'bg-black/40 border-ogclan/30 hover:border-ogclan/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`text-xl font-bold ${
                        selectedMap === index ? 'text-ogclan' : 'text-white'
                      }`}>
                        {map.name}
                      </h4>
                      <p className="text-sm text-gray-400">{map.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{map.winRate}</div>
                      <div className="text-xs text-gray-500">Win Rate</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Map Details */}
            <motion.div
              key={selectedMap}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30 overflow-hidden">
                <div className="relative">
                  <img
                    src={maps[selectedMap].image}
                    alt={maps[selectedMap].name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {maps[selectedMap].name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {maps[selectedMap].winRate} Win Rate
                      </Badge>
                      <Badge variant="outline" className="border-ogclan/40 text-ogclan-light">
                        Master Level
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Our Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {maps[selectedMap].specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-ogclan/40 text-ogclan-light">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Favorite Drop Zones</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {maps[selectedMap].favoriteSpots.map((spot, index) => (
                        <div key={index} className="bg-black/40 border border-ogclan/20 rounded-lg p-2 text-center">
                          <div className="text-sm text-ogclan font-semibold">{spot}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Pro Tips</h4>
                    <p className="text-gray-300 text-sm bg-black/40 border border-ogclan/20 rounded-lg p-3">
                      {maps[selectedMap].tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Weapon Mastery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">WEAPON</span> MASTERY
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weaponMastery.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      {category.icon}
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">{category.category}</h4>
                    <p className="text-sm text-gray-400 mb-4">{category.specialty}</p>
                    
                    <div className="space-y-2 mb-4">
                      {category.weapons.map((weapon, i) => (
                        <div key={i} className="text-sm text-ogclan-light bg-black/40 rounded px-2 py-1">
                          {weapon}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Master: <span className="text-ogclan font-semibold">{category.masterPlayer}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tactical Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">TACTICAL</span> GUIDES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tacticalGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="outline" 
                        className={`${
                          guide.difficulty === 'Expert' ? 'text-red-400 border-red-400/50' :
                          guide.difficulty === 'Advanced' ? 'text-ogclan border-ogclan/50' :
                          'text-blue-400 border-blue-400/50'
                        }`}
                      >
                        {guide.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-ogclan" />
                        <span className="text-white">{guide.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-white text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                      <span>By {guide.author}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{guide.views}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-ogclan border-ogclan/50 hover:bg-ogclan/10">
                      <Play className="mr-2 h-4 w-4" />
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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

export default CallOfDutyArena;