import ViewsDesaWisataLengkap from "@/views/Desa-wisata-aktivitas/Desa-wisata-full";
import Head from "next/head";
const desaWisataFullPage = () => {
    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>Desa Wisata Lengkap</title>
        </Head>
            <ViewsDesaWisataLengkap />
        </>
    )
}

export default desaWisataFullPage;