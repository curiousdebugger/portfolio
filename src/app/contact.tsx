"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="w-full max-w-md mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[var(--primary)]">
        Contact
      </h2>
      {submitted ? (
        <div className="text-center text-[var(--primary)]">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form
          className="flex flex-col gap-4 bg-[var(--background)] p-6 rounded-lg border border-[var(--primary)]/10 shadow-sm"
          action="https://formspree.io/f/mayvlqzq" // Replace with your Formspree ID or backend endpoint
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="px-3 py-2 rounded border border-[var(--primary)]/10 bg-[var(--background)] text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="px-3 py-2 rounded border border-[var(--primary)]/10 bg-[var(--background)] text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="px-3 py-2 rounded border border-[var(--primary)]/10 bg-[var(--background)] text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />
          <button
            type="submit"
            className="mt-2 rounded bg-[var(--primary)] text-[var(--background)] px-4 py-2 font-semibold hover:bg-[color:var(--primary-dark)] transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
      <div className="mt-6 text-center text-sm text-[var(--foreground)]/80">
        Or email me at{" "}
        <a
          href="mailto:kshitij.rangari92@gmail.com"
          className="underline text-[var(--primary)]"
        >
          kshitij.rangari92@gmail.com
        </a>
      </div>
    </section>
  );
}
