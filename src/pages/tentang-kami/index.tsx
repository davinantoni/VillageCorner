import Head from "next/head";
import TentangKamiViews from "@/views/TentangKami";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Tentang Kami</title>
      </Head>
      <TentangKamiViews />
    </>
  );
}
