import Link from "next/link";
import CourseResultCard from "./CourseResultCard";
import InstructorResultCard from "./InstructorResultCard";
import LiveClassResultCard from "./LiveClassResultCard";
import { useSearchContext } from "./context/SearchContext";
import {
  mockCourseResults,
  mockInstructorResults,
  mockLiveClassResults,
} from "./utils/mockSearchResults";

function DropDown() {
  const { filter, searchValue, setIsDropDownOpen } = useSearchContext();
  const shouldShowCourses =
    filter.value === "all" || filter.value === "courses";
  const shouldShowLiveClasses =
    filter.value === "all" || filter.value === "live-classes";
  const shouldShowInstructors =
    filter.value === "all" || filter.value === "instructors";

  return (
    <div className="absolute right-0 -bottom-2 left-0 z-50 w-full translate-y-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl shadow-gray-950/10">
      <div className="max-h-[min(72vh,520px)] overflow-y-auto py-2">
        <div className="border-b border-gray-100 px-4 py-3">
          <p className="text-sm font-semibold text-gray-950">Search results</p>
          <p className="mt-0.5 truncate text-xs text-gray-500">
            Showing matches for "{searchValue}"
          </p>
        </div>

        {shouldShowCourses && (
          <section className="border-b border-gray-100 py-2">
            <h3 className="flex items-center gap-2 px-4 py-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
              <span>Courses</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] tracking-normal text-gray-600">
                {mockCourseResults.length}
              </span>
            </h3>
            {mockCourseResults.slice(0, 3).map((course) => (
              <CourseResultCard key={course.id} course={course} />
            ))}
          </section>
        )}

        {shouldShowLiveClasses && (
          <section className="border-b border-gray-100 py-2">
            <h3 className="flex items-center gap-2 px-4 py-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
              <span>Live Classes</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] tracking-normal text-gray-600">
                {mockLiveClassResults.length}
              </span>
            </h3>
            {mockLiveClassResults.slice(0, 3).map((liveClass) => (
              <LiveClassResultCard key={liveClass.id} liveClass={liveClass} />
            ))}
          </section>
        )}

        {shouldShowInstructors && (
          <section className="border-b border-gray-100 py-2">
            <h3 className="flex items-center gap-2 px-4 py-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
              <span>Instructors</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] tracking-normal text-gray-600">
                {mockInstructorResults.length}
              </span>
            </h3>
            {mockInstructorResults.slice(0, 3).map((instructor) => (
              <InstructorResultCard
                key={instructor.id}
                instructor={instructor}
              />
            ))}
          </section>
        )}
      </div>

      <div className="bg-gray-50 px-4 py-3">
        <Link
          href="#"
          onClick={() => setIsDropDownOpen(false)}
          className="block text-center text-sm font-semibold text-sky-700 transition hover:text-sky-800"
        >
          Show all results
        </Link>
      </div>
    </div>
  );
}

export default DropDown;
