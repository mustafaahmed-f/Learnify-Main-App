import GeneralLayout from "@/_components/Layouts/GeneralLayout";

interface SearchResultsLayoutProps {
  children: React.ReactNode;
}

function SearchResultsLayout({ children }: SearchResultsLayoutProps) {
  return <GeneralLayout>{children}</GeneralLayout>;
}

export default SearchResultsLayout;
