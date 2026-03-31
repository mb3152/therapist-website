import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
            About
          </p>
          <h1 className="font-serif text-5xl text-forest mb-2">
            Rachel Zagarino
          </h1>
          <p className="font-sans text-warm-mid mb-10">
            LMFT &middot; Marriage and Family Therapist
          </p>
          <div className="w-16 h-px bg-tan mb-10" />
          <div className="font-sans text-warm-dark leading-8 space-y-6 text-lg">
            <p>
              Rachel is a Family Therapist who specializes in working with
              families, couples, and individuals, including children and
              adolescents. Rachel received her degree from Drexel University
              with a Masters in Family Therapy.
            </p>
            <p>
              Rachel is passionate about working with children and adolescents
              and their families, empowering the family system to understand
              their relational challenges, and helping families navigate
              systemic barriers that impede their ability to grow and heal.
            </p>
            <p>
              Rachel has developed a philosophy of practice that encompasses
              trauma-informed thinking with attachment theory perspectives. This
              philosophy lends itself well to both classical and post-modern
              family therapy approaches, including Experiential, Contextual, and
              Eco-systemic Structural Family Therapy (ESFT).
            </p>
            <p>
              Rachel is trained using Brainspotting for the treatment of trauma
              in children and adolescents.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-tan/20 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-forest mb-8">
            Credentials &amp; Training
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                label: "Degree",
                value: "Masters in Family Therapy, Drexel University",
              },
              {
                label: "License",
                value: "Licensed Marriage and Family Therapist (LMFT)",
              },
              {
                label: "Specialty",
                value: "Children, Adolescents & Families",
              },
              {
                label: "Training",
                value: "Brainspotting Practitioner",
              },
            ].map(({ label, value }) => (
              <div key={label} className="border-l-2 border-sage pl-4">
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-1">
                  {label}
                </p>
                <p className="font-sans text-warm-dark">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-forest mb-8">
            Therapeutic Approaches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Experiential Family Therapy",
              "Contextual Family Therapy",
              "Eco-systemic Structural Family Therapy (ESFT)",
              "Trauma-Informed Practice",
              "Attachment Theory",
              "Brainspotting",
            ].map((approach) => (
              <div
                key={approach}
                className="bg-tan/30 px-4 py-3 font-sans text-sm text-warm-dark"
              >
                {approach}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-2xl text-cream mb-4">
            Work with Rachel
          </h2>
          <p className="font-sans text-cream/80 mb-8 leading-relaxed">
            Rachel welcomes new clients. Reach out to learn more or schedule an
            initial consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-tan text-forest font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
