import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import ProductInfo from "@/components/product-info";

async function getProduct(slug: string) {
  const res = await fetch(
    `http://127.0.0.1:1337/api/products?filters[slug]=${slug}&populate[image][populate]&populate[publisher][populate]=true`,
    {
      next: { revalidate: 0 },
    }
  );
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 grid-rows-subgrid">
          <div>
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml+webp;base64,${toBase64(
                shimmer(225, 280)
              )}`}
              src={
                "http://127.0.0.1:1337" +
                product.data[0].attributes?.image.data.attributes.url
              }
              alt="Picture of the product"
              width={255}
              height={280}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-full w-full object-cover hover:scale-105 duration-300"
            />
          </div>
          <ProductInfo product={product.data[0].attributes} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0"></div>
        </div>
      </div>
    </main>
  );
}
