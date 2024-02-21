import { useContext } from "react";
import { Context } from "@/context";
import { Button } from "./ui/button";

export default function CartItems() {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500">
      {cartItems?.map((item) => (
        <div key={item.id} style={{ margin: "2px" }}>
          <span className="name">{item.attributes.title}</span>

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
          <Button
            variant="destructive"
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove
          </Button>
          <span className="highlight">
            <span>&#8377;</span>
            {item.attributes.price * item.attributes.quantity}
          </span>
        </div>
      ))}
    </div>
  );
}
