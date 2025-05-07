
// Pulse and glow animation configurations
export const pulseKeyframes = {
  'pulse-slow': {
    '0%, 100%': {
      opacity: '1'
    },
    '50%': {
      opacity: '0.7'
    }
  },
  'glow-pulse': {
    '0%': {
      boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)'
    },
    '50%': {
      boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)'
    },
    '100%': {
      boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)'
    }
  },
  'text-flicker': {
    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
      opacity: '0.99',
      textShadow: '0 0 5px rgba(212, 175, 55, 0.5), 0 0 8px rgba(212, 175, 55, 0.3)'
    },
    '20%, 24%, 55%': {
      opacity: '0.7',
      textShadow: 'none'
    }
  },
  'ember-glow': {
    '0%, 100%': {
      opacity: '0.2',
      transform: 'scale(1)',
      filter: 'blur(2px)'
    },
    '50%': {
      opacity: '1',
      transform: 'scale(1.05)',
      filter: 'blur(1px)'
    }
  },
  'tactical-breath': {
    '0%, 100%': {
      borderColor: 'rgba(212, 175, 55, 0.3)'
    },
    '50%': {
      borderColor: 'rgba(212, 175, 55, 0.7)'
    }
  }
};

export const pulseAnimations = {
  'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
  'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
  'text-flicker': 'text-flicker 3s infinite alternate',
  'ember-glow': 'ember-glow 4s infinite ease-in-out',
  'tactical-breath': 'tactical-breath 2s infinite ease-in-out'
};
