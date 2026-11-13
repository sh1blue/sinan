import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata = {
  title: "Football Freestyler in Al Shamal, Qatar | Sinan Basim",
  description: "Looking for football freestyle entertainment in Al Shamal? Sinan Basim takes enquiries for performances across Qatar, including events and celebrations in the country's northern region.",
  alternates: { canonical: "/football-freestyler-al-shamal" },
  openGraph: {
    type: "website" as const,
    url: "https://sbnfreestyler.com/football-freestyler-al-shamal",
    title: "Football Freestyler in Al Shamal, Qatar | Sinan Basim",
    description: "Enquire about football freestyle performances in Al Shamal, Qatar with Sinan Basim. Event entertainment for sports, brands and celebrations.",
  },
};

export default function AlShamalFreestylerPage() {
  return (
    <LocationLandingPage
      name="Al Shamal"
      slug="al-shamal"
      intro="Looking for football freestyle entertainment in Al Shamal? Sinan Basim takes enquiries for performances across Qatar, including events and celebrations in the country's northern region."
      localContext="Al Shamal is Qatar's northernmost municipality, with communities and event venues spread across a wider area. Organisers can enquire about bringing a live football freestyle feature to a local celebration, sports gathering or private function."
      eventContext="Because event locations and travel requirements can vary, share the exact venue and schedule when enquiring. Sinan can then discuss whether the date, performance format and logistics are suitable."
    />
  );
}
