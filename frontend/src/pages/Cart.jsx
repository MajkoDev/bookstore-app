import { useContext } from "react";
import { Context } from "@/context";
import { makePaymentRequest } from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import CartItems from "@/components/cart-items";
import { Card, CardContent } from "@/components/ui/card";

function CartPage() {
  const { cartItems, cartSubTotal } = useContext(Context);

  function isVariableValid(variable) {
    return variable !== null && variable !== undefined;
  }

  const stripePromise = loadStripe(
    "pk_test_51Ok9HJF1IXYkC9JQzInVqi4B5eIgwIP2tqyeF6rBPLjzIqlQ1yJJ7t8DCMpLwJrNqI0xAl3SpLVBWZ331kKJcxdx00HNeLQlcO"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  if (isVariableValid(cartItems.length) && cartItems.length?.length === 0) {
    return (
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-4">
              <p>Your Cart is empty...</p>
            </CardContent>
          </Card>
        </div>
        <Receipt />
      </div>
    );
  }

  return (
    <>
      <div className="my-4">
        <h2 className="text-3xl font-bold tracking-tight">Shopping Cart</h2>
        <p className="text-sm text-muted-foreground">
          Below is a list of products you have in your cart.
        </p>
      </div>

      {!!cartItems.length && (
        <div>
          <CartItems />
          <span className="text">Subtotal:</span>
          <span className="text total">&#8377;{cartSubTotal}</span>
          <button className="checkout-cta" onClick={handlePayment}>
            Checkout
          </button>
        </div>
      )}
    </>
  );
}

export default CartPage;
