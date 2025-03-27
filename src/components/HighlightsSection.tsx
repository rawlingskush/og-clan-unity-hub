
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Calendar, Trophy, Users, Gamepad2 } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      id: 1,
      title: "Tournament Victory",
      description: "Our team dominated the regional championships, showcasing strategic teamwork and elite skills.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <Trophy className="w-5 h-5" />,
      category: "Competition"
    },
    {
      id: 2,
      title: "Team Building Events",
      description: "Building stronger bonds beyond gaming through community activities and hangouts.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <Users className="w-5 h-5" />,
      category: "Community"
    },
    {
      id: 3,
      title: "Upcoming Tournament",
      description: "Preparing for the next big challenge with intensive training and strategy sessions.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <Calendar className="w-5 h-5" />,
      category: "Upcoming"
    },
    {
      id: 4,
      title: "Gaming Sessions",
      description: "Regular gaming sessions that combine fun, strategy and skill development for all members.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <Gamepad2 className="w-5 h-5" />,
      category: "Training"
    },
  ];

  return (
    <section id="highlights" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clan Highlights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A glimpse into our journey, achievements, and the moments that define us.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <AnimatedContent 
              key={highlight.id} 
              animation="fade-in-up" 
              delay={300 + index * 150}
            >
              <div className="highlight-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={highlight.imageUrl} 
                    alt={highlight.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 flex items-center">
                    {highlight.icon}
                    <span className="ml-1">{highlight.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
