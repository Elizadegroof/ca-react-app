import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';
import useNetwork from '@/data/network';
import { getDistance } from '@/utils/getDistance';
import Link from 'next/link';

export default function Home() {
  const [filter, setFilter] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const { network, isLoading, isError } = useNetwork();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const stations = network.stations
    .filter(station => station.name.toLowerCase().includes(filter.toLowerCase()))
    .map(station => {
      if (location.latitude && location.longitude) {
        const distance = getDistance(
          location.latitude,
          location.longitude,
          station.latitude,
          station.longitude
        );
        return { ...station, distance };
      }
      return station;
    })
    .sort((a, b) => a.distance - b.distance);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>Stations:</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
      {stations.map(station => (
        <Link href={`/stations/${station.id}`} key={station.id} className={styles.link}>
          <span className={styles["station-name"]}>{station.name}</span>
          <div className={styles["station-bikes"]}>
            {station.distance !== undefined ? `${station.distance.toFixed(2)} km` : ''}
          </div>
        </Link>
      ))}
    </div>
  );
}
