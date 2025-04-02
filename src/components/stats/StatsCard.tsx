
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

const StatsCard = ({ title, value, icon, description }: StatsCardProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          animateValue(value);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [value]);
  
  const animateValue = (targetValue: string) => {
    // Check if value contains a "+" sign
    const hasPlus = targetValue.includes('+');
    const cleanValue = hasPlus ? targetValue.replace('+', '') : targetValue;
    
    // Check if value contains a "%" sign
    const hasPercent = targetValue.includes('%');
    const numericValue = parseFloat(hasPercent ? cleanValue.replace('%', '') : cleanValue);
    
    // If not a number, just set the value directly
    if (isNaN(numericValue)) {
      setDisplayValue(targetValue);
      return;
    }
    
    // Start animation from 0 to target value
    let startValue = 0;
    const duration = 1500; // ms
    const increment = numericValue / (duration / 16); // 16ms is approx one frame at 60fps
    
    const updateValue = () => {
      startValue += increment;
      if (startValue >= numericValue) {
        startValue = numericValue;
        // Add back any suffix/prefix that was in original value
        let formattedValue = String(startValue);
        if (hasPercent) formattedValue += '%';
        if (hasPlus) formattedValue += '+';
        setDisplayValue(formattedValue);
        return;
      }
      
      // Format the current value as an integer or decimal based on original value
      let formattedValue = Number.isInteger(numericValue) 
        ? Math.floor(startValue).toString()
        : startValue.toFixed(1);
        
      setDisplayValue(formattedValue);
      requestAnimationFrame(updateValue);
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <Card 
      ref={cardRef}
      className="glass-card h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-15px_rgba(212,175,55,0.3)]"
    >
      <CardContent className="p-3 md:p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 md:mb-4 p-2 md:p-3 rounded-full bg-ogclan/10 w-fit">
            {icon}
          </div>
          
          <h3 className="text-sm md:text-lg font-bold text-ogclan-light mb-0.5 md:mb-1">
            {title}
          </h3>
          
          <div className="text-2xl md:text-4xl font-bold text-ogclan mb-1 md:mb-2">
            {displayValue.includes('+') ? displayValue.replace('+', '') + '+' : displayValue}
          </div>
          
          <p className="text-xs md:text-sm text-gray-400">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
