import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al-Shahaniya, Qatar | Sinan Basim",
  description: "Organising an event in Al-Shahaniya? Book a football freestyle performance by Sinan Basim for community celebrations, sports gatherings, corporate occasions and private events.",
  alternates: { canonical: "/football-freestyler-al-shahaniya" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-shahaniya",
    title: "Football Freestyler in Al-Shahaniya, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al-Shahaniya, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlShahaniyaFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al-Shahaniya"
      slug="al-shahaniya"
      intro="Organising an event in Al-Shahaniya? Enquire about a football freestyle performance by Sinan Basim for community celebrations, sports gatherings, corporate occasions and private events."
      localContext="Al-Shahaniya covers communities west of Doha, where local gatherings and organised events can benefit from entertainment that is easy to watch and works in a live setting. Football freestyle brings technical ball skills into a compact performance format."
      eventContext="Whether the event is indoors or outdoors, the performance requirements can be discussed in advance. Share the venue, available performance area and expected audience when making an enquiry."
    />
  );
}
