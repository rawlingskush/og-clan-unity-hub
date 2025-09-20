import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickNavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const QuickNavCard = ({ 
  title, 
  description, 
  icon: Icon, 
  onClick, 
  variant = 'primary',
  className = '' 
}: QuickNavCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-primary/30 hover:border-primary/50 text-white hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]';
      case 'secondary':
        return 'bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 hover:from-emerald-600/30 hover:to-emerald-500/30 border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]';
      case 'accent':
        return 'bg-gradient-to-r from-amber-600/20 to-amber-500/20 hover:from-amber-600/30 hover:to-amber-500/30 border-amber-500/30 hover:border-amber-500/50 text-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]';
      default:
        return 'bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-primary/30 hover:border-primary/50 text-white hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]';
    }
  };

  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:scale-105 border ${getVariantClasses()} ${className}`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-black/30">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickNavCard;