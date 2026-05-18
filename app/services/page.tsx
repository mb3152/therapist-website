import Link from "next/link";
import Footer from "../components/Footer";

const services = [
  {
    title: "Family Therapy",
    description:
      "Rachel works with the entire family system to understand relational dynamics and navigate challenges together. Her approach empowers families to overcome systemic barriers and build stronger, more connected relationships.",
    details: [
      "Family communication",
      "Parent-child relationships",
      "Navigating life transitions",
      "Systemic barriers to healing",
    ],
  },
  {
    title: "Couples Therapy",
    description:
      "Rachel supports couples in deepening their understanding of each other and strengthening their relational bond. Sessions focus on improving communication, rebuilding trust, and developing tools for lasting connection.",
    details: [
      "Communication patterns",
      "Conflict resolution",
      "Rebuilding trust",
      "Relational growth",
    ],
  },
  {
    title: "Individual Therapy",
    description:
      "Rachel works with individuals of all ages—including children and adolescents—creating a safe, supportive space to explore personal challenges, process emotions, and build resilience.",
    details: [
      "Children & adolescents",
      "Adults",
      "Emotional regulation",
      "Identity & self-understanding",
    ],
  },
  {
    title: "Trauma Treatment",
    description:
      "Rachel is trained in Brainspotting, a powerful brain-body based therapy for the treatment of trauma in children and adolescents. Brainspotting works by locating points in the visual field that help access and process unresolved trauma.",
    details: [
      "Brainspotting",
      "Childhood trauma",
      "Adolescent trauma",
      "Trauma-informed care",
    ],
  },
];

export default function Services() {
  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <section className="bg-cream py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex items-center gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
              Services
            </p>
            <h1 className="font-serif text-5xl text-forest mb-4">
              Areas of Practice
            </h1>
            <div className="w-16 h-px bg-tan mb-6" />
            <p className="font-sans text-warm-mid text-lg leading-relaxed">
              Rachel offers therapy for families, couples, and individuals, with a
              particular passion for working with children, adolescents, and their
              families.
            </p>
          </div>
          <div className="w-96 h-80 flex-shrink-0 overflow-hidden">
            <img
              src="/images/beach-paint-b.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto space-y-16">
          {services.map(({ title, description, details }) => (
            <div key={title} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="font-serif text-3xl text-forest mb-4">{title}</h2>
                <p className="font-sans text-warm-mid leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="bg-tan/20 p-6 self-start">
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-3">
                  Focus Areas
                </p>
                <ul className="space-y-2">
                  {details.map((d) => (
                    <li
                      key={d}
                      className="font-sans text-sm text-warm-dark flex items-start gap-2"
                    >
                      <span className="text-sage mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 px-6 text-center">
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
