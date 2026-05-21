import type {
  DiscoveryCourse,
  DiscoveryInstructor,
  DiscoveryLiveClass,
} from "@/_components/Discovery";

export type SearchResultType =
  | "all"
  | "courses"
  | "instructors"
  | "live-classes";

export type SearchResultsTab = {
  label: string;
  value: SearchResultType;
};

export type SearchResultsData = {
  courses: {
    relevant: DiscoveryCourse[];
    newest: DiscoveryCourse[];
    trending: DiscoveryCourse[];
  };
  instructors: {
    top: DiscoveryInstructor[];
    newest: DiscoveryInstructor[];
  };
  liveClasses: {
    upcoming: DiscoveryLiveClass[];
    startingSoon: DiscoveryLiveClass[];
  };
};
