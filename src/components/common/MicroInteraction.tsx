
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MicroInteractionProps {
  children: ReactNode;
  type?: 'bounce' | 'scale' | 'glow' | 'float';
  trigger?: 'hover' | 'click' | 'focus';
  className?: string;
}

const MicroInteraction = ({ 
  children, 
  type = 'bounce', 
  trigger = 'hover',
  className 
}: MicroInteractionProps) => {
  const getInteractionClass = () => {
    const triggerPrefix = trigger === 'hover' ? 'hover:' : trigger === 'focus' ? 'focus:' : '';
    
    switch (type) {
      case 'bounce':
        return `${triggerPrefix}animate-micro-bounce`;
      case 'scale':
        return `${triggerPrefix}scale-105 transition-transform duration-200`;
      case 'glow':
        return `${triggerPrefix}shadow-lg ${triggerPrefix}shadow-ogclan/50 transition-shadow duration-300`;
      case 'float':
        return `${triggerPrefix}animate-float`;
      default:
        return `${triggerPrefix}animate-micro-bounce`;
    }
  };

  return (
    <div className={cn(getInteractionClass(), className)}>
      {children}
    </div>
  );
};

export default MicroInteraction;
