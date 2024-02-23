import { useContext, useEffect, useState } from "react";
import { Context } from "@/context";
import { fetchDataFromApi } from "@/lib/api";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "fiction", label: "Fiction" },
      { value: "poetry", label: "Poetry" },
      { value: "essays", label: "Essays" },
    ],
  },
  {
    id: "publisher",
    name: "Publisher",
    options: [
      { value: "new-directions", label: "New Directions" },
      { value: "new-york-review-of-books", label: "New York Review of Books" },
      { value: "penguin-group", label: "Penguin Group" },
    ],
  },
];

export default function ProductsPage() {
  const { products, setProducts } = useContext(Context);

  const populate = `?populate=categories,publisher,image`;
  const pagination = `&pagination[start]=0&pagination[limit]=90`;

  const [sort, setSort] = useState("");

  //? SORTING

  //? FILTER
  let category = "";
  const filterCategory = category
    ? `&filters[categories][id][$eq]=${category}`
    : "";
  let publisher = "";
  const filterPublisher = publisher
    ? `&filters[publisher][id][$eq]=${publisher}`
    : "";
  const filter = `${filterCategory}${filterPublisher}`;

  //? SEARCH
  let titleName = "";
  const search = titleName ? `&filters[title][$contains][0]=${titleName}` : "";

  const getProducts = () => {
    fetchDataFromApi(
      `/api/products${populate}${pagination}${sort}${filter}${search}`
    ).then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="min-h-[65vh]">
      <div className="my-6 py-4 w-full">
        <h2 className="text-center text-3xl font-semibold">Filters</h2>
      </div>

      <div className="flex flex-row w-full gap-4 justify-center items-center">
        <Button onClick={() => console.log(`&sort[0]=title:asc`)}>Asc</Button>
        <Button onClick={() => console.log(`&sort[0]=title:desc`)}>Desc</Button>
      </div>

      <form className="">
        {filters.map((section, i) => (
          <Accordion key={i} type="single" collapsible>
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger>
                <h1>{section.name}</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`filter-${section.id}-${optionIdx}`}
                        onClick={() => console.log("checked")}
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </form>

      <div className="my-6 py-4 w-full">
        <h2 className="text-center text-3xl font-semibold">Product List</h2>
      </div>

      <div className="grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 lg:col-span-4 lg:gap-x-4">
        {products?.data?.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.attributes.slug}`}
            className="group text-sm"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm">
              <div className="overflow-hidden">
                <img
                  src={
                    "http://127.0.0.1:1337" +
                    item?.attributes?.image?.data[0].attributes.url
                  }
                  alt="Image of Book"
                  className="w-full h-96 object-cover object-center hover:scale-105 duration-300"
                />
              </div>
              <div className="pl-1">
                <h3 className="pt-3 text-[18px] font-semibold ">
                  {item.attributes.title}
                </h3>
                <p className="mt-1 font-base text-slate-600">
                  {item.attributes.author}
                </p>

                <p className="mt-1 font-base text-slate-600">
                  {item.attributes.categories.data[0].attributes.title}
                </p>
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
