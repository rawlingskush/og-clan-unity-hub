
import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Target, Zap } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const RecruitmentNote = () => {
  return (
    <AnimatedContent animation="fade-in" delay={300}>
      <div className="max-w-4xl mx-auto my-16 px-4">
        <div className="relative">
          {/* Main Alert Container */}
          <Alert className="bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 border-2 border-ogclan/40 shadow-2xl shadow-ogclan/20 backdrop-blur-sm">
            {/* Tactical scanner lines */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[scanner-line_4s_linear_infinite]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ogclan/60 to-transparent animate-[scanner-line_6s_linear_infinite_reverse]"></div>
            
            {/* Corner tactical elements */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-ogclan/60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-ogclan/60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-ogclan/60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-ogclan/60"></div>

            <div className="flex flex-col md:flex-row items-start gap-4 p-6">
              {/* Icon Section */}
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <div className="relative">
                  <Shield className="h-8 w-8 text-ogclan animate-pulse-slow" />
                  <div className="absolute inset-0 bg-ogclan/20 rounded-full animate-ping"></div>
                </div>
                <Target className="h-6 w-6 text-ogclan/80 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
                <Zap className="h-6 w-6 text-ogclan/80 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content Section */}
              <AlertDescription className="text-gray-200 flex-1">
                <div className="mb-4">
                  <h4 className="font-bold text-xl text-white mb-3 bg-gradient-to-r from-ogclan to-yellow-400 bg-clip-text text-transparent">
                    🎯 RECRUITMENT STATUS: ACTIVE
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="text-ogclan font-semibold">New recruits detected!</span> Your profile isn't visible yet? 
                      That means you're fresh to our elite squad. Every battle, every clutch moment, every victory is being monitored.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Once your tactical prowess echoes through the battlefield and your name becomes legend in our ranks, 
                      your profile will be immortalized here among our finest warriors.
                    </p>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-gradient-to-r from-ogclan/10 to-yellow-500/10 border border-ogclan/30 rounded-lg p-4 mt-4">
                  <p className="font-bold text-ogclan text-lg mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    MISSION BRIEFING
                  </p>
                  <p className="text-gray-300 mb-2">
                    Keep dominating the battlefield. Your moment of recognition is approaching.
                  </p>
                  <p className="font-semibold text-ogclan text-lg tracking-wide">
                    💥 STAY LOCKED AND LOADED! 💥
                  </p>
                </div>
              </AlertDescription>
            </div>

            {/* Bottom tactical grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 pointer-events-none rounded-lg"></div>
          </Alert>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default RecruitmentNote;
