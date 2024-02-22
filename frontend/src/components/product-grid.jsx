import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
  if (products?.data?.length === 0) {
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
    <div className="grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-4">
      {products?.data?.map((item) => (
        <Link
          key={item.id}
          to={`/product/${item.attributes.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm">
            <img
              src={
                "http://127.0.0.1:1337" +
                item?.attributes?.image?.data[0].attributes.url
              }
              alt="Image of Book"
              className="w-full h-96 object-cover object-center hover:scale-105 duration-300"
            />
            <div className="pl-1">
              <h3 className="pt-3 text-[18px] font-semibold ">
                {item.attributes.title}
              </h3>
              <p className="mt-1 font-base text-slate-600">
                {item.attributes.author}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
