import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingPage from "@/components/landingpage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Marisa Howard | Home</title>
      </Head>
      <div>
        <LandingPage />
      </div>
    </>
  );
};

export default Home;
