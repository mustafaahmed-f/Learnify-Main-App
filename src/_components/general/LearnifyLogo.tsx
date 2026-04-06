import { AppName } from "@/_utils/constants/AppName";
import { cn } from "@/lib/utils";
import Link from "next/link";

function LearnifyLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className="relative">
      <div className="absolute top-0 bottom-0 left-0 -translate-y-1/6">
        <svg
          width="45"
          height="45"
          viewBox="0 0 79 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.4805 2.46497C37.4331 0.512343 40.5982 0.512345 42.5508 2.46497L75.5654 35.4796C77.5181 37.4322 77.518 40.5973 75.5654 42.5499L42.5508 75.5646C40.5982 77.5172 37.4331 77.5172 35.4805 75.5646L2.46582 42.5499C0.513198 40.5973 0.513199 37.4322 2.46582 35.4796L35.4805 2.46497Z"
            stroke="oklch(0.7 0.14 240)"
            strokeWidth="3"
          />
        </svg>
      </div>
      <h1
        className={cn("relative z-10 my-auto pl-5 text-[#5B5B5B]", className)}
      >
        {AppName}
      </h1>
    </Link>
  );
}

export default LearnifyLogo;
