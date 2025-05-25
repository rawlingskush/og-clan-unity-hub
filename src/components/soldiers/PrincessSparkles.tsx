
import React, { useMemo } from 'react';
import { Heart, Star, Crown } from 'lucide-react';

interface PrincessParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'heart' | 'star' | 'crown';
  color: string;
}

interface PrincessSparklesProps {
  particles: PrincessParticle[];
}

const PrincessSparkles = ({ particles }: PrincessSparklesProps) => {
  // Memoize icon components for better performance
  const iconComponents = useMemo(() => ({
    heart: Heart,
    star: Star,
    crown: Crown
  }), []);
  
  if (particles.length === 0) return null;
  
  return (
    <>
      {particles.map(particle => {
        const IconComponent = iconComponents[particle.type];
        return (
          <div 
            key={particle.id}
            className="absolute z-10 pointer-events-none will-change-transform"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              // Use transform3d for hardware acceleration with combined transform
              transform: `translate3d(0, 0, 0) scale(${particle.size / 4})`
            }}
          >
            <IconComponent 
              className="w-4 h-4"
              style={{ color: particle.color }}
              fill={particle.color}
            />
          </div>
        );
      })}
    </>
  );
};

export default React.memo(PrincessSparkles);
