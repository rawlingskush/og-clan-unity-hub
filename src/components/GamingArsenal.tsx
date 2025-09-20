import React from 'react';
import AnimatedContent from './AnimatedContent';
import { Target, MapPin, Crosshair, Shield, Zap, Eye } from 'lucide-react';

const GamingArsenal = () => {
  const weaponLoadouts = [
    {
      name: 'Oden',
      type: 'Assault Rifle',
      specialist: 'KUSH',
      description: 'Heavy-hitting assault rifle perfect for breaking enemy lines',
      stats: { damage: 95, range: 85, mobility: 60, control: 75 },
      icon: Target
    },
    {
      name: 'AK117',
      type: 'Assault Rifle', 
      specialist: 'WIZARD',
      description: 'Balanced assault rifle for tactical precision strikes',
      stats: { damage: 80, range: 90, mobility: 75, control: 85 },
      icon: Crosshair
    },
    {
      name: 'KRM-262',
      type: 'Shotgun',
      specialist: 'DAMAGE', 
      description: 'Close-quarters devastation for room clearing',
      stats: { damage: 100, range: 40, mobility: 70, control: 60 },
      icon: Shield
    }
  ];
  
  const mapExpertise = [
    {
      name: 'Black Market',
      type: 'Hot Drop Zone',
      description: 'Our signature landing zone - high risk, higher reward',
      winRate: '78%',
      specialty: 'Early Game Dominance',
      icon: '/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png'
    },
    {
      name: 'Alcatraz',
      type: 'Battle Royale',
      description: 'Prison island perfection - close quarters combat excellence',
      winRate: '82%',
      specialty: 'Urban Warfare',
      icon: '/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png'
    },
    {
      name: 'Isolated',
      type: 'Battle Royale',
      description: 'Classic BR map mastery with tactical positioning',
      winRate: '75%',
      specialty: 'Strategic Control',
      icon: '/lovable-uploads/4aff45e6-a800-4a02-8a26-f5cc53f2c562.png'
    },
    {
      name: 'Blackout',
      type: 'Battle Royale',
      description: 'Large scale warfare with coordinated team play',
      winRate: '73%',
      specialty: 'Team Coordination',
      icon: '/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png'
    }
  ];
  
  const tacticalStrategies = [
    {
      title: 'Hot Drop Mastery',
      description: 'Aggressive early game positioning for maximum loot and eliminations',
      icon: Zap,
      techniques: ['First to ground', 'Weapon priority', 'Area control', 'Quick rotations']
    },
    {
      title: 'Team Coordination',
      description: 'Seamless communication and coordinated attacks',
      icon: Eye,
      techniques: ['Voice comms', 'Callout system', 'Role assignment', 'Backup protocols']
    }
  ];
  
  const getStatBar = (value: number) => (
    <div className="w-full bg-ogclan/20 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-ogclan-dark to-ogclan rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
  
  return (
    <section className="py-16 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
      {/* Tactical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 border border-ogclan/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-ogclan/20 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-32 bg-ogclan/10 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-4 animate-glow">
              GAMING ARSENAL
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-ogclan-light max-w-2xl mx-auto">
              Master loadouts, expert strategies, and battlefield domination
            </p>
          </div>
        </AnimatedContent>
        
        {/* Weapon Loadouts */}
        <AnimatedContent animation="fade-in" delay={200}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-ogclan mb-8 text-center">Signature Loadouts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {weaponLoadouts.map((weapon, index) => (
                <div key={index} className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-6 hover:border-ogclan/60 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-ogclan/20 rounded-full">
                      <weapon.icon className="w-6 h-6 text-ogclan" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-ogclan">{weapon.name}</h4>
                      <p className="text-ogclan-muted text-sm">{weapon.type}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-ogclan-light text-sm mb-2">{weapon.description}</p>
                    <div className="flex items-center gap-2 text-ogclan text-sm">
                      <Target className="w-4 h-4" />
                      <span>Specialist: {weapon.specialist}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ogclan-muted">Damage</span>
                        <span className="text-ogclan">{weapon.stats.damage}%</span>
                      </div>
                      {getStatBar(weapon.stats.damage)}
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ogclan-muted">Range</span>
                        <span className="text-ogclan">{weapon.stats.range}%</span>
                      </div>
                      {getStatBar(weapon.stats.range)}
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ogclan-muted">Mobility</span>
                        <span className="text-ogclan">{weapon.stats.mobility}%</span>
                      </div>
                      {getStatBar(weapon.stats.mobility)}
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-ogclan-muted">Control</span>
                        <span className="text-ogclan">{weapon.stats.control}%</span>
                      </div>
                      {getStatBar(weapon.stats.control)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
        
        {/* Map Expertise */}
        <AnimatedContent animation="fade-in" delay={400}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-ogclan mb-8 text-center">Map Mastery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mapExpertise.map((map, index) => (
                <div key={index} className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl overflow-hidden hover:border-ogclan/60 transition-all duration-300 hover:scale-105 group">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={map.icon} 
                      alt={map.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-2 left-4">
                      <h4 className="text-xl font-bold text-ogclan">{map.name}</h4>
                      <p className="text-ogclan-muted text-sm">{map.type}</p>
                    </div>
                    <div className="absolute top-2 right-4 bg-ogclan/90 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {map.winRate}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-ogclan-light mb-3">{map.description}</p>
                    <div className="flex items-center gap-2 text-ogclan">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{map.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
        
        {/* Tactical Strategies */}
        <AnimatedContent animation="scale-in" delay={600}>
          <div>
            <h3 className="text-2xl font-bold text-ogclan mb-8 text-center">Battle Strategies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {tacticalStrategies.map((strategy, index) => (
                <div key={index} className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-8 hover:border-ogclan/60 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-ogclan/20 rounded-full group-hover:bg-ogclan/30 transition-colors duration-300">
                      <strategy.icon className="w-8 h-8 text-ogclan" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-ogclan">{strategy.title}</h4>
                      <p className="text-ogclan-light">{strategy.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {strategy.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="bg-ogclan/10 border border-ogclan/30 rounded-lg p-3 hover:bg-ogclan/20 transition-colors duration-300">
                        <p className="text-ogclan-light text-sm font-medium">{technique}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default GamingArsenal;