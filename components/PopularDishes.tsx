"use client";

import { useRef, useState } from "react";
import { popularDishes } from "@/lib/dishes";
import DishCard from "@/components/DishCard";

function CarouselButton({
  direction,
  onClick,
  active = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous dishes" : "Next dishes"}
      className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
        active
          ? "bg-kbc-orange text-white shadow-[0_8px_24px_rgba(242,140,40,0.4)] hover:bg-kbc-orange-dark"
          : "bg-white text-kbc-charcoal ring-1 ring-kbc-charcoal/10 hover:ring-kbc-orange/40"
      }`}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export default function PopularDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDirection, setActiveDirection] = useState<"left" | "right">(
    "right",
  );

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    setActiveDirection(direction);
    container.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-kbc-cream px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-kbc-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(28,22,18,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-kbc-orange">
              From Our Grill
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide text-kbc-charcoal sm:text-6xl">
              Popular Dishes
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-kbc-charcoal/60">
              Hand-picked favourites crafted with our secret marinades and
              flame-grilled to smoky, mouth-watering perfection.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <CarouselButton
              direction="left"
              onClick={() => scroll("left")}
              active={activeDirection === "left"}
            />
            <CarouselButton
              direction="right"
              onClick={() => scroll("right")}
              active={activeDirection === "right"}
            />
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-6 bg-linear-to-r from-kbc-cream/50 to-transparent sm:w-8 sm:from-kbc-cream/35" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-6 bg-linear-to-l from-kbc-cream/50 to-transparent sm:w-8 sm:from-kbc-cream/35" />

          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-auto px-4 py-6 [-ms-overflow-style:none] scrollbar-none sm:px-6 [&::-webkit-scrollbar]:hidden"
          >
            {popularDishes.map((dish, index) => (
              <DishCard key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
