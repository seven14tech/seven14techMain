import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span className={styles.taglineIcon}>▶●</span> Elevate Your Brand With Us
          </div>
          <h1 className={styles.title}>
            Empowering Your <br />
            Success with <br />
            Digital Expertise
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.actions}>
            <Link href="/explore" className={styles.exploreBtn}>
              Explore More →
            </Link>
            <Link href="/services" className={styles.viewServicesBtn}>
              View All Services
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
           {/* In a real scenario, use Next.js Image component with imported assets */}
           <div className={styles.placeholderGrid}>
              <div className={`${styles.placeholderImg} ${styles.img1}`} style={{background: '#e0e0e0'}}></div>
              <div className={`${styles.placeholderImg} ${styles.img2}`} style={{background: '#d0d0d0'}}></div>
              <div className={`${styles.placeholderImg} ${styles.img3}`} style={{background: '#c0c0c0'}}></div>
           </div>
           
           <div className={styles.badge}>
             ★ EST 2024
           </div>
        </div>
      </div>
    </section>
  );
}
