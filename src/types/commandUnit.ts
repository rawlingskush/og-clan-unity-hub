
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
    name: "ФƓゝ HACKS",
    title: "Team Manager 📋",
    bio: "Hacks is the logistical mind behind the machine — aligning events, managing operations, and keeping every strike sharp and synchronized. When OG Clan moves, it's because Hacks paved the way."
  },
  {
    id: "hackagon",
    name: "ФƓゝ HACKAGON",
    title: "Strategic Manager ⚔️",
    bio: "Hackagon brings the tactical edge to OG Clan's command structure. With a sharp mind for strategy and an eye for emerging threats, he coordinates high-level operations and ensures the clan stays ahead of the competition.",
    imageUrl: "/lovable-uploads/aaa204ba-cbf7-425c-be10-3adac1f5b437.png"
  }
];
