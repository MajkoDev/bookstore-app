import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useFetchv2 from "@/hooks/useFetchv2";

export default function TestProducts() {
  // Filtering & Sorting
  const [sort, setSort] = useState("asc");
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedCats, setSelectedCats] = useState([]);

  // Fetching
  const categoryFilters = selectedCats
    .map((item) => `&[filters][categories][id][$eq]=${item}`)
    .join("");

  const { data, loading, error } = useFetchv2(
    `/api/products?populate=*&[filters][price][$lte]=${maxPrice}${categoryFilters}&sort=price:${sort}`
  );

  const { data: categories } = useFetchv2(`api/categories`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCats(
      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((item) => item !== value)
    );
  };

  return <div></div>
}
