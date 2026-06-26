import type { Metadata } from "next";
import StructuredData from "../components/StructuredData";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Rachel",
  description:
    "Contact Rachel Zagarino, LMFT, to ask about individual therapy, couples therapy, family therapy, child therapy, or parent support in Jenkintown, PA.",
  path: "/contact",
});

export default function Contact() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": absoluteUrl("/contact#contact"),
      url: absoluteUrl("/contact"),
      name: "Contact Rachel Zagarino, LMFT",
      about: {
        "@id": absoluteUrl("/#practice"),
      },
      mainEntity: {
        "@id": absoluteUrl("/#practice"),
      },
    },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <StructuredData data={jsonLd} />
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
          <ContactForm />

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
                <p className="font-sans text-warm-dark">Jenkintown, PA 19046</p>
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
