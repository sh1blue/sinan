import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Umm Salal, Qatar | Sinan Basim",
  description: "Searching for a football freestyler in Umm Salal? Sinan Basim is based in Doha and accepts enquiries for event performances across Qatar, including corporate gatherings, community occasions, sports events and private celebrations.",
  alternates: { canonical: "/football-freestyler-umm-salal" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-umm-salal",
    title: "Football Freestyler in Umm Salal, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Umm Salal, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function UmmSalalFreestylerPage() {
  return (
    <LocationLandingPage
      name="Umm Salal"
      slug="umm-salal"
      intro="Searching for a football freestyler in Umm Salal? Sinan Basim is based in Doha and accepts enquiries for event performances across Qatar, including corporate gatherings, community occasions, sports events and private celebrations."
      localContext="Umm Salal's residential communities and local venues make it a practical area for family events, community programmes and private functions. A freestyle performance can provide a distinctive entertainment segment without requiring a full-scale stage production."
      eventContext="The show format can be adapted through discussion with the organiser, taking into account the available space, audience size and event schedule. Contact Sinan with the venue and date to discuss the details."
    />
  );
}
