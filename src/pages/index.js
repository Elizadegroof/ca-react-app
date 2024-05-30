import styles from "@/styles/Home.module.css";
import { useState } from "react";
import useNetwork from "@/data/network";
import Link from "next/link";

export default function Home() {
  const [filter, setFilter] = useState('');
  const { network, isLoading, isError } = useNetwork();
 
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={filter} 
        onChange={handleFilterChange} 
        className={styles.input}
      />
      {stations.map(station => (
        <Link href={`/stations/${station.id}`} key={station.id} className={styles.link}>
          {station.name}
        </Link>
      ))}
    </div>
  );
}
