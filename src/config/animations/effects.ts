
// Special effects animation configurations
export const effectsKeyframes = {
  'flip-3d': {
    '0%': { 
      transform: 'perspective(400px) rotateY(0)' 
    },
    '100%': { 
      transform: 'perspective(400px) rotateY(180deg)' 
    }
  },
  'spotlight': {
    '0%, 100%': { 
      boxShadow: '0 0 0 rgba(212,175,55,0)' 
    },
    '50%': { 
      boxShadow: '0 0 30px 10px rgba(212,175,55,0.3)' 
    }
  },
  'holographic-shimmer': {
    '0%': {
      backgroundPosition: '0% 50%',
      opacity: '0.7'
    },
    '50%': {
      backgroundPosition: '100% 50%',
      opacity: '1'
    },
    '100%': {
      backgroundPosition: '0% 50%',
      opacity: '0.7'
    }
  },
  'tactical-pulse': {
    '0%, 100%': {
      outline: '1px solid rgba(212,175,55,0.2)'
    },
    '50%': {
      outline: '1px solid rgba(212,175,55,0.8)'
    }
  },
  'digital-interference': {
    '0%, 10%, 15%, 20%, 100%': {
      clipPath: 'inset(0 0 0 0)'
    },
    '5%': {
      clipPath: 'inset(10% 0 80% 0)'
    },
    '12%': {
      clipPath: 'inset(50% 0 30% 0)'
    },
    '18%': {
      clipPath: 'inset(70% 0 10% 0)'
    }
  }
};

export const effectsAnimations = {
  'flip-3d': 'flip-3d 1s ease-in-out',
  'spotlight': 'spotlight 4s infinite',
  'holographic-shimmer': 'holographic-shimmer 3s ease-in-out infinite',
  'tactical-pulse': 'tactical-pulse 2s infinite',
  'digital-interference': 'digital-interference 3s infinite'
};

