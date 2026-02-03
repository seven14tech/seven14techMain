"use client";
import styles from "./ContentStrips.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContentStrips() {
  const containerRef = useRef(null);
  const stripsRef = useRef([]);

  const addStripRef = (el) => {
    if (el && !stripsRef.current.includes(el)) {
      stripsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(stripsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const strips = [
    { id: 1, title: "Web Design", desc: "Crafting beautiful interfaces", style: styles.strip1 },
    { id: 2, title: "Development", desc: "Robust and scalable code", style: styles.strip2 },
    { id: 3, title: "SEO Growth", desc: "Boosting your visibility", style: styles.strip3 },
    { id: 4, title: "Branding", desc: "Identity that speaks", style: styles.strip4 },
    { id: 5, title: "Support", desc: "24/7 dedicated help", style: styles.strip5 },
  ];

  return (
    <section className={styles.section} ref={containerRef}>
      <h2 className={styles.title}>CONTENT</h2>
      <div className={styles.grid}>
        {strips.map((strip) => (
          <div 
            key={strip.id} 
            className={`${styles.strip} ${strip.style}`}
            ref={addStripRef}
          >
            <div className={styles.mockup}></div>
            <div className={styles.stripContent}>
              <h3 className={styles.stripTitle}>{strip.title}</h3>
              <p className={styles.stripDesc}>{strip.desc}</p>
            </div>
            <div className={styles.number}>{strip.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
