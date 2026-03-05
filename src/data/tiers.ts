import { TierData } from '@/types/tier';

export const tierData: TierData[] = [
  {
    id: 1,
    name: "TIER 1",
    title: "OG CORE (Leaders & Consistent Competitors)",
    description: "The backbone of OG. Reliable, deadly, and setting the standard.",
    theme: {
      primary: "hsl(var(--ogclan))",
      secondary: "hsl(var(--ogclan-glow))",
      accent: "hsl(45, 100%, 60%)",
      bg: "linear-gradient(135deg, hsl(var(--ogclan) / 0.15), hsl(var(--ogclan) / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝKUSH", fullName: "kush", emoji: "⚡", status: "OG flame, leader's fire", hasProfile: true, profileId: "kush" },
      { name: "ФƓゝCHAMBAS", fullName: "chambas", emoji: "🦁", status: "Fearless OG pillar, reliable team captain", hasProfile: true, profileId: "chambas" },
      { name: "ФƓゝSL1M", fullName: "slim", emoji: "🏅", status: "Veteran consistency, heart of OG comps", hasProfile: true, profileId: "slim" },
      { name: "ФƓゝDAHMER", fullName: "dhamer", emoji: "⚔️", status: "Razor-sharp under pressure", hasProfile: true, profileId: "dhamer" },
      { name: "ФƓゝEXODUS", fullName: "exodus", emoji: "🛡️", status: "Shield of the Squad, WILD energy", hasProfile: true, profileId: "exodus" }
    ]
  },
  {
    id: 2,
    name: "TIER 2",
    title: "RISING FLAMES (Future Core)",
    description: "Grinding hard, proving themselves, showing growth.",
    theme: {
      primary: "hsl(16, 100%, 55%)",
      secondary: "hsl(16, 100%, 65%)",
      accent: "hsl(16, 100%, 75%)",
      bg: "linear-gradient(135deg, hsl(16, 100%, 55% / 0.15), hsl(16, 100%, 55% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝ21", fullName: "21", emoji: "🎯", status: "Focused and improving", hasProfile: true, profileId: "21" },
      { name: "ФƓゝ23", fullName: "23", emoji: "🔥", status: "Hungry, improving every scrim" },
      { name: "ФƓゝ1BTG", fullName: "1btg", emoji: "💪", status: "Solid fighter, rising" },
      { name: "ФƓゝBOTGIRL", fullName: "botgirl", emoji: "⚡", status: "Huge growth, loyal, rising fast", hasProfile: true, profileId: "botgirl" },
      { name: "ФƓゝCOD~MIKKI", fullName: "mikki", emoji: "🏆", status: "Strong fighter, disciplined", hasProfile: true, profileId: "johnwick" },
      { name: "ФƓゝDAMAGE", fullName: "damage", emoji: "💥", status: "Quiet but impactful. OG Legend", hasProfile: true, profileId: "damage" },
      { name: "ФƓゝESQUARE", fullName: "esquare", emoji: "💥", status: "Confident under pressure", hasProfile: true, profileId: "esquare" },
      { name: "ФƓゝLG-ACE", fullName: "lgace", emoji: "🎮", status: "Strong fighter, rising star" },
      { name: "ФƓゝLILNASTY", fullName: "lilnasty", emoji: "🔥", status: "Hungry, improving every scrim", hasProfile: true, profileId: "lilnasty" },
      { name: "ФƓゝMENACE", fullName: "menace", emoji: "🎯", status: "Battle-tested & consistent", hasProfile: true, profileId: "lamenace" },
      { name: "ФƓゝPATO", fullName: "pato", emoji: "🔫", status: "T1 potential, waiting for breakout", hasProfile: true, profileId: "pato" },
      { name: "ФƓゝSHINØBI", fullName: "shinobi", emoji: "🤝", status: "Synergy king, team booster", hasProfile: true, profileId: "shinobi" },
      { name: "ФƓゝSWIZZY", fullName: "swizzy", emoji: "⚔️", status: "Reliable, aggressive, valuable in scrims", hasProfile: true, profileId: "swizzy" },
      { name: "ФƓゝTELOS", fullName: "telos", emoji: "⚡", status: "Steady grind, underrated" }
    ]
  },
  {
    id: 3,
    name: "TIER 3",
    title: "STEADY SOLDIERS (Active & Developing)",
    description: "Present, loyal, contributing — with guidance, they'll rise.",
    theme: {
      primary: "hsl(45, 80%, 50%)",
      secondary: "hsl(45, 80%, 60%)",
      accent: "hsl(45, 80%, 70%)",
      bg: "linear-gradient(135deg, hsl(45, 80%, 50% / 0.15), hsl(45, 80%, 50% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝALVES", fullName: "alves", emoji: "⚡", status: "Strong BR & MP energy" },
      { name: "ФƓゝBLACKSAVAGE", fullName: "blacksavage", emoji: "💀", status: "Strong but inconsistent", hasProfile: true, profileId: "blacksavage" },
      { name: "ФƓゝBOTLORDD", fullName: "botlordd", emoji: "🤖", status: "Solid support, steady soldier" },
      { name: "ФƓゝCHAKRA", fullName: "chakra", emoji: "⚔️", status: "Solid player, waiting for breakout" },
      { name: "ФƓゝDCPIKIN", fullName: "dcpikin", emoji: "🎯", status: "Active, developing fighter" },
      { name: "ФƓゝFAVORITE", fullName: "favorite", emoji: "⭐", status: "Loyal, steady progress" },
      { name: "ФƓゝGAMEHOUSE", fullName: "gamehouse", emoji: "🎮", status: "Big clutch player, showing progress", hasProfile: true, profileId: "gamehouse" },
      { name: "ФƓゝHARRIS", fullName: "harris", emoji: "📊", status: "Solid but quiet" },
      { name: "ФƓゝHATED", fullName: "hated", emoji: "🔥", status: "Fearless drive, potential OG bloodline", hasProfile: true, profileId: "hated" },
      { name: "ФƓゝLIYZEEY", fullName: "liyzeeey", emoji: "🎮", status: "Active fighter, improving" },
      { name: "ФƓゝMADDOG", fullName: "maddog", emoji: "🐺", status: "Aggressive and reliable", hasProfile: true, profileId: "maddog" },
      { name: "ФƓゝMAFIA", fullName: "mafia", emoji: "❤️", status: "Big heart player, improving" },
      { name: "ФƓゝMAJOR", fullName: "major", emoji: "💣", status: "Positive energy, needs polish" },
      { name: "ФƓゝMULLERYT", fullName: "mulleryt", emoji: "📈", status: "Active, improving teamwork", hasProfile: true, profileId: "muller" },
      { name: "ФƓゝNO_FACE", fullName: "noface", emoji: "🔁", status: "Steady grind, improving" },
      { name: "ФƓゝNOOB", fullName: "noob", emoji: "🎮", status: "Rising player, showing growth" },
      { name: "ФƓゝOLOSHO", fullName: "olosho", emoji: "🔥", status: "Active fighter, improving" },
      { name: "ФƓゝOWNER", fullName: "owner", emoji: "👊", status: "Solid, always present" },
      { name: "ФƓゝRAMZY", fullName: "ramzy", emoji: "⚡", status: "Active fighter, steady" },
      { name: "ФƓゝREMA237", fullName: "rema237", emoji: "🎯", status: "Active fighter, showing potential" },
      { name: "ФƓゝREXO", fullName: "rex", emoji: "💥", status: "Recent consistent activity", hasProfile: true, profileId: "rex" },
      { name: "ФƓゝRICHBOY", fullName: "richboy", emoji: "💰", status: "Active fighter, loyal" },
      { name: "ФƓゝRUNTOWN", fullName: "runtown", emoji: "🏃", status: "Active, developing" },
      { name: "ФƓゝSAVAGE", fullName: "savage", emoji: "💀", status: "Fighter, showing signs" },
      { name: "ФƓゝSHADOW", fullName: "shadow", emoji: "🌑", status: "Quiet but steady" },
      { name: "ФƓゝSLIM SHADY", fullName: "shady", emoji: "🗣️", status: "Loyal, confidence growing", hasProfile: true, profileId: "shady" },
      { name: "ФƓゝSPARK", fullName: "spark", emoji: "✨", status: "Showing spark, improving" },
      { name: "ФƓゝUNCLE B", fullName: "uncleB", emoji: "🛡️", status: "Energy player, explosive potential", hasProfile: true, profileId: "uncleB" },
      { name: "ФƓゝVENOM", fullName: "venom", emoji: "🐍", status: "Strong but streaky", hasProfile: true, profileId: "venom" },
      { name: "ФƓゝZEUS", fullName: "zeus", emoji: "⚡", status: "Active fighter, strong presence" }
    ]
  },
  {
    id: 4,
    name: "TIER 4",
    title: "NEEDS IMPROVEMENT / CASUAL",
    description: "Working on fundamentals, casual play or inconsistent activity.",
    theme: {
      primary: "hsl(120, 60%, 50%)",
      secondary: "hsl(120, 60%, 60%)",
      accent: "hsl(120, 60%, 70%)",
      bg: "linear-gradient(135deg, hsl(120, 60%, 50% / 0.15), hsl(120, 60%, 50% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝAKAZA", fullName: "akaza", emoji: "🌀", status: "Reliable, steady in matches" },
      { name: "ФƓゝAMMI", fullName: "ammi", emoji: "🎯", status: "Casual, still learning" },
      { name: "ФƓゝBEBERIA", fullName: "beberia", emoji: "🌱", status: "Developing, needs improvement" },
      { name: "ФƓゝCONQUEST", fullName: "conquest", emoji: "🖤", status: "Loyal presence, improving" },
      { name: "ФƓゝDED", fullName: "ded", emoji: "⚡", status: "Working on improvement", hasProfile: true, profileId: "ded" },
      { name: "ФƓゝDIAN", fullName: "dian", emoji: "💪", status: "Developing fighter" },
      { name: "ФƓゝDRIPPA", fullName: "drippa", emoji: "💧", status: "Casual, needs improvement" },
      { name: "ФƓゝHARDMIKE", fullName: "hardmike", emoji: "🧩", status: "Decent play, still polishing" },
      { name: "ФƓゝICON", fullName: "icon", emoji: "⚡", status: "Needs more practice" },
      { name: "ФƓゝK^VIEN77", fullName: "kvien77", emoji: "🎮", status: "Casual player" },
      { name: "ФƓゝKAPPA", fullName: "kappa", emoji: "🔥", status: "Raw talent, needs polish" },
      { name: "ФƓゝLIL OP", fullName: "lilop", emoji: "🔥", status: "Developing fighter" },
      { name: "ФƓゝLUCIFER", fullName: "lucifer", emoji: "😈", status: "Developing, needs consistency" },
      { name: "ФƓゝMŪŁŁER", fullName: "muller2", emoji: "🎯", status: "Steady contributor" },
      { name: "ФƓゝNOVAX", fullName: "novax", emoji: "⚡", status: "Showing promise, needs more BattleNights" },
      { name: "ФƓゝPINKY", fullName: "pinky", emoji: "💖", status: "Steady support, needs more experience", hasProfile: true, profileId: "pinky" },
      { name: "ФƓゝPUNISHER", fullName: "punisher", emoji: "🥋", status: "Fighter, showing signs" },
      { name: "ФƓゝSMOKE", fullName: "smoke", emoji: "💨", status: "Needs more activity" },
      { name: "ФƓゝSUSPECT", fullName: "suspect", emoji: "🎯", status: "Multiplayer beast, BattleNight lacking", hasProfile: true, profileId: "suspect" },
      { name: "ФƓゝTEDDY", fullName: "teddy", emoji: "👊", status: "Awaiting display" },
      { name: "ФƓゝWIZARD", fullName: "wizard", emoji: "🧙", status: "Developing, casual player" }
    ]
  },
  {
    id: 5,
    name: "TIER 5",
    title: "COLD ZONE (Inactive / Not Rated) ❄️",
    description: "Still family, but inactive or inconsistent. Must return or risk removal.",
    theme: {
      primary: "hsl(200, 40%, 40%)",
      secondary: "hsl(200, 40%, 50%)",
      accent: "hsl(200, 40%, 60%)",
      bg: "linear-gradient(135deg, hsl(200, 40%, 40% / 0.15), hsl(200, 40%, 40% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝBUNNY", fullName: "bunny", emoji: "🐰", status: "Low activity ❄️" },
      { name: "ФƓゝEXODUSK", fullName: "exodus", emoji: "🛡️", status: "Inactive, needs to return ❄️", hasProfile: true, profileId: "exodus" },
      { name: "ФƓゝFIXED", fullName: "fixed", emoji: "🔧", status: "No activity ❄️" },
      { name: "ФƓゝKNIGHT", fullName: "knight", emoji: "💥", status: "Inactive ❄️" },
      { name: "ФƓゝSNAKESEYES", fullName: "snakeeyes", emoji: "👀", status: "Inactive ❄️" },
      { name: "ФƓゝSTAIN", fullName: "stain", emoji: "🌀", status: "Low activity ❄️" },
      { name: "ФƓゝWHITE", fullName: "ogwhite", emoji: "🔄", status: "Inactive ❄️", hasProfile: true, profileId: "ogwhite" }
    ]
  }
];