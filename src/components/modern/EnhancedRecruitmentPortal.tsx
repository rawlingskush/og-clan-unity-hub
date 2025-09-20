import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  UserPlus, Star, Trophy, Target, Zap, Shield, 
  Sword, CheckCircle, Users, Calendar, ArrowRight,
  Clock, Award, Gamepad2, MessageCircle
} from 'lucide-react';

const EnhancedRecruitmentPortal = () => {
  const [formData, setFormData] = useState({
    gamertag: '',
    realName: '',
    age: '',
    location: '',
    experience: '',
    favoriteModes: [],
    motivation: '',
    availability: ''
  });

  const requirements = [
    {
      icon: <Target className="h-5 w-5 text-ogclan" />,
      title: "Skill Level",
      description: "Minimum Veteran rank in COD Mobile",
      status: "required"
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-400" />,
      title: "Availability", 
      description: "Active at least 10 hours per week",
      status: "required"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-purple-400" />,
      title: "Communication",
      description: "Must have Discord for team coordination",
      status: "required"
    },
    {
      icon: <Users className="h-5 w-5 text-green-400" />,
      title: "Team Spirit",
      description: "Positive attitude and teamwork mindset",
      status: "essential"
    }
  ];

  const benefits = [
    {
      icon: <Trophy className="h-6 w-6 text-ogclan" />,
      title: "Elite Training",
      description: "Learn from legendary players and master advanced tactics"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Clan Protection", 
      description: "Full support and backing from OG Clan leadership"
    },
    {
      icon: <Sword className="h-6 w-6 text-red-400" />,
      title: "Tournament Access",
      description: "Exclusive entry to high-stakes competitions and events"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-400" />,
      title: "Recognition",
      description: "Opportunity to build your reputation in the gaming community"
    }
  ];

  const successStories = [
    {
      name: "Starlight",
      joinDate: "January 2024",
      progression: "Recruit → Elite Warrior",
      achievement: "Achieved Legendary rank in 3 months",
      quote: "OG Clan transformed my gameplay and gave me a family of warriors.",
      image: "/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png"
    },
    {
      name: "BlackSavage", 
      joinDate: "March 2023",
      progression: "Rising Star → Veteran",
      achievement: "Led team to 15 consecutive victories",
      quote: "The training and support here is unmatched. Best decision ever!",
      image: "/lovable-uploads/95933862-9fe5-47e4-ae6a-9c095005b0d1.png"
    },
    {
      name: "Shinobi",
      joinDate: "June 2023", 
      progression: "New Recruit → Elite Ninja",
      achievement: "Master of stealth tactics and clutch plays",
      quote: "From zero to hero - OG Clan made it possible.",
      image: "/lovable-uploads/shinobi-new-pfp.jpg"
    }
  ];

  const trainingPrograms = [
    {
      title: "Tactical Bootcamp",
      duration: "2 weeks",
      focus: "Basic strategies and team coordination",
      mentor: "Wizard",
      level: "Beginner"
    },
    {
      title: "Weapon Mastery", 
      duration: "3 weeks",
      focus: "Advanced weapon handling and optimization",
      mentor: "Exodus",
      level: "Intermediate"
    },
    {
      title: "Elite Operations",
      duration: "4 weeks", 
      focus: "Pro-level tactics and tournament preparation",
      mentor: "Kush",
      level: "Advanced"
    }
  ];

  return (
    <section id="recruitment" className="py-20 bg-gradient-to-b from-tactical-black via-black to-tactical-darkgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <UserPlus className="mr-2 h-4 w-4" />
            RECRUITMENT PORTAL
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ogclan via-white to-ogclan mb-6">
            BECOME A LEGEND
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the most elite Call of Duty Mobile clan in Cameroon and transform your gaming journey into legend
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Requirements & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Requirements */}
            <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan">
                  <CheckCircle className="h-5 w-5" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-black/40 rounded-lg border border-ogclan/20"
                  >
                    <div className="mt-1">
                      {req.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{req.title}</h4>
                      <p className="text-gray-300 text-xs">{req.description}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 text-xs ${
                          req.status === 'required' 
                            ? 'text-red-400 border-red-400/50'
                            : 'text-ogclan border-ogclan/50'
                        }`}
                      >
                        {req.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan">
                  <Award className="h-5 w-5" />
                  Member Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-black/40 rounded-lg border border-ogclan/20 hover:border-ogclan/40 transition-colors"
                  >
                    <div className="mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{benefit.title}</h4>
                      <p className="text-gray-300 text-xs">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-black/90 to-tactical-darkgray border-ogclan/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan text-2xl">
                  <Gamepad2 className="h-6 w-6" />
                  Join Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gamertag" className="text-white">Gamertag *</Label>
                    <Input
                      id="gamertag"
                      placeholder="Your COD Mobile username"
                      value={formData.gamertag}
                      onChange={(e) => setFormData({...formData, gamertag: e.target.value})}
                      className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="realName" className="text-white">Real Name</Label>
                    <Input
                      id="realName"
                      placeholder="Your real name (optional)"
                      value={formData.realName}
                      onChange={(e) => setFormData({...formData, realName: e.target.value})}
                      className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="text-white">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="18"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-white">Location *</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-white">Gaming Experience *</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your COD Mobile experience, current rank, favorite game modes..."
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-white">Why OG Clan? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="What motivates you to join OG Clan? What can you bring to our team?"
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="availability" className="text-white">Availability *</Label>
                  <Input
                    id="availability"
                    placeholder="How many hours per week can you dedicate?"
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    className="bg-black/60 border-ogclan/30 text-white focus:border-ogclan"
                  />
                </div>

                <Button className="w-full bg-ogclan hover:bg-ogclan-light text-black font-bold text-lg py-3">
                  <Zap className="mr-2 h-5 w-5" />
                  SUBMIT APPLICATION
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-gray-400">
                  Applications are reviewed within 48 hours. Selected candidates will be contacted for trials.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">SUCCESS</span> STORIES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan h-full">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white">{story.name}</h4>
                      <p className="text-ogclan text-sm">{story.progression}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Joined:</span>
                        <span className="text-white">{story.joinDate}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-400">Achievement:</span>
                        <p className="text-ogclan font-semibold">{story.achievement}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-300 text-sm italic border-l-2 border-ogclan/50 pl-3">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            <span className="text-ogclan">TRAINING</span> PROGRAMS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 hover:border-ogclan/60 transition-all duration-300 hover:shadow-glow-ogclan h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge 
                        variant="outline" 
                        className={`${
                          program.level === 'Beginner' ? 'text-green-400 border-green-400/50' :
                          program.level === 'Intermediate' ? 'text-ogclan border-ogclan/50' :
                          'text-red-400 border-red-400/50'
                        }`}
                      >
                        {program.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-semibold">{program.duration}</div>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">{program.focus}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-xs text-gray-400">Mentor</div>
                        <div className="text-ogclan font-semibold">{program.mentor}</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-ogclan border-ogclan/50 hover:bg-ogclan/10">
                      Learn More
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

export default EnhancedRecruitmentPortal;