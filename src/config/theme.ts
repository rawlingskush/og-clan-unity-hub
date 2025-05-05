
// Main theme configuration that imports and combines all other theme parts
import { colors } from './colors';
import { keyframes, animations } from './animations';
import { fontFamily, dropShadow, backdropBlur, textShadow } from './typography';

export const themeConfig = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px'
    }
  },
  extend: {
    colors,
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes,
    animation: animations,
    fontFamily,
    dropShadow,
    backdropBlur,
    textShadow
  }
};
