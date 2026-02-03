"use client";
import styles from "./HeaderPortfolio.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeaderPortfolio() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const yearRef = useRef(null);
  const avatarRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(text1Ref.current, { y: 100, opacity: 0, duration: 1 })
      .from(text2Ref.current, { y: 100, opacity: 0, duration: 1 }, "-=0.8")
      .from(yearRef.current, { scale: 0, opacity: 0, rotation: -45, duration: 0.8 }, "-=0.8")
      .from(avatarRef.current, { scale: 0.5, opacity: 0, duration: 1 }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section className={styles.header} ref={containerRef}>
      <div className={styles.titleContainer}>
        <div className={styles.topRow}>
          <h1 className={styles.bigText} ref={text1Ref}>SEVEN</h1>
          <span className={styles.year} ref={yearRef}>'24</span>
        </div>
        <h1 className={styles.bigText} ref={text2Ref}>14TECH</h1>
      </div>
      
      <div className={styles.avatarContainer} ref={avatarRef}>
        {/* Placeholder for the avatar/person image */}
        <div className={styles.avatar}></div> 
        <div className={styles.name}>EST. 2024</div>
      </div>
    </section>
  );
}
