"use client";

import { useEffect, useRef, useState } from "react";
import { getHeroFramePath, HERO_FRAME_COUNT } from "@/lib/hero-frames";
import KbcLogo from "@/components/KbcLogo";

const SCROLL_HEIGHT_VH = 350;

function drawCoverFrame(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageRatio = image.width / image.height;
  const canvasRatio = width / height;

  let drawWidth: number;
  let drawHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (imageRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = image.width * (height / image.height);
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = width;
    drawHeight = image.height * (width / image.width);
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const images: HTMLImageElement[] = Array.from(
      { length: HERO_FRAME_COUNT },
      (_, index) => {
        const image = new Image();
        image.src = getHeroFramePath(index + 1);
        return image;
      },
    );

    imagesRef.current = images;
    let loaded = 0;

    const onImageLoad = () => {
      loaded += 1;
      setLoadProgress(Math.round((loaded / HERO_FRAME_COUNT) * 100));

      if (loaded === HERO_FRAME_COUNT) {
        setIsReady(true);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        onImageLoad();
      } else {
        image.addEventListener("load", onImageLoad);
        image.addEventListener("error", onImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", onImageLoad);
        image.removeEventListener("error", onImageLoad);
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const image = imagesRef.current[frameRef.current];
      if (image?.complete) {
        drawCoverFrame(ctx, image, width, height);
      }
    };

    const renderFrame = (frameIndex: number) => {
      const image = imagesRef.current[frameIndex];
      if (!image?.complete) return;

      const { width, height } = canvas.getBoundingClientRect();
      drawCoverFrame(ctx, image, width, height);
    };

    const updateFrameFromScroll = () => {
      rafRef.current = null;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = scrollable > 0 ? scrolled / scrollable : 0;
      const frameIndex = Math.min(
        HERO_FRAME_COUNT - 1,
        Math.floor(progress * (HERO_FRAME_COUNT - 1)),
      );

      if (frameIndex !== frameRef.current) {
        frameRef.current = frameIndex;
        renderFrame(frameIndex);
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(updateFrameFromScroll);
    };

    resizeCanvas();
    renderFrame(0);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      aria-label="KBC hero"
    >
      <div id="hero" className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/50" />

        <div className="relative z-10 flex h-full flex-col justify-between px-5 py-10 sm:py-12">
          <div className="h-20 sm:h-24" aria-hidden="true" />

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-amber-400">
              BBQ is our way of life
            </p>
            <h1 className="font-display text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Juicy. Smoky.
              <br />
              Mouth-watering.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              From carefully selected ingredients to our special marinades and
              flame-grilled perfection — every dish we serve is made with love
              and care.
            </p>
          </div>

          <div className="flex items-end">
            <a
              href="#menu"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-amber-400"
            >
              Explore Menu
            </a>
          </div>
        </div>

        <a
          href="#menu"
          aria-label="Scroll to menu"
          className="pointer-events-auto absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white sm:bottom-8"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/90 sm:text-xs">
            Scroll
          </span>
          <span className="hero-scroll-arrow flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/30 backdrop-blur-sm">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 13l7 7 7-7" />
            </svg>
          </span>
        </a>

        {!isReady && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
            <KbcLogo size="lg" href={null} className="mb-6" />
            <p className="font-display text-xl tracking-widest text-white">
              Loading experience
            </p>
            <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-amber-500 transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-white/60">{loadProgress}%</p>
          </div>
        )}
      </div>
    </section>
  );
}
