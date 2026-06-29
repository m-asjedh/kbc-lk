"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    num: "01",
    label: "Acquired",
    value: "KBC Original",
    detail: "A new chapter begins",
  },
  {
    num: "02",
    label: "Heritage",
    value: "Kinniya BBQ",
    detail: "Loved across the region",
  },
  {
    num: "03",
    label: "Vision",
    value: "Nationwide",
    detail: "Growth across Sri Lanka",
  },
];

function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${from === "left" ? "founders-reveal-left" : "founders-reveal"} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function FoundersSection() {
  const [activeStat, setActiveStat] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLineVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founders"
      className="relative overflow-hidden bg-kbc-charcoal py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-kbc-orange/12 blur-3xl founders-glow" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex items-start gap-6 lg:mb-20">
          <div
            className={`hidden w-px shrink-0 self-stretch bg-linear-to-b from-kbc-orange via-kbc-orange/40 to-transparent lg:block ${lineVisible ? "founders-vertical-line" : "scale-y-0"}`}
            style={{ minHeight: "120px" }}
          />
          <Reveal className="flex-1">
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-kbc-orange">
              <span className="h-px w-10 bg-kbc-orange" />
              New Leadership
              <span className="font-display text-base tracking-widest text-white/25">
                06
              </span>
            </p>
            <h2 className="font-display max-w-4xl text-[clamp(3rem,8vw,6.5rem)] leading-[0.88] tracking-wide text-white">
              The Founders Behind
              <br />
              <span className="text-kbc-orange">KBC&apos;s Future</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-6">
          <Reveal from="left" className="relative lg:col-span-5 lg:pt-8">
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-full w-full rounded-[36px] bg-kbc-orange/20 founders-glow" />
            <div className="founders-float-card relative">
              <div className="relative overflow-hidden rounded-[36px] bg-white p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/20 sm:p-5">
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-[28px] bg-white sm:aspect-5/6">
                  <Image
                    src="/other/founders.png"
                    alt="Abdus Salaam and the KBC Original leadership team"
                    fill
                    className="object-contain object-bottom p-2"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 rounded-2xl bg-kbc-charcoal px-5 py-4 shadow-2xl ring-1 ring-kbc-orange/30 sm:-right-6 sm:px-6 sm:py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-kbc-orange">
                  Leadership
                </p>
                <p className="font-display text-2xl tracking-wide text-white sm:text-3xl">
                  Abdus Salaam
                </p>
                <p className="mt-0.5 text-xs text-white/45">&amp; Team</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pl-4">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-white/60 sm:text-xl">
                <strong className="font-semibold text-white">Abdus Salaam</strong>{" "}
                and his team officially acquired KBC — the brand known and loved
                across the region as{" "}
                <strong className="text-kbc-orange">Kinniya BBQ Chicken</strong>.
                Together they are steering KBC Original into its next era of
                growth, excellence, and flavour.
              </p>
            </Reveal>

            <Reveal delay={240} className="relative mt-10">
              <div className="relative overflow-hidden rounded-3xl bg-white/4 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-8">
                <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-linear-to-b from-kbc-orange via-kbc-orange/50 to-transparent" />
                <blockquote>
                  <p className="relative z-10 text-base leading-relaxed text-white/70 italic sm:text-lg">
                    We didn&apos;t just acquire a brand — we took on a legacy.
                    Our mission is to honour the BBQ tradition KBC was built on
                    while raising the bar for every guest who walks through our
                    doors.
                  </p>
                  <footer className="relative z-10 mt-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-kbc-orange" />
                    <cite className="font-display text-xl not-italic tracking-wide text-kbc-orange">
                      Abdus Salaam
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={360} className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row">
                {highlights.map((item, index) => (
                  <button
                    key={item.num}
                    type="button"
                    onMouseEnter={() => setActiveStat(index)}
                    onFocus={() => setActiveStat(index)}
                    onClick={() => setActiveStat(index)}
                    className={`group flex-1 rounded-2xl p-4 text-left ring-1 transition-all duration-500 sm:p-5 ${
                      activeStat === index
                        ? "bg-kbc-orange/15 ring-kbc-orange/50"
                        : "bg-white/4 ring-white/10 hover:bg-white/8"
                    }`}
                  >
                    <p className="font-display text-sm text-kbc-orange/60">
                      {item.num}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      {item.label}
                    </p>
                    <p className="font-display mt-2 text-2xl tracking-wide text-white transition-transform duration-300 group-hover:translate-x-1">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      {item.detail}
                    </p>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={480} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com/ab_salaam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-kbc-orange px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/80 transition-transform group-hover:scale-125" />
                @ab_salaam
              </a>
              <a
                href="https://www.linkedin.com/in/salaam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:border-kbc-orange/50 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://instagram.com/kbcoriginal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition-colors hover:border-kbc-orange/50 hover:text-white"
              >
                @kbcoriginal
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
