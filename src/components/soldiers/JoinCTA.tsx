
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const JoinCTA = () => {
  return (
    <AnimatedContent animation="fade-in-up" className="mt-16" delay={500}>
      <div className="flex justify-center">
        <Link to="/#join">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black hover:bg-ogclan-light transition-all group px-8 py-6 text-lg animate-pulse-slow relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:-translate-x-full hover:before:animate-[scanner-line_1s_ease-in-out]"
          >
            <Users className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Join the Ranks
          </Button>
        </Link>
      </div>
    </AnimatedContent>
  );
};

export default JoinCTA;
