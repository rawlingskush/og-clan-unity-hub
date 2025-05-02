
import React from 'react';

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface SoldierSparklesProps {
  particles: SparkParticle[];
}

const SoldierSparkles = ({ particles }: SoldierSparklesProps) => {
  if (particles.length === 0) return null;
  
  return (
    <>
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute rounded-full bg-ogclan z-10 pointer-events-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: '0 0 8px rgba(212,175,55,0.8)'
          }}
        />
      ))}
    </>
  );
};

export default SoldierSparkles;
