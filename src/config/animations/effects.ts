
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
  }
};

export const effectsAnimations = {
  'flip-3d': 'flip-3d 1s ease-in-out',
  'spotlight': 'spotlight 4s infinite',
};
