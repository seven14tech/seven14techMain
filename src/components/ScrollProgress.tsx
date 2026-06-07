"use client";
import { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max <= 0 ? 0 : (doc.scrollTop || document.body.scrollTop) / max;
        if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, pct))})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}
