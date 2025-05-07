
import React, { useState } from 'react';
import AnimatedContent from './AnimatedContent';
import { useIsMobile } from '@/hooks/use-mobile';
import { Shield, Target, Crosshair, Calendar, Users } from 'lucide-react';
import CountdownTimer from './highlights/CountdownTimer';

// Battle night data
const battleNights = [
  {
    id: 1,
    title: "OG Battle Night #42",
    date: new Date(2025, 5, 15, 20, 0), // June 15, 2025, 8:00 PM
    image: "/lovable-uploads/f9e1e0ff-f9d3-42c1-8cff-a8cafd454eaf.png",
    participants: 16,
    prize: "50,000 COD Points",
    description: "Join our flagship weekly tournament and prove your skills in intense 5v5 battles."
  },
  {
    id: 2,
    title: "Sniper Elite Showdown",
    date: new Date(2025, 5, 22, 19, 0), // June 22, 2025, 7:00 PM
    image: "/lovable-uploads/a15dcbad-a5da-4907-9f61-2bb0814ccf9a.png",
    participants: 12,
    prize: "25,000 COD Points",
    description: "Snipers only. Long-range precision required. One shot, one kill."
  },
  {
    id: 3,
    title: "Tactical Domination",
    date: new Date(2025, 5, 28, 21, 0), // June 28, 2025, 9:00 PM
    image: "/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png",
    participants: 20,
    prize: "35,000 COD Points",
    description: "Strategic objective-based combat. Teamwork essential. Capture and hold."
  }
];

const BattleNightSection = () => {
  const isMobile = useIsMobile();
  const [selectedEvent, setSelectedEvent] = useState(battleNights[0]);
  
  return (
    <section id="og-battle-night" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Gold radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ogclan/10 rounded-full blur-3xl opacity-30"></div>
      
      {/* Tactical scanner lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-ogclan/10"></div>
        <div className="absolute top-0 left-0 h-full w-[1px] bg-ogclan/10 animate-[tactical-scan_10s_linear_infinite]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 relative inline-block">
              OG BATTLE NIGHT
              {/* Tactical decoration */}
              <div className="absolute -bottom-3 left-0 w-full h-[2px]">
                <div className="absolute inset-0 bg-ogclan/30"></div>
                <div className="absolute top-0 left-0 h-full w-1/3 bg-ogclan/80 animate-[scanner-line_3s_linear_infinite]"></div>
              </div>
            </h2>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in" delay={300}>
            <p className="text-xl text-ogclan max-w-3xl mx-auto mt-6">
              Our premier weekly tournament where legends are made and skills are tested
            </p>
          </AnimatedContent>
        </div>
        
        {/* Enhanced Battle Night Events */}
        <div className="grid lg:grid-cols-7 gap-6 items-start mt-12">
          {/* Left side: Event selection */}
          <div className="lg:col-span-2">
            <AnimatedContent animation="slide-in-left">
              <h3 className="font-orbitron text-xl text-ogclan mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </h3>
              
              <div className="space-y-3">
                {battleNights.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className={`cursor-pointer relative overflow-hidden transition-all duration-300 p-4 border ${
                      selectedEvent.id === event.id 
                        ? 'border-ogclan bg-black/70' 
                        : 'border-ogclan/30 bg-black/30 hover:border-ogclan/60'
                    }`}
                  >
                    {/* Corner tactical decorations */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/60"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ogclan/60"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ogclan/60"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/60"></div>
                    
                    {/* Scanning line effect when selected */}
                    {selectedEvent.id === event.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-ogclan to-transparent animate-[tactical-scan_3s_linear_infinite]"></div>
                      </div>
                    )}
                    
                    <h4 className="font-medium text-white">{event.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {event.date.toLocaleDateString()} - {event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-ogclan/80">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{event.participants} teams</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </div>
          
          {/* Right side: Event details */}
          <div className="lg:col-span-5 relative">
            <AnimatedContent animation="fade-in-up">
              <div className="relative border border-ogclan/20 bg-black/70 backdrop-blur-sm overflow-hidden group">
                {/* Background image with dimmed overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title} 
                    className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60"></div>
                </div>
                
                {/* Tactical corner elements */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-ogclan/60"></div>
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-ogclan/60"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-ogclan/60"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-ogclan/60"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start">
                    {/* Event title and details */}
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-3xl font-orbitron text-gradient-gold mb-3">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-gray-300 mb-4 max-w-xl">
                        {selectedEvent.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm">
                        <Shield className="h-4 w-4 text-ogclan" />
                        <span className="text-ogclan">Prize pool:</span>
                        <span className="text-white">{selectedEvent.prize}</span>
                      </div>
                    </div>
                    
                    {/* Countdown timer */}
                    <div className="border border-ogclan/30 bg-black/70 p-4">
                      <div className="text-center mb-2">
                        <span className="text-sm text-ogclan">Battle begins in:</span>
                      </div>
                      <CountdownTimer targetDate={selectedEvent.date} />
                    </div>
                  </div>
                  
                  {/* Registration CTA */}
                  <div className="mt-8">
                    <button className="bg-gradient-to-r from-ogclan-dark to-ogclan hover:from-ogclan hover:to-ogclan-light text-black font-medium px-8 py-3 transition-all duration-300 group relative overflow-hidden">
                      {/* Tactical scanner line effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[scanner-line_1s_ease-out]"></div>
                      </div>
                      
                      <span className="relative z-10 flex items-center">
                        <Target className="mr-2 h-5 w-5" />
                        Register Now
                      </span>
                      
                      {/* Tactical corner elements */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/30"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/30"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/30"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/30"></div>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
        
        {/* Additional tactical decoration */}
        <div className="relative h-px w-full max-w-xl mx-auto mt-16">
          <div className="absolute inset-0 bg-ogclan/20"></div>
          <div className="absolute top-0 left-0 h-full w-1/3 bg-ogclan/80 animate-[scanner-line_3s_linear_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default BattleNightSection;
