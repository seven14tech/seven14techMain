"use client";
import styles from "./ContactSection.module.css";
import { useState } from "react";

export default function ContactSection() {
  const [budget, setBudget] = useState<string>("10–25k");

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.info}>
          <span className="s14-eyebrow"><span className="dot" /> Start a project</span>

          <h2 className={styles.title}>
            Have an idea?
            <br />
            <span className={styles.titleAccent}>Let&apos;s build it.</span>
          </h2>

          <p className={styles.text}>
            Tell us a little about what you&apos;re working on. We&apos;ll get back within one business day
            with next steps — typically a 30-minute scoping call.
          </p>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
                </svg>
              </span>
              <div>
                <div className={styles.itemLabel}>Email</div>
                <a href="mailto:hello@seven14tech.com" className={styles.itemValue}>hello@seven14tech.com</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.21a16 16 0 0 0 6.58 6.58l1.46-1.61a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z"/>
                </svg>
              </span>
              <div>
                <div className={styles.itemLabel}>Phone</div>
                <a href="tel:+15551234567" className={styles.itemValue}>+1 (555) 123 4567</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="2.5"/>
                </svg>
              </span>
              <div>
                <div className={styles.itemLabel}>Studio</div>
                <span className={styles.itemValue}>Remote · NY · Singapore</span>
              </div>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formHead}>
            <h3 className={styles.formTitle}>Project brief</h3>
            <span className={styles.formNote}>
              <span className={styles.liveDot} /> usually replies in 24h
            </span>
          </div>

          <div className={styles.row2}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Your name</label>
              <input id="name" type="text" className={styles.input} placeholder="Jane Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input id="email" type="email" className={styles.input} placeholder="jane@company.com" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="company" className={styles.label}>Company</label>
            <input id="company" type="text" className={styles.input} placeholder="Acme Inc." />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Budget range</label>
            <div className={styles.chips}>
              {["< 10k", "10–25k", "25–60k", "60k+"].map(b => (
                <button
                  type="button"
                  key={b}
                  className={`${styles.chip} ${budget === b ? styles.chipActive : ""}`}
                  onClick={() => setBudget(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="msg" className={styles.label}>Tell us about the project</label>
            <textarea id="msg" className={styles.textarea} placeholder="What are you building, who is it for, what's the timeline?" />
          </div>

          <button type="submit" className={styles.submit}>
            Send brief
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
