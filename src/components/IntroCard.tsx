"use client";
import styles from "./IntroCard.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CAPS = [
  {
    title: "Web Engineering",
    desc: "Next.js, React, TypeScript. Edge-first, fast by default.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/><path d="M3 17l9 4 9-4"/>
      </svg>
    ),
  },
  {
    title: "Desktop Apps",
    desc: "Tauri, Rust, Electron. Native feel, tiny footprint.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: "Brand & UI Systems",
    desc: "Identity, design systems, motion, micro-interactions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>
      </svg>
    ),
  },
  {
    title: "Growth & SEO",
    desc: "Core Web Vitals, schema, content engines that compound.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>
      </svg>
    ),
  },
];

export default function IntroCard() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll("[data-reveal]"), {
      scrollTrigger: { trigger: root.current, start: "top 80%" },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power2.out",
    });
  }, { scope: root });

  return (
    <section className={styles.section} ref={root} id="about">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className="s14-eyebrow" data-reveal><span className="dot" /> About the studio</span>
          <h2 className={styles.title} data-reveal>
            A senior team that ships
            <br /><span className={styles.muted}>like it&apos;s your in-house crew.</span>
          </h2>
          <p className={styles.lede} data-reveal>
            We&apos;re an independent studio of engineers and designers obsessed with craft,
            performance and clarity. No agency overhead — just the people doing the work,
            building things you&apos;d be proud to put your name on.
          </p>
        </header>

        <div className={styles.bento}>
          <article className={`${styles.cell} ${styles.cellLarge}`} data-reveal>
            <div className={styles.signature}>
              <span>S</span><span>14</span>
              <em>est. 2024</em>
            </div>
            <div className={styles.cellFoot}>
              <div className={styles.cellTitle}>Built with intent.</div>
              <p className={styles.cellText}>
                Every pixel and every byte earns its place. We work in small, accountable
                teams paired with the same senior leads from kickoff to launch.
              </p>
            </div>
          </article>

          {CAPS.map((c) => (
            <article key={c.title} className={styles.cell} data-reveal>
              <div className={styles.icon}>{c.icon}</div>
              <div className={styles.cellFoot}>
                <div className={styles.cellTitle}>{c.title}</div>
                <p className={styles.cellText}>{c.desc}</p>
              </div>
            </article>
          ))}

          <article className={`${styles.cell} ${styles.cellAccent}`} data-reveal>
            <div className={styles.bigNumber}>
              <span>05</span>
              <em>year avg. <br />team tenure</em>
            </div>
            <div className={styles.cellFoot}>
              <div className={styles.cellTitle}>People who&apos;ve been in the trenches.</div>
              <p className={styles.cellTextDark}>
                Decades of combined experience across product, infra and design.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
