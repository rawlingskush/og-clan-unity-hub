
import React from 'react';
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
  if (particles.length === 0) return null;
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'heart':
        return Heart;
      case 'star':
        return Star;
      case 'crown':
        return Crown;
      default:
        return Heart;
    }
  };
  
  return (
    <>
      {particles.map(particle => {
        const IconComponent = getIcon(particle.type);
        return (
          <div 
            key={particle.id}
            className="absolute z-10 pointer-events-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: `scale(${particle.size / 4})`
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

export default PrincessSparkles;
