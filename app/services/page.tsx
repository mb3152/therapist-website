import Link from "next/link";
import Footer from "../components/Footer";

const services = [
  {
    title: "Family Therapy",
    description:
      "Rachel works with the entire family system to understand relational dynamics and navigate challenges together. Her approach empowers families to overcome systemic barriers and build stronger, more connected relationships.",
  },
  {
    title: "Couples Therapy",
    description:
      "Rachel supports couples in deepening their understanding of each other and strengthening their relational bond. Sessions focus on improving communication, rebuilding trust, and developing tools for lasting connection.",
  },
  {
    title: "Individual Therapy",
    description:
      "Rachel works with adults, children, and adolescents ages 7 and older, creating a supportive space to explore emotions, relationships, life transitions, stress, anxiety, trauma, and personal growth. Her approach helps clients better understand themselves, build resilience, and develop tools for navigating challenges with greater clarity and confidence.",
  },
  {
    title: "Child Therapy",
    description:
      "Rachel works with children through Play Therapy to support a variety of concerns, including trauma, anxiety, and behavioral concerns.",
  },
  {
    title: "Parent and Caregiver Support",
    description:
      "Rachel helps parents and caregivers develop tools, guidance, and support for navigating challenges within the family system.",
  },
];

export default function Services() {
  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <section className="bg-cream pt-20 pb-10 px-5 sm:pt-24 sm:pb-12 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_24rem] items-center gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
              Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest mb-4">
              Areas of Practice
            </h1>
            <div className="w-16 h-px bg-tan mb-6" />
            <p className="font-sans text-warm-mid text-base sm:text-lg leading-relaxed">
              Rachel offers therapy for families, couples, and individuals, with a
              particular passion for working with children, adolescents, and their
              families.
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
            {services.map(({ title, description }) => (
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
