
import React from 'react';
import { CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface SoldierCardFooterProps {
  name: string;
  tiktokUrl: string;
}

const SoldierCardFooter = ({ name, tiktokUrl }: SoldierCardFooterProps) => {
  return (
    <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20">
      <a 
        href={tiktokUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors"
        aria-label={`Follow ${name} on TikTok`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* TikTok Icon */}
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
        </svg>
        <span>Follow on TikTok</span>
        <ExternalLink size={14} />
      </a>
    </CardFooter>
  );
};

export default SoldierCardFooter;
