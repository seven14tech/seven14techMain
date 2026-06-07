"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.shell} aria-label="Primary">
        <Link href="/" className={styles.brand} aria-label="Seven14Tech home">
          <span className={styles.mark} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M3 12 L10 3 H14 L7 12 L14 21 H10 Z" fill="currentColor"/>
              <path d="M11 12 L18 3 H22 L15 12 L22 21 H18 Z" fill="currentColor" opacity=".55"/>
            </svg>
          </span>
          <span className={styles.brandText}>
            seven<span className={styles.brandAccent}>14</span>tech
          </span>
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={styles.cta}>
          Let&apos;s Talk
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </Link>

        <button
          className={styles.burger}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`${styles.burgerBar} ${open ? styles.burgerBarOpen1 : ""}`} />
          <span className={`${styles.burgerBar} ${open ? styles.burgerBarOpen2 : ""}`} />
        </button>
      </nav>

      <div className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`} role="dialog" aria-modal="true">
        <ul className={styles.sheetLinks}>
          {NAV_LINKS.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: `${80 + i * 70}ms` }}>
              <Link href={l.href} className={styles.sheetLink} onClick={() => setOpen(false)}>
                <span className={styles.sheetIndex}>0{i + 1}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={styles.sheetCta} onClick={() => setOpen(false)}>
          Start a project
        </Link>
      </div>
    </header>
  );
}
