import Image from "next/image";

async function getProducts() {
  const res = await fetch("http://127.0.0.1:1337/api/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center font-semibold text-3xl">Hello World</h1>
    </main>
  );
}
