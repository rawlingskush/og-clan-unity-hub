
import React from 'react';
import EnhancedHeroSection from './EnhancedHeroSection';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  return <EnhancedHeroSection scrollPosition={scrollPosition} />;
};

export default SoldiersHero;
