
// Movement-based animation configurations
export const movementKeyframes = {
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
  'scanner-line': {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '100%': {
      transform: 'translateX(100%)'
    }
  }
};

export const movementAnimations = {
  'slide-in-right': 'slide-in-right 0.5s ease-out',
  'slide-in-left': 'slide-in-left 0.5s ease-out',
  'float': 'float 6s infinite ease-in-out',
  'scanner-line': 'scanner-line 4s linear infinite'
};
