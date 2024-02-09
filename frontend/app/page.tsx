import { cn } from "@/lib/utils";

import ProductFilters from "@/components/product-filters";
import ProductGrid from "@/components/product-grid";
import ProductSort from "@/components/product-sort";

interface Props {
  searchParams: {
    search?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const populate = `?populate=categories,publisher,image`;
  const pagination = `&pagination[start]=0&pagination[limit]=92`;

  const sort = `&sort[0]=title:asc`;

  let category = "";
  const filterCategory = category
    ? `&filters[categories][id][$eq]=${category}`
    : "";
  let publisher = "";
  const filterPublisher = publisher
    ? `&filters[publisher][id][$eq]=${publisher}`
    : "";
  const filter = `${filterCategory}${filterPublisher}`;

  let titleName = searchParams.search;
  const search = titleName ? `&filters[title][$contains][0]=${titleName}` : "";

  async function getProducts() {
    const res = await fetch(
      `http://127.0.0.1:1337/api/products${populate}${pagination}${sort}${filter}${search}`,
      {
        next: { revalidate: 0 },
      }
    );
    return res.json();
  }

  const products = await getProducts();

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">Bookstore</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          Find the right book for you
        </p>
      </div>

      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.data?.length} book{products.data?.length === 1 ? "" : "s"}
            </h1>
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.data?.length > 0
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
        </main>
      </div>
    </div>
  );
}
