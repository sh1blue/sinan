import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al Wakrah, Qatar | Sinan Basim",
  description: "Planning an event in Al Wakrah? Enquire with Doha-based football freestyler Sinan Basim about a live performance for community events, sports programmes, brand activations and private celebrations in the area.",
  alternates: { canonical: "/football-freestyler-al-wakrah" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-wakrah",
    title: "Football Freestyler in Al Wakrah, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al Wakrah, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlWakrahFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al Wakrah"
      slug="al-wakrah"
      intro="Planning an event in Al Wakrah? Enquire with Doha-based football freestyler Sinan Basim about a live performance for community events, sports programmes, brand activations and private celebrations in the area."
      localContext="Al Wakrah has its own town centre and growing residential communities, making it a setting for family occasions, local gatherings and organised public events. Freestyle football offers a visual live act that can engage guests across different age groups."
      eventContext="A performance in Al Wakrah can be discussed for a private venue, a public programme or a brand-led event. Share the event setting and audience so the performance style can be considered around the space."
    />
  );
}
