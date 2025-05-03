
import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const RecruitmentNote = () => {
  return (
    <AnimatedContent animation="fade-in" delay={300}>
      <div className="max-w-3xl mx-auto my-12 px-4">
        <Alert className="bg-black/70 border border-ogclan/30 shadow-lg">
          <div className="flex items-start">
            <Shield className="h-5 w-5 text-ogclan mr-3 mt-1" />
            <AlertDescription className="text-gray-300">
              <h4 className="font-semibold text-white mb-1">⚠️ Note to Recruits:</h4>
              <p>
                Not seeing your profile yet? It means you are new to the clan but Don't worry — we're watching. Every match, every move, every moment counts.
                Once your name echoes through the lobby, we'll make sure it lives on here too.
              </p>
              <p className="mt-2 font-medium text-ogclan">
                Keep grinding. Your moment is coming. 💥
              </p>
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </AnimatedContent>
  );
};

export default RecruitmentNote;
