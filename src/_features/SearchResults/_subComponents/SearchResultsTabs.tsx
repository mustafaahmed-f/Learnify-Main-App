import { Button } from "@/_components/ui/button";
import { SearchResultType, SearchResultsTab } from "../utils/searchResultsTypes";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SearchResultsTabsProps = {
  tabs: SearchResultsTab[];
  activeType: SearchResultType;
  searchVal: string;
};

function SearchResultsTabs({
  tabs,
  activeType,
  searchVal,
}: SearchResultsTabsProps) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max gap-2 rounded-lg border bg-card p-1 shadow-sm shadow-slate-950/5">
        {tabs.map((tab) => {
          const isActive = tab.value === activeType;

          return (
            <Button
              asChild
              className={cn(
                "h-9 rounded-md px-4 transition-all",
                isActive && "bg-primary text-primary-foreground shadow-sm"
              )}
              key={tab.value}
              variant={isActive ? "default" : "ghost"}
            >
              <Link href={`/search/${searchVal}?type=${tab.value}`}>
                {tab.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResultsTabs;
