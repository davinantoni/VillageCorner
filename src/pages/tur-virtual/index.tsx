import Head from "next/head";
import TurVirtualViews from "@/views/TurVirtual";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Tur Virtual</title>
      </Head>
      <TurVirtualViews />
    </>
  );
}
