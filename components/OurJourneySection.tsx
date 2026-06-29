"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const growthStats = [
  { value: "35%", label: "Performance Growth", detail: "Within 4 months" },
  { value: "13", label: "Outlets", detail: "Across Sri Lanka" },
  { value: "200+", label: "Guest Capacity", detail: "Flagship seating" },
  { value: "4", label: "Months", detail: "To transform ops" },
];

const milestones = [
  {
    step: "01",
    title: "Acquisition",
    text: "Abdus Salaam and his team officially acquired KBC — known regionally as Kinniya BBQ Chicken.",
    metric: "Kinniya → KBC",
  },
  {
    step: "02",
    title: "Bambalapitiya",
    text: "A new phase of growth begins at our Colombo outlet with refined systems and service.",
    metric: "Colombo flagship",
  },
  {
    step: "03",
    title: "13th Outlet",
    text: "Our flagship launches with a refreshed menu and seating for over 200 guests.",
    metric: "200+ seats",
  },
  {
    step: "04",
    title: "Expansion",
    text: "The blueprint for corporate growth and nationwide expansion across Sri Lanka.",
    metric: "Nationwide",
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
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`founders-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function OurJourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const active = milestones[activeStep];

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-[40px] bg-kbc-charcoal shadow-[0_40px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-kbc-orange/15 blur-3xl founders-glow" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative p-8 sm:p-10 lg:p-12">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-kbc-orange">
                  <span className="h-px w-8 bg-kbc-orange" />
                  Our Journey
                </p>
                <h3 className="font-display max-w-xl text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-wide text-white">
                  A New Chapter for
                  <br />
                  <span className="text-kbc-orange">KBC Original</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {growthStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/6 px-4 py-3 ring-1 ring-white/10 sm:px-5 sm:py-4"
                  >
                    <p className="font-display text-2xl tracking-wide text-kbc-orange sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10 lg:mt-12">
            <div className="relative flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none sm:gap-0 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {milestones.map((item, index) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group relative shrink-0 px-4 py-3 text-left transition-colors sm:flex-1 sm:px-6 sm:py-4 ${
                    activeStep === index ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <span className="font-display text-sm text-kbc-orange/70">
                    {item.step}
                  </span>
                  <span className="mt-1 block font-display text-xl tracking-wide sm:text-2xl">
                    {item.title}
                  </span>
                  {activeStep === index && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-kbc-orange sm:left-6 sm:right-6 journey-tab-line" />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-12">
            <Reveal delay={220} className="lg:col-span-5">
              <div
                key={active.step}
                className="journey-panel-enter relative overflow-hidden rounded-3xl bg-kbc-orange p-6 sm:p-8"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-kbc-charcoal/60">
                  Milestone
                </p>
                <h4 className="font-display mt-2 text-4xl tracking-wide text-kbc-charcoal sm:text-5xl">
                  {active.title}
                </h4>
                <p className="mt-1 font-display text-lg tracking-wide text-kbc-charcoal/70">
                  {active.metric}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-kbc-charcoal/80 sm:text-base">
                  {active.text}
                </p>
              </div>

              <div className="mt-5 rounded-2xl bg-white/6 p-5 ring-1 ring-white/10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-kbc-orange">
                  Key Result
                </p>
                <p className="mt-2 font-display text-3xl tracking-wide text-white">
                  <span className="text-kbc-orange">35%</span> performance lift
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  New SOPs, accountability standards, and a refined guest
                  journey within four months of acquisition.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320} className="lg:col-span-7">
              <div className="space-y-6 text-base leading-relaxed text-white/60 sm:text-lg">
                <p>
                  <strong className="font-semibold text-white">
                    Abdus Salaam
                  </strong>{" "}
                  and his team have officially acquired KBC, marking a
                  significant milestone for the Sri Lankan food and beverage
                  industry. Known across the region as{" "}
                  <strong className="text-kbc-orange">Kinniya BBQ Chicken</strong>
                  , the brand is entering a new phase of growth starting with
                  its Bambalapitiya outlet.
                </p>
                <p>
                  Following the acquisition, the management team introduced
                  standard operating procedures, enhanced workplace
                  accountability, and refined the customer journey to unlock the
                  latent value of the business.
                </p>
                <p>
                  To accelerate this momentum, KBC Original recently launched
                  its{" "}
                  <strong className="font-semibold text-white">
                    13th outlet
                  </strong>
                  , featuring a refreshed menu and a seating capacity exceeding{" "}
                  <strong className="font-semibold text-white">200 guests</strong>
                  . This newly established flagship location serves as the
                  operational blueprint for future corporate expansions across
                  Sri Lanka.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-kbc-orange/60 to-transparent" />
                <p className="font-display shrink-0 text-sm tracking-[0.3em] text-white/25">
                  01 → 04
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
