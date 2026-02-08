"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
// You might want to use icons package later, using text/unicode for now to keep it dependency-free if possible or simple
// Assuming no lucide-react or similar installed yet, using emojis/unicode for placeholders.

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>//</span> Seven14Tech
          </Link>

          <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li><Link href="/services" className={styles.navLink}>Services</Link></li>
            <li><Link href="/work" className={styles.navLink}>Work</Link></li>
            <li><Link href="/about" className={styles.navLink}>About</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>

          <Link href="/contact" className={styles.quoteBtn}>
            Let's Talk
          </Link>

          {/* Mobile Menu Overlay */}
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <ul className={styles.mobileNavLinks}>
              <li><Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/services" className={styles.mobileNavLink} onClick={toggleMenu}>Services</Link></li>
              <li><Link href="/work" className={styles.mobileNavLink} onClick={toggleMenu}>Work</Link></li>
              <li><Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link></li>
              <li><Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
