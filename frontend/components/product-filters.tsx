"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";


const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "fiction", label: "Fiction" },
      { value: "poetry", label: "Poetry" },
      { value: "esseys", label: "Esseys" },
    ],
  },
  {
    id: "publisher",
    name: "Publisher",
    options: [
      {
        value: "harper_collins_publishers",
        label: "Harper Collins Publishers",
      },
      { value: "new_york_review_books", label: "New York Review Books" },
      { value: "new_directions", label: "New Directions" },
      { value: "penguin_random_house", label: "Penguin Random House" },
    ],
  },
];

async function getCategories() {
  const res = await fetch("http://127.0.0.1:1337/api/categories", {
    next: { revalidate: 0 },
  });
  return res.json();
}

async function getPublishers() {
  const res = await fetch("http://localhost:1337/api/publishers?fields[0]=title", {
    next: { revalidate: 0 },
  });
  return res.json();
}



export default async function ProductFilters() {
  const categoriesData = await getCategories();
  const publishers = await getPublishers();


  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>
    
    

    </form>
  );
}
