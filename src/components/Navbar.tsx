import Link from "next/link";
import styles from "./Navbar.module.css";
// You might want to use icons package later, using text/unicode for now to keep it dependency-free if possible or simple
// Assuming no lucide-react or similar installed yet, using emojis/unicode for placeholders.

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>//</span> Seven14Tech
          </Link>

          <button className={styles.mobileMenuBtn}>☰</button>

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
        </div>
      </nav>
    </header>
  );
}
