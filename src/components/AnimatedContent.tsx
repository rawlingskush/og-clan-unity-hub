
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContentProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const AnimatedContent = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1
}: AnimatedContentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-[fade-in_0.7s_ease-out,slide-in-up_0.7s_ease-out]';
      case 'fade-in':
        return 'animate-[fade-in_0.7s_ease-out]';
      case 'scale-in':
        return 'animate-[fade-in_0.7s_ease-out,scale-in_0.7s_ease-out]';
      case 'slide-in-right':
        return 'animate-[fade-in_0.7s_ease-out,slide-in-right_0.7s_ease-out]';
      case 'slide-in-left':
        return 'animate-[fade-in_0.7s_ease-out,slide-in-left_0.7s_ease-out]';
      default:
        return 'animate-[fade-in_0.7s_ease-out]';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }} 
      className={cn(
        getAnimationClass(),
        "transform-gpu will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
