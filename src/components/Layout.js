import Link from "next/link"
import styles from "@/styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.bottomNav}>
        <div className={styles.navLinks}>
          <Link href="/">H</Link>
          <Link href="/passes">P</Link>
          <Link href="/challenges">C</Link>
          <Link href="/hamburger">H</Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
