import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Let's Start a Project Together</h2>
          <p className={styles.text}>
             Have an idea? We can help you bring it to life. Reach out to us and let's discuss your next big thing.
          </p>
          
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉</span>
              <span>hello@seven14tech.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <span>New York, NY</span>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <h3 className={styles.formTitle}>Send a Message</h3>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Name</label>
            <input type="text" className={styles.input} placeholder="Your Name" />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="example@gmail.com" />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} placeholder="Tell us about your project..."></textarea>
          </div>
          
          <button type="button" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
