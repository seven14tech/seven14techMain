"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.to(ref.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  });

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[90] h-[2px] bg-gradient-to-r from-brand-deep via-brand to-brand-bright"
      ref={ref}
    />
  );
}
