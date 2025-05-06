
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
  'tactical-scan': 'tactical-scan 5s linear infinite',
  'digital-glitch': 'digital-glitch 3s infinite',
  'radar-ping': 'radar-ping 2s infinite',
  'flip-3d': 'flip-3d 1s ease-in-out',
  'spotlight': 'spotlight 4s infinite',
  'tactical-fade-in': 'tactical-fade-in 0.8s ease-out',
  'tactical-target': 'tactical-target 2s infinite ease-in-out',
  'tactical-shake': 'tactical-shake 0.5s infinite'
};
