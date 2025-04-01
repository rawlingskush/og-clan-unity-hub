
import React from 'react';
import { Check } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-ogclan/10 text-ogclan">
        <Check className="h-5 w-5" />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-ogclan-light">{title}</h4>
        <p className="mt-1 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
