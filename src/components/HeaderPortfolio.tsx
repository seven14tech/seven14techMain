"use client";
import Link from "next/link";
import styles from "./HeaderPortfolio.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroOrb from "./HeroOrb";
import GradientMesh from "./GradientMesh";
import { magnetic, countUp } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  "Next.js", "React", "TypeScript", "Tauri", "Rust",
  "Node.js", "Tailwind", "Figma", "GSAP", "Three.js",
];

const STATS = [
  { value: 50,  suffix: "+", label: "Shipped products" },
  { value: 12,  suffix: "",  label: "Industries served" },
  { value: 98,  suffix: "%", label: "Client retention" },
  { value: 24,  suffix: "h", label: "First response" },
];

// Floating chips orbit positions (percent)
const CHIPS = [
  { label: "Next.js",   icon: "△", x: -12, y: 8,   d: 0 },
  { label: "Three.js",  icon: "◇", x: 102, y: 14,  d: 0.2 },
  { label: "TypeScript",icon: "TS",x: -18, y: 70,  d: 0.4 },
  { label: "GSAP",      icon: "G", x: 100, y: 72,  d: 0.6 },
  { label: "Tauri",     icon: "⌬", x: 46,  y: -8,  d: 0.8 },
];

function splitChars(text: string) {
  return text.split(/(\s+)/).map((token, wi) => {
    if (/^\s+$/.test(token)) return <span key={`w${wi}`} className={styles.space}>&nbsp;</span>;
    return (
      <span key={`w${wi}`} className={styles.word}>
        {Array.from(token).map((ch, ci) => (
          <span key={ci} className={styles.charWrap}>
            <span className={styles.char} data-char>{ch}</span>
          </span>
        ))}
      </span>
    );
  });
}

export default function HeaderPortfolio() {
  const root = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);
  const ledeRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;

    gsap.set([eyebrowRef.current, statusRef.current, ledeRef.current, ctaRef.current, statsRef.current, marqueeRef.current], {
      autoAlpha: 0, y: 24,
    });
    gsap.set("[data-char]", { yPercent: 110, opacity: 0 });
    gsap.set(orbRef.current, { opacity: 0, scale: 0.6 });
    gsap.set("[data-chip]", { opacity: 0, scale: 0.6, y: 10 });

    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    tl.to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.6 })
      .to(statusRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.45")
      .to("[data-char]", {
        yPercent: 0, opacity: 1, duration: 0.9,
        stagger: { each: 0.018, from: "start" }, ease: "power4.out",
      }, "-=0.25")
      .to(orbRef.current, { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }, "-=1.1")
      .to("[data-chip]", {
        opacity: 1, scale: 1, y: 0, duration: 0.65,
        stagger: { each: 0.08, from: "random" }, ease: "back.out(1.6)",
      }, "-=0.9")
      .to(ledeRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.85")
      .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.55")
      .to(statsRef.current, { autoAlpha: 1, y: 0, duration: 0.7, onStart: () => {
        // Count up the stat values
        statsRef.current?.querySelectorAll<HTMLElement>("[data-count]").forEach(el => {
          const target = Number(el.dataset.count);
          countUp(el, target, { suffix: el.dataset.suffix ?? "", duration: 1.4 });
        });
      }}, "-=0.5");

    if (statsRef.current) {
      tl.from(statsRef.current.querySelectorAll("[data-stat]"), {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power2.out",
      }, "-=0.6");
    }
    tl.to(marqueeRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3");

    // Parallax on scroll for the orb
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        yPercent: -22, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    }
    // Subtle parallax on chips
    if (chipsRef.current) {
      gsap.to(chipsRef.current.querySelectorAll("[data-chip]"), {
        y: (i: number) => -30 - i * 8, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.5 },
      });
    }

    const play = () => {
      tl.play();
      requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
    };
    let timeoutId: number | null = null;
    const onLoaded = () => { if (timeoutId) window.clearTimeout(timeoutId); play(); };
    window.addEventListener("s14:loaded", onLoaded as EventListener, { once: true });
    timeoutId = window.setTimeout(play, 2600);
    requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));

    return () => {
      window.removeEventListener("s14:loaded", onLoaded as EventListener);
      if (timeoutId) window.clearTimeout(timeoutId);
      tl.kill();
    };
  }, { scope: root });

  // Magnetic primary CTA
  useEffect(() => {
    if (!ctaRef.current) return;
    const btn = ctaRef.current.querySelector<HTMLAnchorElement>("[data-magnet]");
    if (!btn) return;
    return magnetic(btn, 0.22, 0.5);
  }, []);

  // Floating idle motion on chips
  useEffect(() => {
    if (!chipsRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = chipsRef.current.querySelectorAll<HTMLElement>("[data-chip]");
    const tweens: gsap.core.Tween[] = [];
    els.forEach((el, i) => {
      tweens.push(gsap.to(el, {
        y: "+=14",
        x: i % 2 === 0 ? "+=6" : "-=6",
        duration: 3 + (i % 3) * 0.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.2,
      }));
    });
    return () => tweens.forEach(t => t.kill());
  }, []);

  return (
    <section className={styles.hero} ref={root}>
      <GradientMesh />
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.head}>
          <div ref={eyebrowRef} className="s14-eyebrow">
            <span className="dot" /> Digital Product Studio · Est. 2024
          </div>
          <div ref={statusRef} className={styles.headRight}>
            <span className={styles.statusDot} /> Available for new work — Q3
          </div>
        </div>

        <h1 className={styles.display}>
          <span className={styles.lineWrap}>
            <span className={styles.line}>{splitChars("We design & build")}</span>
          </span>
          <span className={styles.lineWrap}>
            <span className={styles.line}>
              <span className={styles.italic}>{splitChars("premium")}</span>
              <span className={styles.space}>&nbsp;</span>
              {splitChars("digital products")}
              <span className={styles.charWrap}>
                <span className={styles.char} data-char>
                  <span className={styles.dot2}>.</span>
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className={styles.below}>
          <p ref={ledeRef} className={styles.lede}>
            Seven14Tech is a small senior team shipping high-performance websites,
            desktop apps and growth-driven brand systems for ambitious companies.
          </p>

          <div ref={ctaRef} className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryCta} data-magnet>
              <span>Start a project</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              <span className={styles.playIcon}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M6 4l14 8L6 20z"/></svg>
              </span>
              See our services
            </Link>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.orbStage} ref={chipsRef}>
            <div ref={orbRef} className={styles.orbWrap}>
              <HeroOrb />
            </div>

            {CHIPS.map((c) => (
              <div
                key={c.label}
                data-chip
                className={styles.chip}
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              >
                <span className={styles.chipIcon}>{c.icon}</span>
                <span className={styles.chipLabel}>{c.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.stats} ref={statsRef}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat} data-stat>
                <div className={styles.statValue}>
                  <span data-count={s.value} data-suffix={s.suffix}>0{s.suffix}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true" ref={marqueeRef}>
        <div className={styles.marqueeTrack}>
          {[...STACK, ...STACK].map((tech, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} /> {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
