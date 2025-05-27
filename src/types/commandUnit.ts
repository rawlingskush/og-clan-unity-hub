

export interface CommandMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

export const commandUnit: CommandMember[] = [
  {
    id: "owner",
    name: "ФƓゝ OWNER",
    title: "Clan Manager 🛡️",
    bio: "Schengen Owner keeps the machine humming behind the scenes — and only rarely steps onto the battlefield. He manages clan affairs, safeguards the vision, and maintains the code that binds OG Clan Cameroon together."
  },
  {
    id: "hacks",
    name: "ФƓゝ HACKAGON",
    title: "Team Manager 📋",
    bio: "Hacks is the logistical mind behind the machine — aligning events, managing operations, and keeping every strike sharp and synchronized. When OG Clan moves, it's because Hacks paved the way.",
    imageUrl: "/lovable-uploads/5828ba27-9eba-4d33-b24f-d71491993fdc.png"
  }
];
