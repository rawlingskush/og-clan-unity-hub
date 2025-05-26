
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Crown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProBadgeProps {
  className?: string;
}

const ProBadge = ({ className }: ProBadgeProps) => {
  return (
    <Badge 
      className={cn(
        "absolute top-2 right-2 z-20 flex items-center gap-1 px-2 py-1",
        "bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600",
        "text-black font-bold text-xs border-2 border-yellow-400",
        "shadow-lg shadow-yellow-500/50",
        "animate-pulse-slow",
        className
      )}
    >
      <Crown className="w-3 h-3" fill="currentColor" />
      PRO
    </Badge>
  );
};

export default ProBadge;
