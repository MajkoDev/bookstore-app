import { useContext, useEffect } from "react";
import { Context } from "@/context";
import { fetchDataFromApi } from "@/lib/api";
import ProductGrid from "@/components/product-grid";

export default function ProductsPage() {
  const { products, setProducts } = useContext(Context);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="min-h-[65vh]">
        <div className="my-6 py-4 w-full">
            <h2 className="font-semibold">Filters</h2>
            
        </div>
      <ProductGrid products={products} />
    </div>
  );
}
