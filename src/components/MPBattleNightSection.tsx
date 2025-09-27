import React from 'react';
import { Target, Crosshair, Shield, Zap, Calendar, Clock } from 'lucide-react';
import AnimatedContent from './AnimatedContent';

const MPBattleNightSection = () => {
  const mpModes = [
    {
      name: "Hard-Point",
      icon: Target,
      description: "Control the zone, dominate the map",
      color: "text-red-400"
    },
    {
      name: "Search & Destroy",
      icon: Crosshair,
      description: "One life, maximum precision",
      color: "text-orange-400"
    },
    {
      name: "Domination",
      icon: Shield,
      description: "Capture, hold, conquer",
      color: "text-blue-400"
    },
    {
      name: "More Modes",
      icon: Zap,
      description: "Endless tactical challenges",
      color: "text-purple-400"
    }
  ];

  // Calculate next Saturday at 10:00 PM WAT
  const getNextSaturday = () => {
    const now = new Date();
    const daysUntilSaturday = (6 - now.getDay() + 7) % 7;
    const nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + (daysUntilSaturday === 0 ? 7 : daysUntilSaturday));
    nextSaturday.setHours(22, 0, 0, 0);
    return nextSaturday;
  };

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = getNextSaturday().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500"></div>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-600 tracking-tight">
                MP BATTLE NIGHT
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-red-500/20">
                <Calendar className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-gray-300 font-semibold">Every Saturday</span>
              </div>
              <div className="flex items-center bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-orange-500/20">
                <Clock className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-gray-300 font-semibold">10:00 PM WAT</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pure <span className="text-red-400 font-bold">tactical warfare</span> where precision meets strategy. 
              Join the <span className="text-orange-400 font-bold">OG Clan MP grind</span> every Saturday night.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-red-500/30 min-w-[80px]">
                  <div className="text-2xl md:text-3xl font-bold text-red-400">{value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* MP Modes Grid */}
        <AnimatedContent animation="fade-in-up" delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mpModes.map((mode, index) => {
              const IconComponent = mode.icon;
              return (
                <div key={mode.name} className="group">
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-full bg-black/60 border border-gray-600/50 group-hover:border-red-500/50 transition-colors duration-300">
                          <IconComponent className={`h-6 w-6 ${mode.color}`} />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 text-center">{mode.name}</h3>
                      <p className="text-sm text-gray-400 text-center">{mode.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedContent>

        {/* Call to Action */}
        <AnimatedContent animation="fade-in-up" delay={400}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600/10 via-orange-600/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
                Ready for Tactical Warfare?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join OG Clan's elite multiplayer squad every Saturday night. 
                Master the art of tactical gameplay across all competitive modes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#join" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg hover:from-red-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Join MP Squad
                </a>
                <a 
                  href="#soldiers" 
                  className="inline-flex items-center px-8 py-3 bg-black/60 backdrop-blur-sm text-red-400 font-bold rounded-lg border border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                >
                  View Warriors
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default MPBattleNightSection;