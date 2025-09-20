import React from 'react';
import { Target, Crosshair, Shield, Zap } from 'lucide-react';
import ak117GrimEnding from '../assets/ak117-grim-ending.png';

const GamingArsenal = () => {
  const signatureLoadouts = [
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
      id: 'qq9',
      name: 'QQ9',
      category: 'SMG',
      description: 'Rapid-fire SMG for aggressive close-quarter combat',
      icon: <Zap className="w-8 h-8" />,
      stats: {
        damage: 72,
        range: 55,
        mobility: 92,
        accuracy: 75
      },
      users: ['PATO', 'DED', 'BLACKSAVAGE'],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'xpr50',
      name: 'XPR-50',
      category: 'Sniper Rifle',
      description: 'Long-range elimination with surgical precision',
      icon: <Target className="w-8 h-8" />,
      stats: {
        damage: 100,
        range: 98,
        mobility: 45,
        accuracy: 95
      },
      users: ['DNA'],
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30'
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
    },
    {
      id: 'by15',
      name: 'BY15',
      category: 'Shotgun',
      description: 'Tactical shotgun for close-quarters domination',
      icon: <Shield className="w-8 h-8" />,
      stats: {
        damage: 92,
        range: 48,
        mobility: 78,
        accuracy: 70
      },
      users: ['GAMEHOUSE', 'SWIZZY', 'E-SQUARE', 'MULLER', 'HATED', 'TIGER'],
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'hs0405',
      name: 'HS0405',
      category: 'Shotgun',
      description: 'Close-quarters phantom weapon for stealth elimination',
      icon: <Target className="w-8 h-8" />,
      stats: {
        damage: 96,
        range: 42,
        mobility: 75,
        accuracy: 68
      },
      users: ['CHAMBAS', 'SLIM'],
      color: 'from-violet-500/20 to-purple-500/20',
      borderColor: 'border-violet-500/30'
    }
  ];

  const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="flex-1 mx-2 h-1 bg-muted rounded-full overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-gold mb-4">
            GAMING ARSENAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master loadouts, expert strategies, and battlefield domination
          </p>
        </div>

        {/* Signature Loadouts Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-primary mb-4">
            Signature Loadouts
          </h3>
        </div>

        {/* Weapons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {signatureLoadouts.map((weapon) => (
            <div
              key={weapon.id}
              className={`group relative bg-gradient-to-br ${weapon.color} backdrop-blur-lg border ${weapon.borderColor} rounded-xl p-6 hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full" />
              
              {/* Weapon Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  {weapon.icon}
                </div>
                <div>
                  <h4 className="text-xl font-orbitron font-bold text-gradient-gold">
                    {weapon.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{weapon.category}</p>
                </div>
              </div>

              {/* Attachments - Special for detailed loadouts */}
              {weapon.attachments && (
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Loadout:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {weapon.attachments.map((attachment, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted/50 text-foreground px-2 py-1 rounded font-medium"
                      >
                        {attachment}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {weapon.description}
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-6">
                <StatBar label="DMG" value={weapon.stats.damage} color="from-red-500 to-orange-500" />
                <StatBar label="RNG" value={weapon.stats.range} color="from-blue-500 to-cyan-500" />
                <StatBar label="MOB" value={weapon.stats.mobility} color="from-green-500 to-emerald-500" />
                <StatBar label="ACC" value={weapon.stats.accuracy} color="from-purple-500 to-pink-500" />
                {weapon.stats.fireRate && (
                  <StatBar label="FR" value={weapon.stats.fireRate} color="from-yellow-500 to-orange-500" />
                )}
                {weapon.stats.control && (
                  <StatBar label="CTL" value={weapon.stats.control} color="from-indigo-500 to-purple-500" />
                )}
              </div>

              {/* Users */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Used by:</p>
                <div className="flex flex-wrap gap-1">
                  {weapon.users.map((user) => (
                    <span
                      key={user}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium"
                    >
                      {user}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card/30 backdrop-blur-lg border border-primary/20 rounded-full px-8 py-4">
            <Target className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">
              Master these weapons and dominate the battlefield
            </span>
            <Target className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingArsenal;