import { useEffect, useState } from "react";
import CardComponent from "./cart/CardComponent";
import LoadingComponent from "./loader/LoadingComponent";
//import CardTest from "./cart/CardTest";

export type Products = {
  title: string,
  image: string,
  price: number;
}

export default function HomeComponent() {

  const [getProduct, setGetProduct] = useState<Products[]>();
  const [loading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const fetchProduct = await fetch("https://fakestoreapi.com/products");
      const res = await fetchProduct.json();
      console.table(res);
      setGetProduct(res);
    }catch(err){
      console.log("Error, ",err)
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

    //return (

    //   loading? 
    //   (<LoadingComponent></LoadingComponent>) : 
    //   (getProduct?.map((pro, index) =>{
    //     <CardTest key={index} title={pro.title} image={pro.image} price={pro.price}></CardTest>
    // })));
    

  return (

    loading? 
    (<LoadingComponent></LoadingComponent>) : 
    (getProduct?.map((pro, index) =>{
      <CardComponent key={index} title={pro.title} image={pro.image} price={pro.price}></CardComponent>
  })));

  // loading? 
  //   (<LoadingComponent></LoadingComponent>) : 
  //   ( <CardComponent></CardComponent>));
};


