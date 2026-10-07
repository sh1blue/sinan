# Sbn Freestyler — Website

Next.js + Tailwind CSS site for Sinan Basim (Sbn Freestyler), with a built-in
admin panel (Sanity Studio) for managing photos, videos, and testimonials
without touching code.

## 1. Install & Run Locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
```

## 2. Set Up Sanity (your admin panel) — one-time, ~5 minutes

1. Go to https://sanity.io and sign up (free — no credit card needed)
2. Run this in the project folder and follow the prompts:
   ```bash
   npx sanity@latest init
   ```
   - When asked "Create new project?" → yes, give it any name (e.g. "Sbn Freestyler")
   - When asked about a dataset → choose the default `production`
   - When asked "Would you like to add configuration files for a Sanity project in this Next.js folder?" → **No** (this project's config is already set up)
3. Copy `.env.local.example` to a new file called `.env.local`
4. Go to https://sanity.io/manage, open your new project, and copy the **Project ID** into `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=paste_it_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
5. In https://sanity.io/manage → your project → API → CORS Origins, add:
   - `http://localhost:3000` (for local dev)
   - your future live site URL, once deployed (e.g. `https://yoursite.vercel.app`)

## 3. Run It

```bash
npm run dev
```
- Site: http://localhost:3000
- **Admin panel: http://localhost:3000/studio** — log in with your Sanity account, then add/remove/reorder Photos, Videos, and Testimonials. Changes appear on the live site within a few seconds, no redeploy needed.

## 4. What You Can Manage From the Admin Panel

Open **/studio** and you'll see three sections:
- **Photos** — tag each one with where it should appear (Home Hero, About page, Recent Work gallery, Commercial Brands, or a specific Hire page). Add or delete freely; the site updates automatically.
- **Videos** — paste any public Instagram reel/post URL and it embeds live on the Recent Work page.
- **Testimonials** — add client quotes; the "Testimonials coming soon" placeholder disappears automatically once you add your first one.

Everything else (bio text, stats, brand list, milestones, hire-page copy) still
lives in `src/data/site.ts` — edit that file directly for text changes.

## 5. Before You Launch — Remaining Setup

### a) Connect the contact form (Formspree)
1. Create a free account at https://formspree.io
2. Create a new form, copy the endpoint URL (looks like `https://formspree.io/f/xxxxxxx`)
3. Paste it into `src/components/ContactForm.tsx`, replacing `FORMSPREE_ENDPOINT`

### b) Add your WhatsApp number
Open `src/data/site.ts` and set:
```ts
whatsapp: "97400000000", // your number, country code first, no + or spaces
```
The floating WhatsApp button only appears once this is set.

## 6. Deploy (Vercel — recommended)

1. Push this project to a GitHub repo
2. Go to https://vercel.com, import the repo
3. Add the two `NEXT_PUBLIC_SANITY_*` environment variables from step 2 in Vercel's project settings
4. Click Deploy
5. Add your live URL to Sanity's CORS origins (step 2.5 above) so the admin panel works in production too

## Project Structure

```
src/
  app/                     → one folder per page (route)
    studio/                → the admin panel, embedded at /studio
  components/              → Nav, Footer, ContactForm, etc.
  data/site.ts             → bio text, stats, brands, milestones (edit directly)
  sanity/                  → CMS schemas, client, and queries
public/images/             → fallback images used until CMS content is added
```

