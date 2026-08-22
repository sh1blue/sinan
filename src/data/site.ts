export const site = {
  name: "Sinan Basim",
  handle: "Sbn Freestyler",
  tagline: "Football Freestyler · Content Creator · Artist",
  location: "Doha, Qatar",
  email: "Sbnfreestyler@gmail.com",
  whatsapp: "", // add number, e.g. "97400000000" (country code, no + or spaces)
  socials: {
    instagram: "https://www.instagram.com/sinxn_bxsim",
    youtube: "https://youtube.com/@sinxn_bxsim",
    tiktok: "https://www.tiktok.com/@sinxn_bxsim",
  },
  stats: [
    { value: "8", label: "Years Freestyling" },
    { value: "22M", label: "Views, Single Reel" },
    { value: "20K+", label: "Instagram Community" },
    { value: "30+", label: "Brand Campaigns" },
  ],
  brands: [
    "Gymslave × Kerala Blasters FC",
    "Saudia Hyper",
    "Rawabi Hyper",
    "Tea World",
    "Naimi Cafeteria",
    "Café de Classico",
  ],
  milestones: [
    {
      year: "2018",
      title: "The First Touch",
      text: "Picked up a ball during lockdown, looking for a way to stay active and creative. Started filming and posting.",
    },
    {
      year: "2021",
      title: "Local Recognition",
      text: "Featured on Kerala's Media One channel as his freestyle content began reaching wider audiences.",
    },
    {
      year: "2021",
      title: "Gymslave × Kerala Blasters FC",
      text: "First brand partnership — promoting official Kerala Blasters FC masks through freestyle content.",
    },
    {
      year: "2022",
      title: "22 Million Views",
      text: "A single reel breaks out, followed by further videos crossing 5M and 1M+ views.",
    },
    {
      year: "2022",
      title: "FIFA World Cup Fan Zone",
      text: "Performed live at the Baladna Al Khor Fan Zone during the FIFA World Cup Qatar 2022.",
    },
    {
      year: "2023",
      title: "AFC Asian Cup Fan Zone",
      text: "Returned to perform at the AFC Asian Cup Fan Zone.",
    },
    {
      year: "2023",
      title: "On Air",
      text: "Invited onto Qatar Malayalam Radio 98.6 FM to share his story.",
    },
    {
      year: "2023",
      title: "Sharing the Pitch with I. M. Vijayan",
      text: "Performed with and in front of Indian football legend I. M. Vijayan.",
    },
    {
      year: "2023",
      title: "TKMCE Alumni Recognition",
      text: "Honored by TKMCE Alumni Qatar for his performance at the SangaPadhya '23 Inter-Engineering College tournament in Doha.",
    },
  ],
  navHire: [
    { label: "Corporate Events", href: "/freestyle-football-hire/corporate-events" },
    { label: "Product Activations", href: "/freestyle-football-hire/product-activations" },
    { label: "Sports Events", href: "/freestyle-football-hire/sports-events" },
    { label: "Weddings & Private Events", href: "/freestyle-football-hire/weddings-birthdays" },
  ],
};

export type HireService = {
  slug: string;
  title: string;
  intro: string;
  body: string[];
  bullets: string[];
};

export const hireServices: Record<string, HireService> = {
  "corporate-events": {
    slug: "corporate-events",
    title: "Corporate Events",
    intro:
      "Ball skills built for boardrooms, launches, and stages — a live act that gets a room's attention in under a minute.",
    body: [
      "Freestyle football brings movement, energy, and genuine skill into corporate spaces that usually run on slideshows and canapés. Sinan builds short, high-impact sets designed around your event's flow — a floor opener, a stage interlude between speakers, or a closing moment guests remember and talk about after they leave.",
      "Every set is tailored to the room: track selection, run time, and whether it's a solo floor performance or paired with a screen for close-up ball control shots.",
    ],
    bullets: [
      "3–15 minute live sets, tailored to your run of show",
      "Suited to product launches, conferences, staff events, award nights",
      "Available across Qatar, with travel for select bookings",
    ],
  },
  "product-activations": {
    slug: "product-activations",
    title: "Product Activations & Brand Promos",
    intro:
      "From brand mascots to full campaign shoots — freestyle football as a hook for your product story.",
    body: [
      "Sinan has produced 30+ promotional videos for brands and businesses — from retail activations with Saudia Hyper and Rawabi Hyper to café and restaurant campaigns for Tea World, Naimi Cafeteria, and Café de Classico. His background as both performer and video editor means a campaign can be shot, cut, and delivered end-to-end by one creative team.",
      "This covers concept development, filming, and edit — built around your product, your space, and your audience.",
    ],
    bullets: [
      "In-store or on-location activations",
      "Short-form content built for Instagram and TikTok",
      "Full-service: concept, filming, and editing",
    ],
  },
  "sports-events": {
    slug: "sports-events",
    title: "Sports Events",
    intro:
      "Half-time entertainment and fan-zone performances for clubs, tournaments, and match days.",
    body: [
      "Sinan has performed at some of the region's biggest football moments — including the FIFA World Cup Qatar 2022 Fan Zone at Baladna Al Khor and the AFC Asian Cup 2023 Fan Zone — and shared the pitch with Indian football legend I. M. Vijayan.",
      "For clubs, tournaments, and match-day organizers, a freestyle set fills half-time or pre-match slots with genuine skill that plays well on the big screen and in the stands.",
    ],
    bullets: [
      "Half-time and pre-match performances",
      "Fan-zone and tournament activations",
      "Experience performing at major international football events",
    ],
  },
  "weddings-birthdays": {
    slug: "weddings-birthdays",
    title: "Weddings, Birthdays & Private Events",
    intro:
      "A surprise act that turns any celebration into something guests didn't expect.",
    body: [
      "For weddings, birthdays, and private parties, a freestyle set is a different kind of entertainment — close-up, high-skill, and genuinely fun to watch. Sets are built around the moment: a surprise for the guest of honor, entertainment during a reception lull, or a highlight for the kids' section of a birthday party.",
    ],
    bullets: [
      "Custom-length sets for receptions and parties",
      "Great for surprise moments and guest interaction",
      "Family-friendly, all ages",
    ],
  },
};
