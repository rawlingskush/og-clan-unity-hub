
// Interactive animation configurations for micro-interactions
export const interactiveKeyframes = {
  'flip-card': {
    '0%': {
      transform: 'perspective(1000px) rotateY(0deg)',
      transformStyle: 'preserve-3d'
    },
    '100%': {
      transform: 'perspective(1000px) rotateY(180deg)',
      transformStyle: 'preserve-3d'
    }
  },
  'flip-back': {
    '0%': {
      transform: 'perspective(1000px) rotateY(180deg)',
      transformStyle: 'preserve-3d'
    },
    '100%': {
      transform: 'perspective(1000px) rotateY(0deg)',
      transformStyle: 'preserve-3d'
    }
  },
  'micro-bounce': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(1.05)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  'data-reveal': {
    '0%': {
      transform: 'scaleX(0)',
      transformOrigin: 'left'
    },
    '100%': {
      transform: 'scaleX(1)',
      transformOrigin: 'left'
    }
  },
  'counter-up': {
    '0%': {
      transform: 'translateY(20px)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: '1'
    }
  },
  'icon-spin-in': {
    '0%': {
      transform: 'rotate(-180deg) scale(0)',
      opacity: '0'
    },
    '100%': {
      transform: 'rotate(0deg) scale(1)',
      opacity: '1'
    }
  }
};

export const interactiveAnimations = {
  'flip-card': 'flip-card 0.6s ease-in-out',
  'flip-back': 'flip-back 0.6s ease-in-out',
  'micro-bounce': 'micro-bounce 0.3s ease-out',
  'data-reveal': 'data-reveal 1s ease-out',
  'counter-up': 'counter-up 0.8s ease-out',
  'icon-spin-in': 'icon-spin-in 0.5s ease-out'
};
