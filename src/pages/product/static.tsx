import ProductView from "@/views/Product/Main";
import { ProductType } from "../../types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  const res = await fetch("https://my-app-next-js-nine.vercel.app/api/product");
  const response = await res.json();

  console.log(response);

  return {
    props: {
      products: response.data,
    },
  };
}
