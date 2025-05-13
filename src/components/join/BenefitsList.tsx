
import React from 'react';
import { Check, Users, Award, Gamepad2 } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';

const benefits = [
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Be part of a supportive Call of Duty Mobile family'
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: 'Join exclusive COD Mobile tournaments and events'
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    text: 'Opportunity to grow as a competitive COD Mobile player'
  },
  {
    icon: <Check className="w-5 h-5" />,
    text: 'Connect with passionate Call of Duty Mobile gamers in Cameroon'
  },
  {
    icon: <Check className="w-5 h-5" />,
    text: 'Help build the future of mobile gaming in Africa'
  }
];

const BenefitsList = () => {
  return (
    <ul className="space-y-4 mb-8">
      {benefits.map((benefit, index) => (
        <AnimatedContent 
          key={index} 
          animation="slide-in-left"
          delay={300 + index * 150}
        >
          <li className="flex items-center gap-3 bg-ogclan/5 p-3 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ogclan/10 flex items-center justify-center">
              {benefit.icon}
            </span>
            <span className="text-gray-700 font-medium">{benefit.text}</span>
          </li>
        </AnimatedContent>
      ))}
    </ul>
  );
};

export default BenefitsList;
