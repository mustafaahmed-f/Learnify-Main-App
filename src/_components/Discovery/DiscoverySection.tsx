import DiscoverySectionHeader from "./DiscoverySectionHeader";
import HorizontalScroller from "./HorizontalScroller";

type DiscoverySectionProps = {
  title: string;
  description?: string;
  seeAllHref: string;
  children: React.ReactNode;
};

function DiscoverySection({
  title,
  description,
  seeAllHref,
  children,
}: DiscoverySectionProps) {
  return (
    <section className="space-y-5">
      <DiscoverySectionHeader
        title={title}
        description={description}
        href={seeAllHref}
      />
      <HorizontalScroller>{children}</HorizontalScroller>
    </section>
  );
}

export default DiscoverySection;
