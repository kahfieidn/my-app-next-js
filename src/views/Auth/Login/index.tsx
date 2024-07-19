import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push, query } = useRouter();
  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl">Login Page</h1>

      <button onClick={handleLogin}>Login</button>
      <p style={{color: "red", border: "1px solid red", borderRadius: "5px", padding: "5px"}}>
        Belum Punya Akun ?{" "}
        <Link href={"/auth/register"}>Registrasi Disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
