import { ListFilter } from "lucide-react";
import { useSearchContext } from "./context/SearchContext";
import { filtrationColors } from "./utils/filtrationColors";
import { Dialog, DialogTrigger } from "../ui/dialog";
import FiltrationDialog from "./utils/FiltrationDialog";

function FilterationBtn() {
  const { filter } = useSearchContext();
  return (
    <Dialog>
      <DialogTrigger>
        <div
          style={{ backgroundColor: filtrationColors[filter.value] }}
          className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-1.5 py-0.5 max-md:absolute max-md:top-0 max-md:right-0 max-md:-translate-y-full"
        >
          <p className="text-sm font-semibold text-nowrap text-black">
            {filter.label}
          </p>
          <ListFilter className="hover:text-primary-600" size={18} />
        </div>
      </DialogTrigger>
      <FiltrationDialog />
    </Dialog>
  );
}

export default FilterationBtn;
