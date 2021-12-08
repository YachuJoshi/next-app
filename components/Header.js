import Link from "next/link";
import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li className={styles.NavItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.NavItem}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
