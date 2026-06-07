"use client";
import styles from "./PageHeader.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!root.current) return;
    gsap.from(root.current.querySelectorAll("[data-reveal]"), {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
    });
  }, { scope: root });

  return (
    <section className={styles.header} ref={root}>
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.container}>
        {eyebrow && (
          <span className="s14-eyebrow" data-reveal>
            <span className="dot" /> {eyebrow}
          </span>
        )}
        <h1 className={styles.title} data-reveal>{title}</h1>
        {subtitle && <p className={styles.subtitle} data-reveal>{subtitle}</p>}
      </div>
    </section>
  );
}
