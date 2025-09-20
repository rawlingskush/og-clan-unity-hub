import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Activity, Clock, Users, Trophy, Target, Zap, 
  Gamepad2, Calendar, TrendingUp, Play, Eye,
  Crosshair, Shield, Sword
} from 'lucide-react';

const BattleCommandCenter = () => {
  const [liveStats, setLiveStats] = useState({
    activeMembers: 23,
    ongoingMatches: 5,
    todayWins: 12,
    winStreak: 7
  });

  const upcomingEvents = [
    {
      title: "Battle Night Royale",
      time: "Tonight 8PM GMT",
      participants: 32,
      prize: "5000 CP",
      status: "Open Registration"
    },
    {
      title: "Alcatraz Domination", 
      time: "Tomorrow 6PM GMT",
      participants: 48,
      prize: "Special Rewards", 
      status: "Members Only"
    },
    {
      title: "Black Market Hot Drop",
      time: "Weekend Special",
      participants: 16,
      prize: "Legendary Skin",
      status: "Coming Soon"
    }
  ];

  const recentActivity = [
    { user: "Kush", action: "Achieved Victory Royale", time: "2 mins ago", type: "victory" },
    { user: "Wizard", action: "Joined Battle Night", time: "5 mins ago", type: "join" },
    { user: "Exodus", action: "New Personal Best: 24 Kills", time: "12 mins ago", type: "record" },
    { user: "Damage", action: "Completed Weekly Challenge", time: "15 mins ago", type: "challenge" },
    { user: "Starlight", action: "Ranked up to Legendary", time: "23 mins ago", type: "rank" },
    { user: "Botgirl", action: "Won Alcatraz Match", time: "35 mins ago", type: "victory" }
  ];

  const performanceMetrics = [
    { title: "Win Rate", value: "87%", change: "+5%", trend: "up", color: "text-green-400" },
    { title: "Avg K/D", value: "2.4", change: "+0.3", trend: "up", color: "text-blue-400" },
    { title: "Team Coordination", value: "94%", change: "+2%", trend: "up", color: "text-ogclan" },
    { title: "Map Control", value: "91%", change: "-1%", trend: "down", color: "text-purple-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        activeMembers: prev.activeMembers + Math.floor(Math.random() * 3 - 1),
        ongoingMatches: Math.max(0, prev.ongoingMatches + Math.floor(Math.random() * 3 - 1)),
        todayWins: prev.todayWins + Math.floor(Math.random() * 2),
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="command-center" className="py-20 bg-gradient-to-b from-black via-tactical-black to-tactical-darkgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-2 text-ogclan border-ogclan/50 bg-black/50 mb-6">
            <Activity className="mr-2 h-4 w-4 animate-pulse" />
            LIVE COMMAND CENTER
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-ogclan to-blue-400 mb-6">
            BATTLE STATUS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time updates from the frontlines - track our warriors, ongoing battles, and upcoming missions
          </p>
        </motion.div>

        {/* Live Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, label: "Active Warriors", value: liveStats.activeMembers, color: "text-blue-400" },
            { icon: Gamepad2, label: "Live Matches", value: liveStats.ongoingMatches, color: "text-red-400" },
            { icon: Trophy, label: "Today's Wins", value: liveStats.todayWins, color: "text-ogclan" },
            { icon: Target, label: "Win Streak", value: liveStats.winStreak, color: "text-green-400" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black/60 border border-ogclan/30 rounded-xl p-6 text-center hover:border-ogclan/60 transition-all duration-300"
              >
                <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-2 animate-pulse" />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan">
                  <Calendar className="h-5 w-5" />
                  Upcoming Battles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 bg-black/40 rounded-lg border border-ogclan/20 hover:border-ogclan/40 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white group-hover:text-ogclan transition-colors">
                        {event.title}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          event.status === 'Open Registration' ? 'text-green-400 border-green-400/50' :
                          event.status === 'Members Only' ? 'text-ogclan border-ogclan/50' :
                          'text-gray-400 border-gray-400/50'
                        }`}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.participants}
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-400">Prize: </span>
                      <span className="text-ogclan font-semibold">{event.prize}</span>
                    </div>
                  </motion.div>
                ))}
                
                <Button className="w-full bg-ogclan hover:bg-ogclan-light text-black font-semibold">
                  <Zap className="mr-2 h-4 w-4" />
                  Join Next Battle
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan">
                  <Activity className="h-5 w-5" />
                  Live Activity
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {recentActivity.map((activity, index) => {
                    const getIcon = () => {
                      switch (activity.type) {
                        case 'victory': return <Trophy className="h-4 w-4 text-ogclan" />;
                        case 'join': return <Users className="h-4 w-4 text-blue-400" />;
                        case 'record': return <Target className="h-4 w-4 text-red-400" />;
                        case 'challenge': return <Sword className="h-4 w-4 text-purple-400" />;
                        case 'rank': return <Shield className="h-4 w-4 text-green-400" />;
                        default: return <Activity className="h-4 w-4 text-gray-400" />;
                      }
                    };

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-black/40 transition-colors"
                      >
                        <div className="mt-1">
                          {getIcon()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white">
                            <span className="font-semibold text-ogclan">{activity.user}</span>{' '}
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-black/80 to-tactical-darkgray border-ogclan/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ogclan">
                  <TrendingUp className="h-5 w-5" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{metric.title}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span>
                        <span className={`text-xs ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-black/60 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.value }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          metric.color.includes('green') ? 'from-green-600 to-green-400' :
                          metric.color.includes('blue') ? 'from-blue-600 to-blue-400' :
                          metric.color.includes('ogclan') ? 'from-ogclan-dark to-ogclan' :
                          'from-purple-600 to-purple-400'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-ogclan/20">
                  <Button variant="outline" className="w-full text-ogclan border-ogclan/50 hover:bg-ogclan/10">
                    <Eye className="mr-2 h-4 w-4" />
                    View Detailed Stats
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BattleCommandCenter;