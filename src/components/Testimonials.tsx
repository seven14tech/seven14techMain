"use client";
import styles from "./Testimonials.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, Startup Inc.",
    text: "Seven14Tech rebuilt our product surface in six weeks. Conversion lifted 38% and the team felt like an extension of ours from day one.",
    initials: "SJ",
    metric: "+38% conversion",
    accent: "#FF8A3D",
  },
  {
    name: "Mike Ross",
    role: "Managing Partner, Pearson LLP",
    text: "Professional, fast, deeply thoughtful. The new site is the best marketing investment we've made this decade.",
    initials: "MR",
    metric: "3× qualified leads",
    accent: "#E8C275",
  },
  {
    name: "Emily Clark",
    role: "Founder, Atlas Studio",
    text: "They got the brand instantly. The desktop app feels like Linear meets Things — and our users keep telling us about it.",
    initials: "EC",
    metric: "4.9 ★ store rating",
    accent: "#7C5CFF",
  },
  {
    name: "Daniel Voss",
    role: "VP Engineering, Nimbus",
    text: "Senior people, opinionated work. They pushed back where it mattered and shipped what we actually needed — not what we asked for.",
    initials: "DV",
    metric: "-62% page weight",
    accent: "#5DD4FF",
  },
];

const AUTO_MS = 4800;

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const dragStart = useRef<number | null>(null);

  // Animate cards into stack positions on idx change
  useEffect(() => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll<HTMLElement>("[data-card]");
    cards.forEach((card, i) => {
      const rel = (i - idx + REVIEWS.length) % REVIEWS.length;
      const isTop = rel === 0;
      gsap.to(card, {
        y: rel * 22,
        scale: 1 - rel * 0.045,
        opacity: rel < 3 ? 1 - rel * 0.18 : 0,
        rotate: rel * 1.4,
        zIndex: REVIEWS.length - rel,
        pointerEvents: isTop ? "auto" : "none",
        duration: 0.7,
        ease: "power3.out",
      });
    });
  }, [idx]);

  // Auto-progression with progress bar
  useEffect(() => {
    if (paused) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = (now - start) / AUTO_MS;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, t)})`;
      if (t >= 1) {
        setIdx((i) => (i + 1) % REVIEWS.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
    };
  }, [idx, paused]);

  const onDragStart = (clientX: number) => { dragStart.current = clientX; setPaused(true); };
  const onDragEnd = (clientX: number) => {
    if (dragStart.current == null) return;
    const dx = clientX - dragStart.current;
    if (dx < -50) setIdx((i) => (i + 1) % REVIEWS.length);
    else if (dx > 50) setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
    dragStart.current = null;
    setPaused(false);
  };

  return (
    <section
      className={styles.section}
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.container}>
        <header className={styles.head}>
          <span className="s14-eyebrow"><span className="dot" /> Client stories</span>
          <h2 className={styles.title}>
            What it&apos;s like to work with us.
          </h2>
          <p className={styles.lede}>
            Long-term partnerships beat one-off launches. Here&apos;s what our partners have to say.
          </p>
        </header>

        <div className={styles.layout}>
          <div
            className={styles.stack}
            ref={stackRef}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e) => onDragEnd(e.clientX)}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          >
            {REVIEWS.map((r, i) => (
              <article
                key={r.name}
                data-card
                className={styles.card}
                style={{ ["--accent" as any]: r.accent }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.quoteMark} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="44" height="44" fill="currentColor">
                      <path d="M7 7h4v4H8c0 2 1 3 3 3v2c-4 0-6-2-6-6V7zm10 0h4v4h-3c0 2 1 3 3 3v2c-4 0-6-2-6-6V7z"/>
                    </svg>
                  </div>

                  <p className={styles.quote}>{r.text}</p>

                  <div className={styles.metric}>
                    <span className={styles.metricDot} />
                    {r.metric}
                  </div>

                  <div className={styles.client}>
                    <div className={styles.avatar} aria-hidden="true">{r.initials}</div>
                    <div>
                      <div className={styles.name}>{r.name}</div>
                      <div className={styles.role}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.controls}>
            <div className={styles.counter}>
              <span className={styles.counterCurrent}>{String(idx + 1).padStart(2, "0")}</span>
              <span className={styles.counterTotal}>/ {String(REVIEWS.length).padStart(2, "0")}</span>
            </div>

            <div className={styles.progressTrack}>
              <div ref={progressRef} className={styles.progressBar} />
            </div>

            <div className={styles.dots}>
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === idx ? styles.dotActive : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className={styles.navRow}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M11 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => setIdx((i) => (i + 1) % REVIEWS.length)}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </button>
            </div>

            <p className={styles.dragHint}>Drag the card · or use the arrows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
