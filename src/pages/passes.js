import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import useNetwork from "@/data/network";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Passes:</h1>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Duo Daytrip pass</h2> 
          <span className={styles.price}>€7</span>
        </div>
        <p>two bikes, endless exploration, one unforgettable day!</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Daytrip pass</h2>
          <span className={styles.price}>€5</span>
        </div>
        <p>Discover a day of excitement and exploration with our Daytrip Pass</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Week pass</h2>
          <span className={styles.price}>€12</span>
        </div>
        <p>Unlock a week of unlimited adventure with our Week Pass!</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Annual pass</h2>
          <span className={styles.price}>€58</span>
        </div>
        <p>Enjoy endless adventures all year long with our Annual Pass!</p>
      </div>
    </div>
  );
}
