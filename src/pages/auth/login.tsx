import LoginViews from "@/views/Auth/Login";
import Head from "next/head";

const LoginPage = () => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>Login</title>
        </Head>
            <LoginViews/>
        </>
    );
};

export default LoginPage