"use client";

import { useEffect, useRef } from "react";

type MarqueeDirection = "left" | "right";

type UseMarqueeScrollOptions = {
  speed?: number;
  direction?: MarqueeDirection;
};

export function useMarqueeScroll<T extends HTMLElement>({
  speed = 0.6,
  direction = "left",
}: UseMarqueeScrollOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const track = ref.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    track.style.animation = "none";

    let offset = 0;
    let initialized = false;
    let raf = 0;
    let halfWidth = 0;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };

    measure();

    const animate = () => {
      if (halfWidth <= 0) {
        measure();
      }

      if (halfWidth > 0) {
        if (!initialized) {
          offset = direction === "right" ? -halfWidth : 0;
          initialized = true;
        }

        if (direction === "left") {
          offset -= speed;
          if (offset <= -halfWidth) {
            offset += halfWidth;
          }
        } else {
          offset += speed;
          if (offset >= 0) {
            offset -= halfWidth;
          }
        }

        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      measure();
      initialized = false;
      raf = requestAnimationFrame(animate);
    };

    start();

    const onVisibility = () => {
      if (!document.hidden) {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
      initialized = false;
    });

    resizeObserver.observe(track);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [speed, direction]);

  return ref;
}
