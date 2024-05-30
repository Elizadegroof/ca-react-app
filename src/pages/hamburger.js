import styles from "@/styles/Home.module.css";
import { useState } from "react";
import useNetwork from "@/data/network";

export default function Home() {
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>

  const stations = network.stations;

  return (
    
    <div>
     <h1>Hamburger</h1>
    </div>
  )
}
