import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useFetchv2 from "@/hooks/useFetchv2";

export default function ProductsPage() {
  const [sort, setSort] = useState("asc");
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedCats, setSelectedCats] = useState([]);

  const categoryFilters = selectedCats
    .map((item) => `&[filters][categories][id][$eq]=${item}`)
    .join("");

  const { data, loading, error } = useFetchv2(
    `/api/products?populate=*&[filters][price][$lte]=${maxPrice}${categoryFilters}&sort=price:${sort}`
  );

  const { data: categories } = useFetchv2(`api/categories`);

  console.log(selectedCats);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats(
      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="min-h-[65vh]">
      <div className="my-6 text-center">
        <h2 className="text-lg font-bold">Categories</h2>
        {categories?.map((category) => (
          <div key={category.id}>
            <input
              type="checkbox"
              id={category.id}
              value={category.id}
              onChange={handleChange}
            />
            <label
              htmlFor={category.id}
              className="pl-3 my-1 capitalize font-semibold"
            >
              {category.attributes.title}
            </label>
          </div>
        ))}
      </div>

      <div className="my-6 py-4 w-full">
        <h2 className="text-center text-3xl font-semibold">Filters</h2>
      </div>

      <div className="flex flex-row w-full gap-4 justify-center items-center">
        <Button onClick={() => setSort("asc")}>Asc</Button>
        <Button onClick={() => setSort("desc")}>Desc</Button>

        <input
          type="radio"
          id="desc"
          value="desc"
          name="price"
          onChange={(e) => setSort("desc")}
        />

        <input
          type="radio"
          id="asc"
          value="asc"
          name="price"
          onChange={(e) => setSort("asc")}
        />
      </div>

      <div className="flex w-full justify-center items-center my-4 flex-col gap-2">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            className="h-2 bg-gray-200 rounedd-lg appearance-none cursor-pointer"
            min={0}
            max={100}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
      </div>

      <div className="my-6 py-4 w-full">
        <h2 className="text-center text-3xl font-semibold">Product List</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 lg:col-span-4 lg:gap-x-4">
        {data?.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.attributes.slug}`}
            className="group text-sm"
          >
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
              <div className="">
                <img
                  src={
                    "http://127.0.0.1:1337" +
                    item?.attributes?.image?.data[0].attributes.url
                  }
                  alt="Image of Book"
                  className="h-full w-auto object-cover object-center"
                />
              </div>
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
    </div>
  );
}
