'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Filter } from "lucide-react";
import ProductFilters from "./product-filters";

const sortOptions = [
  { name: "Newest", value: "sort[0]=publishedAt:desc" },
  { name: "Aphabetically, A-Z", value: "sort[0]=title:asc" },
  { name: "Aphabetically, Z-A", value: "sort[0]=title:desc" },
];

export default function ProductSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleSubmit(value: any) {
    router.replace(`${value}`);

    // router.replace(`?${value}`);
    // console.log(`this is ${value}`)
    // console.log(value)
    // console.log(pathName)
    // console.log(searchParams)
  }

  return (
    <div className="flex items-center">
      <Select onValueChange={(value) => handleSubmit(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
            <SheetDescription>
              Narrow your product search using the options below.
            </SheetDescription>
          </SheetHeader>

          <ProductFilters />
        </SheetContent>

        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">Filters</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
      </Sheet>
    </div>
  );
}
