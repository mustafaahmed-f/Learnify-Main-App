import { Dispatch, SetStateAction } from "react";
import { filterType } from "./types/filterType";
import { ListFilter } from "lucide-react";

interface FilterationBtnProps {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
}

function FilterationBtn({}: FilterationBtnProps) {
  return (
    <div className="flex cursor-pointer items-center justify-center gap-1.5">
      <ListFilter className="hover:text-primary-600" />
    </div>
  );
}

export default FilterationBtn;
