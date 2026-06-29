"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import KbcLogo from "@/components/KbcLogo";
import { otherBrands } from "@/lib/other-brands";

const footerNav = [
  { label: "Home", href: "#", num: "01" },
  { label: "Popular Menu", href: "#menu", num: "02" },
  { label: "About Us", href: "#about", num: "03" },
  { label: "Regular Menu", href: "#regular-menu", num: "04" },
  { label: "Our Services", href: "#services", num: "05" },
  { label: "Founders", href: "#founders", num: "06" },
  { label: "Gallery", href: "#gallery", num: "07" },
  { label: "Reviews", href: "#reviews", num: "08" },
];

const socialLinks = [
  {
    label: "Instagram — KBC Original",
    href: "https://instagram.com/kbcoriginal",
    icon: "instagram",
  },
  {
    label: "Instagram — Abdus Salaam",
    href: "https://instagram.com/ab_salaam",
    icon: "instagram",
  },
  {
    label: "Google Maps",
    href: "https://maps.google.com/?q=KBC+Original+Bambalapitiya",
    icon: "map",
  },
] as const;

function SocialIcon({
  icon,
  className = "h-5 w-5",
}: {
  icon: (typeof socialLinks)[number]["icon"];
  className?: string;
}) {
  if (icon === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BrandLogoStrip({ idPrefix }: { idPrefix: string }) {
  const brands = [...otherBrands, ...otherBrands];

  return (
    <>
      {brands.map((brand, index) => (
        <div
          key={`${idPrefix}-${brand.src}-${index}`}
          className="group flex shrink-0 items-center px-5 sm:px-6 lg:px-8"
        >
          <div className="flex h-40 w-64 items-center justify-center rounded-2xl bg-white px-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/20 transition-all duration-300 group-hover:ring-kbc-orange/50 sm:h-48 sm:w-80 lg:h-52 lg:w-88">
            <Image
              src={brand.src}
              alt={brand.name}
              width={560}
              height={224}
              className="h-24 w-auto max-w-[92%] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-28 lg:h-32"
            />
          </div>
        </div>
      ))}
    </>
  );
}

function BrandFlowMarquee() {
  return (
    <div className="footer-brands-marquee py-2">
      <div className="footer-brands-track">
        <div className="flex shrink-0 flex-nowrap items-center">
          <BrandLogoStrip idPrefix="fa" />
        </div>
        <div className="flex shrink-0 flex-nowrap items-center" aria-hidden="true">
          <BrandLogoStrip idPrefix="fb" />
        </div>
      </div>
    </div>
  );
}

function BrandLogoWall() {
  const kbcBrand = otherBrands.find((b) => b.name === "KBC")!;

  return (
    <>
      <div className="relative bg-kbc-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(28,22,18,0.06) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 sm:px-10 sm:pt-20 sm:pb-16 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-kbc-orange">
                <span className="h-px w-10 bg-kbc-orange" />
                Brand Family
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[0.9] tracking-wide text-kbc-charcoal">
                Built With the
                <br />
                <span className="text-kbc-orange">Best in the Game</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-kbc-charcoal/55 sm:text-base">
                KBC Original is part of a growing family of Sri Lankan food brands
                — united by flavour, passion, and bold experiences.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[32px] bg-kbc-charcoal p-8 shadow-[0_32px_80px_rgba(0,0,0,0.2)] sm:p-10">
                <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-kbc-orange/20 blur-3xl" />
                <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
                  <div className="flex shrink-0 items-center justify-center rounded-3xl bg-white px-8 py-6 sm:px-10 sm:py-8">
                    <Image
                      src={kbcBrand.src}
                      alt={kbcBrand.name}
                      width={480}
                      height={192}
                      className="h-20 w-auto max-w-[280px] object-contain sm:h-24 lg:h-28"
                    />
                  </div>
                  <div>
                    <p className="font-display text-6xl leading-none tracking-wide text-kbc-orange sm:text-7xl">
                      09
                    </p>
                    <p className="mt-1 font-display text-2xl tracking-wide text-white sm:text-3xl">
                      Partner Brands
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      One family. One standard of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-kbc-charcoal pb-2 pt-8 sm:pt-10">
        <p className="relative mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-kbc-orange">
          The Full Lineup · Hover to pause
        </p>
        <BrandFlowMarquee />
      </div>
    </>
  );
}

export default function SiteFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="relative bg-kbc-charcoal">
      <BrandLogoWall />

      <div className="relative overflow-hidden">
        <p
          className="pointer-events-none absolute right-0 bottom-0 left-0 translate-y-1/4 text-center font-display text-[clamp(4rem,16vw,12rem)] leading-none tracking-widest text-white/4 select-none"
          aria-hidden="true"
        >
          KBC ORIGINAL
        </p>

        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-kbc-orange/10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-8 sm:px-10 lg:px-16 lg:pt-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white/4 p-6 ring-1 ring-white/10 sm:p-8">
                <KbcLogo size="lg" href="#" />
                <p className="mt-5 text-sm leading-relaxed text-white/50">
                  Flame-grilled BBQ chicken — from Kinniya to Colombo and across
                  Sri Lanka.
                </p>
                <a
                  href="#menu"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-kbc-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-kbc-orange-dark sm:w-auto"
                >
                  Explore Menu
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>

                <div className="mt-8 flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/70 transition-all hover:border-kbc-orange hover:bg-kbc-orange/15 hover:text-kbc-orange"
                    >
                      <SocialIcon icon={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-kbc-orange">
                Explore KBC
              </p>
              <nav aria-label="Footer navigation">
                <ul className="grid gap-1 sm:grid-cols-2">
                  {footerNav.map((link) => (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-4 border-b border-white/6 py-3.5 transition-colors hover:border-kbc-orange/40"
                      >
                        <span className="font-display text-sm text-kbc-orange/50 transition-colors group-hover:text-kbc-orange">
                          {link.num}
                        </span>
                        <span className="font-display text-2xl tracking-wide text-white/75 transition-all group-hover:translate-x-1 group-hover:text-white sm:text-3xl">
                          {link.label}
                        </span>
                        <span className="ml-auto text-kbc-orange opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[28px] bg-linear-to-r from-kbc-orange/20 via-kbc-orange/10 to-kbc-orange/5 p-6 ring-1 ring-kbc-orange/25 sm:mt-14 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-kbc-orange/20 blur-2xl" />
            <div className="relative max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-kbc-orange">
                Newsletter
              </p>
              <h3 className="font-display mt-2 text-3xl tracking-wide text-white sm:text-4xl">
                Stay in the Loop
              </h3>
              <p className="mt-2 text-sm text-white/50">
                BBQ drops, new outlets, and flame-grilled favourites — straight to
                your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="relative mt-6 flex w-full max-w-lg flex-col gap-2 sm:flex-row lg:mt-0"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-white/15 bg-kbc-charcoal/60 px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none backdrop-blur-sm focus:border-kbc-orange/60 focus:ring-2 focus:ring-kbc-orange/20"
              />
              <button
                type="submit"
                className="shrink-0 rounded-2xl bg-kbc-orange px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-kbc-orange-dark"
              >
                Join
              </button>
            </form>
            {submitted && (
              <p className="relative mt-3 text-sm text-kbc-orange lg:absolute lg:-bottom-6 lg:right-8">
                You&apos;re on the list!
              </p>
            )}
          </div>

          <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} KBC Original. All rights reserved.
            </p>
            <p className="font-display text-base tracking-[0.35em] text-white/15 sm:text-lg">
              FLAME · GRILL · FLAVOUR
            </p>
            <p className="text-xs text-white/30">Bambalapitiya, Colombo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
