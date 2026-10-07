"use client";

import { useState } from "react";

// TODO: replace with your real Formspree endpoint ID
// 1. Create a free form at https://formspree.io
// 2. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxxxx)
// 3. Paste it below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-turf-line bg-turf-light p-8 text-center">
        <p className="font-display text-2xl text-flare">Message sent</p>
        <p className="mt-2 text-sm text-chalk-dim/70">
          Thanks for reaching out — expect a reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wide text-chalk-dim/60">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full border border-turf-line bg-turf px-4 py-3 text-chalk outline-none focus:border-flare"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wide text-chalk-dim/60">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border border-turf-line bg-turf px-4 py-3 text-chalk outline-none focus:border-flare"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wide text-chalk-dim/60">
          Event type / enquiry
        </label>
        <input
          name="event_type"
          type="text"
          placeholder="e.g. Corporate event, wedding, brand campaign"
          className="w-full border border-turf-line bg-turf px-4 py-3 text-chalk outline-none focus:border-flare"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-wide text-chalk-dim/60">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-turf-line bg-turf px-4 py-3 text-chalk outline-none focus:border-flare"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 bg-flare px-6 py-3.5 font-medium text-turf transition hover:bg-flare-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — please try again, or email directly.
        </p>
      )}
    </form>
  );
}
