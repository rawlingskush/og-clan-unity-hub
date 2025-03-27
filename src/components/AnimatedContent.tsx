
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold
      }
    );

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

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;

