"use client";

import Image from "next/image";
import { useState } from "react";
import type { RegularDish } from "@/lib/regular-dishes";
import { formatLKR } from "@/lib/format-currency";
import StarRating from "@/components/StarRating";

type RegularDishCardProps = {
  dish: RegularDish;
  index: number;
};

export default function RegularDishCard({ dish, index }: RegularDishCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="dish-card-enter group relative"
      style={{ animationDelay: `${index * 60}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-[26px] bg-white/95 ring-1 ring-white/10 transition-all duration-500 ease-out ${
          isHovered
            ? "-translate-y-1.5 shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
            : "shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
        }`}
      >
        <div className="relative h-52 overflow-hidden bg-kbc-cream">
          {dish.image ? (
            <>
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-kbc-charcoal/60 via-transparent to-transparent" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-kbc-cream">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-kbc-orange/15">
                <svg
                  className="h-7 w-7 text-kbc-orange/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-kbc-charcoal/35">
                Photo coming soon
              </span>
            </div>
          )}

          <span className="absolute top-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {dish.rating}.0 ★
          </span>

          <span className="font-display absolute bottom-3 left-3 text-2xl tracking-wide text-white drop-shadow-md">
            {formatLKR(dish.price)}
          </span>
        </div>

        <div className="px-5 pt-4 pb-5">
          <h3 className="font-display text-xl leading-tight tracking-wide text-kbc-charcoal">
            {dish.name}
          </h3>

          <div className="mt-2 mb-3">
            <StarRating
              rating={dish.rating}
              className="justify-start"
              emptyClassName="text-zinc-200"
            />
          </div>

          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
            {dish.description}
          </p>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-transparent via-kbc-orange to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        className={`pointer-events-none absolute -bottom-2 left-1/2 h-6 w-[80%] -translate-x-1/2 rounded-full bg-kbc-orange/30 blur-xl transition-opacity duration-500 ${
          isHovered ? "opacity-70" : "opacity-0"
        }`}
      />
    </article>
  );
}
