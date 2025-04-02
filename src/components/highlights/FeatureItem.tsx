
import React from 'react';
import { Check, Award } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  isChallengeItem?: boolean;
}

const FeatureItem = ({ title, description, isChallengeItem = false }: FeatureItemProps) => {
  return (
    <div className={`flex ${isChallengeItem ? 'bg-ogclan/10 p-3 rounded-lg border border-ogclan/20 hover:border-ogclan/40 transition-all' : ''}`}>
      <div className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full ${isChallengeItem ? 'bg-ogclan/20' : 'bg-ogclan/10'} text-ogclan`}>
        {isChallengeItem ? <Award className="h-5 w-5" /> : <Check className="h-5 w-5" />}
      </div>
      <div className="ml-4">
        <h4 className={`text-lg font-semibold ${isChallengeItem ? 'text-ogclan' : 'text-ogclan-light'}`}>{title}</h4>
        <p className={`mt-1 ${isChallengeItem ? 'text-gray-300' : 'text-gray-400'}`}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
