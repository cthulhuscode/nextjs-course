import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <Link className={styles.list__option} href="/">
          Home
        </Link>
        <Link className={styles.list__option} href="/about">
          About
        </Link>
        <Link className={styles.list__option} href="/products">
          Products
        </Link>
      </ul>
    </nav>
  );
};
