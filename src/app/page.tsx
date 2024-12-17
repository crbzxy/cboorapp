import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/cbo-logo.png"
          alt="Carlos Boyzo Logo"
          width={159}
          height={38}
          priority
        />
      </main>
      <footer className={styles.footer}>
        <p>CBO &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
