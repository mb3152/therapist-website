import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="h-full overflow-y-auto bg-[linear-gradient(135deg,#f7f3ec_0%,#edf0e7_42%,#dce5d3_100%)]">
      {/* Header */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_14rem] gap-12 md:gap-16 items-start">
          <div>
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
                Rachel is a Marriage and Family Therapist who specializes in
                working with families, couples, and individuals, including
                children and adolescents. Rachel received her degree from Drexel
                University with a Masters in Family Therapy.
              </p>
              <p>
                Rachel is passionate about working with children and adolescents
                and their families, empowering the family system to understand
                their relational challenges, and helping families navigate
                systemic barriers that impede their ability to grow and heal.
              </p>
              <p>
                Rachel has developed a philosophy of practice that encompasses
                trauma-informed thinking with attachment theory perspectives.
                She has training in Trauma-Focused Cognitive Behavioral Therapy,
                Sand Tray Therapy, Play Therapy, Contextual Therapy, and
                Eco-systemic Structural Family Therapy.
              </p>
              <p>
                Rather than adhering rigidly to a single model, Rachel
                integrates across different therapeutic approaches to fit the
                exact needs of each client and family she works with.
              </p>
            </div>
          </div>
          <div className="w-40 aspect-[4/5] md:w-full overflow-hidden border-4 border-cream shadow-lg justify-self-center md:justify-self-end">
            <img
              src="/images/IMG_6910.jpeg"
              alt="Rachel Zagarino"
              className="w-full h-full object-cover"
            />
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
      <Footer />
    </div>
  );
}
