"use client";

import { useRouter, useSearchParams } from "next/navigation";

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
      { value: "essays", label: "Essays" },
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

export default async function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchValues = Array.from(searchParams.entries());

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                {/*
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id)
                    ? `(${searchParams.get(section.id)})`
                    : ""}{" "}
                </span>
                */}
              </span>
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
                      checked={searchValues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams);
                        const checked =
                          event.currentTarget.dataset.state == "checked";
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value);
                        router.replace(`/?${params.toString()}`);
                      }}
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
  );
}
