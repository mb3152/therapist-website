"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <nav
      className={`${
        isHome
          ? "absolute top-0 left-0 right-0 z-40 bg-transparent"
          : "bg-cream border-b border-tan"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-xl tracking-wide ${
            isHome ? "text-cream" : "text-forest"
          }`}
        >
          Rachel Zagarino
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-xs tracking-widest uppercase transition-colors ${
                isHome
                  ? pathname === href
                    ? "text-cream"
                    : "text-cream/70 hover:text-cream"
                  : pathname === href
                    ? "text-forest"
                    : "text-warm-mid hover:text-forest"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`sm:hidden text-lg ${
            isHome ? "text-cream" : "font-sans text-warm-dark"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`sm:hidden border-t px-6 py-4 flex flex-col gap-4 ${
            isHome
              ? "border-cream/20 bg-forest/80 backdrop-blur-md"
              : "border-tan bg-cream"
          }`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-sans text-xs tracking-widest uppercase ${
                isHome
                  ? pathname === href
                    ? "text-cream"
                    : "text-cream/70"
                  : pathname === href
                    ? "text-forest"
                    : "text-warm-mid"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
