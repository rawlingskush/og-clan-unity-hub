
// Main animations index file that combines all animation configurations
import { basicKeyframes, basicAnimations } from './basic';
import { movementKeyframes, movementAnimations } from './movement';
import { pulseKeyframes, pulseAnimations } from './pulse';
import { tacticalKeyframes, tacticalAnimations } from './tactical';
import { effectsKeyframes, effectsAnimations } from './effects';
import { interactiveKeyframes, interactiveAnimations } from './interactive';

// Combine all keyframes
export const keyframes = {
  ...basicKeyframes,
  ...movementKeyframes,
  ...pulseKeyframes,
  ...tacticalKeyframes,
  ...effectsKeyframes,
  ...interactiveKeyframes
};

// Combine all animations
export const animations = {
  ...basicAnimations,
  ...movementAnimations,
  ...pulseAnimations,
  ...tacticalAnimations,
  ...effectsAnimations,
  ...interactiveAnimations
};
