import { Link } from "react-router-dom";
import useFetchv2 from "@/hooks/useFetchv2";

export default function ProductRow({ title, type }) {
  const { data, loading, error } = useFetchv2(
    `http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <section>
      <h1 className="py-6 text-2xl font-semibold ml-3">{title}</h1>
      <div className="pl-3 relative flex flex-row gap-x-2 overflow-x-auto whitespace-nowrap py-3">
        {error ? (
          <Message message="Something went wrong..." />
        ) : loading ? (
          <Message message="Loading" />
        ) : (
          data?.map((book) => (
            <Link key={book.id} to={`/product/${book.attributes.slug}`}>
              <div
                className="flex-none w-44 h-64 rounded-sm py-4 px-2 inline-block hover:scale-105 ease-in-out duration-300 scroll-smooth cursor-pointer"
                style={{
                  backgroundImage: `url("http://127.0.0.1:1337${book?.attributes?.image?.data[0].attributes.url}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="w-44 px-1">
                <h1 className="text-center font-medium text-slate-900 overflow-hidden">
                  {book.attributes.title}
                </h1>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

function Message({ message }) {
  return (
    <div className="w-full h-64 flex justify-center items-center">
      <h1 className="text-center text-3xl font-semibold">{message}</h1>
    </div>
  );
}
