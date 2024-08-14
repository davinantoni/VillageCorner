import Link from "next/link";
import styles from "./Register.module.css";

const RegisterViews = () => {
    return (
        <div className={styles.register}>
            <h1>Register Page</h1>
            Sudah punya akun ? Login <Link href="/auth/login">Disini</Link>
        </div>
    )
}

export default RegisterViews;