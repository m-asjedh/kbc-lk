"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryImages } from "@/lib/gallery";

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

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, visible } = useReveal<HTMLElement>();
  const active = galleryImages[activeIndex];

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative overflow-hidden bg-kbc-charcoal py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-kbc-orange/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div
          className={`founders-reveal mb-12 lg:mb-16 ${visible ? "is-visible" : ""}`}
        >
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-kbc-orange">
            <span className="h-px w-10 bg-kbc-orange" />
            Gallery
            <span className="font-display text-base tracking-widest text-white/25">
              08
            </span>
          </p>
          <h2 className="font-display max-w-2xl text-[clamp(2.75rem,6vw,5rem)] leading-[0.9] tracking-wide text-white">
            A Look Inside
            <br />
            <span className="text-kbc-orange">KBC Original</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/50">
            Flame, smoke, and flavour — captured across our outlets and every
            plate we serve.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div
            className={`founders-reveal order-2 lg:order-1 lg:col-span-5 ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${image.caption}`}
                  aria-pressed={activeIndex === index}
                  className={`group relative aspect-square overflow-hidden rounded-2xl ring-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-kbc-orange shadow-[0_0_0_4px_rgba(242,140,40,0.25)]"
                      : "ring-white/10 hover:ring-kbc-orange/50"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      activeIndex === index
                        ? "scale-100"
                        : "scale-105 opacity-70 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                    sizes="(max-width: 1024px) 33vw, 15vw"
                  />
                  {activeIndex === index && (
                    <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-kbc-charcoal/90 to-transparent px-2 py-2">
                      <span className="block truncate text-[10px] font-semibold uppercase tracking-wider text-kbc-orange sm:text-xs">
                        {image.caption}
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <p className="mt-5 font-display text-sm tracking-[0.25em] text-white/20">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </p>
          </div>

          <div
            className={`founders-reveal-left order-1 lg:order-2 lg:col-span-7 ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className="relative">
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[32px] bg-kbc-orange/25" />
              <div className="relative overflow-hidden rounded-[32px] bg-kbc-cream p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:p-4">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] sm:aspect-16/11 lg:aspect-4/3">
                  {galleryImages.map((image, index) => (
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className={`absolute inset-0 object-cover transition-all duration-700 ${
                        activeIndex === index
                          ? "z-10 scale-100 opacity-100"
                          : "z-0 scale-105 opacity-0"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  ))}
                </div>

                <div className="absolute top-6 left-6 rounded-full bg-kbc-charcoal/80 px-4 py-2 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-kbc-orange">
                    {active.caption}
                  </p>
                </div>

                <div className="absolute right-6 bottom-6 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                  <p className="font-display text-3xl tracking-wide text-kbc-charcoal">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
