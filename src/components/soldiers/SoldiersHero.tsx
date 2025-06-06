
import React, { useRef, useEffect, useState } from 'react';
import EnhancedSoldiersHero from './EnhancedSoldiersHero';

interface SoldiersHeroProps {
  scrollPosition: number;
}

const SoldiersHero = ({ scrollPosition }: SoldiersHeroProps) => {
  return <EnhancedSoldiersHero scrollPosition={scrollPosition} />;
};

export default SoldiersHero;
