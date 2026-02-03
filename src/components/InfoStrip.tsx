import styles from "./InfoStrip.module.css";

export default function InfoStrip() {
  const items = [
    "Digital Marketing",
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization"
  ];

  return (
    <div className={styles.infoStrip}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              <span className={styles.icon}>✱</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
