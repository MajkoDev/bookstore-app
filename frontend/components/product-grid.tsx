import Link from "next/link";
import Image from "next/image";
import { XCircle } from "lucide-react";
import { shimmer, toBase64 } from "@/lib/image";

export default async function ProductGrid({ products }: any) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products?.data?.map((product: any) => (
        <Link
          key={product.id}
          href={`/products/${product.attributes.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden hover:text-slate-800 dark:hover:text-slate-300">
            <div className="overflow-hidden">
                <Image
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(225, 280)
                  )}`}
                  src={
                    "http://127.0.0.1:1337" +
                    product.attributes.image.data.attributes.url
                  }
                  alt={product.attributes.title}
                  width={255}
                  height={280}
                  className="h-full w-full object-cover hover:scale-105 duration-300"
                />
            </div>

            <h3 className="pt-3 text-[18px] font-semibold ">
              {product.attributes.title}
            </h3>
            <p className="mt-1 font-base">{product.attributes.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
