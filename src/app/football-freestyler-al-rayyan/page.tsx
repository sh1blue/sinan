import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al Rayyan, Qatar | Sinan Basim",
  description: "Looking for a football freestyler in Al Rayyan? Sinan Basim is available for live football freestyle performances for corporate functions, sports occasions, brand activations and private celebrations. Enquire with your venue and event details to discuss a suitable performance.",
  alternates: { canonical: "/football-freestyler-al-rayyan" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-rayyan",
    title: "Football Freestyler in Al Rayyan, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al Rayyan, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlRayyanFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al Rayyan"
      slug="al-rayyan"
      intro="Looking for a football freestyler in Al Rayyan? Sinan Basim offers live football freestyle entertainment for corporate functions, sports occasions, brand activations and private celebrations. Enquire with your venue and event details to discuss a suitable performance."
      localContext="Al Rayyan brings together residential communities, education, sport and major public venues. A football freestyle performance can add a live, visual feature to an event programme, whether it is a community celebration, organised sports occasion or company gathering."
      eventContext="For organisers in Al Rayyan, the performance can be planned as a stage feature, audience interaction moment or short entertainment segment between programme activities. The format depends on the venue, audience and event schedule."
    />
  );
}
