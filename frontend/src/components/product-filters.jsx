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
      { value: "new-directions", label: "New Directions" },
      { value: "new-york-review-of-books", label: "New York Review of Books" },
      { value: "penguin-group", label: "Penguin Group" },
    ],
  },
];

export default function ProductFilters() {
  return (
    <form className="sticky top-20">
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
  );
}
