"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./TechStack.module.css";

gsap.registerPlugin(ScrollTrigger);

const TechOrbitScene = dynamic(() => import("./TechOrbitScene"), { ssr: false });

const HIGHLIGHTS = [
  { label: "Edge runtime",       desc: "Sub-100ms cold starts" },
  { label: "Type safe",          desc: "End-to-end TypeScript" },
  { label: "Realtime sync",      desc: "WebSocket + CRDT" },
  { label: "Native performance", desc: "Tauri + Rust core" },
];

export default function TechStack() {
  const root = useRef<HTMLElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll("[data-reveal]"), {
      scrollTrigger: { trigger: root.current, start: "top 75%" },
      y: 36, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out",
    });
  }, { scope: root });

  // R3F resize sync (orbit scene parent uses absolute positioning + reveal)
  useEffect(() => {
    const fire = () => window.dispatchEvent(new Event("resize"));
    const r1 = requestAnimationFrame(fire);
    const t1 = window.setTimeout(fire, 120);
    const t2 = window.setTimeout(fire, 600);
    return () => { cancelAnimationFrame(r1); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className={styles.section} ref={root}>
      <div className={styles.container}>
        <header className={styles.head}>
          <span className="s14-eyebrow" data-reveal><span className="dot" /> Stack &amp; capabilities</span>
          <h2 className={styles.title} data-reveal>
            One opinionated stack,
            <br /><span className={styles.muted}>tuned for the long run.</span>
          </h2>
          <p className={styles.lede} data-reveal>
            We&apos;re a Next.js + Rust shop. Every dependency we add is a decision —
            chosen for performance, reliability and how it&apos;ll feel three years from now.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.sceneWrap} data-reveal ref={sceneRef}>
            <div className={styles.sceneRing} />
            <div className={styles.scene}>
              <TechOrbitScene />
            </div>
          </div>

          <ul className={styles.highlights}>
            {HIGHLIGHTS.map((h, i) => (
              <li key={h.label} className={styles.highlight} data-reveal>
                <span className={styles.highlightIndex}>0{i + 1}</span>
                <div>
                  <div className={styles.highlightLabel}>{h.label}</div>
                  <div className={styles.highlightDesc}>{h.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
