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
      { name: "ѲǤゝKUSH", fullName: "kush", emoji: "⚡", status: "OG flame, leader's fire", hasProfile: true, profileId: "kush" },
      { name: "ѲǤゝCHAMBAS", fullName: "chambas", emoji: "🦁", status: "Fearless OG pillar, reliable team captain", hasProfile: true, profileId: "chambas" },
      { name: "ѲǤゝDAHMER", fullName: "dhamer", emoji: "⚔️", status: "Razor-sharp under pressure", hasProfile: true, profileId: "dhamer" },
      { name: "ѲǤゝEXODUS", fullName: "exodus", emoji: "🛡️", status: "Shield of the Squad, WILD energy", hasProfile: true, profileId: "exodus" }
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
      { name: "ѲǤゝ21", fullName: "21", emoji: "🎯", status: "Focused and improving", hasProfile: true, profileId: "21" },
      { name: "ѲǤゝ23", fullName: "23", emoji: "🔥", status: "Hungry, improving every scrim" },
      { name: "ѲǤゝ1BTG", fullName: "1btg", emoji: "💪", status: "Solid fighter, rising" },
      { name: "ѲǤゝDAMAGE", fullName: "damage", emoji: "💥", status: "Quiet but impactful. OG Legend", hasProfile: true, profileId: "damage" },
      { name: "ѲǤゝESQUARE", fullName: "esquare", emoji: "💥", status: "Confident under pressure", hasProfile: true, profileId: "esquare" },
      { name: "ѲǤゝFAVORITE", fullName: "favorite", emoji: "💎", status: "Beautiful & deadly, AK117 queen", hasProfile: true, profileId: "favorite" },
      { name: "ѲǤゝLG-ACE", fullName: "lgace", emoji: "🎮", status: "Strong fighter, rising star" },
      { name: "ѲǤゝLILNASTY", fullName: "lilnasty", emoji: "🔥", status: "Hungry, improving every scrim", hasProfile: true, profileId: "lilnasty" },
      { name: "ѲǤゝPATO", fullName: "pato", emoji: "🔫", status: "T1 potential, waiting for breakout", hasProfile: true, profileId: "pato" },
      { name: "ѲǤゝTELOS", fullName: "telos", emoji: "⚡", status: "Steady grind, underrated" }
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
      { name: "ѲǤゝALVES", fullName: "alves", emoji: "⚡", status: "Strong BR & MP energy" },
      { name: "ѲǤゝBLACKSAVAGE", fullName: "blacksavage", emoji: "💀", status: "Strong but inconsistent", hasProfile: true, profileId: "blacksavage" },
      { name: "ѲǤゝBOTLORDD", fullName: "botlordd", emoji: "🤖", status: "Solid support, steady soldier" },
      { name: "ѲǤゝCHAKRA", fullName: "chakra", emoji: "⚔️", status: "Solid player, waiting for breakout" },
      { name: "ѲǤゝDCPIKIN", fullName: "dcpikin", emoji: "🎯", status: "Active, developing fighter" },
      { name: "ѲǤゝGAMEHOUSE", fullName: "gamehouse", emoji: "🎮", status: "Big clutch player, showing progress", hasProfile: true, profileId: "gamehouse" },
      { name: "ѲǤゝHARRIS", fullName: "harris", emoji: "📊", status: "Solid but quiet" },
      { name: "ѲǤゝHATED", fullName: "hated", emoji: "🔥", status: "Fearless drive, potential OG bloodline", hasProfile: true, profileId: "hated" },
      { name: "ѲǤゝLIYZEEY", fullName: "liyzeeey", emoji: "🎮", status: "Active fighter, improving" },
      { name: "ѲǤゝMADDOG", fullName: "maddog", emoji: "🐺", status: "Aggressive and reliable", hasProfile: true, profileId: "maddog" },
      { name: "ѲǤゝMAFIA", fullName: "mafia", emoji: "❤️", status: "Big heart player, improving" },
      { name: "ѲǤゝMAJOR", fullName: "major", emoji: "💣", status: "Positive energy, needs polish" },
      { name: "ѲǤゝNO_FACE", fullName: "noface", emoji: "🔁", status: "Steady grind, improving" },
      { name: "ѲǤゝOLOSHO", fullName: "olosho", emoji: "🔥", status: "Active fighter, improving" },
      { name: "ѲǤゝOWNER", fullName: "owner", emoji: "👊", status: "Solid, always present" },
      { name: "ѲǤゝRAMZY", fullName: "ramzy", emoji: "⚡", status: "Active fighter, steady" },
      { name: "ѲǤゝREMA237", fullName: "rema237", emoji: "🎯", status: "Active fighter, showing potential" },
      { name: "ѲǤゝRICHBOY", fullName: "richboy", emoji: "💰", status: "Active fighter, loyal" },
      { name: "ѲǤゝRUNTOWN", fullName: "runtown", emoji: "🏃", status: "Active, developing" },
      { name: "ѲǤゝSAVAGE", fullName: "savage", emoji: "💀", status: "Fighter, showing signs" },
      { name: "ѲǤゝSHADOW", fullName: "shadow", emoji: "🌑", status: "Quiet but steady" },
      { name: "ѲǤゝSPARK", fullName: "spark", emoji: "✨", status: "Showing spark, improving" },
      { name: "ѲǤゝUNCLE B", fullName: "uncleB", emoji: "🛡️", status: "Energy player, explosive potential", hasProfile: true, profileId: "uncleB" },
      { name: "ѲǤゝVENOM", fullName: "venom", emoji: "🐍", status: "Strong but streaky", hasProfile: true, profileId: "venom" },
      { name: "ѲǤゝZEUS", fullName: "zeus", emoji: "⚡", status: "Active fighter, strong presence" }
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
      { name: "ѲǤゝAKAZA", fullName: "akaza", emoji: "🌀", status: "Reliable, steady in matches" },
      { name: "ѲǤゝAMMI", fullName: "ammi", emoji: "🎯", status: "Casual, still learning" },
      { name: "ѲǤゝBEBERIA", fullName: "beberia", emoji: "🌱", status: "Developing, needs improvement" },
      { name: "ѲǤゝCONQUEST", fullName: "conquest", emoji: "🖤", status: "Loyal presence, improving" },
      { name: "ѲǤゝDIAN", fullName: "dian", emoji: "💪", status: "Developing fighter" },
      { name: "ѲǤゝDRIPPA", fullName: "drippa", emoji: "💧", status: "Casual, needs improvement" },
      { name: "ѲǤゝHARDMIKE", fullName: "hardmike", emoji: "🧩", status: "Decent play, still polishing" },
      { name: "ѲǤゝICON", fullName: "icon", emoji: "⚡", status: "Needs more practice" },
      { name: "ѲǤゝK^VIEN77", fullName: "kvien77", emoji: "🎮", status: "Casual player" },
      { name: "ѲǤゝKAPPA", fullName: "kappa", emoji: "🔥", status: "Raw talent, needs polish" },
      { name: "ѲǤゝLIL OP", fullName: "lilop", emoji: "🔥", status: "Developing fighter" },
      { name: "ѲǤゝLUCIFER", fullName: "lucifer", emoji: "😈", status: "Developing, needs consistency" },
      { name: "ѲǤゝMŪŁŁER", fullName: "muller2", emoji: "🎯", status: "Steady contributor" },
      { name: "ѲǤゝNOVAX", fullName: "novax", emoji: "⚡", status: "Showing promise, needs more BattleNights" },
      { name: "ѲǤゝPINKY", fullName: "pinky", emoji: "💖", status: "Steady support, needs more experience", hasProfile: true, profileId: "pinky" },
      { name: "ѲǤゝPUNISHER", fullName: "punisher", emoji: "🥋", status: "Fighter, showing signs" },
      { name: "ѲǤゝSMOKE", fullName: "smoke", emoji: "💨", status: "Needs more activity" },
      { name: "ѲǤゝTEDDY", fullName: "teddy", emoji: "👊", status: "Awaiting display" },
      { name: "ѲǤゝWIZARD", fullName: "wizard", emoji: "🧙", status: "Developing, casual player" }
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
      { name: "ѲǤゝBUNNY", fullName: "bunny", emoji: "🐰", status: "Low activity ❄️" },
      { name: "ѲǤゝEXODUSK", fullName: "exodus", emoji: "🛡️", status: "Inactive, needs to return ❄️", hasProfile: true, profileId: "exodus" },
      { name: "ѲǤゝFIXED", fullName: "fixed", emoji: "🔧", status: "No activity ❄️" },
      { name: "ѲǤゝKNIGHT", fullName: "knight", emoji: "💥", status: "Inactive ❄️" },
      { name: "ѲǤゝSNAKESEYES", fullName: "snakeeyes", emoji: "👀", status: "Inactive ❄️" },
      { name: "ѲǤゝSTAIN", fullName: "stain", emoji: "🌀", status: "Low activity ❄️" },
      { name: "ѲǤゝWHITE", fullName: "ogwhite", emoji: "🔄", status: "Inactive ❄️", hasProfile: true, profileId: "ogwhite" }
    ]
  }
];
