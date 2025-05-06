
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';

const JoinCTA = () => {
  const isMobile = useIsMobile();
  
  return (
    <AnimatedContent animation="fade-in-up" className="mt-16" delay={500}>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link to="/#join">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg animate-pulse-slow relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:animate-[scanner-line_1s_ease-in-out]"
          >
            <ArrowRight className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Join the Ranks
          </Button>
        </Link>
        
        <Link to="/soldiers">
          <Button 
            size="lg" 
            variant="outline"
            className="border-tactical-highlight/60 bg-black/70 text-tactical-highlight hover:bg-black/90 hover:text-tactical-highlight hover:border-tactical-highlight transition-all group px-6 py-6 text-lg"
          >
            <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Command Unit Below
          </Button>
        </Link>
      </div>
    </AnimatedContent>
  );
};

export default JoinCTA;
