import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al Khor, Qatar | Sinan Basim",
  description: "Need a football freestyler for an event in Al Khor? Sinan Basim is available for live football freestyle performances across Qatar, including sports events, company functions, brand activations and private celebrations in the north.",
  alternates: { canonical: "/football-freestyler-al-khor" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-khor",
    title: "Football Freestyler in Al Khor, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al Khor, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlKhorFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al Khor"
      slug="al-khor"
      intro="Need a football freestyler for an event in Al Khor? Sinan Basim takes enquiries for live football freestyle performances across Qatar, including sports events, company functions, brand activations and private celebrations in the north."
      localContext="Al Khor is an important population centre in northern Qatar. Football and community events provide natural settings for a live freestyle feature, from audience-facing entertainment to a scheduled stage performance."
      eventContext="Sinan has previously performed at the FIFA World Cup Qatar 2022 Fan Zone at Baladna Al Khor. If you are organising an event in Al Khor, get in touch with the date, venue and programme details to discuss a new booking."
    />
  );
}
