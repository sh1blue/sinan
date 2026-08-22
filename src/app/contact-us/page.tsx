import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = { title: `Contact | ${site.name}` };

export default function ContactUs() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Book Sinan"
        intro="Tell me about your event and I'll reply within 24 hours."
      />

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl text-chalk">Details</h2>
            <div className="mt-6 space-y-5 text-sm text-chalk-dim/80">
              <div>
                <p className="text-xs uppercase tracking-wide text-gold">Location</p>
                <p className="mt-1">{site.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gold">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 block hover:text-flare">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gold">Response Time</p>
                <p className="mt-1">Within 24 hours</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gold">Follow</p>
                <div className="mt-1 flex gap-4">
                  <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                    Instagram
                  </a>
                  <a href={site.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                    YouTube
                  </a>
                  <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-flare">
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-[#25D366] px-6 py-3 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366] hover:text-turf"
              >
                Message on WhatsApp
              </a>
            )}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
