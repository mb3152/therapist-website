"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="h-full overflow-y-auto">
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
            seeking support. Reach out to schedule a consultation.
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
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-widest uppercase text-warm-mid mb-2"
                  >
                    Reason for Seeking Therapy
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-tan bg-white px-4 py-3 font-sans text-warm-dark focus:outline-none focus:border-sage resize-none"
                  />
                </div>
                <p className="font-sans text-xs text-warm-mid leading-relaxed">
                  Please avoid including detailed medical information in this
                  form.
                </p>
                {error ? (
                  <p className="font-sans text-sm text-red-700" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-forest text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-sage transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                  Location
                </p>
                <p className="font-sans text-warm-dark">Jenkintown, PA</p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  Rates
                </p>
                <div className="space-y-3 font-sans text-warm-dark">
                  <div className="border-l-2 border-sage pl-4">
                    <p className="text-sm text-warm-mid">Individual Therapy</p>
                    <p className="text-lg text-forest">$135 per session</p>
                  </div>
                  <div className="border-l-2 border-sage pl-4">
                    <p className="text-sm text-warm-mid">
                      Couples, Family &amp; Play Therapy
                    </p>
                    <p className="text-lg text-forest">$150 per session</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  Payment
                </p>
                <p className="font-sans text-warm-dark leading-relaxed">
                  Payment is due at time of service. Rachel does not take
                  insurance but can provide superbills for insurance
                  reimbursement.
                </p>
              </div>
              <div className="border-t border-tan pt-6">
                <p className="font-sans text-sm text-warm-mid leading-relaxed">
                  Rachel typically responds to inquiries within 2&ndash;3
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
      <Footer />
    </div>
  );
}
