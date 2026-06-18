"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Mouse-following dot + lagging ring. Desktop / fine-pointer only.
 * Grows over interactive elements. Never blocks pointer events.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;
    setEnabled(true);

    const dotEl = dot.current!;
    const ringEl = ring.current!;
    const xTo = gsap.quickTo(ringEl, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ringEl, "y", { duration: 0.5, ease: "power3" });
    const dxTo = gsap.quickTo(dotEl, "x", { duration: 0.12, ease: "power3" });
    const dyTo = gsap.quickTo(dotEl, "y", { duration: 0.12, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dxTo(e.clientX);
      dyTo(e.clientY);
      const interactive = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, select",
      );
      gsap.to(ringEl, {
        scale: interactive ? 1.8 : 1,
        borderColor: interactive
          ? "color-mix(in oklab, var(--color-brand) 80%, transparent)"
          : "color-mix(in oklab, var(--color-fg) 28%, transparent)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[95] hidden md:block">
      <div
        ref={ring}
        className="absolute -left-4 -top-4 h-8 w-8 rounded-full border"
        style={{ borderColor: "color-mix(in oklab, var(--color-fg) 28%, transparent)" }}
      />
      <div
        ref={dot}
        className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-brand"
      />
    </div>
  );
}
