"use client";
import { useRef, useState } from "react";
import styles from "./LoadingScreen.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoadingScreen() {
  const root = useRef<HTMLDivElement | null>(null);
  const numRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useGSAP(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        window.dispatchEvent(new CustomEvent("s14:loaded"));
        setDone(true);
      },
    });

    tl.to(counter, {
      v: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(counter.v)),
    })
    .to(".s14-loader-row", {
      y: -16,
      opacity: 0,
      duration: 0.45,
      stagger: 0.05,
    }, "+=0.15")
    .to(numRef.current, {
      y: -40,
      scale: 0.85,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    }, "<")
    .to(wordmarkRef.current, {
      yPercent: 30,
      opacity: 0,
      duration: 0.55,
      ease: "power3.in",
    }, "<+0.05")
    .to(root.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "expo.inOut",
    }, "-=0.15");
  }, { scope: root });

  if (done) return null;

  return (
    <div className={styles.loader} ref={root}>
      <div ref={wordmarkRef} className={styles.bgWordmark} aria-hidden="true">SEVEN14</div>

      <div className={styles.inner}>
        <div className={`${styles.row} s14-loader-row`}>
          <span className={styles.dot} /> initializing studio
        </div>

        <div ref={numRef} className={styles.number}>
          <span>{String(percent).padStart(2, "0")}</span>
          <em>%</em>
        </div>

        <div className={`${styles.row} s14-loader-row ${styles.barRow}`}>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${percent}%` }} />
          </div>
        </div>

        <div className={`${styles.row} s14-loader-row ${styles.metaRow}`}>
          <span>seven14tech</span>
          <span>v 2.0</span>
        </div>
      </div>
    </div>
  );
}
