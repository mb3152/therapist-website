import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../components/StructuredData";
import Footer from "../components/Footer";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  serviceQuestions,
  serviceQuestionsJsonLd,
  servicesJsonLd,
  therapyServices,
} from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Therapy Services in Jenkintown, PA",
  description:
    "Explore therapy services in Jenkintown, PA, including individual therapy, couples therapy, family therapy, child therapy, and parent support with Rachel Zagarino, LMFT.",
  path: "/services",
});

export default function Services() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
    servicesJsonLd(),
    serviceQuestionsJsonLd(),
  ];

  return (
    <div className="h-full overflow-y-auto">
      <StructuredData data={jsonLd} />
      {/* Header */}
      <section className="bg-cream pt-20 pb-10 px-5 sm:pt-24 sm:pb-12 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_24rem] items-center gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
              Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest mb-4">
              Therapy Services in Jenkintown, PA
            </h1>
            <div className="w-16 h-px bg-tan mb-6" />
            <p className="font-sans text-warm-mid text-base sm:text-lg leading-relaxed">
              Rachel offers therapy for individuals, couples, children,
              adolescents, and families in Jenkintown, PA, with a particular
              passion for supporting children, teens, parents, and caregivers.
            </p>
          </div>
          <div className="hidden md:block w-full h-80 overflow-hidden">
            <img
              src="/images/beach-paint-b.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pt-0 pb-14 px-5 sm:pb-16 sm:px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl space-y-10 sm:space-y-12 md:space-y-14">
            {therapyServices.map(({ title, description }) => (
              <div key={title}>
                <h2 className="font-serif text-2xl sm:text-3xl text-forest mb-3 sm:mb-4">
                  {title}
                </h2>
                <p className="font-sans text-warm-mid leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common questions */}
      <section className="pt-0 pb-14 px-5 sm:pb-16 sm:px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl border-t border-tan pt-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-forest mb-8">
              Common Questions
            </h2>
            <div className="space-y-8">
              {serviceQuestions.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-serif text-xl text-forest mb-2">
                    {question}
                  </h3>
                  <p className="font-sans text-warm-mid leading-relaxed">
                    {answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 px-5 sm:py-20 sm:px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Start Your Journey
          </h2>
          <p className="font-sans text-cream/80 mb-8 leading-relaxed">
            Rachel welcomes new clients. Reach out to schedule an initial
            consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-tan text-forest font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors"
          >
            Contact Rachel
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
