import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const {push} = useRouter();

  useEffect(() => {
    if(!isLogin){
        push('/auth/login');
    }
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;
