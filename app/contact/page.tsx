"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (e.g., Formspree, server action)
    setSubmitted(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
            Contact
          </p>
          <h1 className="font-serif text-5xl text-forest mb-4">Get in Touch</h1>
          <div className="w-16 h-px bg-tan mb-6" />
          <p className="font-sans text-warm-mid text-lg leading-relaxed">
            Rachel welcomes inquiries from individuals, couples, and families
            seeking support. Reach out to schedule a consultation or ask any
            questions.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl text-forest mb-6">
              Send a Message
            </h2>
            {submitted ? (
              <div className="bg-sage/10 border border-sage p-6">
                <p className="font-sans text-forest">
                  Thank you for reaching out. Rachel will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-forest text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-sage transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl text-forest mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  Practice
                </p>
                <p className="font-sans text-warm-dark">New Narratives Therapy</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  Email
                </p>
                <p className="font-sans text-warm-dark">
                  rachel@newnarrativestherapy.com
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  Location
                </p>
                <p className="font-sans text-warm-dark">Philadelphia, PA</p>
              </div>
              <div className="border-t border-tan pt-6">
                <p className="font-sans text-sm text-warm-mid leading-relaxed">
                  Rachel typically responds to inquiries within 1&ndash;2
                  business days. If you are experiencing a mental health
                  emergency, please contact the 988 Suicide &amp; Crisis
                  Lifeline by calling or texting{" "}
                  <strong className="text-warm-dark">988</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
