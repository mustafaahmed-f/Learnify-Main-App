import { CalendarClock, Users } from "lucide-react";
import Link from "next/link";
import type { LiveClassSearchResult } from "./utils/mockSearchResults";
import { useSearchContext } from "./context/SearchContext";

interface LiveClassResultCardProps {
  liveClass: LiveClassSearchResult;
}

function LiveClassResultCard({ liveClass }: LiveClassResultCardProps) {
  const {setIsDropDownOpen} = useSearchContext();
  return (
    <Link
      href="#"
      onClick={() => setIsDropDownOpen(false)}
      className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition hover:bg-orange-50"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-700">
        <CalendarClock size={20} />
      </div>
      <div className="min-w-0 grow">
        <div className="flex items-start justify-between gap-3">
          <p className="truncate font-semibold text-gray-950 group-hover:text-orange-700">
            {liveClass.title}
          </p>
          <span className="shrink-0 rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-semibold text-orange-700">
            {liveClass.status}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
          <span className="truncate">{liveClass.instructor}</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span>{liveClass.startsAt}</span>
          <span className="ml-auto flex items-center gap-1">
            <Users size={13} />
            {liveClass.seatsLeft} seats
          </span>
        </div>
      </div>
    </Link>
  );
}

export default LiveClassResultCard;
