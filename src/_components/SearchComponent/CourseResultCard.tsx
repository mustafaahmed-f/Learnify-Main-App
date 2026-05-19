import { Star } from "lucide-react";
import Link from "next/link";
import type { CourseSearchResult } from "./utils/mockSearchResults";
import { useSearchContext } from "./context/SearchContext";

interface CourseResultCardProps {
  course: CourseSearchResult;
}

function CourseResultCard({ course }: CourseResultCardProps) {
  const { setIsDropDownOpen } = useSearchContext();
  return (
    <Link
      href="#"
      onClick={() => setIsDropDownOpen(false)}
      className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition hover:bg-sky-50"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sm font-bold text-sky-700">
        {course.title.slice(0, 2).toUpperCase()}
      </div>
      <div className="min-w-0 grow">
        <div className="flex items-start justify-between gap-3">
          <p className="truncate font-semibold text-gray-950 group-hover:text-sky-700">
            {course.title}
          </p>
          <span className="shrink-0 font-bold text-gray-950">
            {course.price}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
          <span className="truncate">{course.instructor}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span>{course.level}</span>
          <span className="ml-auto flex items-center gap-1 text-amber-600">
            <Star size={13} fill="currentColor" />
            {course.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CourseResultCard;
