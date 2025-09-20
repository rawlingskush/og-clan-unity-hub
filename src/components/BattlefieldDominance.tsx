import React, { useState } from 'react';
import { Target, Crosshair, Shield, Zap, Trophy, Users, Star, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StatsCard from './stats/StatsCard';
import PerformanceChart from './stats/PerformanceChart';
import ak117GrimEnding from '../assets/ak117-grim-ending.png';

const BattlefieldDominance = () => {
  const [activeTab, setActiveTab] = useState('loadouts');

  const signatureLoadouts = [
    {
      id: 'ak117',
      name: 'AK117 - Grim Ending',
      category: 'Assault Rifle', 
      description: 'Master-tier configuration with optimal range and precision. Features OWC attachments for superior battlefield performance.',
      icon: <Crosshair className="w-8 h-8" />,
      weaponImage: ak117GrimEnding,
      attachments: [
        'OWC Light Compensator',
        'OWC Marksman', 
        'Tactical Foregrip A',
        '40 Round Extended Mag'
      ],
      stats: {
        damage: 76,
        range: 58,
        mobility: 70,
        accuracy: 69,
        fireRate: 76,
        control: 54
      },
      users: ['WIZARD', 'LAMENACE', 'SHINOBI', 'DHAMER', 'PINKY'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'oden',
      name: 'Oden',
      category: 'Assault Rifle',
      description: 'Heavy-hitting assault rifle perfect for breaking enemy lines',
      icon: <Target className="w-8 h-8" />,
      stats: {
        damage: 95,
        range: 88,
        mobility: 65,
        accuracy: 82
      },
      users: ['KUSH'],
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'krm262',
      name: 'KRM-262',
      category: 'Shotgun',
      description: 'Close-quarters devastation for room clearing',
      icon: <Shield className="w-8 h-8" />,
      stats: {
        damage: 98,
        range: 45,
        mobility: 70,
        accuracy: 65
      },
      users: ['DAMAGE', 'EXODUS', 'MIKKI'],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'fennec',
      name: 'FENNEC',
      category: 'SMG',
      description: 'Elite princess weapon with devastating close-range power',
      icon: <Crosshair className="w-8 h-8" />,
      stats: {
        damage: 85,
        range: 58,
        mobility: 88,
        accuracy: 80
      },
      users: ['BOTGIRL', 'LIL NASTY'],
      color: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30'
    }
  ];

  const clanStats = [
    { title: "Members", value: "88+", icon: <Users className="w-6 h-6" />, description: "Active players" },
    { title: "Tournaments", value: "47+", icon: <Trophy className="w-6 h-6" />, description: "Victories earned" },
    { title: "Rating", value: "4.9", icon: <Star className="w-6 h-6" />, description: "Average member rating" },
    { title: "Growth", value: "127%", icon: <TrendingUp className="w-6 h-6" />, description: "Annual expansion" }
  ];

  const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex-1 mx-2 h-1.5 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-medium text-primary">{value}</span>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-background/90 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary))_0%,transparent_70%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent))_0%,transparent_70%)] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-gold mb-4">
            BATTLEFIELD DOMINANCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elite loadouts, tactical supremacy, and unmatched performance metrics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-card/30 backdrop-blur-lg border border-primary/20 rounded-full p-1">
            <button
              onClick={() => setActiveTab('loadouts')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'loadouts'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Target className="w-4 h-4 inline mr-2" />
              Elite Loadouts
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'performance'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Activity className="w-4 h-4 inline mr-2" />
              Battle Stats
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'loadouts' && (
          <div className="animate-fade-in">
            {/* Featured Loadout Highlight */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-primary mb-2">
                  Featured Elite Loadout
                </h3>
                <p className="text-muted-foreground">Tournament-proven configuration</p>
              </div>
              
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/30">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                          <Crosshair className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-orbitron font-bold text-gradient-gold">
                            AK117 - Grim Ending
                          </h4>
                          <p className="text-muted-foreground">Assault Rifle</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Master-tier configuration with optimal range and precision. Features OWC attachments for superior battlefield performance.
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {signatureLoadouts[0].attachments?.map((attachment, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {attachment}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {signatureLoadouts[0].users.map((user) => (
                          <Badge key={user} variant="outline" className="text-xs">
                            {user}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <StatBar label="DMG" value={signatureLoadouts[0].stats.damage} color="from-red-500 to-orange-500" />
                      <StatBar label="RNG" value={signatureLoadouts[0].stats.range} color="from-blue-500 to-cyan-500" />
                      <StatBar label="MOB" value={signatureLoadouts[0].stats.mobility} color="from-green-500 to-emerald-500" />
                      <StatBar label="ACC" value={signatureLoadouts[0].stats.accuracy} color="from-purple-500 to-pink-500" />
                      <StatBar label="FR" value={signatureLoadouts[0].stats.fireRate || 0} color="from-yellow-500 to-orange-500" />
                      <StatBar label="CTL" value={signatureLoadouts[0].stats.control || 0} color="from-indigo-500 to-purple-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Other Loadouts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signatureLoadouts.slice(1).map((weapon) => (
                <Card
                  key={weapon.id}
                  className={`group bg-gradient-to-br ${weapon.color} backdrop-blur-lg border ${weapon.borderColor} hover:scale-105 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        {weapon.icon}
                      </div>
                      <div>
                        <h4 className="font-orbitron font-bold text-gradient-gold text-lg">
                          {weapon.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{weapon.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {weapon.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <StatBar label="DMG" value={weapon.stats.damage} color="from-red-500 to-orange-500" />
                      <StatBar label="RNG" value={weapon.stats.range} color="from-blue-500 to-cyan-500" />
                      <StatBar label="MOB" value={weapon.stats.mobility} color="from-green-500 to-emerald-500" />
                      <StatBar label="ACC" value={weapon.stats.accuracy} color="from-purple-500 to-pink-500" />
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {weapon.users.map((user) => (
                        <Badge key={user} variant="outline" className="text-xs">
                          {user}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="animate-fade-in">
            {/* Clan Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {clanStats.map((stat, index) => (
                <Card key={stat.title} className="bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-lg border border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 text-primary flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.title}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Chart */}
            <Card className="bg-gradient-to-br from-card/30 to-card/60 backdrop-blur-lg border border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-gold text-center">
                  Combat Performance Metrics
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Real-time battlefield analytics and tournament results
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <PerformanceChart />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <button 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
                onClick={() => window.open('/soldiers?view=members', '_self')}
              >
                <Users className="mr-2 h-5 w-5" />
                View All Warriors
              </button>
              
              <button 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-card/30 to-card/60 hover:from-card/50 hover:to-card/80 border border-primary/30 hover:border-primary/50 text-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-lg"
                onClick={() => setActiveTab('loadouts')}
              >
                <Target className="mr-2 h-5 w-5" />
                View Elite Arsenal
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BattlefieldDominance;
