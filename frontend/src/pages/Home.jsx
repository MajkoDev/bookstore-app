import { useContext, useEffect } from "react";
import { Context } from "@/context";
import { fetchDataFromApi } from "@/lib/api";
import ProductGrid from "@/components/product-grid";

const HomePage = () => {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  console.log(products);

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl">Home Page</h1>
     
     {/* 
    */}
      <ProductGrid products={products} /> 
    </div>
  );
};

export default HomePage;
