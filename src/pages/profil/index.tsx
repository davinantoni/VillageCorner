import ProfileViews from "@/views/Profil";
import Head from "next/head";
const profilePages = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Profil</title>
            </Head>
            <ProfileViews />
        </>
    )
};
export default profilePages