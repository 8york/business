import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.links}>
        Home
      </Link>
      <Link href="/services" className={styles.links}>
        Services
      </Link>
      <Link href="/about" className={styles.links}>
        About
      </Link>
      <Link href="/contact" className={styles.links}>
        Contact
      </Link>
      <Link href="/blog" className={styles.links}>
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
