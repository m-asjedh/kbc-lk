"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio < 0.15);
      },
      { threshold: [0, 0.15, 0.5, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToHero}
      aria-label="Back to top"
      className={`fixed right-5 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-kbc-orange text-white shadow-[0_8px_32px_rgba(242,140,40,0.45)] transition-all duration-300 hover:bg-kbc-orange-dark hover:shadow-[0_12px_40px_rgba(242,140,40,0.55)] sm:right-8 sm:bottom-8 sm:h-14 sm:w-14 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
