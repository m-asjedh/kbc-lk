"use client";

import Image from "next/image";
import { useState } from "react";
import { otherBrands } from "@/lib/other-brands";
import OurJourneySection from "@/components/OurJourneySection";
import { useMarqueeScroll } from "@/hooks/useMarqueeScroll";

const beliefs = [
  {
    number: "01",
    title: "Authenticity",
    description: "Staying true to the rich BBQ tradition.",
  },
  {
    number: "02",
    title: "Quality",
    description: "Fresh chicken, premium spices, and homemade recipes.",
  },
  {
    number: "03",
    title: "Community",
    description:
      "Creating a place where families, friends, and food lovers gather.",
  },
];

function FlameIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 23c-3.9 0-7-3.1-7-7 0-2.5 1.4-4.6 3.5-5.7C7.1 8.2 7 6.5 7.5 5 8.5 2.2 11 1 12 1s3.5 1.2 4.5 4c.5 1.5.4 3.2-.5 5.3 2.1 1.1 3.5 3.2 3.5 5.7 0 3.9-3.1 7-7 7zm0-2c2.8 0 5-2.2 5-5 0-1.8-1-3.4-2.5-4.2-.6-.3-1-.9-1.1-1.6-.3-1.2-.8-2.2-1.4-2.2s-1.1 1-1.4 2.2c-.1.7-.5 1.3-1.1 1.6-1.5.8-2.5 2.4-2.5 4.2 0 2.8 2.2 5 5 5z" />
    </svg>
  );
}

function BrandMarqueeStrip({ idPrefix }: { idPrefix: string }) {
  const brands = [...otherBrands, ...otherBrands];

  return (
    <>
      {brands.map((brand, index) => (
        <div
          key={`${idPrefix}-${brand.src}-${index}`}
          className="flex shrink-0 items-center px-5 sm:px-10 lg:px-12"
        >
          <Image
            src={brand.src}
            alt={brand.name}
            width={480}
            height={192}
            className="h-14 w-auto max-w-[180px] object-contain sm:h-24 sm:max-w-[280px] lg:h-32 lg:max-w-[480px] xl:h-36 xl:max-w-[520px]"
          />
        </div>
      ))}
    </>
  );
}

function AboutMarquee() {
  const trackRef = useMarqueeScroll<HTMLDivElement>({ speed: 0.75, direction: "left" });

  return (
    <div className="about-marquee relative mt-12 w-full overflow-hidden py-6 sm:mt-16 sm:py-10 lg:py-14">
      <div
        ref={trackRef}
        className="about-marquee-track flex w-max flex-nowrap items-center"
      >
        <div className="flex shrink-0 flex-nowrap items-center">
          <BrandMarqueeStrip idPrefix="a" />
        </div>
        <div
          className="flex shrink-0 flex-nowrap items-center"
          aria-hidden="true"
        >
          <BrandMarqueeStrip idPrefix="b" />
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [hoveredBelief, setHoveredBelief] = useState<string | null>(null);

  return (
    <section id="about" className="relative overflow-hidden bg-kbc-cream">

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-0 sm:px-10 lg:px-16 lg:pt-28">
        <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-kbc-orange">
              <span className="h-px w-8 bg-kbc-orange" />
              About Us
            </p>
            <h2 className="font-display max-w-3xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] tracking-wide text-kbc-charcoal">
              Passion for BBQ,
              <br />
              <span className="text-kbc-orange">Love for Flavor</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 lg:pb-2">
            {[
              { label: "Flame-Grilled", value: "100%" },
              { label: "Known As", value: "Kinniya BBQ" },
              { label: "Outlets", value: "13+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white px-4 py-3 text-center shadow-[0_8px_30px_rgba(28,22,18,0.07)] ring-1 ring-kbc-charcoal/5"
              >
                <p className="font-display text-2xl tracking-wide text-kbc-orange">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-kbc-charcoal/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-7">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[36px] shadow-[0_32px_80px_rgba(28,22,18,0.22)] ring-1 ring-kbc-charcoal/10">
                <div className="relative aspect-5/4 w-full sm:aspect-16/11">
                  <Image
                    src="/other/kbc-outlet.png"
                    alt="KBC Original restaurant in Bambalapitiya"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-kbc-charcoal/70 via-kbc-charcoal/10 to-transparent" />
                </div>

                <div className="absolute top-5 left-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Our Home
                  </p>
                  <p className="font-display text-xl tracking-wide text-white">
                    Bambalapitiya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="relative border-l-2 border-kbc-orange/30 pl-6 sm:pl-8">
              <p className="text-base leading-relaxed text-kbc-charcoal/75 sm:text-lg">
                At KBC, BBQ isn&apos;t just food — it&apos;s our way of life. We
                started with a simple dream: to serve juicy, smoky, and
                mouth-watering BBQ chicken that brings people together.
              </p>
              <p className="mt-5 text-base leading-relaxed text-kbc-charcoal/75 sm:text-lg">
                From carefully selected ingredients to our special marinades and
                flame-grilled perfection, every dish we serve is made with love
                and care.
              </p>
            </div>

            <p className="mt-8 text-base leading-relaxed text-kbc-charcoal/65">
              Whether you&apos;re stopping by for a quick bite, ordering a
              family feast, or hosting a party, we promise every meal will be
              packed with flavor and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <AboutMarquee />

      <OurJourneySection />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="relative overflow-hidden rounded-[32px] bg-kbc-charcoal p-8 shadow-[0_32px_80px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-kbc-orange/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <h3 className="mb-10 font-display text-4xl tracking-wide text-white sm:text-5xl">
              We believe in
            </h3>

            <div className="grid gap-5 md:grid-cols-3">
              {beliefs.map((belief) => {
                const isHovered = hoveredBelief === belief.title;

                return (
                  <article
                    key={belief.title}
                    role="button"
                    tabIndex={0}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-orange ${
                      isHovered
                        ? "bg-kbc-orange shadow-[0_16px_40px_rgba(242,140,40,0.35)]"
                        : "bg-white/6 ring-1 ring-white/10"
                    }`}
                    onMouseEnter={() => setHoveredBelief(belief.title)}
                    onMouseLeave={() => setHoveredBelief(null)}
                    onClick={() =>
                      setHoveredBelief((current) =>
                        current === belief.title ? null : belief.title,
                      )
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setHoveredBelief((current) =>
                          current === belief.title ? null : belief.title,
                        );
                      }
                    }}
                  >
                    <span
                      className={`font-display absolute top-4 right-4 text-5xl leading-none transition-colors ${
                        isHovered ? "text-black/15" : "text-white/8"
                      }`}
                    >
                      {belief.number}
                    </span>

                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                        isHovered
                          ? "bg-kbc-charcoal/15 text-kbc-charcoal"
                          : "bg-kbc-orange/15 text-kbc-orange"
                      }`}
                    >
                      <FlameIcon className="h-5 w-5" />
                    </div>

                    <h4
                      className={`font-display text-2xl tracking-wide transition-colors ${
                        isHovered ? "text-kbc-charcoal" : "text-white"
                      }`}
                    >
                      {belief.title}
                    </h4>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-colors ${
                        isHovered
                          ? "text-kbc-charcoal/75"
                          : "text-white/50"
                      }`}
                    >
                      {belief.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
              <p className="font-display max-w-2xl text-3xl leading-tight tracking-wide text-white sm:text-4xl">
                At KBC, BBQ isn&apos;t just cooked —{" "}
                <span className="text-kbc-orange">it&apos;s crafted.</span>
              </p>
              <a
                href="#regular-menu"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-kbc-orange px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-kbc-charcoal transition-colors hover:bg-amber-400"
              >
                Explore Menu
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
