"use client";
import Link from "next/link";
import styles from "./CtaBanner.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { magnetic } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const root = useRef<HTMLElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll("[data-reveal]"), {
      scrollTrigger: { trigger: root.current, start: "top 80%" },
      y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
    });
  }, { scope: root });

  useEffect(() => {
    if (!btnRef.current) return;
    return magnetic(btnRef.current, 0.25, 0.5);
  }, []);

  return (
    <section className={styles.section} ref={root}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.aurora} aria-hidden="true" />
          <div className={styles.grid} aria-hidden="true" />

          <div className={styles.inner}>
            <span className="s14-eyebrow" data-reveal><span className="dot" /> Ready when you are</span>

            <h2 className={styles.title} data-reveal>
              Let&apos;s build something
              <br />
              <span className={styles.italic}>worth the attention</span>.
            </h2>

            <p className={styles.lede} data-reveal>
              A 30-minute scoping call. No decks, no pitch — just a useful conversation
              about what you&apos;re building.
            </p>

            <div className={styles.actions} data-reveal>
              <Link
                ref={btnRef as any}
                href="/contact"
                className={styles.primaryCta}
                data-cursor="hover"
              >
                <span>Book a scoping call</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </span>
                <span className={styles.ctaGlow} aria-hidden="true" />
              </Link>

              <a href="mailto:hello@seven14tech.com" className={styles.secondaryCta}>
                or email us directly
              </a>
            </div>

            <div className={styles.meta} data-reveal>
              <span className={styles.metaItem}>
                <span className={styles.metaDot} /> Replies within 24h
              </span>
              <span className={styles.metaDivider} />
              <span className={styles.metaItem}>NDA available</span>
              <span className={styles.metaDivider} />
              <span className={styles.metaItem}>$10k – $250k engagements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
