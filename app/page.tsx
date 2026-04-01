"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const sections = [
  {
    id: "hero",
    image: "/images/lighthouse.jpg",
    overlay: "bg-forest/40",
    content: (
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/80 mb-6">
          Marriage and Family Therapist
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-light text-cream leading-tight">
          Rachel Zagarino
        </h1>
        <p className="font-sans text-sm tracking-widest text-cream/70 mt-2">
          LMFT
        </p>
        <div className="w-16 h-px bg-cream/40 mx-auto my-8" />
        <p className="font-sans text-lg text-cream/90 leading-relaxed mb-10 max-w-xl mx-auto">
          Helping families, couples, and individuals navigate toward healing,
          growth, and deeper understanding.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-cream/60 text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream/10 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    ),
  },
  {
    id: "philosophy",
    image: "/images/forest-path.jpg",
    overlay: "bg-forest/50",
    content: (
      <div className="text-center max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-4">
          Philosophy
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8">
          A Philosophy of Care
        </h2>
        <p className="font-sans text-cream/85 leading-relaxed text-lg max-w-2xl mx-auto">
          Rachel&apos;s practice is built on trauma-informed thinking and
          attachment theory, embracing both classical and post-modern family
          therapy approaches. She is dedicated to empowering families and
          individuals to understand their relational challenges and overcome the
          systemic barriers that stand in the way of healing.
        </p>
        <Link
          href="/about"
          className="inline-block mt-10 font-sans text-xs tracking-widest uppercase text-cream border-b border-cream/60 pb-0.5 hover:text-cream/70 hover:border-cream/40 transition-colors"
        >
          Learn More
        </Link>
      </div>
    ),
  },
  {
    id: "services",
    image: "/images/forest-canopy.jpg",
    overlay: "bg-forest/45",
    content: (
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-4">
          Services
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-12">
          Areas of Practice
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Family Therapy",
              desc: "Supporting the entire family system",
            },
            {
              title: "Couples Therapy",
              desc: "Strengthening relational bonds",
            },
            {
              title: "Individual Therapy",
              desc: "Adults, children & adolescents",
            },
            {
              title: "Trauma Treatment",
              desc: "Brainspotting for healing",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 border border-cream/30 backdrop-blur-sm bg-cream/5"
            >
              <h3 className="font-serif text-xl text-cream mb-2">{title}</h3>
              <p className="font-sans text-sm text-cream/70">{desc}</p>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="inline-block mt-10 font-sans text-xs tracking-widest uppercase text-cream border-b border-cream/60 pb-0.5 hover:text-cream/70 hover:border-cream/40 transition-colors"
        >
          View All Services
        </Link>
      </div>
    ),
  },
  {
    id: "cta",
    image: "/images/misty-sunrise.jpg",
    overlay: "bg-forest/50",
    content: (
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
          Ready to Begin?
        </h2>
        <p className="font-sans text-cream/85 mb-10 leading-relaxed text-lg">
          Taking the first step toward therapy is an act of courage. Rachel is
          here to support you.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-cream/60 text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream/10 transition-colors"
        >
          Schedule a Consultation
        </Link>
        <p className="font-sans text-cream/40 text-xs mt-16">
          &copy; 2025 Rachel Zagarino, LMFT. All rights reserved.
        </p>
      </div>
    ),
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { root: container, threshold: 0.3 }
    );

    const animatedElements = container.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto snap-y snap-mandatory"
    >
      {sections.map(({ id, image, overlay, content }) => (
        <section
          key={id}
          className="snap-start h-full relative flex items-center justify-center px-6"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className={`absolute inset-0 ${overlay}`} />

          {/* Content */}
          <div
            data-animate
            className="relative z-10 w-full opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {content}
          </div>
        </section>
      ))}
    </div>
  );
}
