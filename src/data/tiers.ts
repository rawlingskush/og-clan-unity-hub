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
      { name: "ФƓゝKUSH", fullName: "kush", emoji: "⚡", status: "OG flame, leader's fire" },
      { name: "ФƓゝEXODUSKI", fullName: "exodus", emoji: "🛡️", status: "Deadly instinct, clan shield. OG Legend", hasProfile: true, profileId: "exodus" },
      { name: "ФƓゝDHAMER", fullName: "dhamer", emoji: "⚔️", status: "Razor-sharp under pressure", hasProfile: true, profileId: "dhamer" },
      { name: "ФƓゝCHAMBAS", fullName: "chambas", emoji: "🦁", status: "Fearless OG pillar, reliable team captain", hasProfile: true, profileId: "chambas" },
      { name: "ФƓゝSL1M", fullName: "slim", emoji: "🏅", status: "Veteran consistency, heart of OG comps", hasProfile: true, profileId: "slim" },
      { name: "ФƓゝSTARL1GHT", fullName: "starlight", emoji: "🌀", status: "Clan clutch machine, rising leader" },
      { name: "ФƓゝSAMMY", fullName: "sammy", emoji: "🧨", status: "NEW, aggressive with leadership energy" },
      { name: "ФƓゝOVERKILL", fullName: "overkill", emoji: "🚀", status: "Big-game presence, BattleNight lacking" },
      { name: "ФƓゝSUSREX", fullName: "susrex", emoji: "⚡", status: "NEW, explosive plays, raw power, lately inconsistent" },
      { name: "ФƓゝTIGER", fullName: "tiger", emoji: "🐯", status: "Team spirit, reliable fighter" }
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
      { name: "ФƓゝWIɀƛRÐ", fullName: "wizard", emoji: "🔮", status: "Tactical brain, calm in chaos. OG Legend", hasProfile: true, profileId: "wizard" },
      { name: "ФƓゝLILNASTY", fullName: "lilnasty", emoji: "🔥", status: "Hungry, improving every scrim", hasProfile: true, profileId: "lilnasty" },
      { name: "ФƓゝWHITEএ", fullName: "ogwhite", emoji: "🔄", status: "Smart rotations, big clutches. Needs scrim time", hasProfile: true, profileId: "ogwhite" },
      { name: "ФƓゝSWIZZY", fullName: "swizzy", emoji: "⚔️", status: "Reliable, aggressive, valuable in scrims", hasProfile: true, profileId: "swizzy" },
      { name: "ФƓゝƤÅTФ", fullName: "pato", emoji: "🔫", status: "T1 potential, waiting for breakout. OG Legend", hasProfile: true, profileId: "pato" },
      { name: "ФƓゝUNTINKABLE", fullName: "untinkable", emoji: "💪", status: "Solid fighter, T1 potential, needs the OG stamp" },
      { name: "ФƓゝC0D~MIKKI", fullName: "mikki", emoji: "🏆", status: "Strong fighter, disciplined, scrim asset" },
      { name: "ФƓゝBOT-GIRL", fullName: "botgirl", emoji: "⚡", status: "Huge growth, loyal, rising fast", hasProfile: true, profileId: "botgirl" },
      { name: "ФƓゝSHINØBI", fullName: "shinobi", emoji: "🤝", status: "Synergy king, team booster. Amazing growth" },
      { name: "ФƓゝESQUARE", fullName: "esquare", emoji: "💥", status: "Confident under pressure. OG Legend", hasProfile: true, profileId: "esquare" },
      { name: "ФƓゝDAMAGE", fullName: "damage", emoji: "🎯", status: "Quiet but impactful. OG Legend", hasProfile: true, profileId: "damage" },
      { name: "ФƓゝLAMENACE", fullName: "lamenace", emoji: "🎯", status: "Battle-tested & consistent, room to grow", hasProfile: true, profileId: "lamenace" },
      { name: "ФƓゝ21", fullName: "21", emoji: "🎯", status: "Focused and improving. Needs scrim time", hasProfile: true, profileId: "21" },
      { name: "ФƓゝMÄÐÐŌĠ", fullName: "maddog", emoji: "🐺", status: "Aggressive and reliable. Needs scrim time" },
      { name: "ФƓゝTÈLOS", fullName: "telos", emoji: "⚡", status: "Steady grind, underrated. BattleNight lacking" },
      { name: "ФƓゝUNCLE B", fullName: "uncleB", emoji: "🛡️", status: "Energy player, explosive potential. Inconsistent", hasProfile: true, profileId: "uncleB" },
      { name: "ФƓゝSEPH", fullName: "seph", emoji: "🧠", status: "Strong mechanics, promising core. Needs more BattleNights" },
      { name: "ФƓゝALVES", fullName: "alves", emoji: "⚡", status: "Strong BR & MP energy, needs more scrims" }
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
      { name: "ФƓゝꪜꪮꪀ", fullName: "von", emoji: "🔥", status: "Needs polish, but gameplay spark" },
      { name: "ФƓゝKÄPPÄ", fullName: "kappa", emoji: "🔥", status: "Raw talent, needs polish" },
      { name: "ФƓゝMAFIA", fullName: "mafia", emoji: "❤️", status: "Big heart player, improving well" },
      { name: "ФƓゝVENOM", fullName: "venom", emoji: "🐍", status: "Strong but streaky & toxic. OG Legend", hasProfile: true, profileId: "venom" },
      { name: "ФƓゝGAMEHOUSE", fullName: "gamehouse", emoji: "🎮", status: "Big clutch player, showing progress", hasProfile: true, profileId: "gamehouse" },
      { name: "ФƓ_AKAZA", fullName: "akaza", emoji: "🌀", status: "Reliable, steady in matches" },
      { name: "ФƓゝBOTLORDD", fullName: "botlordd", emoji: "🤖", status: "Solid support, steady soldier" },
      { name: "ФƓゝMØLLY", fullName: "molly", emoji: "🎮", status: "Adds depth, consistent" },
      { name: "ФƓゝMULLER", fullName: "muller", emoji: "📈", status: "Active, improving teamwork. Needs more scrims" },
      { name: "ФƓゝSLOW", fullName: "slow", emoji: "🐢", status: "Steady grind, underrated. Needs more BattleNights" },
      { name: "ФƓゝNOVAX", fullName: "novax", emoji: "⚡", status: "Showing promise. Needs more BattleNights" },
      { name: "ФƓゝCНÃKRÃ", fullName: "chakra", emoji: "⚔️", status: "Solid player, waiting for breakout" },
      { name: "ФƓゝREXO", fullName: "rexo", emoji: "💥", status: "Consistent activity. Keep it up" },
      { name: "ФƓゝSHADY", fullName: "shady", emoji: "🗣️", status: "Loyal, confidence growing big", hasProfile: true, profileId: "shady" },
      { name: "ФƓゝSUSPECT", fullName: "suspect", emoji: "🎯", status: "Multiplayer beast. BattleNight lacking" },
      { name: "ФƓゝBLACKSAVAGE", fullName: "blacksavage", emoji: "💀", status: "Strong but inconsistent. Needs scrim time", hasProfile: true, profileId: "blacksavage" },
      { name: "ФƓゝHATED", fullName: "hated", emoji: "🔥", status: "Fearless drive, potential OG bloodline" },
      { name: "ФƓゝMAJOR", fullName: "major", emoji: "💣", status: "Positive energy, needs polish" },
      { name: "ФƓゝKENDRA", fullName: "kendra", emoji: "🤞", status: "Real OG, BR needs polish" },
      { name: "ФƓゝPUNISHER", fullName: "punisher", emoji: "🥋", status: "Fighter, showing good signs" },
      { name: "ФƓゝVENOM TT", fullName: "venomtt", emoji: "🐍", status: "Backup Venom, still learning" },
      { name: "ФƓゝLEGEND", fullName: "legend", emoji: "🏹", status: "Loyal, steady progress" },
      { name: "ФƓゝSPRIZER", fullName: "sprizer", emoji: "🎮", status: "Developing well, but inconsistent" },
      { name: "ФƓゝRENZO", fullName: "renzo", emoji: "🛠️", status: "Needs stronger rotations" },
      { name: "ФƓゝHARRIS", fullName: "harris", emoji: "📊", status: "Solid but quiet" },
      { name: "ФƓゝҜภเﻮђ", fullName: "knight", emoji: "💥", status: "Wildcard energy" },
      { name: "ФƓゝSNAKEYES", fullName: "snakeeyes", emoji: "👀", status: "Good reads, sneaky plays" },
      { name: "ФƓゝMŪŁŁER", fullName: "muller2", emoji: "🎯", status: "Steady contributor" },
      { name: "ФƓゝHARDMIKE", fullName: "hardmike", emoji: "🧩", status: "Decent play, still polishing" },
      { name: "ФƓゝAMINUTE", fullName: "aminute", emoji: "🎤", status: "Consistent support, brings energy" },
      { name: "ФƓゝPINKY", fullName: "pinky", emoji: "🧠", status: "Steady support, needs more experience" },
      { name: "ФƓゝCONQÜËST", fullName: "conquest", emoji: "🖤", status: "Loyal presence, improving" }
    ]
  },
  {
    id: 4,
    name: "TIER 4",
    title: "NEW BLOOD (Young & Guided by Upper Tiers)",
    description: "New and active — the future if they stay grinding.",
    theme: {
      primary: "hsl(120, 60%, 50%)",
      secondary: "hsl(120, 60%, 60%)",
      accent: "hsl(120, 60%, 70%)",
      bg: "linear-gradient(135deg, hsl(120, 60%, 50% / 0.15), hsl(120, 60%, 50% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝ13", fullName: "13", emoji: "💪", status: "Young with bright future" },
      { name: "ФƓゝHABIBI", fullName: "habibi", emoji: "❤️", status: "NEW, positive energy player" },
      { name: "ФƓゝTEDDY", fullName: "teddy", emoji: "👊", status: "NEW, awaiting display" },
      { name: "ФƓゝDRIZZY", fullName: "drizzy", emoji: "⏱️", status: "NEW, active, still learning" },
      { name: "ФƓゝOWNER", fullName: "owner", emoji: "👊", status: "Solid, always present" },
      { name: "ФƓゝGUILLAUME", fullName: "guillaume", emoji: "👊", status: "New, needs fire back" },
      { name: "ФƓゝSTAIN", fullName: "stain", emoji: "🌀", status: "Low activity, still new" },
      { name: "ФƓゝNO_FACE", fullName: "noface", emoji: "🔁", status: "New, slow but steady grind" },
      { name: "ФƓゝFABISCO", fullName: "fabisco", emoji: "🎯", status: "New, ready to fight" },
      { name: "ФƓゝBUNNY", fullName: "bunny", emoji: "🐰", status: "Active, brings spirit" },
      { name: "ФƓゝSEASMOKE", fullName: "seasmoke", emoji: "💪", status: "New and ready to shine" }
    ]
  },
  {
    id: 5,
    name: "TIER 5",
    title: "COLD ZONE (No Clan Activity) ❄️ Frozen Shadows",
    description: "Still family, but inactive or inconsistent. Must return or risk removal.",
    theme: {
      primary: "hsl(200, 40%, 40%)",
      secondary: "hsl(200, 40%, 50%)",
      accent: "hsl(200, 40%, 60%)",
      bg: "linear-gradient(135deg, hsl(200, 40%, 40% / 0.15), hsl(200, 40%, 40% / 0.05))"
    },
    soldiers: [
      { name: "ФƓゝDNA", fullName: "dna", emoji: "🧬", status: "Away for now, potential when back. ❄️", hasProfile: true, profileId: "dna" },
      { name: "ФƓゝÑØØB»", fullName: "noob", emoji: "🎮", status: "Off for personal reasons. ❄️" },
      { name: "ФƓゝBRAWNZY", fullName: "brawnzy", emoji: "🟡", status: "On personal break. ❄️" },
      { name: "ФƓゝCULT", fullName: "cult", emoji: "⛔", status: "No activity, no clan tag" },
      { name: "ФƓゝDED", fullName: "ded", emoji: "⛔", status: "Gone from clan actions", hasProfile: true, profileId: "ded" },
      { name: "ФƓゝDRIPS", fullName: "drips", emoji: "⛔", status: "Missing" },
      { name: "ФƓゝMATIC", fullName: "matic", emoji: "⛔", status: "No presence like before" },
      { name: "ФƓゝWIZ", fullName: "wiz", emoji: "⛔", status: "Absent from clan progress" }
    ]
  }
];