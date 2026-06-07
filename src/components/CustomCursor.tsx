"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      gsap.to([dot, ring], { opacity: 1, duration: 0.25, overwrite: "auto" });
    };
    const onLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.25, overwrite: "auto" });

    const setHovered = (active: boolean) => {
      gsap.to(ring, {
        scale: active ? 1.7 : 1,
        opacity: active ? 1 : 0.85,
        borderColor: active ? "rgba(255,138,61,0.85)" : "rgba(255,255,255,0.22)",
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot, {
        scale: active ? 0.35 : 1,
        backgroundColor: active ? "#FF8A3D" : "#F5F5F7",
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const inter = t.closest("a, button, [data-cursor='hover'], input, textarea, select, [role='button']");
      setHovered(!!inter);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);

    const EPS = 0.4;
    const tick = () => {
      // Skip the frame when nothing is moving — saves a lot of idle work.
      const dxd = target.x - dotPos.x, dyd = target.y - dotPos.y;
      const dxr = target.x - ringPos.x, dyr = target.y - ringPos.y;
      if (Math.abs(dxd) < EPS && Math.abs(dyd) < EPS && Math.abs(dxr) < EPS && Math.abs(dyr) < EPS) return;
      dotPos.x += dxd * 0.5;
      dotPos.y += dyd * 0.5;
      ringPos.x += dxr * 0.18;
      ringPos.y += dyr * 0.18;
      gsap.set(dot, { x: dotPos.x, y: dotPos.y });
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
    };
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
