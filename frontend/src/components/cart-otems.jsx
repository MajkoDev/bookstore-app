import { useContext } from "react";
import { Context } from "@/context";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Clock, X } from "lucide-react";

import { CartItemsEmpty } from "./cart-items-empty";

export default function CartItems() {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  if (cartItems.length?.length === 0) return <CartItemsEmpty />;

  return (
    <ul className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500">
      {cartItems?.map((item) => (
        <li key={item.id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <img
              src={item.attributes.title}
              alt={item.attributes.title}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
              style={{ filter: "blur(20px)" }}
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/products/${item.id}`} className="font-medium">
                      {item.attributes.title}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">
                  {item.attributes.price}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${item.id}`} className="sr-only">
                  Quantity, {item.attributes.title}
                </label>
                <Button
                  variant="outline"
                  onClick={() => handleCartProductQuantity("inc", item)}
                >
                  +
                </Button>
                <span>{item.attributes.quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => handleCartProductQuantity("dec", item)}
                >
                  -
                </Button>

                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 flex space-x-2 text-sm">
            <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Ships in 1 week</span>
          </p>

          <span className="highlight">
            <span>&#8377;</span>
            {item.attributes.price * item.attributes.quantity}
          </span>
        </li>
      ))}
    </ul>
  );
}
