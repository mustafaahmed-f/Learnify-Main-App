import { GraduationCap, Star, Users } from "lucide-react";
import Link from "next/link";
import type { InstructorSearchResult } from "./utils/mockSearchResults";
import { useSearchContext } from "./context/SearchContext";

interface InstructorResultCardProps {
  instructor: InstructorSearchResult;
}

function InstructorResultCard({ instructor }: InstructorResultCardProps) {
  const { setIsDropDownOpen } = useSearchContext();
  return (
    <Link
      href="#"
      onClick={() => setIsDropDownOpen(false)}
      className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition hover:bg-violet-50"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
        {instructor.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>
      <div className="min-w-0 grow">
        <div className="flex items-start justify-between gap-3">
          <p className="truncate font-semibold text-gray-950 group-hover:text-violet-700">
            {instructor.name}
          </p>
          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-amber-600">
            <Star size={13} fill="currentColor" />
            {instructor.rating}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
          <span className="truncate">{instructor.specialty}</span>
          <span className="ml-auto flex items-center gap-1">
            <GraduationCap size={13} />
            {instructor.coursesCount}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            {instructor.studentsCount}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default InstructorResultCard;
