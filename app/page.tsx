"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

const sections = [
  {
    id: "hero",
    overlay: "bg-forest/40",
  },
  {
    id: "philosophy",
    overlay: "bg-forest/50",
  },
  {
    id: "services",
    overlay: "bg-forest/45",
  },
  {
    id: "cta",
    image: "/images/misty-sunrise.jpg",
    overlay: "bg-forest/50",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const section = container.children[index] as HTMLElement;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection observer for fade-in animations + active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Staggered animation: animate children one by one
            const children = entry.target.querySelectorAll("[data-stagger]");
            children.forEach((child, i) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = "1";
                (child as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });

            // Track active section
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActiveSection(index);

            // Ken Burns: add active class to trigger zoom
            entry.target.classList.add("is-active");
          } else {
            entry.target.classList.remove("is-active");
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    const sectionElements = container.querySelectorAll("[data-section]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto snap-y snap-mandatory"
    >
      {/* Section 0: Hero */}
      <section
        data-section
        data-index={0}
        className="snap-start h-full relative flex items-center justify-center px-6 overflow-hidden group"
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #3D5A47 0%, #5A7D65 40%, #8B9E8A 70%, #E3D0A8 100%)" }}
        />

        {/* Decorative frame */}
        <div className="absolute inset-8 md:inset-12 border border-cream/20 pointer-events-none z-20">
          <div className="absolute -top-px -left-px w-10 h-10 border-t border-l border-cream/70" />
          <div className="absolute -top-px -right-px w-10 h-10 border-t border-r border-cream/70" />
          <div className="absolute -bottom-px -left-px w-10 h-10 border-b border-l border-cream/70" />
          <div className="absolute -bottom-px -right-px w-10 h-10 border-b border-r border-cream/70" />
        </div>

        <div className="relative z-10 w-full h-full flex items-center px-16 md:px-24 gap-12">
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <p
              data-stagger
              className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-5 opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              Marriage and Family Therapist
            </p>
            <h1
              data-stagger
              className="font-serif text-4xl md:text-6xl font-light text-cream leading-tight opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              Rachel Zagarino
            </h1>
            <p
              data-stagger
              className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 mt-2 mb-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              LMFT
            </p>
            <div
              data-stagger
              className="w-10 h-px bg-cream/40 mb-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
            />
            <p
              data-stagger
              className="font-sans text-base text-cream/85 leading-relaxed mb-10 max-w-sm opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              Helping children, couples, and individuals navigate toward healing,
              growth, and deeper understanding.
            </p>
            <div
              data-stagger
              className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              <Link
                href="/contact"
                className="inline-block border border-cream/60 text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: flower image */}
          <div
            data-stagger
            className="hidden md:block w-[38%] h-[70%] flex-shrink-0 overflow-hidden opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <img
              src="/images/opt-c.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/50">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-cream/50"
          >
            <path
              d="M7.3 18.3L1.7 12.7a1 1 0 111.4-1.4L7 15.2V1a1 1 0 112 0v14.2l3.9-3.9a1 1 0 111.4 1.4l-5.6 5.6a1 1 0 01-1.4 0z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Section 1: Philosophy */}
      <section
        data-section
        data-index={1}
        className="snap-start h-full relative flex items-center justify-center px-6 overflow-hidden group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/beach-mountains.jpg)" }}
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative z-10 w-full text-center max-w-3xl mx-auto">
          <Link
            href="/about"
            data-stagger
            className="inline-block mb-6 opacity-0 translate-y-6 transition-all duration-700 ease-out group/photo"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-cream/40 mx-auto group-hover/photo:border-cream/70 transition-colors">
              <img
                src="/images/IMG_6910.jpeg"
                alt="Rachel Zagarino"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <p
            data-stagger
            className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Philosophy
          </p>
          <h2
            data-stagger
            className="font-serif text-4xl md:text-5xl text-cream mb-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            A Philosophy of Care
          </h2>
          <p
            data-stagger
            className="font-sans text-cream/85 leading-relaxed text-lg max-w-2xl mx-auto opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Rachel&apos;s practice is built on trauma-informed thinking and
            attachment theory, embracing both classical and post-modern family
            therapy approaches. She is dedicated to empowering families and
            individuals to understand their relational challenges and overcome
            the systemic barriers that stand in the way of healing.
          </p>
          <div
            data-stagger
            className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Link
              href="/about"
              className="inline-block mt-10 font-sans text-xs tracking-widest uppercase text-cream border-b border-cream/60 pb-0.5 hover:text-cream/70 hover:border-cream/40 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section
        data-section
        data-index={2}
        className="snap-start h-full relative flex items-center justify-center px-6 overflow-hidden group"
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #3D5A47 0%, #5A7D65 50%, #8B9E8A 100%)" }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <p
            data-stagger
            className="font-sans text-xs tracking-[0.3em] uppercase text-cream/70 mb-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Services
          </p>
          <h2
            data-stagger
            className="font-serif text-4xl md:text-5xl text-cream mb-12 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Areas of Practice
          </h2>
          <div
            data-stagger
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            {[
              "Family Therapy",
              "Couples Therapy",
              "Individual Therapy",
              "Child Therapy",
              "Parent and Caregiver Support",
            ].map((title, index) => (
              <div
                key={title}
                className={`p-6 border border-cream/30 backdrop-blur-sm bg-cream/5 flex items-center justify-center min-h-28 md:col-span-2 ${
                  index === 3 ? "md:col-start-2" : ""
                }`}
              >
                <h3 className="font-serif text-xl text-cream">{title}</h3>
              </div>
            ))}
          </div>
          <div
            data-stagger
            className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Link
              href="/services"
              className="inline-block mt-10 font-sans text-xs tracking-widest uppercase text-cream border-b border-cream/60 pb-0.5 hover:text-cream/70 hover:border-cream/40 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section
        data-section
        data-index={3}
        className="snap-start h-full relative flex items-center justify-center px-6 overflow-hidden group"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-cover bg-center"
          style={{ backgroundImage: `url(${sections[3].image})` }}
        />
        <div className={`absolute inset-0 ${sections[3].overlay}`} />
        <div className="relative z-10 w-full text-center max-w-xl mx-auto">
          <h2
            data-stagger
            className="font-serif text-4xl md:text-5xl text-cream mb-6 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Ready to Begin?
          </h2>
          <p
            data-stagger
            className="font-sans text-cream/85 mb-10 leading-relaxed text-lg opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Taking the first step toward therapy is an act of courage. Rachel is
            here to support you.
          </p>
          <div
            data-stagger
            className="opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <Link
              href="/contact"
              className="inline-block border border-cream/60 text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-cream/10 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
          <p
            data-stagger
            className="font-sans text-cream/40 text-xs mt-16 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            &copy; 2025 Rachel Zagarino, LMFT. All rights reserved.
          </p>
        </div>
      </section>

      {/* Scroll progress dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(i)}
            aria-label={`Go to ${s.id} section`}
            className={`w-2.5 h-2.5 rounded-full border border-cream/60 transition-all duration-500 hover:bg-cream/80 ${
              activeSection === i ? "bg-cream scale-125" : "bg-cream/20"
            }`}
          />
        ))}
      </nav>
    </div>
  );
}
