
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SoldierCardFooterProps {
  tiktokUrl: string;
  name: string;
}

const SoldierCardFooter = ({ tiktokUrl, name }: SoldierCardFooterProps) => {
  return (
    <div className="px-4 pb-4 card-footer">
      <a 
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors group"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
        <span>Follow {name.split(' ')[1] || name} on TikTok</span>
      </a>
    </div>
  );
};

export default SoldierCardFooter;
