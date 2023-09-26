import styles from "./header.module.css";
import Head from "next/head";

import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <Head>
        <title>Marisa Howard | Home</title>
      </Head>
      <div className={styles.heading}>
        <h1>Marisa Howard</h1>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
