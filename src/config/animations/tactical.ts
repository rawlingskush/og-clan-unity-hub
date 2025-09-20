
// Tactical UI animation configurations
export const tacticalKeyframes = {
  'tactical-scan': {
    '0%': {
      transform: 'translateY(-100%)'
    },
    '100%': {
      transform: 'translateY(800%)'
    }
  },
  'digital-glitch': {
    '0%, 100%': { 
      transform: 'translate(0)', 
      textShadow: '0 0 5px rgba(212,175,55,0.5)' 
    },
    '5%, 15%': { 
      transform: 'translate(-1px, 0)', 
      textShadow: '0 0 10px rgba(212,175,55,0.7)' 
    },
    '10%, 20%': { 
      transform: 'translate(1px, 0)', 
      textShadow: '0 0 8px rgba(212,175,55,0.6)' 
    }
  },
  'radar-ping': {
    '0%': {
      transform: 'scale(0.5)',
      opacity: '1'
    },
    '80%, 100%': {
      transform: 'scale(2)',
      opacity: '0'
    }
  },
  'tactical-fade-in': {
    '0%': { 
      opacity: '0', 
      transform: 'translateY(10px)', 
      filter: 'blur(5px)' 
    },
    '60%': { 
      opacity: '0.6', 
      filter: 'blur(2px)' 
    },
    '100%': { 
      opacity: '1', 
      transform: 'translateY(0)', 
      filter: 'blur(0)' 
    }
  },
  'tactical-target': {
    '0%': { 
      transform: 'scale(1.2)', 
      borderColor: 'rgba(212,175,55,0.3)' 
    },
    '50%': { 
      transform: 'scale(1)', 
      borderColor: 'rgba(212,175,55,0.8)' 
    },
    '100%': { 
      transform: 'scale(1.2)', 
      borderColor: 'rgba(212,175,55,0.3)' 
    }
  },
  'tactical-shake': {
    '0%, 100%': { 
      transform: 'translateX(0)' 
    },
    '10%, 30%, 50%, 70%, 90%': { 
      transform: 'translateX(-2px)' 
    },
    '20%, 40%, 60%, 80%': { 
      transform: 'translateX(2px)' 
    }
  },
  'float': {
    '0%, 100%': { 
      transform: 'translateY(0) translateX(0)',
      opacity: '0.6'
    },
    '33%': { 
      transform: 'translateY(-10px) translateX(5px)',
      opacity: '1'
    },
    '66%': { 
      transform: 'translateY(5px) translateX(-3px)',
      opacity: '0.8'
    }
  },
  'pulse-slow': {
    '0%, 100%': { 
      opacity: '0.4',
      boxShadow: '0 0 0 0 rgba(212,175,55,0.4)'
    },
    '50%': { 
      opacity: '1',
      boxShadow: '0 0 0 4px rgba(212,175,55,0.1)'
    }
  },
  'scan-horizontal': {
    '0%': {
      transform: 'translateX(-100%)',
      opacity: '0'
    },
    '50%': {
      opacity: '1'
    },
    '100%': {
      transform: 'translateX(100%)',
      opacity: '0'
    }
  },
  'data-flow': {
    '0%': {
      transform: 'translateX(-100%)',
      opacity: '0'
    },
    '10%': {
      opacity: '0.3'
    },
    '50%': {
      opacity: '0.8'
    },
    '90%': {
      opacity: '0.3'
    },
    '100%': {
      transform: 'translateX(100%)',
      opacity: '0'
    }
  }
};

export const tacticalAnimations = {
  'tactical-scan': 'tactical-scan 5s linear infinite',
  'digital-glitch': 'digital-glitch 3s infinite',
  'radar-ping': 'radar-ping 2s infinite',
  'tactical-fade-in': 'tactical-fade-in 0.8s ease-out',
  'tactical-target': 'tactical-target 2s infinite ease-in-out',
  'tactical-shake': 'tactical-shake 0.5s infinite',
  'float': 'float 4s ease-in-out infinite',
  'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
  'scan-horizontal': 'scan-horizontal 4s linear infinite',
  'data-flow': 'data-flow 6s linear infinite'
};
