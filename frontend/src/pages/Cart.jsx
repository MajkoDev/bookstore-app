import { useContext } from "react";
import { Context } from "@/context";
import { makePaymentRequest } from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import CartItems from "@/components/cart-items";

function CartPage() {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePayment = loadStripe(
    "pk_test_51OeFR1LAhjZPIORQt2I4UjheoN7do2BWp2qtlBpltfU1pjQdkGMftxJRwkSTbnWJueCSQimdCFRkGXTICi6VQxkw00BpljA8c5  "
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

  return (
    <div className="p-24">
      <div className="text-center text-3xl font-medium">Shopping Cart</div>
      
      {!cartItems.length && (
        <div>
          <h1>Your shopping cart is empty.</h1>
        </div>
      )}

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
    </div>
  );
}

export default CartPage;
