
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  showValue?: boolean;
  duration?: number;
}

const AnimatedProgressBar = ({ 
  value, 
  max = 100, 
  className, 
  barClassName,
  showValue = false,
  duration = 1500
}: AnimatedProgressBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateProgress();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, hasAnimated]);

  const animateProgress = () => {
    let startValue = 0;
    const increment = percentage / (duration / 16);
    
    const updateValue = () => {
      startValue += increment;
      if (startValue >= percentage) {
        setAnimatedValue(percentage);
        return;
      }
      setAnimatedValue(startValue);
      requestAnimationFrame(updateValue);
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <div 
      ref={progressRef}
      className={cn(
        "relative w-full bg-gray-700 rounded-full overflow-hidden",
        className
      )}
    >
      <div 
        className={cn(
          "h-full bg-gradient-to-r from-ogclan-dark to-ogclan transition-all duration-300 animate-data-reveal",
          barClassName
        )}
        style={{ width: `${animatedValue}%` }}
      />
      {showValue && (
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
          {Math.round(animatedValue)}%
        </span>
      )}
    </div>
  );
};

export default AnimatedProgressBar;
