"use client";

import Image from "next/image";
import Link from "next/link";
import { useToast } from "./ui/use-toast";
import { useShoppingCart } from "use-shopping-cart";
import { CartItemsEmpty } from "./cart-items-empty";

export default function CartItems() {
  const { toast } = useToast();
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product)

  function removeCartItem(){}

  if (cartItems.length === 0) return <CartItemsEmpty />;

  return (
    <ul className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500">
      
    </ul>
  );
}
