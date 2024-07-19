import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
  const {push, query} = useRouter();
  const handlerLogin = () => {
    push('/product');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handlerLogin}>Login</button>
      <p>
        Belum Punya Akun ?{" "}
        <Link href={"/auth/register"}>Registrasi Disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
