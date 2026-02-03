"use client";
import { useRef, useState } from "react";
import styles from "./LoadingScreen.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoadingScreen() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
      }
    });

    const counter = { val: 0 };
    
    // Animate counter from 0 to 100
    tl.to(counter, {
      val: 100,
      duration: 2, // 2 seconds to load
      ease: "power2.inOut",
      onUpdate: () => {
        setPercent(Math.floor(counter.val));
      }
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    })
    .to(containerRef.current, {
      opacity: 0, // Fade out the entire screen
      duration: 0.8,
      ease: "power2.inOut"
    });

  }, { scope: containerRef });

  if (isComplete) return null;

  return (
    <div className={styles.loader} ref={containerRef}>
      <div className={styles.textContainer}>
        <h1 className={styles.text} ref={textRef} style={{ fontSize: '12vw', fontFamily: 'monospace' }}>
          {percent}%
        </h1>
      </div>
    </div>
  );
}
