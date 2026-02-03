"use client";
import styles from "./IntroCard.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IntroCard() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start when top of section hits 80% viewport height
        toggleActions: "play none none reverse",
      }
    });

    tl.from(cardRef.current, { 
      x: -100, 
      opacity: 0, 
      rotationY: 90, 
      duration: 1.2, 
      ease: "power2.out" 
    })
    .from(textRef.current, { 
      y: 50, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.8")
    .from(listRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.cardWrapper} ref={cardRef}>
          <div className={styles.lanyard}></div>
          <div className={styles.idCard}>
            <div className={styles.cardPhoto} style={{background: '#333'}}></div>
            <div className={styles.cardDetails}>
              <div className={styles.cardName}>Seven14Tech Team</div>
              <div className={styles.cardTitle}>Web & Desktop Developers</div>
              <div style={{fontSize: '0.75rem', marginTop: '10px'}}>
                ID: 714-2024-X
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div ref={textRef}>
            <h2 className={styles.greeting}>Hi, We're Seven14Tech</h2>
            <p className={styles.introText}>
              We are a team of dedicated developers and designers who love solving problems. 
              We create premium websites and desktop applications that not only look good 
              but feel effortless to use.
            </p>
          </div>

          <div className={styles.gridInfo} ref={listRef}>
            <div>
              <h3 className={styles.colTitle}>Services</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.itemTitle}>Web Development</span>
                  <span className={styles.itemDesc}>Next.js, React, Node</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.itemTitle}>Desktop Apps</span>
                  <span className={styles.itemDesc}>Tauri, Rust, Electron</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className={styles.colTitle}>Contact</h3>
              <div className={styles.socials}>
                <div className={styles.socialIcon}>Li</div>
                <div className={styles.socialIcon}>X</div>
                <div className={styles.socialIcon}>Gl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
