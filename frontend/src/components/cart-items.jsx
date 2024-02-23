import { useContext } from "react";
import { Context } from "@/context";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Clock, Trash2, X } from "lucide-react";

import { CartItemsEmpty } from "./cart-items-empty";

export default function CartItems({handleCartProductQuantity}) {
  const { cartItems, handleRemoveFromCart } =
    useContext(Context);

  if (cartItems.length?.length === 0) return <CartItemsEmpty />;

  return (
    <ul className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500">
      {cartItems?.map((item) => (
        <li key={item.id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <img
              src={
                "http://127.0.0.1:1337" +
                item?.attributes?.image?.data[0].attributes.url
              }
              alt={item.attributes.title}
              className="h-36 w-full rounded-md border-2 border-gray-200 object-cover object-center"
            />
          </div>

          <div className="ml-4 sm:ml-6 flex flex-col justify-between pr-9 w-full">
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-sm ">
                  <Link
                    href={`/products/${item.id}`}
                    className="font-medium text-lg md:text-xl"
                  >
                    {item.attributes.title}
                  </Link>
                </h3>
              </div>
              <p className="mt-1 text-sm md:text-md lg:text-lg font-medium">
                {item.attributes.price} €
              </p>
              <p className="mt-1 text-sm lg:text-md font-medium">
                Format: {/* @ts-ignore */}
                <strong>Paperback</strong>
              </p>
            </div>
            <div className="ml-auto">
              <div className="flex flex-row gap-2 items-center">
                <Button
                  variant="outline"
                  className="text-xl font-semibold"
                  onClick={() => handleCartProductQuantity("inc", item)}
                >
                  +
                </Button>
                <span className="mx-1 text-lx">{item.attributes.quantity}</span>
                <Button
                  variant="outline"
                  className="text-xl font-semibold"
                  onClick={() => handleCartProductQuantity("dec", item)}
                >
                  -
                </Button>

                <Button
                  variant="destructive"
                  type="button"
                  className=""
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <Trash2 className="text-white" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
