"use client";

import { useEffect, useState } from "react";
import KbcLogo from "@/components/KbcLogo";

const navLinks = [
  { label: "Home", href: "#", number: "01" },
  { label: "Popular Menu", href: "#menu", number: "02" },
  { label: "About Us", href: "#about", number: "03" },
  { label: "Regular Menu", href: "#regular-menu", number: "04" },
  { label: "Our Services", href: "#services", number: "05" },
  { label: "Founders", href: "#founders", number: "06" },
  { label: "Gallery", href: "#gallery", number: "07" },
  { label: "Reviews", href: "#reviews", number: "08" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="pointer-events-none absolute top-0 right-5 left-5 z-50">
        <div className="flex items-center justify-between py-6 sm:py-8">
          <div className="pointer-events-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            <KbcLogo size="header" priority href="#" />
          </div>

          <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
            <span
              className={`max-w-[88px] rounded-full border border-white/30 bg-black/20 px-2.5 py-1.5 text-center text-[8px] leading-tight font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm transition-opacity duration-300 sm:max-w-none sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em] ${
                isOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              Flame-Grilled Perfection
            </span>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-full ring-1 backdrop-blur-sm transition-all sm:h-14 sm:w-14 ${
                isOpen
                  ? "bg-kbc-orange ring-kbc-orange hover:bg-kbc-orange-dark"
                  : "bg-black/30 ring-white/25 hover:bg-kbc-orange hover:ring-kbc-orange"
              }`}
            >
              <span className="sr-only">{isOpen ? "Close" : "Menu"}</span>
              <span className="flex w-5 flex-col items-end gap-1.5 sm:w-6">
                <span
                  className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${
                    isOpen
                      ? "w-5 translate-y-2 rotate-45 sm:w-6"
                      : "w-5 sm:w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${
                    isOpen ? "w-0 opacity-0" : "w-3.5 sm:w-4"
                  }`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-white transition-all duration-300 ${
                    isOpen
                      ? "w-5 -translate-y-2 -rotate-45 sm:w-6"
                      : "w-5 sm:w-6"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-kbc-charcoal transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-kbc-orange/15 blur-3xl" />

        <nav
          className={`relative flex h-full flex-col justify-between overflow-y-auto px-6 pt-28 pb-10 sm:px-10 lg:px-16 lg:pt-32 ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-label="Main navigation"
        >
          <ul className="mx-auto w-full max-w-4xl space-y-1 sm:space-y-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href + link.label}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 70 + 100}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-4 border-b border-white/8 py-3 sm:gap-8 sm:py-4"
                >
                  <span className="font-display text-lg text-kbc-orange/50 sm:text-xl">
                    {link.number}
                  </span>
                  <span className="font-display text-3xl tracking-wide text-white transition-colors group-hover:text-kbc-orange sm:text-4xl lg:text-5xl">
                    {link.label}
                  </span>
                  <span className="ml-auto translate-x-4 text-kbc-orange opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 transition-all duration-500 sm:flex-row sm:items-end ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          >
            <div>
              <KbcLogo size="lg" href="#" onClick={closeMenu} />
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">
                Flame-grilled BBQ chicken — crafted with love at KBC Original,
                Bambalapitiya.
              </p>
            </div>
            <p className="font-display text-2xl tracking-widest text-white/25">
              BBQ IS OUR WAY OF LIFE
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
