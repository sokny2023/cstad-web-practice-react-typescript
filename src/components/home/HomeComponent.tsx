import { useEffect, useState } from "react";
import CardComponent from "./cart/CardComponent";
import LoadingComponent from "./loader/LoadingComponent";
import ButtonCreateProduct from "../ButtonCreateProduct";

export type Products = {
  title: string;
  image: string;
  price: number;
};
const HomeComponent = () => {
  const [getProduct, setGetProduct] = useState<Products[]>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const fetchProduct = await fetch("https://fakestoreapi.com/products");
      const res = await fetchProduct.json();
      console.table(res);
      setGetProduct(res);
    } catch (err) {
      console.log("Error, ", err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center">
      <div className="mt-4">
        <ButtonCreateProduct></ButtonCreateProduct>
      </div>
      {loading ? (
        <LoadingComponent />) : (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
          {getProduct?.map((pro, index) => (
            <CardComponent key={index} title={pro.title} image={pro.image} price={pro.price} />
          ))}
        </div>
      )}
      </section>
    </>
  );
  
};

export default HomeComponent;
