import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";
const Hero = () => {
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
    <div className={styles.hero}>
      <h2 className={styles.title}>{pageTitle}</h2>
    </div>
  );
};

export default Hero;
