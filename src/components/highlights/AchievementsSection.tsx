
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import AchievementCard from './AchievementCard';
import { Users, Award, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [{
    id: 1,
    title: "Community Growth",
    description: "From a small group to hundreds of dedicated members across Cameroon, our clan continues to expand.",
    icon: <Users className="w-8 h-8 text-ogclan" />,
    stat: "66+",
    label: "Active Members"
  }, {
    id: 2,
    title: "Tournament Success",
    description: "Consistent performance in regional and national gaming competitions, putting Cameroon on the esports map.",
    icon: <Award className="w-8 h-8 text-ogclan" />,
    stat: "68+",
    label: "Tournaments Won"
  }, {
    id: 3,
    title: "Growing Influence",
    description: "Our social media presence and community impact continue to rise, creating opportunities for all members.",
    icon: <TrendingUp className="w-8 h-8 text-ogclan" />,
    stat: "169%",
    label: "Annual Growth"
  }];

  const handleAchievementClick = (achievementId: number) => {
    if (achievementId === 1) {
      // Community Growth -> View all members
      window.open('/clan-members', '_self');
    } else if (achievementId === 2) {
      // Tournament Success -> View statistics
      const statsSection = document.getElementById('clan-stats');
      if (statsSection) {
        statsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Growing Influence -> View statistics
      const statsSection = document.getElementById('clan-stats');
      if (statsSection) {
        statsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {achievements.map((achievement, index) => (
        <AnimatedContent 
          key={achievement.id} 
          animation="fade-in-up" 
          delay={300 + index * 150}
        >
          <div 
            onClick={() => handleAchievementClick(achievement.id)}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <AchievementCard
              icon={achievement.icon}
              stat={achievement.stat}
              label={achievement.label}
              title={achievement.title}
              description={achievement.description}
            />
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default AchievementsSection;
