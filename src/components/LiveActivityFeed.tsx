import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Activity, Trophy, UserPlus, Zap, Clock, Users } from 'lucide-react';

const LiveActivityFeed = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const liveActivities = [
    {
      type: 'victory',
      user: 'KUSH & WIZARD',
      action: 'dominated Black Market',
      time: '2 minutes ago',
      icon: Trophy,
      color: 'text-green-400'
    },
    {
      type: 'join',
      user: 'New Recruit',
      action: 'joined OG Clan',
      time: '15 minutes ago', 
      icon: UserPlus,
      color: 'text-blue-400'
    },
    {
      type: 'achievement',
      user: 'DAMAGE',
      action: 'earned Suppression Master',
      time: '1 hour ago',
      icon: Zap,
      color: 'text-ogclan'
    },
    {
      type: 'battle',
      user: 'Squad Alpha',
      action: 'entered Battle Night',
      time: '2 hours ago',
      icon: Activity,
      color: 'text-red-400'
    }
  ];
  
  const onlineMembers = [
    { name: 'KUSH', status: 'In Battle', avatar: '/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png' },
    { name: 'WIZARD', status: 'Ready', avatar: '/lovable-uploads/f0ba0a92-ec7d-4f85-8303-dc5d3235dc22.png' },
    { name: 'DAMAGE', status: 'Training', avatar: '/lovable-uploads/d42c1ce9-cbcb-4da4-a96f-2ea17c701726.png' },
    { name: 'EXODUS', status: 'Ready', avatar: '/lovable-uploads/5bfd821e-f0b3-4f77-8754-6df282e60305.png' }
  ];
  
  return (
    <section className="py-12 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Background tactical elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/40 to-transparent animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Activity Feed */}
          <div className="lg:col-span-2">
            <AnimatedContent animation="fade-in-up">
              <div className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-6 hover:border-ogclan/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-ogclan/20 rounded-full">
                    <Activity className="w-5 h-5 text-ogclan animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-ogclan">Live Activity Feed</h3>
                  <div className="flex-1"></div>
                  <div className="text-sm text-ogclan-muted">
                    {currentTime.toLocaleTimeString()}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {liveActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-ogclan/5 border border-ogclan/20 rounded-xl hover:bg-ogclan/10 hover:border-ogclan/40 transition-all duration-300">
                      <div className="p-2 bg-black/60 rounded-full">
                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-ogclan-light">
                          <span className="font-semibold text-ogclan">{activity.user}</span> {activity.action}
                        </p>
                        <div className="flex items-center gap-2 text-ogclan-muted text-sm mt-1">
                          <Clock className="w-3 h-3" />
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Live indicator */}
                  <div className="flex items-center justify-center gap-2 py-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Live Feed Active</span>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
          
          {/* Online Members */}
          <div>
            <AnimatedContent animation="fade-in" delay={300}>
              <div className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-6 hover:border-ogclan/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-ogclan/20 rounded-full">
                    <Users className="w-5 h-5 text-ogclan" />
                  </div>
                  <h3 className="text-xl font-bold text-ogclan">Online Warriors</h3>
                  <div className="flex-1"></div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                    {onlineMembers.length} Online
                  </div>
                </div>
                
                <div className="space-y-3">
                  {onlineMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-ogclan/5 border border-ogclan/20 rounded-xl hover:bg-ogclan/10 transition-all duration-300">
                      <div className="relative">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-10 h-10 rounded-full border-2 border-ogclan/40"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-black rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-ogclan">{member.name}</p>
                        <p className="text-ogclan-muted text-sm">{member.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Quick stats */}
                <div className="mt-6 pt-4 border-t border-ogclan/20">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-ogclan">24</div>
                      <div className="text-ogclan-muted text-xs">Total Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ogclan">16</div>
                      <div className="text-ogclan-muted text-xs">Active Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;