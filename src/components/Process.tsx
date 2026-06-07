"use client";
import styles from "./Process.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "We start with deep listening — your business, your users, your edges. A working session, a written brief, a clear problem statement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="6.5"/><path d="M21 21l-5-5"/>
      </svg>
    ),
    points: ["Stakeholder interviews", "Product audit", "Outcome brief"],
  },
  {
    num: "02",
    title: "Design",
    body: "We craft the interface as a system: tokens, motion, primitives. Prototypes you can actually click — not slide decks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19a7 7 0 1 0-7-7c0 2 1 3 2 3h2a2 2 0 0 1 2 2v1a2 2 0 0 0 1 1z"/>
      </svg>
    ),
    points: ["Design system", "Interaction prototypes", "Motion direction"],
  },
  {
    num: "03",
    title: "Build",
    body: "Senior engineers, paired, shipping daily on real infrastructure. Type-safe, tested, observable from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"/>
      </svg>
    ),
    points: ["Edge-rendered Next.js", "End-to-end tests", "Telemetry"],
  },
  {
    num: "04",
    title: "Launch",
    body: "We ship behind feature flags, watch the numbers, and turn the dials until it feels obviously right.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14l8-8 6 6M4 14v6h6M14 4h6v6"/>
      </svg>
    ),
    points: ["Staged rollout", "Live monitoring", "Performance budget"],
  },
  {
    num: "05",
    title: "Evolve",
    body: "A retainer of senior people committed to your product — not a ticket queue. We keep the surface sharp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/>
      </svg>
    ),
    points: ["Continuous iteration", "Care + support SLA", "Roadmap planning"],
  },
];

export default function Process() {
  const root = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!root.current || !trackRef.current || !pinRef.current) return;
    if (window.matchMedia("(max-width: 900px)").matches) return; // Stack vertically on mobile

    const track = trackRef.current;
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${distance() + 100}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      },
    });

    // Refresh once layout settles (fonts loaded, dynamic imports resolved, etc.)
    const t1 = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, { scope: root });

  return (
    <section className={styles.section} ref={root} id="process">
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headLeft}>
            <span className="s14-eyebrow"><span className="dot" /> Our process</span>
            <h2 className={styles.title}>
              From first call to long-term care.
            </h2>
          </div>
          <p className={styles.lede}>
            A repeatable, opinionated way of working that turns ambitious ideas
            into shipped products — and keeps them sharp over time.
          </p>
        </div>

        <div className={styles.progressTrack} aria-hidden="true">
          <div ref={progressRef} className={styles.progressBar} />
        </div>
      </div>

      <div className={styles.viewport} ref={pinRef}>
        <div className={styles.track} ref={trackRef}>
          {STEPS.map((step, i) => (
            <article key={step.num} className={styles.step} data-step>
              <div className={styles.stepHead}>
                <span className={styles.stepNum}>{step.num}</span>
                <span className={styles.stepIcon}>{step.icon}</span>
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>

              <ul className={styles.stepList}>
                {step.points.map((p) => (
                  <li key={p}>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3 3 7-7"/>
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              {i < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.connectorDot} />
                  <span className={styles.connectorLine} />
                  <span className={styles.connectorDot} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
