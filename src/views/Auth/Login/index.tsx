import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginViews = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        // push("/home");
    }

    return (
        <div className={styles.login}>
            <h1>Login Page</h1>
            <button onClick={handlerLogin}>Login</button>
            Belum punya akun ? Registrasi <Link href="/auth/register">Disini</Link>
        </div>
    )
}

export default LoginViews;