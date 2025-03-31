
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContentProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-right' | 'slide-in-left' | 'bounce';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimatedContent = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
  once = true
}: AnimatedContentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setIsVisible(false);
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
  }, [threshold, once]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-[fade-in_0.8s_ease-out,slide-in-up_0.8s_ease-out]';
      case 'fade-in':
        return 'animate-[fade-in_0.8s_ease-out]';
      case 'scale-in':
        return 'animate-[fade-in_0.8s_ease-out,scale-in_0.8s_ease-out]';
      case 'slide-in-right':
        return 'animate-[fade-in_0.8s_ease-out,slide-in-right_0.8s_ease-out]';
      case 'slide-in-left':
        return 'animate-[fade-in_0.8s_ease-out,slide-in-left_0.8s_ease-out]';
      case 'bounce':
        return 'animate-[fade-in_0.8s_ease-out] animate-bounce';
      default:
        return 'animate-[fade-in_0.8s_ease-out]';
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
