
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, ArrowRight, Shield } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const JoinCTA = () => {
  const isMobile = useIsMobile();
  const [isShimmering, setIsShimmering] = useState(false);
  
  // Add shimmer effect at intervals to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      setIsShimmering(true);
      const timeout = setTimeout(() => {
        setIsShimmering(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedContent animation="fade-in-up" className="mt-16" delay={500}>
      <div className="relative">
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 -z-10 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/#join">
                  <Button 
                    size="lg" 
                    className={`bg-gradient-to-r from-ogclan-dark to-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:animate-[scanner-line_1s_ease-in-out] ${
                          isShimmering ? 'animate-holographic-shimmer' : 'animate-pulse-slow'
                        }`}
                  >
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:animate-tactical-shake" />
                    <span className={isShimmering ? 'animate-tactical-fade-in' : ''}>Join the Ranks</span>
                    
                    {/* Tactical design elements */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-tactical-highlight"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-tactical-highlight"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-tactical-highlight"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-tactical-highlight"></span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-black/90 border-ogclan/30 text-ogclan">
                Join the elite OG Clan team
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link to="/soldiers">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-tactical-highlight/60 bg-black/70 text-tactical-highlight hover:bg-black/90 hover:text-tactical-highlight hover:border-tactical-highlight transition-all group px-6 py-6 text-lg relative"
                >
                  <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  <span className="relative">
                    Command Unit Below
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ogclan group-hover:w-full transition-all duration-300"></span>
                  </span>
                  
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
                    <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/50 to-transparent animate-tactical-scan"></div>
                  </div>
                </Button>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Elite Tactical Unit</h4>
                  <p className="text-sm">
                    View the complete roster of OG Clan's elite soldiers and their combat specializations.
                  </p>
                  <div className="flex items-center pt-2">
                    <Shield className="h-4 w-4 mr-1 text-ogclan" />
                    <span className="text-xs text-muted-foreground">
                      {new Date().getFullYear()} Active Combat Units
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Tactical scanner line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-ogclan/10">
          <div className="absolute h-full w-1/4 bg-ogclan/50 animate-[scanner-line_4s_linear_infinite]"></div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default JoinCTA;
