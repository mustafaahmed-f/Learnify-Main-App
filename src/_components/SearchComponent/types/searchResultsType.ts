import { filterValues } from "../utils/filterValues";

export type searchResultsType = {
  category: (typeof filterValues)[number]["value"];
}[];
