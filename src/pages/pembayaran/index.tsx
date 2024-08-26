import PembayaranViews from "@/views/Pembayaran";
import Head from "next/head";

const PembayaranPages = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Pembayaran</title>
            </Head>
            <PembayaranViews/>
        </>
    )
}

export default PembayaranPages