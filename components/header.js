import styles from "./header.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const Header = () => {
  const [pageTitle, SetPageTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      SetPageTitle("Counselling and Psychotherapy in Melbourne");
    } else {
      const titleParts = document.title.split("|");
      if (titleParts.length > 1) {
        SetPageTitle(titleParts[1].trim());
      } else {
        SetPageTitle(document.title);
      }
    }
  }, [router.pathname]);
  return (
    <>
      <Head>
        <title>Marisa Howard | Home</title>
      </Head>
      <div className={styles.heading}>
        <h1>Marisa Howard</h1>
        <Navbar />
      </div>
      <div className={styles.hero}>
        <h2 className={styles.title}>{pageTitle}</h2>
      </div>
    </>
  );
};

export default Header;
