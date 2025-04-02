
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import FeatureItem from './FeatureItem';
import CountdownTimer from './CountdownTimer';

interface EventFeature {
  id: number;
  title: string;
  description: string;
}

interface EventCardProps {
  features: EventFeature[];
}

const EventCard = ({ features }: EventCardProps) => {
  // Calculate next Sunday at 10:00 PM WAT (UTC+1)
  const getNextSunday = () => {
    const now = new Date();
    const daysUntilNextSunday = 7 - now.getDay();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + (daysUntilNextSunday === 0 ? 7 : daysUntilNextSunday));
    nextSunday.setHours(22, 0, 0, 0); // 10:00 PM
    return nextSunday;
  };

  return (
    <div className="glass-card p-4 sm:p-6 md:p-6 rounded-2xl relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border-ogclan/40">
      <div className="text-center mb-5 md:mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
          Next OG Battle Night Event
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-ogclan mr-2" />
            <span className="text-sm sm:text-base text-gray-300">Every Sunday</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-ogclan mr-2" />
            <span className="text-sm sm:text-base text-gray-300">10:00 PM WAT</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-ogclan mr-2" />
            <span className="text-sm sm:text-base text-gray-300">Clan Challenge Event</span>
          </div>
        </div>
        
        <div id="battle-night-timer" className="py-2">
          <CountdownTimer targetDate={getNextSunday()} />
        </div>
        
        <p className="text-ogclan-light text-lg sm:text-xl">
          Clan Wars: Prove Your Worth! 🔥
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature) => (
          <FeatureItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      
      <div className="mt-5 md:mt-6 text-center">
        <p className="text-xl md:text-2xl font-bold text-gradient-gold mb-3">
          "For the OGs, by the OGs. Let's dominate together!" 💪
        </p>
        <p className="text-sm sm:text-base text-gray-400 mb-4">
          Calling all clan masters! Bring your best squad to battle against the OG Clan and show us what you've got. The ultimate test of skill and teamwork awaits.
        </p>
        
        <a href="#join" className="btn-primary hover-effect">
          Challenge OG Clan
        </a>
      </div>
    </div>
  );
};

export default EventCard;
