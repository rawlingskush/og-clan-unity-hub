
// Basic animation configurations
export const basicKeyframes = {
  'accordion-down': {
    from: {
      height: '0'
    },
    to: {
      height: 'var(--radix-accordion-content-height)'
    }
  },
  'accordion-up': {
    from: {
      height: 'var(--radix-accordion-content-height)'
    },
    to: {
      height: '0'
    }
  },
  'fade-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'fade-in': {
    '0%': {
      opacity: '0'
    },
    '100%': {
      opacity: '1'
    }
  },
  'scale-in': {
    '0%': {
      opacity: '0',
      transform: 'scale(0.95)'
    },
    '100%': {
      opacity: '1',
      transform: 'scale(1)'
    }
  }
};

export const basicAnimations = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in-up': 'fade-in-up 0.7s ease-out',
  'fade-in': 'fade-in 0.5s ease-out',
  'scale-in': 'scale-in 0.3s ease-out'
};
