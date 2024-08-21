import DesaDanAktivitasViews from "@/views/Desa-wisata-aktivitas";
import Head from "next/head";

const DesaWisataAktivitasPage = () => {
    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>Desa Wisata & Aktivitas</title>
        </Head>
            <DesaDanAktivitasViews />
        </>
    );
};

export default DesaWisataAktivitasPage;