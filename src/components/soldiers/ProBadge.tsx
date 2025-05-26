
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
        absolute top-2 right-2 z-10
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
        text-black font-bold text-xs px-2 py-1
        border border-yellow-300
        shadow-lg shadow-yellow-500/20
        flex items-center gap-1
        transition-all duration-300
        hover:shadow-xl hover:shadow-yellow-500/30
        ${className}
      `}
    >
      <Crown className="h-3 w-3" />
      PRO
    </Badge>
  );
};

export default ProBadge;
