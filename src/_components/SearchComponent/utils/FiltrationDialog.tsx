import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/_components/ui/dialog";
import { useSearchContext } from "../context/SearchContext";
import { RadioGroup, RadioGroupItem } from "@/_components/ui/radio-group";
import { Label } from "@/_components/ui/label";
import { filterValues } from "./filterValues";

interface FiltrationDialogProps {}

function FiltrationDialog({}: FiltrationDialogProps) {
  const { filter, setFilter } = useSearchContext();
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Filtration Elements</DialogTitle>
        <DialogDescription>
          <RadioGroup
            defaultValue={filter.value}
            value={filter.value}
            className="w-fit"
          >
            {filterValues.map((filter) => (
              <div
                className="flex cursor-pointer items-center gap-3"
                onClick={() => setFilter(filter)}
              >
                <RadioGroupItem value={filter.value} id={filter.value} />
                <Label htmlFor="r1">{filter.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}

export default FiltrationDialog;
