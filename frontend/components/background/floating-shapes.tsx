"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Dot = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  xShift: number;
  yShift: number;
  opacityMin: number;
  opacityMax: number;
};

type Rect = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function isInsideBlockedArea(x: number, y: number, rects: Rect[]) {
  return rects.some(
    (rect) =>
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
  );
}

function getBlockedRects(container: HTMLElement): Rect[] {
  const containerRect = container.getBoundingClientRect();

  const elements = document.querySelectorAll(
    "h1, h2, h3, h4, p, a, button, li, [data-no-dots]"
  );

  return Array.from(elements)
    .map((element) => {
      const rect = element.getBoundingClientRect();
      const padding = 18;

      return {
        left: rect.left - containerRect.left - padding,
        top: rect.top - containerRect.top - padding,
        right: rect.right - containerRect.left + padding,
        bottom: rect.bottom - containerRect.top + padding,
      };
    })
    .filter((rect) => rect.right > 0 && rect.bottom > 0);
}

function createDots(container: HTMLElement, isMobile: boolean): Dot[] {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const blockedRects = getBlockedRects(container);

  const count = isMobile ? 10 : 26;
  const dots: Dot[] = [];
  const maxAttempts = count * 40;

  let attempts = 0;

  while (dots.length < count && attempts < maxAttempts) {
    attempts += 1;

    const left = randomBetween(12, width - 12);
    const top = randomBetween(12, height - 12);

    if (isInsideBlockedArea(left, top, blockedRects)) {
      continue;
    }

    dots.push({
      id: dots.length,
      left,
      top,
      size: isMobile ? randomBetween(3, 7) : randomBetween(6, 14),
      duration: randomBetween(7, 13),
      delay: randomBetween(0, 3),
      xShift: isMobile ? randomBetween(-6, 6) : randomBetween(-10, 10),
      yShift: isMobile ? randomBetween(-6, 6) : randomBetween(-10, 10),
      opacityMin: isMobile ? randomBetween(0.08, 0.16) : randomBetween(0.18, 0.35),
      opacityMax: isMobile ? randomBetween(0.2, 0.34) : randomBetween(0.55, 0.85),
    });
  }

  return dots;
}

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) {
        return;
      }

      const isMobile = window.innerWidth < 640;
      setDots(createDots(containerRef.current, isMobile));
    };

    const timeoutId = window.setTimeout(updateDots, 100);

    window.addEventListener("resize", updateDots);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", updateDots);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.05),transparent_22%)] opacity-60 sm:opacity-100" />

      <div className="absolute inset-0 opacity-15 sm:opacity-30 [background-image:radial-gradient(circle_at_center,rgba(52,211,153,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />

      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]"
          style={{
            left: `${dot.left}px`,
            top: `${dot.top}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            opacity: [dot.opacityMin, dot.opacityMax, dot.opacityMin],
            scale: [1, 1.15, 1],
            x: [0, dot.xShift, 0],
            y: [0, dot.yShift, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}