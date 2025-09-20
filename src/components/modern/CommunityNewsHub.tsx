import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Newspaper, Calendar, Users, Trophy, Star, 
  Heart, MessageCircle, Share2, ArrowRight,
  Clock, Eye, TrendingUp, Zap
} from 'lucide-react';

const CommunityNewsHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper },
    { id: 'victories', name: 'Victories', icon: Trophy },
    { id: 'members', name: 'New Members', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'highlights', name: 'Highlights', icon: Star }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'victories',
      title: "OG Clan Dominates Weekend Tournament",
      excerpt: "Our warriors secured a flawless victory in the Alcatraz Championship, showcasing incredible teamwork and tactical prowess.",
      author: "Kush",
      date: "2 hours ago",
      readTime: "3 min read",
      likes: 127,
      comments: 23,
      shares: 15,
      image: "/lovable-uploads/229f6b94-869b-4b77-a3e2-3ab364bc9edf.png",
      featured: true
    },
    {
      id: 2, 
      category: 'members',
      title: "Welcome New Recruit: ShadowStrike",
      excerpt: "A rising star from Douala joins our ranks with impressive skills and dedication. Watch out for this future legend!",
      author: "Wizard",
      date: "5 hours ago", 
      readTime: "2 min read",
      likes: 89,
      comments: 41,
      shares: 8,
      image: "/lovable-uploads/4ec7719d-df84-4f0a-a8a5-4ad80acc8ff3.png"
    },
    {
      id: 3,
      category: 'events',
      title: "Battle Night: Alcatraz Mayhem",
      excerpt: "Join us tonight for intense Battle Royale action. Special rewards await the bravest warriors who dare to face the challenge.",
      author: "Exodus",
      date: "1 day ago",
      readTime: "4 min read", 
      likes: 156,
      comments: 67,
      shares: 29,
      image: "/lovable-uploads/17e3bb79-3e72-4502-9527-d3ddbcaf50b7.png"
    },
    {
      id: 4,
      category: 'highlights',
      title: "Damage's Legendary 30-Kill Game",
      excerpt: "Witness the incredible gameplay that made our sniper a legend. Frame-by-frame breakdown of the most epic clutch moments.",
      author: "Damage", 
      date: "2 days ago",
      readTime: "5 min read",
      likes: 234,
      comments: 89,
      shares: 45,
      image: "/lovable-uploads/1cb31bbb-4233-43e5-81db-f5f2fabe0ac5.png"
    },
    {
      id: 5,
      category: 'victories', 
      title: "Black Market Hot Drop Strategy Pays Off",
      excerpt: "Our signature high-risk tactics led to another crushing victory. Learn the secrets behind our most daring strategies.",
      author: "Kush",
      date: "3 days ago",
      readTime: "6 min read",
      likes: 178,
      comments: 52,
      shares: 31,
      image: "/lovable-uploads/2dd54b8a-fb91-4217-ac97-e496c43e46a4.png"
    },
    {
      id: 6,
      category: 'members',
      title: "Member Spotlight: Botgirl's Journey",
      excerpt: "From recruit to elite warrior - follow Botgirl's incredible progression and the dedication that earned her legendary status.",
      author: "Botgirl",
      date: "4 days ago", 
      readTime: "7 min read",
      likes: 201,
      comments: 73,
      shares: 22,
      image: "/lovable-uploads/bf526ad4-9c9b-4af1-ada0-4e60faba51b0.png"
    }
  ];

  const memberSpotlights = [
    {
      name: "Starlight",
      achievement: "Reached Legendary Rank",
      description: "Youngest member to achieve legendary status in record time",
      image: "/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png"
    },
    {
      name: "Shinobi", 
      achievement: "Master Ninja Award",
      description: "Perfected stealth tactics and silent eliminations",
      image: "/lovable-uploads/shinobi-new-pfp.jpg"
    },
    {
      name: "Muller",
      achievement: "Team Player of the Month",
      description: "Outstanding support and coordination in squad battles",
      image: "/lovable-uploads/muller-pfp.png"
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <section id="news-hub" className="py-20 bg-gradient-to-b from-black via-tactical-darkgray to-tactical-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <Newspaper className="mr-2 h-4 w-4" />
            CLAN CHRONICLES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ogclan via-white to-ogclan mb-6">
            NEWS & UPDATES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest victories, member achievements, and clan activities
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 ${
                    selectedCategory === category.id
                      ? 'bg-ogclan text-black hover:bg-ogclan-light'
                      : 'border-ogclan/30 text-ogclan hover:bg-ogclan/10'
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main News Feed */}
          <div className="lg:col-span-2 space-y-8">
            {filteredNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan overflow-hidden ${
                  item.featured ? 'lg:col-span-2' : ''
                }`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            item.category === 'victories' ? 'text-ogclan border-ogclan/50' :
                            item.category === 'members' ? 'text-blue-400 border-blue-400/50' :
                            item.category === 'events' ? 'text-purple-400 border-purple-400/50' :
                            'text-green-400 border-green-400/50'
                          }`}
                        >
                          {categories.find(c => c.id === item.category)?.name}
                        </Badge>
                        {item.featured && (
                          <Badge className="bg-ogclan text-black text-xs">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 hover:text-ogclan transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">{item.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span>By <span className="text-ogclan">{item.author}</span></span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {item.readTime}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {item.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {item.comments}
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="h-4 w-4" />
                            {item.shares}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-ogclan hover:bg-ogclan/10">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Member Spotlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ogclan">
                    <Star className="h-5 w-5" />
                    Member Spotlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {memberSpotlights.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-ogclan/20 hover:border-ogclan/40 transition-all cursor-pointer"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm">{member.name}</h4>
                        <p className="text-ogclan text-xs font-medium">{member.achievement}</p>
                        <p className="text-gray-400 text-xs line-clamp-1">{member.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ogclan">
                    <TrendingUp className="h-5 w-5" />
                    Trending
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "#AlcatrazMasters",
                    "#BlackMarketTactics", 
                    "#OGClanVictory",
                    "#BattleRoyaleKings",
                    "#CameroonGaming"
                  ].map((hashtag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-black/40 transition-colors cursor-pointer"
                    >
                      <span className="text-ogclan font-medium">{hashtag}</span>
                      <span className="text-xs text-gray-400">Trending</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-ogclan/10 to-black/90 border-ogclan/30">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-ogclan mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Join the Action
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Be part of the news! Share your victories and achievements.
                  </p>
                  <Button className="w-full bg-ogclan hover:bg-ogclan-light text-black font-semibold">
                    Submit Your Story
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8 text-ogclan border-ogclan/50 hover:bg-ogclan/10">
            Load More Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityNewsHub;