"use client";

import Link from "next/link";
import { useState } from "react";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function ProductInfo({ product }: any) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-4xl font-bold tracking-tight">{product.title}</h1>
      {product.subtitle && (
        <h2 className="text-xl font-mase">{product.subtitle}</h2>
      )}
      <div>
        <h2 className="sr-only">Product Information</h2>
        <h1 className="mt-3 text-xl tracking-tight">
          by
          <Link href="#">
            {" "}
            <span className="text-2xl font-semibold hover:text-red-800 dark:hover:text-red-200 hover:cursor-pointer">
              {product.author}
            </span>
          </Link>
        </h1>
      </div>

      {/* SHOPPING */}
      <div className="mt-6 flex flex-col">
        <h3 className="my-2 font-bold text-slate-600 dark:text-slate-200 mr-auto">
          Format
        </h3>
        <div className="mr-auto flex flex-row gap-2">
          <Button variant="outline" className="font-semibold">
            Paperback
          </Button>
          <Button variant="outline" className="font-semibold">
            Audiobook
          </Button>
        </div>

        <h3 className="mr-auto my-2 font-bold text-slate-600 dark:text-slate-200">
          Quantity
        </h3>
        <div className="mr-auto flex flex-row gap-1 font-bold">
          <Button
            variant="outline"
            className="text-lg"
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Input className="w-14 text-center text-lg" value={quantity} />
          <Button
            variant="outline"
            className="text-lg"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>

        <div className="mt-4">
          <h2 className="mt-2 ml-2 text-3xl font-bold">$ {product.price}</h2>
        </div>

        <form className="mt-4">
          <div className="flex justify-center">
            <Button
              type="button"
              className="w-2/3 bg-blue-600 py-6 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to cart
            </Button>
          </div>
        </form>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-8">
        <h3 className="my-2 font-bold text-xl text-slate-600 dark:text-slate-200 ml-auto">
          Description
        </h3>
        <BlocksRenderer content={product.description} />
      </div>

      {/* MORE INFORMATION */}
      <div className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" font-bold text-xl text-slate-600 dark:text-slate-200">
              Additional Book Informations
            </AccordionTrigger>
            <div className="opacity-80 flex flex-col gap-2 ml-4 text-md">
              <AccordionContent>
                Publisher:{" "}
                <span className="font-semibold">
                  {product.publisher.data.attributes.title}
                </span>
              </AccordionContent>
              {/*
              <AccordionContent>
                Pages: {product.number_of_pages}
              </AccordionContent>
              */}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
