
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

interface ProBadgeProps {
  className?: string;
}

const ProBadge = ({ className = "" }: ProBadgeProps) => {
  return (
    <Badge 
      className={`
        absolute top-1 right-1 z-10
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
        text-black font-semibold text-[10px] px-1.5 py-0.5
        border border-yellow-300
        shadow-md shadow-yellow-500/15
        flex items-center gap-0.5
        transition-all duration-300
        hover:shadow-lg hover:shadow-yellow-500/25
        ${className}
      `}
    >
      <Crown className="h-2.5 w-2.5" />
      PRO
    </Badge>
  );
};

export default ProBadge;
