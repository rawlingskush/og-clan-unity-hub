
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import EnhancedAchievementCard from './EnhancedAchievementCard';
import { Users, Award, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [{
    id: 1,
    title: "Community Growth",
    description: "From a small group to hundreds of dedicated members across Cameroon, our clan continues to expand.",
    icon: <Users className="w-8 h-8 text-ogclan" />,
    stat: "66+",
    label: "Active Members",
    detailedStats: {
      progress: 85,
      trend: '+' as const,
      trendValue: '12%',
      additionalInfo: "New members joining weekly, with strong retention rates and active participation in clan events."
    }
  }, {
    id: 2,
    title: "Tournament Success",
    description: "Consistent performance in regional and national gaming competitions, putting Cameroon on the esports map.",
    icon: <Award className="w-8 h-8 text-ogclan" />,
    stat: "68+",
    label: "Tournaments Won",
    detailedStats: {
      progress: 92,
      trend: '+' as const,
      trendValue: '8%',
      additionalInfo: "Maintaining a 75% win rate in competitive tournaments with multiple championship titles."
    }
  }, {
    id: 3,
    title: "Growing Influence",
    description: "Our social media presence and community impact continue to rise, creating opportunities for all members.",
    icon: <TrendingUp className="w-8 h-8 text-ogclan" />,
    stat: "169%",
    label: "Annual Growth",
    detailedStats: {
      progress: 78,
      trend: '+' as const,
      trendValue: '25%',
      additionalInfo: "Expanding reach across social platforms and partnering with gaming organizations nationwide."
    }
  }];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {achievements.map((achievement, index) => (
        <AnimatedContent 
          key={achievement.id} 
          animation="fade-in-up" 
          delay={300 + index * 150}
        >
          <EnhancedAchievementCard
            icon={achievement.icon}
            stat={achievement.stat}
            label={achievement.label}
            title={achievement.title}
            description={achievement.description}
            detailedStats={achievement.detailedStats}
          />
        </AnimatedContent>
      ))}
    </div>
  );
};

export default AchievementsSection;
