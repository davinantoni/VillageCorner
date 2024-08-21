import DetailAktivitasViews from "@/views/Detail/Detail-aktivitas"
import Head from "next/head"

const detailAktivitasPages = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Detail Aktivitas</title>
            </Head>
            <DetailAktivitasViews/>
        </>
    )
}

export default detailAktivitasPages