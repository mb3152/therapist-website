import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
            Marriage and Family Therapist
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-light text-forest leading-tight">
            Rachel Zagarino
          </h1>
          <p className="font-sans text-sm tracking-widest text-warm-mid mt-2">LMFT</p>
          <div className="w-16 h-px bg-tan mx-auto my-8" />
          <p className="font-sans text-lg text-warm-mid leading-relaxed mb-10 max-w-xl mx-auto">
            Helping families, couples, and individuals—including children and
            adolescents—navigate toward healing, growth, and deeper
            understanding.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-forest text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-sage transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-tan/30 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-forest mb-6">
            A Philosophy of Care
          </h2>
          <p className="font-sans text-warm-mid leading-relaxed">
            Rachel&apos;s practice is built on trauma-informed thinking and attachment
            theory, embracing both classical and post-modern family therapy
            approaches. She is dedicated to empowering families and individuals
            to understand their relational challenges and overcome the systemic
            barriers that stand in the way of healing.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-forest border-b border-forest pb-0.5 hover:text-sage hover:border-sage transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-forest text-center mb-12">
            Areas of Practice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Family Therapy", desc: "Supporting the entire family system" },
              { title: "Couples Therapy", desc: "Strengthening relational bonds" },
              { title: "Individual Therapy", desc: "Adults, children & adolescents" },
              { title: "Trauma Treatment", desc: "Brainspotting for healing" },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center p-6 border border-tan">
                <h3 className="font-serif text-xl text-forest mb-2">{title}</h3>
                <p className="font-sans text-sm text-warm-mid">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="font-sans text-xs tracking-widest uppercase text-forest border-b border-forest pb-0.5 hover:text-sage hover:border-sage transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-forest py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Ready to Begin?
          </h2>
          <p className="font-sans text-cream/80 mb-8 leading-relaxed">
            Taking the first step toward therapy is an act of courage. Rachel
            is here to support you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-tan text-forest font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
