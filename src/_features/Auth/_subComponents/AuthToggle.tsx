"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthToggleProps {}

function AuthToggle({}: AuthToggleProps) {
  const pathName = usePathname();
  const lastSegment = pathName.split("/").pop();

  return (
    <div className="bg-primary-50 mb-8 flex items-center gap-1 rounded-md p-1">
      <Link
        href="/auth/login"
        className={`${lastSegment === "login" ? "text-primary-900 bg-background" : "text-black"} hover:bg-primary-100 px-11 py-0.5 sm:px-14`}
      >
        Sign in
      </Link>

      <Link
        href="/auth/signup"
        className={`${lastSegment === "signup" ? "text-primary-900 bg-background" : "text-black"} hover:bg-primary-100 px-11 py-0.5 sm:px-14`}
      >
        Sign up
      </Link>
    </div>
  );
}

export default AuthToggle;
