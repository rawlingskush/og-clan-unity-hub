
import React from 'react';
import { Check, Users, Award, Gamepad2, Globe, Zap } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';

const benefits = [
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Be part of a supportive Call of Duty Mobile family',
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: 'Join exclusive COD Mobile tournaments and events',
    color: 'from-ogclan/20 to-ogclan-light/10'
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    text: 'Opportunity to grow as a competitive COD Mobile player',
    color: 'from-green-500/20 to-green-600/10'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: 'Connect with passionate Call of Duty Mobile gamers in Cameroon',
    color: 'from-purple-500/20 to-purple-600/10'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: 'Help build the future of mobile gaming in Africa',
    color: 'from-orange-500/20 to-orange-600/10'
  }
];

const BenefitsList = () => {
  return (
    <div className="mb-8">
      <AnimatedContent animation="fade-in-up" delay={400}>
        <h4 className="text-xl font-semibold text-ogclan-light mb-6 flex items-center">
          <Check className="mr-2 h-5 w-5 text-ogclan" />
          What You'll Get
        </h4>
      </AnimatedContent>
      
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <AnimatedContent 
            key={index} 
            animation="slide-in-left"
            delay={500 + index * 150}
          >
            <li className={`group relative overflow-hidden rounded-xl border border-ogclan/20 transition-all duration-300 hover:border-ogclan/40 hover:shadow-lg hover:shadow-ogclan/10`}>
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-4 p-4 bg-black/60 backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ogclan/20 border border-ogclan/40 flex items-center justify-center group-hover:bg-ogclan/30 group-hover:border-ogclan/60 transition-all duration-300">
                  <span className="text-ogclan group-hover:text-ogclan-light transition-colors duration-300">
                    {benefit.icon}
                  </span>
                </div>
                <span className="text-gray-100 font-medium text-base md:text-lg group-hover:text-white transition-colors duration-300">
                  {benefit.text}
                </span>
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-ogclan group-hover:w-full transition-all duration-500 ease-out"></div>
            </li>
          </AnimatedContent>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
