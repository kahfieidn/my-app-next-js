import Link from "next/link";
const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Sudah Punya Akun ? <Link href={'/auth/login'}>Login Disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
