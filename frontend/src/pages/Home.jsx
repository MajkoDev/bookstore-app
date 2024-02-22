import { useContext, useEffect } from "react";
import { Context } from "@/context";
import { fetchDataFromApi } from "@/lib/api";
import ProductGrid from "@/components/product-grid";
import { cn } from "@/lib/utils";

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

      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <div
          className={cn(
            "grid grid-cols-1 gap-x-8 gap-y-10",
            products?.data?.length > 0
              ? "lg:grid-cols-4"
              : "lg:grid-cols-[1fr_3fr]"
          )}
        >
          <div className="hidden lg:block">
            <div>PRODUCT FILTERS</div>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
