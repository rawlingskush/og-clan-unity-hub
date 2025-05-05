
// Animation configurations for the application
export const keyframes = {
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
  },
  'slide-in-right': {
    '0%': {
      transform: 'translateX(20px)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: '1'
    }
  },
  'slide-in-left': {
    '0%': {
      transform: 'translateX(-20px)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: '1'
    }
  },
  'pulse-slow': {
    '0%, 100%': {
      opacity: '1'
    },
    '50%': {
      opacity: '0.7'
    }
  },
  'float': {
    '0%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(-10px)'
    },
    '100%': {
      transform: 'translateY(0px)'
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
  'scanner-line': {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '100%': {
      transform: 'translateX(100%)'
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
  'tactical-scan': {
    '0%': {
      transform: 'translateY(-100%)'
    },
    '100%': {
      transform: 'translateY(800%)'
    }
  }
};

export const animations = {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in-up': 'fade-in-up 0.7s ease-out',
  'fade-in': 'fade-in 0.5s ease-out',
  'scale-in': 'scale-in 0.3s ease-out',
  'slide-in-right': 'slide-in-right 0.5s ease-out',
  'slide-in-left': 'slide-in-left 0.5s ease-out',
  'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
  'float': 'float 6s infinite ease-in-out',
  'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
  'scanner-line': 'scanner-line 4s linear infinite',
  'text-flicker': 'text-flicker 3s infinite alternate',
  'tactical-scan': 'tactical-scan 5s linear infinite'
};
