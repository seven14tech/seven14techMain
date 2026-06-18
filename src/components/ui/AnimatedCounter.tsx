"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const places = decimals ?? (Number.isInteger(value) ? 0 : 2);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const format = (n: number) =>
        `${prefix}${n.toLocaleString("en-IN", {
          minimumFractionDigits: places,
          maximumFractionDigits: places,
        })}${suffix}`;

      if (prefersReducedMotion()) {
        el.textContent = format(value);
        return;
      }

      const counter = { v: 0 };
      gsap.to(counter, {
        v: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.v);
        },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
