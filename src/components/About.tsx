import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  const skills = [
    { name: "Marketing & Business Growth", percent: 85 },
    { name: "Creativity & Innovation", percent: 90 },
    { name: "Business & Financial Management", percent: 80 }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageGrid}>
          {/* Placeholders */}
          <div className={styles.image} style={{ background: '#333' }}></div>
          <div className={styles.image} style={{ background: '#444' }}></div>
          <div className={styles.image} style={{ background: '#222' }}></div>
          <div className={styles.badge}>
            WE <br/> RISE UP
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.subtitle}>
              <span className={styles.subtitleIcon}>●</span> About Us
            </div>
            <h2 className={styles.title}>
              Empowering Your Success <br/>
              with Digital Expertise
            </h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className={styles.progressList}>
            {skills.map(skill => (
              <div key={skill.name} className={styles.progressItem}>
                <div className={styles.progressHeader}>
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about" className={styles.aboutBtn}>
            About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
