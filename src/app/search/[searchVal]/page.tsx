import SearchResultsPage from "@/_features/SearchResults/SearchResultsPage";
import { searchResultsTabs } from "@/_features/SearchResults/utils/mockSearchResults";
import { SearchResultType } from "@/_features/SearchResults/utils/searchResultsTypes";
import { notFound } from "next/navigation";

interface pageProps {
  searchParams: Promise<{
    type?: string;
  }>;
  params: Promise<{
    searchVal: string;
  }>;
}

async function page({ searchParams, params }: pageProps) {
  const validTypes = searchResultsTabs.map((filter) => filter.value);
  const type = (await searchParams).type ?? "all";
  const isValidType = validTypes.includes(type as SearchResultType);
  const { searchVal } = await params;

  if (!isValidType) {
    notFound();
  }

  return (
    <SearchResultsPage
      activeType={type as SearchResultType}
      searchVal={searchVal}
    />
  );
}

export default page;
