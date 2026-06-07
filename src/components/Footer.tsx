import Link from "next/link";
import styles from "./Footer.module.css";

const SOCIAL = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.74h.05A4.16 4.16 0 0 1 17.6 8.7c4.06 0 4.4 2.67 4.4 6.15V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.7V21h-4z"/>
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.79-6.27L4.6 22H2l7-8L1.5 2h6.95l4.34 5.72zM17 20h1.71L7.1 4h-1.8z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/seven14tech",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.34 1.09 2.9.83.1-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.71 1.03 1.6 1.03 2.7 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.59.69.49A10 10 0 0 0 12 2z"/>
      </svg>
    ),
  },
  {
    href: "https://dribbble.com",
    label: "Dribbble",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.62 4.61a8.49 8.49 0 0 1 1.91 5.31c-.28-.06-3.14-.64-6.02-.28-.07-.16-.13-.33-.2-.5-.18-.42-.38-.85-.59-1.27 3.16-1.28 4.58-3.13 4.9-3.26zM12 3.48c2.13 0 4.08.79 5.58 2.11-.27.38-1.55 2.11-4.62 3.25-1.41-2.6-2.99-4.74-3.23-5.06.74-.18 1.5-.3 2.27-.3zM7.78 4.04C8.02 4.36 9.55 6.51 11 9.06c-4.1 1.09-7.69 1.07-8.06 1.06A8.55 8.55 0 0 1 7.78 4.04zM2.74 12.01v-.25c.42.01 4.65.06 9.06-1.27.25.49.49.99.71 1.5-.12.03-.23.07-.34.1-4.5 1.45-6.91 5.43-7.11 5.77A8.51 8.51 0 0 1 2.74 12zm3.43 6.95c.14-.25 2.04-3.94 6.91-5.62.02 0 .03-.01.05-.01 1.21 3.16 1.71 5.81 1.84 6.57a8.52 8.52 0 0 1-8.8-.94zm10.27.05c-.09-.55-.55-3.08-1.69-6.2 2.71-.43 5.08.27 5.37.37a8.52 8.52 0 0 1-3.68 5.83z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.branding}>
            <Link href="/" className={styles.brand} aria-label="Seven14Tech home">
              <span className={styles.mark} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M3 12 L10 3 H14 L7 12 L14 21 H10 Z" fill="currentColor"/>
                  <path d="M11 12 L18 3 H22 L15 12 L22 21 H18 Z" fill="currentColor" opacity=".55"/>
                </svg>
              </span>
              <span>seven<span className={styles.brandAccent}>14</span>tech</span>
            </Link>
            <p className={styles.tagline}>
              A small senior studio crafting premium web and desktop products
              for ambitious teams.
            </p>
            <div className={styles.socials}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label} rel="noreferrer" target="_blank">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Studio</h4>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/services" className={styles.link}>Services</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <Link href="/services" className={styles.link}>Web development</Link>
              <Link href="/services" className={styles.link}>Desktop apps</Link>
              <Link href="/services" className={styles.link}>UI / UX design</Link>
              <Link href="/services" className={styles.link}>SEO &amp; growth</Link>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Get in touch</h4>
              <a href="mailto:hello@seven14tech.com" className={styles.link}>hello@seven14tech.com</a>
              <a href="tel:+15551234567" className={styles.link}>+1 (555) 123 4567</a>
              <span className={styles.linkMuted}>Remote · NY · Singapore</span>
            </div>
          </div>
        </div>

        <div className={styles.wordmark} aria-hidden="true">SEVEN14TECH</div>

        <div className={styles.bottom}>
          <div>&copy; {new Date().getFullYear()} Seven14Tech. All rights reserved.</div>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.linkMuted}>Privacy</Link>
            <Link href="/terms" className={styles.linkMuted}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
