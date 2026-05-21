import { Button } from "@/_components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type DiscoverySectionHeaderProps = {
  title: string;
  description?: string;
  href: string;
};

function DiscoverySectionHeader({
  title,
  description,
  href,
}: DiscoverySectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="min-w-0 space-y-1">
        <h2 className="text-xl font-semibold tracking-normal text-foreground sm:text-2xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <Button asChild variant="ghost" className="shrink-0">
        <Link href={href}>
          See all
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

export default DiscoverySectionHeader;
