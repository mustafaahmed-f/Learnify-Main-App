import { filterValues } from "@/_components/SearchComponent/utils/filterValues";
import SearchResultsPage from "@/_features/SearchResults/SearchResultsPage";
import { searchResultsTabs } from "@/_features/SearchResults/utils/mockSearchResults";
import { SearchResultType } from "@/_features/SearchResults/utils/searchResultsTypes";
import Link from "next/link";

interface pageProps {
  searchParams: Promise<{
    type?: string;
  }>;
  params: Promise<{
    searchVal: string;
  }>;
}

async function page({ searchParams, params }: pageProps) {
  console.log("PAGE START");
  const validTypes = searchResultsTabs.map((filter) => filter.value);
  const type = (await searchParams).type ?? "all";
  const isValidType = validTypes.includes(type as SearchResultType);
  const { searchVal } = await params;

  //* Here we decode back the search value as user may use a speacial character while searching
  //* Or may use a space to separate between multiple words so in this case the search value
  //* is decoded in the URL and before using it for getting search results in our code
  //* we should decode it to ensure that we get the orginal version of that string :
  const decodedSearchVal = decodeURIComponent(searchVal);

  if (!isValidType) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-5 px-4 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Invalid search type</h1>
          <p className="text-muted-foreground">
            Type : "{type ?? "None"}" is not a valid filter for "
            {decodedSearchVal}". Choose one of the available search types below.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {filterValues.map((filter) => (
            <Link
              className="hover:bg-muted rounded-md border px-4 py-2 text-sm font-medium transition-colors"
              href={`/search/${searchVal}?type=${filter.value}`}
              key={filter.value}
            >
              {filter.label}
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <SearchResultsPage
      activeType={type as SearchResultType}
      searchVal={searchVal}
    />
  );
}

export default page;

/*

* /search/react?type=all
* /search/react?type=courses
* /search/react?type=instructors
* /search/react?type=live-classes

* When click on see all for relevant courses => /courses?q=react&section=relevant
* Preserve query params : /courses?q=react&section=relevant&from=search&type=courses&level=beginner&price=free
*/
