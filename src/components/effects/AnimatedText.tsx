
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'letter-reveal' | 'fade-in' | 'slide-up' | 'bounce';
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  animation = 'letter-reveal',
  delay = 0
}) => {
  // Split text into individual characters
  const characters = text.split('');
  
  return (
    <h1 className={cn("inline-block", className)}>
      {characters.map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block transition-all will-change-transform",
            animation === 'letter-reveal' && "animate-[letter-reveal_0.5s_ease_forwards]",
            animation === 'fade-in' && "animate-[fade-in_0.5s_ease_forwards]",
            animation === 'slide-up' && "animate-[slide-in-up_0.5s_ease_forwards]",
            animation === 'bounce' && "animate-[letter-bounce_0.5s_ease_forwards]"
          )}
          style={{
            animationDelay: `${delay + index * 50}ms`,
            opacity: 0,
            transform: animation === 'slide-up' ? 'translateY(20px)' : 
                       animation === 'letter-reveal' ? 'translateY(15px) translateX(10px)' : 'none'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
