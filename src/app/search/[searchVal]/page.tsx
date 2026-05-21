import { filterValues } from "@/_components/SearchComponent/utils/filterValues";
import Link from "next/link";

interface pageProps {
  searchParams: Promise<{
    type: string;
  }>;
  params: Promise<{
    searchVal: string;
  }>;
}

async function page({ searchParams, params }: pageProps) {
  const validTypes = filterValues.map((filter) => filter.value);
  const type = (await searchParams).type;
  const isValidType = validTypes.includes(type as any);
  const { searchVal } = await params;
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

  return <div></div>;
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
