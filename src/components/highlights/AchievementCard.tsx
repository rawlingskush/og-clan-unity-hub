
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  title: string;
  description: string;
}

const AchievementCard = ({ icon, stat, label, title, description }: AchievementCardProps) => {
  return (
    <div className="highlight-card h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-full bg-ogclan/10 w-fit">
          {icon}
        </div>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-ogclan mb-1">{stat}</div>
          <div className="text-sm uppercase tracking-wider text-ogclan-light font-medium">{label}</div>
        </div>
        
        <h3 className="text-xl font-bold text-ogclan mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
