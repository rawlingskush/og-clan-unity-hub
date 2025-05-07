
import React from 'react';
import { Check, Shield, Star, Users } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

// Benefits data
const benefits = [
  {
    icon: Shield,
    title: "Elite Clan Status",
    description: "Join a recognized team with tournament history and consistent performance"
  },
  {
    icon: Users,
    title: "Strong Community",
    description: "Connect with like-minded players who share your passion for excellence"
  },
  {
    icon: Star,
    title: "Skill Development",
    description: "Regular training sessions and gameplay reviews to enhance your abilities"
  },
  {
    icon: Check,
    title: "Tournament Opportunities",
    description: "Regular chances to compete in official and community tournaments"
  }
];

const BenefitsList = () => {
  return (
    <div className="space-y-6">
      {benefits.map((benefit, index) => (
        <AnimatedContent 
          key={index}
          animation="fade-in-left" 
          delay={300 + index * 150}
          className="flex items-start"
        >
          <div className="mr-4 p-2 bg-ogclan/10 rounded-full border border-ogclan/30">
            <benefit.icon className="h-5 w-5 text-ogclan" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
            <p className="text-gray-300 mt-1">{benefit.description}</p>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default BenefitsList;
