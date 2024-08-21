import Views_detailPenginapan from "@/views/Detail/Detail-penginapan"
import Head from "next/head"

const DetailPenginapanPages = () => {
    return (    
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Detail Penginapan</title>
            </Head>
            <Views_detailPenginapan />
        </>
    )
}

export default DetailPenginapanPages