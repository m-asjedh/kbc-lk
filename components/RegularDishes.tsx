"use client";

import { useState } from "react";
import {
  getDishesByCategory,
  regularDishCategories,
} from "@/lib/regular-dishes";
import RegularDishCard from "@/components/RegularDishCard";


export default function RegularDishes() {
  const [activeCategory, setActiveCategory] = useState(
    regularDishCategories[0].id,
  );

  const dishes = getDishesByCategory(activeCategory);
  const activeLabel =
    regularDishCategories.find((c) => c.id === activeCategory)?.label ?? "";

  return (
    <section
      id="regular-menu"
      className="relative overflow-hidden bg-kbc-charcoal px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-kbc-orange/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-kbc-orange">
            Full Menu
          </p>
          <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
            Regular Dishes
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/50">
            Browse our complete menu — flame-grilled favourites for every
            craving, from signature BBQ to sides, combos, and more.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex max-w-full rounded-full bg-white/6 p-1.5 ring-1 ring-white/10 backdrop-blur-md">
            <div className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
              {regularDishCategories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-kbc-orange text-white shadow-[0_4px_16px_rgba(242,140,40,0.45)]"
                        : "text-white/65 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mb-8 text-center text-sm font-medium text-white/40">
          Showing{" "}
          <span className="text-kbc-orange">{dishes.length} items</span> in{" "}
          <span className="text-white/70">{activeLabel}</span>
        </p>

        <div
          key={activeCategory}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {dishes.map((dish, index) => (
            <RegularDishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
