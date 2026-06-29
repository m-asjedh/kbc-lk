"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dish } from "@/lib/dishes";
import { formatLKR } from "@/lib/format-currency";
import StarRating from "@/components/StarRating";

type DishCardProps = {
  dish: Dish;
  index: number;
};

export default function DishCard({ dish, index }: DishCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative w-[300px] shrink-0 sm:w-[320px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-[28px] bg-kbc-charcoal shadow-[0_20px_50px_rgba(28,22,18,0.18)] transition-all duration-500 ease-out ${
          isHovered
            ? "-translate-y-2 shadow-[0_32px_64px_rgba(242,140,40,0.22)]"
            : ""
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 z-10 h-1 bg-linear-to-r from-kbc-orange via-amber-300 to-kbc-orange transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative h-56 overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            sizes="320px"
          />

          <div className="absolute inset-0 bg-linear-to-t from-kbc-charcoal via-kbc-charcoal/20 to-transparent" />

          <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            {dish.badge}
          </span>

          <span className="font-display absolute top-3 right-4 text-5xl leading-none text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative px-5 pt-4 pb-5">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl leading-tight tracking-wide text-white">
              {dish.name}
            </h3>
            <div className="mt-1 shrink-0 rounded-full bg-kbc-orange/15 px-2.5 py-1 text-xs font-semibold text-kbc-orange">
              {dish.rating}.0
            </div>
          </div>

          <StarRating rating={dish.rating} className="mb-3 justify-start" />

          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-white/55">
            {dish.description}
          </p>

          <div className="border-t border-white/8 pt-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Starting from
            </p>
            <p className="font-display text-3xl tracking-wide text-kbc-orange">
              {formatLKR(dish.price)}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute -bottom-3 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-full bg-kbc-orange/25 blur-2xl transition-opacity duration-500 ${
          isHovered ? "opacity-60" : "opacity-0"
        }`}
      />
    </article>
  );
}
