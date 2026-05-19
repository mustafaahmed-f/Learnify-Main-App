import { Input } from "../ui/input";
import { filterType } from "./types/filterType";
import { filterValues } from "./utils/filterValues";

interface SearchInputProps {
  filter: filterType;
}

function SearchInput({ filter }: SearchInputProps) {
  const allLabels = filterValues.map((filter) => filter.label);
  const currentLabel =
    filter.value === "all" ? allLabels.join(", ") : filter.label;

  return (
    <Input
      placeholder={"Search " + currentLabel + "..."}
      className="w-full border-0 bg-transparent py-1.5 placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
    />
  );
}

export default SearchInput;
