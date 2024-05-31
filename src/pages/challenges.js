import styles from "@/styles/Home.module.css";

export default function NewPage() {
  return (
    <div className={styles.container}>
      <h1>Challenges:</h1>
      <div className={styles.topRow}>
        <div className={styles.cardOneThird}>
          <div className={`${styles.cardHeader} ${styles.circle}`}>
            <p>LEVEL 10</p>
          </div>
        </div>
        <div className={styles.cardTwoThirds}>
          <div className={styles.cardHeader}>
            <h2>Friends Ranking</h2>
            <ol>
              <li>1 You</li>
              <li>2 Sandra</li>
              <li>3 Emma</li>
              <li>4 Tommie</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.fullWidthCard}>
        <p className={styles.leftText}>Use velo 6 times in 1 day</p>
        <p className={styles.rightText}>4/6</p>
      </div>
      <div className={styles.fullWidthCard}>
        <p className={styles.leftText}>Ride at least 4 km</p>
        <p className={styles.rightText}>3/4</p>
      </div>
      <div className={styles.fullWidthCard}>
        <p className={styles.leftText}>Ride a velo between 12am - 4am</p>
        <p className={styles.rightText}>0/1</p>
      </div>
    </div>
  );
}
