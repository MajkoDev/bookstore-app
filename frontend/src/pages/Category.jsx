import useFetch from "@/hooks/useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams();

  const [revealed, setRevealed] = useState(false);
  const revealText = () => {
    setRevealed(true);
  };

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][slug]=${slug}`
  );

  return (
    <div>
      <div className="h-80 w-full bg-cover bg-slate-300 rounded-md">
        <div className="flex items-center justify-center w-full h-full bg-opacity-80">
          <h1 className="text-center font-semibold text-3xl capitalize">
            {
              data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                ?.title
            }
          </h1>
        </div>
      </div>

      {data?.data?.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CategoryPage;

function CategoryCard({ item }) {
  return (
    <article className="p-4 m-2">
      <div className="flex flex-row gap-4">
        <div className="flex-none">
          <img
            src={
              "http://127.0.0.1:1337" +
              item?.attributes?.image?.data[0].attributes.url
            }
            alt="Image of Book"
            className="w-full h-64 object-cover object-center hover:scale-105 duration-300"
          />
        </div>
        <div className="flex-auto">
          <h1 className="text-slate-900 font-bold text-lg">
            {item.attributes.title}
          </h1>
          <h2 className="text-slate-700 font-semibold text-md mb-3">
            {item.attributes.author}
          </h2>
          <div className="h-48 overflow-hidden relative">
            <BlocksRenderer
              className={`absolute inset-0 overflow-y-auto`}
              content={item.attributes.description}
              blocks={{
                paragraph: ({ children }) => <p className="mb-2">{children}</p>,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white to-transparent"></div>
          </div>
        </div>
      </div>
    </article>
  );
}
