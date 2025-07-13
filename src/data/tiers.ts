import { TierData } from '@/types/tier';

export const tierData: TierData[] = [
  {
    id: 1,
    name: "TIER 1",
    title: "CORE COMPETITIVES",
    description: "The elite. Tournament-ready. Trusted leaders in battle.",
    theme: {
      primary: "hsl(var(--ogclan))",
      secondary: "hsl(var(--ogclan-glow))",
      accent: "hsl(45, 100%, 60%)",
      bg: "hsl(var(--ogclan) / 0.1)"
    },
    soldiers: [
      { name: "ФƓゝEXODUSKI", fullName: "exodus", emoji: "🛡️", status: "Deadly instinct, Clan's shield", hasProfile: true, profileId: "exodus" },
      { name: "ФƓゝDHAMER", fullName: "dhamer", emoji: "⚔️", status: "Razor-sharp, unshaken", hasProfile: true, profileId: "dhamer" },
      { name: "ФƓゝSL1M", fullName: "slim", emoji: "🏅", status: "Veteran & consistent playmaker", hasProfile: true, profileId: "slim" },
      { name: "ФƓゝCHAMBAS", fullName: "chambas", emoji: "🦁", status: "Fearless firepower, OG pillar", hasProfile: true, profileId: "chambas" },
      { name: "ФƓゝSTARLIGHT", fullName: "starlight", emoji: "🌀", status: "Powerful clutch-master — still rising" }
    ]
  },
  {
    id: 2,
    name: "TIER 2",
    title: "ASCENDING STARS",
    description: "Grinding hard. Showing up. Pushing toward the core.",
    theme: {
      primary: "hsl(200, 100%, 60%)",
      secondary: "hsl(200, 100%, 70%)",
      accent: "hsl(200, 100%, 80%)",
      bg: "hsl(200, 100%, 60% / 0.1)"
    },
    soldiers: [
      { name: "ФƓゝJOHNWICK", fullName: "johnwick", emoji: "🔫", status: "Solid future ahead", hasProfile: true, profileId: "johnwick" },
      { name: "ФƓゝOVERKILL", fullName: "overkill", emoji: "🧪", status: "Tier 1 talent — needs that OG stamp" },
      { name: "ФƓゝ23", fullName: "23", emoji: "🎯", status: "OG anchor, elite aim", hasProfile: true, profileId: "23" },
      { name: "ФƓゝWIZARD", fullName: "wizard", emoji: "🔮", status: "Strategic & calm under pressure", hasProfile: true, profileId: "wizard" },
      { name: "ФƓゝDAMAGE", fullName: "damage", emoji: "🤝", status: "Synergy king, scrim legend", hasProfile: true, profileId: "damage" },
      { name: "ФƓゝBLACKSAVAGE", fullName: "blacksavage", emoji: "🎯", status: "Map smart from Day 1", hasProfile: true, profileId: "blacksavage" },
      { name: "ФƓゝLILNASTY", fullName: "lilnasty", emoji: "💥", status: "Back and hungry", hasProfile: true, profileId: "lilnasty" },
      { name: "ФƓゝBOTGIRL", fullName: "botgirl", emoji: "🚀", status: "New device = next-level impact", hasProfile: true, profileId: "botgirl" },
      { name: "ФƓゝWHITE", fullName: "ogwhite", emoji: "🔄", status: "Big clutches, growing fast", hasProfile: true, profileId: "ogwhite" },
      { name: "ФƓゝSWIZZY", fullName: "swizzy", emoji: "🔥", status: "Reliable with drastic improvement", hasProfile: true, profileId: "swizzy" },
      { name: "ФƓゝESQUARE", fullName: "esquare", emoji: "💥", status: "Pressure-tested, fearless", hasProfile: true, profileId: "esquare" },
      { name: "ФƓゝLAMENACE", fullName: "lamenace", emoji: "🎯", status: "Needs more scrims & match output", hasProfile: true, profileId: "lamenace" },
      { name: "ФƓゝHOLY", fullName: "holy", emoji: "🧘", status: "Currently on break" },
      { name: "ФƓゝMATIC", fullName: "matic", emoji: "⚡", status: "Solid, but needs comp reps" },
      { name: "ФƓゝUNCLE B", fullName: "uncle b", emoji: "🛡️", status: "Good energy, consistent", hasProfile: true, profileId: "uncleB" },
      { name: "ФƓゝTELOS", fullName: "telos", emoji: "🚀", status: "Improving, but inactive lately" },
      { name: "ФƓゝBRAWNZY", fullName: "brawnzy", emoji: "📈", status: "Big potential, needs more reps" }
    ]
  },
  {
    id: 3,
    name: "TIER 3",
    title: "ACTIVE LEARNERS",
    description: "Present. Willing. Let's help them rise.",
    theme: {
      primary: "hsl(30, 100%, 60%)",
      secondary: "hsl(30, 100%, 70%)",
      accent: "hsl(30, 100%, 80%)",
      bg: "hsl(30, 100%, 60% / 0.1)"
    },
    soldiers: [
      { name: "ФƓゝGAMEHOUSE", fullName: "gamehouse", emoji: "🔧", status: "Needs more match experience", hasProfile: true, profileId: "gamehouse" },
      { name: "ФƓゝCULT", fullName: "cult", emoji: "🧱", status: "Building confidence" },
      { name: "ФƓゝ21", fullName: "21", emoji: "🌀", status: "Committed to improve", hasProfile: true, profileId: "21" },
      { name: "ФƓゝSHADY", fullName: "shady", emoji: "🗣️", status: "Lacks experience, but shows effort", hasProfile: true, profileId: "shady" },
      { name: "ФƓゝJINWOO", fullName: "jinwoo", emoji: "🧩", status: "Needs guidance and reps" },
      { name: "ФƓゝSPRIZER", fullName: "sprizer", emoji: "🎮", status: "Steady development" },
      { name: "ФƓゝREXO", fullName: "rexo", emoji: "🤼", status: "Needs team play to unlock potential" },
      { name: "ФƓゝNOOB", fullName: "noob", emoji: "💡", status: "Great future ahead" },
      { name: "ФƓゝMAFIA", fullName: "mafia", emoji: "❤️", status: "Shows heart, impact to come" },
      { name: "ФƓゝMULLER", fullName: "muller", emoji: "🔁", status: "Active, needs more squad play" },
      { name: "ФƓゝDURANT", fullName: "durant", emoji: "🎯", status: "Accuracy-focused" },
      { name: "ФƓゝVENOM", fullName: "venom", emoji: "📆", status: "Getting better every match", hasProfile: true, profileId: "venom" },
      { name: "ФƓゝSHINOBI", fullName: "shinobi", emoji: "🎯", status: "Tier 2 potential showing" }
    ]
  },
  {
    id: 4,
    name: "TIER 4",
    title: "COLD BUT CAPABLE",
    description: "Missing reps. Low energy. But still family.",
    theme: {
      primary: "hsl(220, 30%, 60%)",
      secondary: "hsl(220, 30%, 70%)",
      accent: "hsl(220, 30%, 80%)",
      bg: "hsl(220, 30%, 60% / 0.1)"
    },
    soldiers: [
      { name: "ФƓゝVENOM", fullName: "venom", emoji: "💤", status: "Real Good Soldier but inconsistent gameplay", hasProfile: true, profileId: "venom" },
      { name: "ФƓゝDIDDY", fullName: "diddy", emoji: "🛠️", status: "Build chemistry with squad" },
      { name: "ФƓゝOWNER", fullName: "owner", emoji: "🎮", status: "Needs to lock in" },
      { name: "ФƓゝDED", fullName: "ded", emoji: "❌", status: "Barely active", hasProfile: true, profileId: "ded" },
      { name: "ФƓゝSNAKESEYE", fullName: "snakeeye", emoji: "⏳", status: "Needs rotation awareness" },
      { name: "ФƓゝAMINUTE", fullName: "aminute", emoji: "🗓️", status: "Barely active" },
      { name: "ФƓゝHOMELANDER", fullName: "homelander", emoji: "❄️", status: "New — under review" },
      { name: "ФƓゝSUSPECT", fullName: "suspect", emoji: "🧭", status: "Solid shooter, needs games" },
      { name: "ФƓゝMAJOR", fullName: "major", emoji: "👀", status: "Must improve presence" },
      { name: "ФƓゝPUNISHER", fullName: "punisher", emoji: "🔮", status: "Surprise factor — watching closely" }
    ]
  },
  {
    id: 5,
    name: "TIER 5",
    title: "DEVELOPMENT ZONE",
    description: "Fresh. Potential. Under guidance.",
    theme: {
      primary: "hsl(260, 100%, 60%)",
      secondary: "hsl(260, 100%, 70%)",
      accent: "hsl(260, 100%, 80%)",
      bg: "hsl(260, 100%, 60% / 0.1)"
    },
    soldiers: [
      { name: "⚠️ ФƓゝPINKY", fullName: "pinky", emoji: "💪", status: "Training with Tier 1" },
      { name: "⚠️ ФƓゝOG XENO", fullName: "og xeno", emoji: "🧠", status: "New but promising" },
      { name: "⚠️ ФƓゝDENZEL", fullName: "denzel", emoji: "👀", status: "Early signs — we're watching" }
    ]
  }
];