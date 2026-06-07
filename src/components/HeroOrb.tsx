"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import styles from "./HeroOrb.module.css";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function HeroOrb() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // R3F sometimes mounts before the parent has finished CSS layout (especially
  // when wrapped in transformed/animated ancestors). Force a few resize ticks
  // so its ResizeObserver re-measures and the WebGL drawing buffer matches.
  useEffect(() => {
    const fire = () => window.dispatchEvent(new Event("resize"));
    const r1 = requestAnimationFrame(fire);
    const t1 = window.setTimeout(fire, 120);
    const t2 = window.setTimeout(fire, 600);
    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef} aria-hidden="true">
      <div className={styles.glow} />
      <div className={styles.ringOuter} />
      <div className={styles.ringInner} />
      <div className={styles.canvas}>
        <ThreeScene />
      </div>
    </div>
  );
}
