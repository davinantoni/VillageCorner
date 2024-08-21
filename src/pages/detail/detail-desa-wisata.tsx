import DetailDesaWisataViews from "@/views/Detail/Detail-desa-wisata"
import Head from "next/head"

const DetailDesaWisataPages = () => {
    return (    
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Detail Desa Wisata</title>
            </Head>
            <DetailDesaWisataViews />
        </>
    )
}

export default DetailDesaWisataPages