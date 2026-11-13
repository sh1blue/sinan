import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al Daayen, Qatar | Sinan Basim",
  description: "Planning a gathering or event in Al Daayen? Contact Sinan Basim to enquire about football freestyle entertainment for private celebrations, sports programmes, brand activations and corporate events in the area.",
  alternates: { canonical: "/football-freestyler-al-daayen" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-daayen",
    title: "Football Freestyler in Al Daayen, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al Daayen, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlDaayenFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al Daayen"
      slug="al-daayen"
      intro="Planning a gathering or event in Al Daayen? Contact Sinan Basim to enquire about football freestyle entertainment for private celebrations, sports programmes, brand activations and corporate events in the area."
      localContext="Al Daayen includes expanding communities north of Doha. For organisers planning a local event, football freestyle can create a lively focal point for guests and provide a memorable live feature within a wider programme."
      eventContext="From a short stage appearance to a performance integrated into an event schedule, the format and duration are agreed with the organiser. Enquiries are considered according to the event details and availability."
    />
  );
}
