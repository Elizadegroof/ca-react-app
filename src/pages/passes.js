import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import useNetwork from "@/data/network";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Passes:</h1>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Title 1</h2>
          <span className={styles.price}>$19.99</span>
        </div>
        <p>Text content for the first div.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Title 2</h2>
          <span className={styles.price}>$19.99</span>
        </div>
        <p>Text content for the second div.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Title 3</h2>
          <span className={styles.price}>$19.99</span>
        </div>
        <p>Text content for the third div.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Title 4</h2>
          <span className={styles.price}>$19.99</span>
        </div>
        <p>Text content for the fourth div.</p>
      </div>
    </div>
  );
}
