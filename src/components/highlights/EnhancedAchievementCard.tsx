
import React from 'react';
import FlipCard from '../common/FlipCard';
import AnimatedCounter from '../common/AnimatedCounter';
import MicroInteraction from '../common/MicroInteraction';
import AnimatedProgressBar from '../common/AnimatedProgressBar';

interface EnhancedAchievementCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  title: string;
  description: string;
  detailedStats?: {
    progress: number;
    trend: '+' | '-';
    trendValue: string;
    additionalInfo: string;
  };
}

const EnhancedAchievementCard = ({ 
  icon, 
  stat, 
  label, 
  title, 
  description,
  detailedStats 
}: EnhancedAchievementCardProps) => {
  // Parse numeric value from stat
  const numericValue = parseFloat(stat.replace(/[^0-9.]/g, ''));
  const hasNumericValue = !isNaN(numericValue);

  const frontCard = (
    <div className="highlight-card h-full transform transition-all duration-300">
      <div className="p-6 flex flex-col h-full">
        <MicroInteraction type="bounce" className="mb-4 p-3 rounded-full bg-ogclan/10 w-fit">
          {icon}
        </MicroInteraction>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-ogclan mb-1">
            {hasNumericValue ? (
              <AnimatedCounter 
                value={numericValue} 
                suffix={stat.includes('%') ? '%' : stat.includes('+') ? '+' : ''}
                decimals={stat.includes('.') ? 1 : 0}
              />
            ) : (
              stat
            )}
          </div>
          <div className="text-sm uppercase tracking-wider text-ogclan-light font-medium">{label}</div>
        </div>
        
        <h3 className="text-xl font-bold text-ogclan mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 mt-auto">
          {description}
        </p>
        
        <div className="mt-4 text-xs text-ogclan/60 text-center">
          Click to view details →
        </div>
      </div>
    </div>
  );

  const backCard = detailedStats ? (
    <div className="highlight-card h-full transform transition-all duration-300 bg-gradient-to-br from-black/90 to-ogclan/5">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-ogclan">{title} Details</h3>
          <span className={`text-sm font-medium ${detailedStats.trend === '+' ? 'text-green-400' : 'text-red-400'}`}>
            {detailedStats.trend}{detailedStats.trendValue}
          </span>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">Progress</span>
            <span className="text-ogclan">{detailedStats.progress}%</span>
          </div>
          <AnimatedProgressBar 
            value={detailedStats.progress} 
            className="h-2"
            showValue={false}
          />
        </div>
        
        <div className="space-y-3 mt-auto">
          <div className="p-3 bg-black/50 rounded border border-ogclan/20">
            <div className="text-xs text-ogclan/80 uppercase tracking-wider mb-1">Additional Info</div>
            <div className="text-sm text-gray-300">{detailedStats.additionalInfo}</div>
          </div>
          
          <div className="text-xs text-ogclan/60 text-center">
            ← Click to go back
          </div>
        </div>
      </div>
    </div>
  ) : frontCard;

  return (
    <FlipCard 
      front={frontCard}
      back={backCard}
      className="h-full cursor-pointer"
      flipOnClick={true}
    />
  );
};

export default EnhancedAchievementCard;
