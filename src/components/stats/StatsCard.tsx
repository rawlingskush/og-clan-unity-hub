
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const StatsCard = ({ title, value, icon, description }: StatsCardProps) => {
  return (
    <Card className="glass-card h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-15px_rgba(212,175,55,0.3)]">
      <CardContent className="p-3 md:p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 md:mb-4 p-2 md:p-3 rounded-full bg-ogclan/10 w-fit">
            {icon}
          </div>
          
          <h3 className="text-sm md:text-lg font-bold text-ogclan-light mb-0.5 md:mb-1">
            {title}
          </h3>
          
          <div className="text-2xl md:text-4xl font-bold text-ogclan mb-1 md:mb-2">{value}</div>
          
          <p className="text-xs md:text-sm text-gray-400">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
