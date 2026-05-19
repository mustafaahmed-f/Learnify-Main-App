import { filterType } from "@/_components/SearchComponent/types/filterType";
import { filterValues } from "@/_components/SearchComponent/utils/filterValues";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type searchContextType = {
  filter: filterType;
  setFilter: Dispatch<SetStateAction<filterType>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const initialValues: searchContextType = {
  filter: { value: "all", label: "All" },
  setFilter: () => {},
  searchValue: "",
  setSearchValue: () => {},
};

const SearchContext = createContext<searchContextType>(initialValues);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const { 0: filter, 1: setFilter } = useState<filterType>(filterValues[0]);
  const { 0: searchValue, 1: setSearchValue } = useState<string>("");

  return (
    <SearchContext.Provider
      value={{ filter, setFilter, searchValue, setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
