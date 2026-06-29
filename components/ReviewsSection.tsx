"use client";

import { reviews } from "@/lib/reviews";

const featuredReview = reviews[0];

function StarRating({ rating, light = false }: { rating: number; light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < Math.round(rating) ? "text-kbc-orange" : light ? "text-white/20" : "text-kbc-charcoal/15"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className={`font-display text-lg tracking-wide ${light ? "text-white" : "text-kbc-charcoal"}`}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ReviewAvatar({
  name,
  variant = "light",
}: {
  name: string;
  variant?: "light" | "dark";
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg tracking-wide ${
        variant === "dark"
          ? "bg-kbc-orange text-white"
          : "bg-kbc-charcoal text-white"
      }`}
    >
      {initials}
    </div>
  );
}

function FlowReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="flex w-[min(88vw,360px)] shrink-0 flex-col rounded-3xl bg-white p-5 shadow-[0_16px_48px_rgba(28,22,18,0.09)] ring-1 ring-kbc-charcoal/8 sm:w-[400px] sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={review.rating} />
        <span className="rounded-full bg-kbc-orange/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-kbc-orange">
          Google
        </span>
      </div>

      <p className="mt-5 min-h-[88px] text-[15px] leading-relaxed text-kbc-charcoal/75">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-kbc-cream px-4 py-3">
        <ReviewAvatar name={review.name} />
        <div className="min-w-0">
          <p className="truncate font-semibold text-kbc-charcoal">{review.name}</p>
          <p className="text-xs text-kbc-charcoal/45">{review.role}</p>
        </div>
      </div>
    </article>
  );
}

function ReviewsMarquee() {
  const strip = [...reviews, ...reviews];

  return (
    <div className="reviews-flow-marquee w-full overflow-hidden py-4">
      <div className="reviews-flow-track gap-6">
        <div className="flex shrink-0 flex-nowrap items-stretch gap-6">
          {strip.map((review, i) => (
            <FlowReviewCard key={`a-${review.id}-${i}`} review={review} />
          ))}
        </div>
        <div className="flex shrink-0 flex-nowrap items-stretch gap-6" aria-hidden="true">
          {strip.map((review, i) => (
            <FlowReviewCard key={`b-${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-kbc-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-kbc-orange/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(28,22,18,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-kbc-orange">
              <span className="h-px w-10 bg-kbc-orange" />
              Guest Reviews
              <span className="font-display text-base tracking-widest text-kbc-charcoal/25">
                07
              </span>
            </p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-[0.9] tracking-wide text-kbc-charcoal">
              Reviews that Speak to
              <br />
              <span className="text-kbc-orange">Our Flavour</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-kbc-charcoal/55">
              Real stories from guests who&apos;ve tasted the flame-grilled
              difference — pulled straight from Google Reviews.
            </p>
          </div>

          <article className="relative overflow-hidden rounded-3xl bg-kbc-charcoal p-7 shadow-[0_24px_60px_rgba(0,0,0,0.25)] ring-1 ring-kbc-charcoal/20 sm:p-8">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-kbc-orange/20 blur-3xl" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-kbc-orange">
              Featured Review
            </p>
            <StarRating rating={featuredReview.rating} light />
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              &ldquo;{featuredReview.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <ReviewAvatar name={featuredReview.name} variant="dark" />
              <div>
                <p className="font-semibold text-white">{featuredReview.name}</p>
                <p className="text-sm text-white/45">{featuredReview.role}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div className="-mx-6 sm:-mx-10 lg:-mx-16">
            <ReviewsMarquee />
          </div>

          <p className="mt-6 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-kbc-charcoal/35 sm:mt-8">
            Reviews sourced from Google Maps ·{" "}
            <span className="sm:hidden">Tap marquee to pause</span>
            <span className="hidden sm:inline">Hover to pause</span>
          </p>
        </div>
      </div>
    </section>
  );
}
