
import React from 'react';
import { CommandMember } from '@/types/commandUnit';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield } from 'lucide-react';

interface CommandUnitCardProps {
  member: CommandMember;
}

const CommandUnitCard = ({ member }: CommandUnitCardProps) => {
  return (
    <Card className="bg-black/70 border-gray-700 hover:border-ogclan/50 transition-all duration-300 overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-black/60 to-black/80 pointer-events-none"></div>
      
      <CardHeader className="relative z-10 flex flex-row items-center space-y-0 pb-2 pt-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-gray-700 bg-black">
            {member.imageUrl ? (
              <AvatarImage src={member.imageUrl} alt={member.name} />
            ) : (
              <AvatarFallback className="bg-gray-800 text-ogclan">
                <Shield className="h-6 w-6" />
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm font-medium text-ogclan">{member.title}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-2">
        <p className="text-gray-300 text-sm">{member.bio}</p>
      </CardContent>
      
      {/* Subtle gold accent line at bottom */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-ogclan/30 to-transparent absolute bottom-0 left-0"></div>
    </Card>
  );
};

export default CommandUnitCard;
