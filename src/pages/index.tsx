import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import BerandaViews from "@/views/Beranda";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Beranda</title>
      </Head>
      <BerandaViews />
    </>
  );
}
