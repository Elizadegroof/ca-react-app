import styles from "@/styles/Home.module.css";
import useNetwork from "@/data/network";

export default function Home() {
  const { network, isLoading, isError } = useNetwork();
 
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const stations = network.stations;

  return (
    <div className={styles.container}>
      <h1>Menu:</h1>
      <div className={styles.textLineBlock}>
        <p>How does it work</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.textLineBlock}>
      <p>Settings</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.textLineBlock}>
      <p>Legal information</p>
        <hr className={styles.line} />
      </div>
      <div className={styles.textLineBlock}>
      <p>Share</p>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
