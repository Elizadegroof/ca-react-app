import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import locImage from "@/pictures/location.svg";
import credImage from "@/pictures/creditcard.svg";
import profImage from "@/pictures/Profile.svg";
import hamImage from "@/pictures/hamburger.svg";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.bottomNav}>
        <div className={styles.navLinks}>
          <Link href="/">
            <div>
                <Image 
                priority
                src={locImage}
                alt="Loc"
                />
            </div>
          </Link>
          <Link href="/passes">
          <div>
                <Image 
                priority
                src={credImage}
                alt="creditcard"
                />
            </div>
          </Link>
          <Link href="/challenges">
          <div>
                <Image 
                priority
                src={profImage}
                alt="profile"
                />
            </div>
          </Link>
          <Link href="/hamburger">
          <div>
                <Image 
                priority
                src={hamImage}
                alt="hamburger"
                />
            </div>
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
