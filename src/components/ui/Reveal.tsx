"use client";

import { useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  /** stagger child elements with [data-reveal-item] */
  stagger?: boolean;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * Scroll-triggered entrance. Either animates itself, or — when `stagger` is set —
 * animates each descendant marked with `data-reveal-item`.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  stagger = false,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const reduce = prefersReducedMotion();

      const targets = stagger
        ? ref.current.querySelectorAll<HTMLElement>("[data-reveal-item]")
        : [ref.current];

      if (!targets.length) return;

      if (reduce) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}

export { ScrollTrigger };
