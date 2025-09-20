import React from 'react';
import { Users, Trophy, Target, TrendingUp, Shield, Award } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import QuickNavCard from './QuickNavCard';

interface StoryNavigationProps {
  className?: string;
  layout?: 'horizontal' | 'grid';
}

const StoryNavigation = ({ className = '', layout = 'grid' }: StoryNavigationProps) => {
  const navigationItems = [
    {
      id: 1,
      title: "Elite Warriors",
      description: "Meet our legendary fighters and their battle stories",
      icon: Shield,
      variant: 'primary' as const,
      onClick: () => window.open('/soldiers?view=gallery', '_self')
    },
    {
      id: 2,
      title: "Tier System",
      description: "Explore our strategic organization and member rankings",
      icon: Target,
      variant: 'secondary' as const,
      onClick: () => window.open('/soldiers?view=members', '_self')
    },
    {
      id: 3,
      title: "Clan Statistics",
      description: "Dive into our performance metrics and achievements",
      icon: TrendingUp,
      variant: 'accent' as const,
      onClick: () => {
        const statsSection = document.getElementById('clan-stats');
        if (statsSection) {
          statsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  const containerClass = layout === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-6' 
    : 'grid grid-cols-1 md:grid-cols-3 gap-6';

  return (
    <div className={`${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
          Discover Our Legacy
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow the stories that define OG Clan - from individual warriors to collective triumphs
        </p>
      </div>
      
      <div className={containerClass}>
        {navigationItems.map((item, index) => (
          <AnimatedContent 
            key={item.id} 
            animation="fade-in-up" 
            delay={200 + index * 150}
          >
            <QuickNavCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant={item.variant}
              onClick={item.onClick}
              className="h-full"
            />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default StoryNavigation;