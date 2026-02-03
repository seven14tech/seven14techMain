import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CEO, StartUp Inc",
      text: "Seven14Tech transformed our digital presence. Their attention to detail and design aesthetics are unmatched."
    },
    {
      name: "Mike Ross",
      role: "Director, LawFirm LLC",
      text: "Professional, fast, and incredibly talented. The new website has significantly increased our client leads."
    },
    {
      name: "Emily Clark",
      role: "Founder, Creative Studio",
      text: "They understood our vision immediately. The dark mode design is exactly what we needed to stand out."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Client Stories</h2>
          <p className={styles.subtitle}>Don't just take our word for it</p>
        </div>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{review.text}"</p>
              <div className={styles.client}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.role}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
