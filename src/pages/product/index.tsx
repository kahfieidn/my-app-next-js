import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductView from "@/views/Product/Main";
import useSWR from "swr";
import {fetcher} from "@/lib/swr/fetcher";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const {push} = useRouter();

  useEffect(() => {
    if(!isLogin){
        push('/auth/login');
    }
  }, []);

  const { data, error, isLoading } = useSWR(
    "/api/product",
    fetcher
  );

  // useEffect(() => {
  //   fetch('/api/product').then((res) => res.json()).then((response) => {
  //       setProducts(response.data);
  //   })
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data}></ProductView>
    </div>
  );
};

export default ProductPage;
