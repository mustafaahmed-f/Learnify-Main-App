import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";
import NewsSection from "./NewsSection";
import ResoursesSection from "./ResoursesSection";

function NewsAndResoursesSection() {
  return (
    <div
      className="mb-20 px-8"
      id={getLandingSectionTagIDs(`NewsAdnResourcesSection`)}
    >
      <h2 className="text-prefix mb-6 text-center text-2xl font-bold">
        Latest News And Resources
      </h2>
      <p className="mx-auto max-w-1/2 text-center text-sm max-sm:max-w-3/4">
        See the developments that have occurred to TOTC in the world
      </p>

      <div className="mt-14 grid grid-cols-1 gap-y-6 px-8 sm:grid-cols-3 sm:gap-x-12 sm:px-10 md:px-24">
        <NewsSection />
        <ResoursesSection />
      </div>
    </div>
  );
}

export default NewsAndResoursesSection;
