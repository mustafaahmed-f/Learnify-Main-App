"use client";

import { XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FilterationBtn from "./FilterationBtn";
import SearchInput from "./SearchInput";
import { useSearchContext } from "./context/SearchContext";
import DropDown from "./DropDown";

function SearchComponent() {
  const { searchValue, setSearchValue, isDropDownOpen, setIsDropDownOpen } =
    useSearchContext();

  const searchRef = useRef<HTMLDivElement>(null);
  //todo: We will use tanstack query for getting search results + debounce to avoid multiple requests in short time

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsDropDownOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      onFocus={() => setIsDropDownOpen(true)}
      className="relative order-3 flex w-full basis-full items-center gap-2 rounded-md border border-gray-300 px-3 text-sm max-lg:mt-5 max-md:mt-8 lg:order-none lg:mx-6 lg:mt-0 lg:w-fit lg:grow lg:basis-auto"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.836 10.615 15 14.695"
          stroke="#7A7B7D"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          clipRule="evenodd"
          d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
          stroke="#7A7B7D"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <SearchInput />
      {searchValue && (
        <XIcon
          size={18}
          onClick={() => {
            setSearchValue("");
            setIsDropDownOpen(false);
          }}
          className="hover:text-primary-600 cursor-pointer"
        />
      )}
      {searchValue && isDropDownOpen && <DropDown />}
      <FilterationBtn />
    </div>
  );
}

export default SearchComponent;
