"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

const services = [
  {
    id: "dine-in",
    number: "01",
    title: "Dine-In",
    description:
      "Relax and enjoy your favorites in our warm and welcoming space.",
    image: "/dine-in.png",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5h16v12H4zM8 21h8M12 17v4"
      />
    ),
  },
  {
    id: "takeaway",
    number: "02",
    title: "Takeaway",
    description: "Quick, easy, and hot. Perfect for when you're on the move.",
    image: "/takeway.png",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
  },
  {
    id: "delivery",
    number: "03",
    title: "Delivery",
    description: "We bring the crunch to your couch. Fast. Hot. Reliable.",
    image: "/delivery.png",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 17h2m10 0h2M7 17l-1-4h12l-1 4M6 9h12l1 5H5l1-5zM9 9V6h6v3"
      />
    ),
  },
  {
    id: "catering",
    number: "04",
    title: "Catering",
    description: "Perfect for parties, events, and every big occasion.",
    image: "/catering.png",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4"
      />
    ),
  },
];

const values = [
  {
    title: "Original Recipes",
    text: "Bold taste. Real ingredients.",
    icon: (
      <path d="M12 2C9 6 6 7 6 11a6 6 0 1012 0c0-4-3-5-6-9zm0 14a2 2 0 110-4 2 2 0 010 4z" />
    ),
  },
  {
    title: "Quality You Trust",
    text: "Fresh, hygienic, always.",
    icon: (
      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 10-16 0c0 4.5 4 8 8 12zm0-10a2 2 0 110-4 2 2 0 010 4z" />
    ),
  },
  {
    title: "Perfectly Cooked",
    text: "Crispy outside. Juicy inside.",
    icon: (
      <path d="M12 23c-3.9 0-7-3.1-7-7 0-2.5 1.4-4.6 3.5-5.7C7.1 8.2 7 6.5 7.5 5 8.5 2.2 11 1 12 1s3.5 1.2 4.5 4c.5 1.5.4 3.2-.5 5.3 2.1 1.1 3.5 3.2 3.5 5.7 0 3.9-3.1 7-7 7z" />
    ),
  },
  {
    title: "Made For You",
    text: "Anytime. Any way you like.",
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
];

function ServiceIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-kbc-orange shadow-[0_4px_16px_rgba(242,140,40,0.5)] ring-4 ring-white/20">
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        {children}
      </svg>
    </div>
  );
}

export default function OurServices() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section id="services" className="relative overflow-hidden bg-kbc-cream">
      <div className="relative bg-kbc-charcoal">
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-center px-6 py-16 pb-32 sm:px-10 sm:pb-40 lg:px-16 lg:py-24 lg:pb-44">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-kbc-orange">
              <span className="h-px w-8 bg-kbc-orange" />
              What We Offer
            </p>
            <h2 className="font-display text-5xl leading-[0.9] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Our
              <br />
              <span className="text-kbc-orange">Services</span>
            </h2>
            <p className="mt-5 text-xl font-semibold text-white/90 sm:text-2xl">
              Great chicken. Your way.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              Whether you&apos;re here to enjoy a meal, grabbing on the go,
              ordering in, or feeding a crowd — we&apos;ve got you covered.
            </p>

       
          </div>

     
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-6 sm:-mt-32 sm:px-10 lg:-mt-40 lg:px-16">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <article
                key={service.id}
                role="button"
                tabIndex={0}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] bg-white transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-orange focus-visible:ring-offset-2 ${
                  isActive
                    ? "shadow-[0_28px_64px_rgba(242,140,40,0.22)] ring-2 ring-kbc-orange"
                    : "shadow-[0_16px_48px_rgba(28,22,18,0.12)] ring-1 ring-kbc-charcoal/8 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(28,22,18,0.16)]"
                }`}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveId(service.id);
                  }
                }}
              >
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <Image
                    src={service.image}
                    alt={`KBC ${service.title}`}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-kbc-charcoal/80 via-kbc-charcoal/20 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <ServiceIcon>{service.icon}</ServiceIcon>
                  </div>

                  <span className="font-display absolute top-4 right-4 text-4xl text-white/20">
                    {service.number}
                  </span>

                  <h3 className="font-display absolute bottom-4 left-5 text-3xl tracking-wide text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-relaxed text-kbc-charcoal/60">
                    {service.description}
                  </p>
                  <div
                    className={`mt-4 h-0.5 w-full origin-left transition-transform duration-500 ${
                      isActive
                        ? "scale-x-100 bg-kbc-orange"
                        : "scale-x-0 bg-kbc-orange group-hover:scale-x-100"
                    }`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="h-16 bg-kbc-cream" />
    </section>
  );
}
