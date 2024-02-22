import { Button } from "./ui/button";

export default function CartSummary() {
  return (
    <section className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>
      <dl className="mt-6 space-y-4"></dl>
      <div className="mt-6">
        <Button className="w-full">Checkout</Button>
      </div>
    </section>
  );
}
