
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
    <div className="glass-card p-8 rounded-2xl relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border-ogclan/40">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-4">
          Next OG Battle Night Event
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-ogclan mr-2" />
            <span className="text-gray-300">Every Sunday</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-ogclan mr-2" />
            <span className="text-gray-300">10:00 PM WAT</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-ogclan mr-2" />
            <span className="text-gray-300">Clan Challenge Event</span>
          </div>
        </div>
        
        <CountdownTimer targetDate={getNextSunday()} />
        
        <p className="text-ogclan-light text-xl">
          Clan Wars: Prove Your Worth! 🔥
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-2xl font-bold text-gradient-gold mb-4">
          "For the OGs, by the OGs. Let's dominate together!" 💪
        </p>
        <p className="text-gray-400 mb-6">
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
