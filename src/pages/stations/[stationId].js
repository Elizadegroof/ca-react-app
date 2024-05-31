import useNetwork from "@/data/network";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { network, isLoading, isError } = useNetwork();
  const router = useRouter();
 
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const station = network.stations.find(station => station.id === router.query.stationId);

  return (
    <div>
     <h3 className={styles.heading}>{station.name} </h3>
<div className={styles.box}>
        <p>Available bikes: {station.free_bikes}</p>
        <p>Empty spaces: {station.empty_slots} </p>
      </div>
    </div>
  );
}
