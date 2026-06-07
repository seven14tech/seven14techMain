"use client";
import styles from "./ContentStrips.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { mouseSpotlight } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  tone: "lime" | "violet" | "gold" | "cyan" | "rose";
  icon: React.ReactNode;
  size: "wide" | "tall" | "default";
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance sites and web apps built on Next.js, with edge rendering, type safety, and a delightful DX.",
    bullets: ["Next.js + React + TS", "Edge runtime", "CMS & API integrations"],
    tone: "lime",
    size: "wide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 14h4"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Desktop Apps",
    desc: "Native-feel apps for macOS, Windows and Linux.",
    bullets: ["Tauri / Rust", "Electron", "Auto-update"],
    tone: "violet",
    size: "default",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Brand & UI Design",
    desc: "Identity, design systems and motion that feel inevitable.",
    bullets: ["Logo & system", "Design tokens", "Figma → Code"],
    tone: "gold",
    size: "default",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19a7 7 0 1 0-7-7c0 2 1 3 2 3h2a2 2 0 0 1 2 2v1a2 2 0 0 0 1 1z"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "SEO & Growth",
    desc: "Technical SEO, schema, content engines and analytics that compound month over month.",
    bullets: ["Core Web Vitals", "Schema & sitemaps", "Content engineering"],
    tone: "cyan",
    size: "tall",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Care & Support",
    desc: "Retainers for evolution, performance, and 24/7 incident response.",
    bullets: ["SLA-backed support", "Monitoring", "Continuous shipping"],
    tone: "rose",
    size: "wide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/>
      </svg>
    ),
  },
];

export default function ContentStrips() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll("[data-card]"), {
      scrollTrigger: { trigger: root.current, start: "top 75%" },
      y: 50, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out",
    });
  }, { scope: root });

  // Cursor-tracked spotlight inside each card
  useEffect(() => {
    if (!root.current) return;
    const cards = root.current.querySelectorAll<HTMLElement>("[data-card]");
    const cleanups = Array.from(cards).map((c) => mouseSpotlight(c));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className={styles.section} ref={root} id="services">
      <div className={styles.container}>
        <header className={styles.head}>
          <span className="s14-eyebrow"><span className="dot" /> What we do</span>
          <h2 className={styles.title}>Services built for outcomes.</h2>
          <p className={styles.lede}>
            From first sketch to shipped product — and the long road of iteration after.
            Pick a single capability or hand us the whole stack.
          </p>
        </header>

        <div className={styles.bento}>
          {SERVICES.map((s) => (
            <article
              key={s.num}
              data-card
              data-tone={s.tone}
              className={`${styles.card} ${styles[`card_${s.size}`]}`}
            >
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>{s.num}</span>
                <span className={styles.cardIcon}>{s.icon}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>

              <ul className={styles.cardList}>
                {s.bullets.map(b => (
                  <li key={b}>
                    <span className={styles.bulletDot} />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
