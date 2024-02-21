import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "@/context";
import useFetch from "@/hooks/useFetch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  function decrement() {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  }

  function increment() {
    setQuantity((prevState) => prevState + 1);
  }

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* PRODUCT CARD */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-4xl font-bold tracking-tight">
              {product.title}
            </h1>

            <h2 className="sr-only">Product Information</h2>
            <h1 className="mt-3 text-xl tracking-tight">
              by
              <Link href="#">
                <span className="text-2xl font-semibold hover:text-red-800 dark:hover:text-red-200 hover:cursor-pointer">
                  {product.author}
                </span>
              </Link>
            </h1>

            {/* SHOPPING */}
            <div className="mt-6 flex flex-col">
              <h3 className="my-2 font-bold text-slate-600 dark:text-slate-200 mr-auto">
                Format
              </h3>
              <div className="mr-auto flex flex-row gap-2">
                <Button variant="outline" className="font-semibold">
                  Paperback
                </Button>
                <Button variant="outline" className="font-semibold">
                  Audiobook
                </Button>
              </div>

              <h3 className="mr-auto my-2 font-bold text-slate-600 dark:text-slate-200">
                Quantity
              </h3>
              <div className="mr-auto flex flex-row gap-1 font-bold">
                <Button
                  variant="outline"
                  className="text-lg"
                  disabled={quantity <= 1}
                  onClick={decrement}
                >
                  -
                </Button>
                <Input className="w-14 text-center text-lg" value={quantity} />
                <Button
                  variant="outline"
                  className="text-lg"
                  onClick={increment}
                >
                  +
                </Button>
              </div>

              <div className="mt-4">
                <h2 className="mt-2 ml-2 text-3xl font-bold">
                  {product.price}
                </h2>
              </div>

              <form className="mt-4">
                <div className="flex justify-center">
                  <Button
                    type="button"
                    onClick={() => {
                      handleAddToCart(data?.data?.[0], quantity);
                      setQuantity(1);
                    }}
                    className="w-2/3 bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add to cart
                  </Button>
                </div>
              </form>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">
              <h3 className="my-2 font-bold text-xl text-slate-600 dark:text-slate-200 ml-auto">
                Description
              </h3>
              {/* <BlocksRenderer content={product.description} /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
