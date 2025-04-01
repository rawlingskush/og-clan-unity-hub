
import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  if (isExpired) {
    return (
      <div className="text-center p-4 rounded-lg bg-ogclan/10 backdrop-blur-sm border border-ogclan/20 shadow-inner">
        <p className="text-ogclan text-xl font-semibold flex items-center justify-center">
          <Clock className="mr-2 h-5 w-5" />
          Event has started!
        </p>
      </div>
    );
  }

  return (
    <div className="countdown-container w-full mb-8">
      <div className="text-center mb-2">
        <p className="text-ogclan-light text-lg font-medium flex items-center justify-center">
          <Clock className={`${isMobile ? 'mr-1 h-4 w-4' : 'mr-2 h-5 w-5'} animate-pulse`} />
          {isMobile ? "Next Battle In:" : "Next Battle Night In:"}
        </p>
      </div>
      
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-4 gap-2'} text-center`}>
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds }
        ].map((item, index) => (
          <div 
            key={item.label} 
            className={`countdown-item glass-effect p-2 ${isMobile ? 'mb-3' : 'p-3'} rounded-lg border-ogclan/30 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-ogclan/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-ogclan`}>
                {formatNumber(item.value)}
              </div>
              <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} uppercase tracking-wider text-ogclan-light/80`}>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
