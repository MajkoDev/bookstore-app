import { useContext, useEffect } from "react";
import { Context } from "@/context";
import { fetchDataFromApi } from "@/lib/api";
import ProductGrid from "@/components/product-grid";
import { cn } from "@/lib/utils";
import ProductFilters from "@/components/product-filters";

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

      <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
          {products?.data?.length} result
          {products?.data?.length === 1 ? "" : "s"}
        </h1>
      </div>

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
            <ProductFilters />
          </div>
          <ProductGrid products={products} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
