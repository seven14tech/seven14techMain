import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.branding}>
            <div className={styles.logo}>Seven14Tech</div>
            <p className={styles.tagline}>
              Empowering businesses with cutting-edge digital solutions. 
              From web to desktop, we build the future.
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          
          <div className={styles.linksColumn}>
            <h4 className={styles.colTitle}>Services</h4>
            <Link href="/services/web" className={styles.link}>Web Development</Link>
            <Link href="/services/desktop" className={styles.link}>Desktop Apps</Link>
            <Link href="/services/uiux" className={styles.link}>UI/UX Design</Link>
            <Link href="/services/seo" className={styles.link}>SEO</Link>
          </div>
          
          <div className={styles.linksColumn}>
            <h4 className={styles.colTitle}>Legal</h4>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div>&copy; 2024 Seven14Tech. All rights reserved.</div>
          <div className={styles.socials}>
            <span className={styles.socialLink}>Instagram</span>
            <span className={styles.socialLink}>LinkedIn</span>
            <span className={styles.socialLink}>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
