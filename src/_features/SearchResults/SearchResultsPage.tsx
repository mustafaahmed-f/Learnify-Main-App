"use client";

import {
  DiscoveryCourseCard,
  DiscoveryInstructorCard,
  DiscoveryLiveClassCard,
  DiscoverySection,
} from "@/_components/Discovery";
import { motion } from "framer-motion";
import SearchResultsTabs from "./_subComponents/SearchResultsTabs";
import { mockSearchResults, searchResultsTabs } from "./utils/mockSearchResults";
import {
  SearchResultsData,
  SearchResultType,
} from "./utils/searchResultsTypes";

type SearchResultsPageProps = {
  searchVal: string;
  activeType: SearchResultType;
  results?: SearchResultsData;
};

function createHref(entity: string, query: string, section: string) {
  const params = new URLSearchParams({
    q: query,
    section,
    from: "search",
  });

  return `/${entity}?${params.toString()}`;
}

function SearchResultsPage({
  searchVal,
  activeType,
  results = mockSearchResults,
}: SearchResultsPageProps) {
  const decodedSearchVal = decodeURIComponent(searchVal);
  const query = decodedSearchVal;
  const showCourses = activeType === "all" || activeType === "courses";
  const showInstructors = activeType === "all" || activeType === "instructors";
  const showLiveClasses =
    activeType === "all" || activeType === "live-classes";

  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.header
          className="space-y-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary">Search</p>
            <h1 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Search results for "{decodedSearchVal}"
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Explore curated previews across courses, instructors, and live
              classes.
            </p>
          </div>

          <SearchResultsTabs
            tabs={searchResultsTabs}
            activeType={activeType}
            searchVal={searchVal}
          />
        </motion.header>

        <div className="space-y-10">
          {showCourses && (
            <>
              <DiscoverySection
                title="Most Relevant Courses"
                description="Strong matches based on your search intent."
                seeAllHref={createHref("courses", query, "relevant")}
              >
                {results.courses.relevant.map((course) => (
                  <DiscoveryCourseCard course={course} key={course.id} />
                ))}
              </DiscoverySection>

              {(activeType === "all" || activeType === "courses") && (
                <DiscoverySection
                  title="New Courses"
                  description="Fresh lessons and recently published learning paths."
                  seeAllHref={createHref("courses", query, "newest")}
                >
                  {results.courses.newest.map((course) => (
                    <DiscoveryCourseCard course={course} key={course.id} />
                  ))}
                </DiscoverySection>
              )}

              {activeType === "courses" && (
                <DiscoverySection
                  title="Trending Courses"
                  description="Courses learners are choosing right now."
                  seeAllHref={createHref("courses", query, "trending")}
                >
                  {results.courses.trending.map((course) => (
                    <DiscoveryCourseCard course={course} key={course.id} />
                  ))}
                </DiscoverySection>
              )}
            </>
          )}

          {showLiveClasses && (
            <>
              <DiscoverySection
                title="Upcoming Live Classes"
                description="Interactive sessions scheduled around this topic."
                seeAllHref={createHref("live-classes", query, "upcoming")}
              >
                {results.liveClasses.upcoming.map((liveClass) => (
                  <DiscoveryLiveClassCard
                    liveClass={liveClass}
                    key={liveClass.id}
                  />
                ))}
              </DiscoverySection>

              {activeType === "live-classes" && (
                <DiscoverySection
                  title="Starting Soon"
                  description="Jump into focused sessions that are almost live."
                  seeAllHref={createHref("live-classes", query, "starting-soon")}
                >
                  {results.liveClasses.startingSoon.map((liveClass) => (
                    <DiscoveryLiveClassCard
                      liveClass={liveClass}
                      key={liveClass.id}
                    />
                  ))}
                </DiscoverySection>
              )}
            </>
          )}

          {showInstructors && (
            <>
              <DiscoverySection
                title="Top Instructors"
                description="Experienced mentors teaching this subject."
                seeAllHref={createHref("instructors", query, "top")}
              >
                {results.instructors.top.map((instructor) => (
                  <DiscoveryInstructorCard
                    instructor={instructor}
                    key={instructor.id}
                  />
                ))}
              </DiscoverySection>

              {activeType === "instructors" && (
                <DiscoverySection
                  title="New Instructors"
                  description="New educators bringing fresh perspective."
                  seeAllHref={createHref("instructors", query, "newest")}
                >
                  {results.instructors.newest.map((instructor) => (
                    <DiscoveryInstructorCard
                      instructor={instructor}
                      key={instructor.id}
                    />
                  ))}
                </DiscoverySection>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default SearchResultsPage;
