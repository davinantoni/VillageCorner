import RegisterViews from "@/views/Auth/Register";
import Head from "next/head";


const RegisterPage = () => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>Register</title>
        </Head>
            <RegisterViews/>
        </>
    );
};

export default RegisterPage