export type ProjectCategory = 'Apps & websites' | 'Smart home' | 'Travel';
export type ProjectStatus = 'Live' | 'In development' | 'Alpha Testing' | 'Beta Testing' | 'Private Preview' | 'Details coming soon';

export type Project = {
  name: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  status: ProjectStatus;
  href?: string;
  kind: 'product' | 'integration' | 'website' | 'lovelace';
  icon: 'brain' | 'leaf' | 'chart' | 'home' | 'map' | 'sparkles' | 'wallet';
  featured?: boolean;
  tags: string[];
  tech: string[];
};

// Update this file as projects evolve. Keep descriptions factual and user-focused.
export const projects: Project[] = [
  {
    name: "Your Mind Mate",
    slug: "your-mind-mate",
    category: "Apps & websites",
    description:
      "A mental wellbeing app for tracking mood, sleep, medication, and daily activities, with journaling and guided support. Available on the web, as a PWA, and on Android.",
    status: "Live",
    href: "https://yourmindmate.com",
    kind: "product",
    icon: "brain",
    featured: true,
    tags: ["Web app", "PWA", "Android"],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Gradle",
      "Azure Cosmos DB",
      "Vercel Blob",
      "Azure Functions",
      "Firebase",
      "Microsoft Entra ID",
      "OAuth 2.0",
    ],
  },
  {
    name: "Parkie",
    slug: "parkie",
    category: "Apps & websites",
    description:
      "A social app for bringing friends and family together in circles to share activities, events, photos, and updates.",
    status: "Alpha Testing",
    href: "https://parkie-app.nl",
    kind: "website",
    icon: "sparkles",
    tags: ["Website"],
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Azure Cosmos DB",
      "Azure Blob Storage",
      "Capacitor",
      "NextAuth.js",
      "Pusher",
    ],
  },
  {
    name: "Kasgeld",
    slug: "kasgeld",
    category: "Apps & websites",
    description:
      "A group savings app for managing monthly contributions, assigning shares, tracking payments, and coordinating payouts and swap requests.",
    status: "Private Preview",
    href: "https://kasgeld.fambalker.net",
    kind: "website",
    icon: "wallet",
    tags: ["Website"],
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Azure Cosmos DB",
      "NextAuth.js",
      "Resend",
      "Tailwind CSS",
      "Radix UI",
    ],
  },
  {
    name: "Investment Tracker",
    slug: "investment-tracker",
    category: "Smart home",
    description:
      "Track brokerage holdings in Home Assistant with API, CSV, or manual imports, market prices, and portfolio and asset sensors.",
    status: "Live",
    href: "https://github.com/jo-anb/investment-tracker",
    kind: "integration",
    icon: "chart",
    tags: ["Home Assistant", "Integration"],
    tech: ["Python", "Home Assistant", "Requests"],
  },
  {
    name: "Simple Plant Extended",
    slug: "simple-plant-extended",
    category: "Smart home",
    description:
      "A Home Assistant integration for managing plant profiles and care schedules, including watering, fertilizing, misting, and cleaning, with reminders and activity notes.",
    status: "Live",
    href: "https://github.com/jo-anb/simple-plant-extended",
    kind: "integration",
    icon: "leaf",
    tags: ["Home Assistant", "Integration", "HACS"],
    tech: ["Python", "Home Assistant", "aiofiles"],
  },
  {
    name: "Simple Plant Extended Card",
    slug: "simple-plant-extended-card",
    category: "Smart home",
    description:
      "A companion Home Assistant dashboard card for plant-care schedules, with per-plant details, all-plant task overviews, and activity notes.",
    status: "Live",
    href: "https://github.com/jo-anb/simple-plant-extended-card",
    kind: "lovelace",
    icon: "leaf",
    tags: ["Home Assistant", "Custom card", "HACS"],
    tech: ["JavaScript", "Lit", "Home Assistant", "Parcel"],
  },
  {
    name: "Investment Tracker Card",
    slug: "investment-tracker-card",
    category: "Smart home",
    description:
      "A companion Home Assistant dashboard card for tracking brokerage holdings with API, CSV, or manual imports, market prices, and portfolio and asset sensors.",
    status: "Live",
    href: "https://github.com/jo-anb/investment-tracker-card",
    kind: "lovelace",
    icon: "chart",
    tags: ["Home Assistant", "Custom card", "HACS"],
    tech: ["JavaScript", "Lit", "Home Assistant", "Parcel"],
  },
  {
    name: "MooiWonen.nu",
    slug: "mooiwonen",
    category: "Apps & websites",
    description:
      "The website for Arnhem-based Bouwbedrijf Mooi Wonen, showcasing construction projects, job openings, FAQs, and contact options.",
    status: "Live",
    href: "https://mooiwonen.nu",
    kind: "website",
    icon: "home",
    tags: ["Website"],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Vercel Blob",
      "Resend",
      "Tailwind CSS",
    ],
  },
  {
    name: "Family Roadtrip",
    slug: "family-roadtrip",
    category: "Travel",
    description:
      "A collaborative family trip planner for proposing destinations, planning activities and reservations, tracking budgets, and organizing trip documents.",
    status: "Private Preview",
    href: "https://holiday.fambalker.net",
    kind: "website",
    icon: "map",
    tags: ["Travel"],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Azure Cosmos DB",
      "NextAuth.js",
      "Leaflet",
      "Vercel Blob",
      "Resend",
    ],
  },
];
