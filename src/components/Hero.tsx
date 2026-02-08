import Link from "next/link";
import Image from "next/image";
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
           <Image 
             src="/2BOYS.png" 
             alt="Team" 
             fill 
             className={styles.heroImage}
             style={{ objectFit: 'cover', borderRadius: '20px' }}
             priority
           />
           
           <div className={styles.badge}>
             ★ EST 2024
           </div>
        </div>
      </div>
    </section>
  );
}
