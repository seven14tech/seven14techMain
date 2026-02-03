"use client";
import styles from "./PageHeader.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useGSAP(() => {
    gsap.to([titleRef.current, subRef.current], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div className={styles.header} ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>{title}</h1>
      {subtitle && <p className={styles.subtitle} ref={subRef}>{subtitle}</p>}
    </div>
  );
}
