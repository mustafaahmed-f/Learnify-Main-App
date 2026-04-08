"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LearnifyLogo from "../general/LearnifyLogo";
import { Button } from "../ui/button";
import { HeaderElements } from "./HeaderElements";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { 0: open, 1: setOpen } = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <header>
      <nav className="bg-background flex items-center justify-between border-b border-gray-300 px-6 py-4 transition-all md:px-16 lg:px-24 xl:px-32">
        <div className="text-2xl font-bold">
          <LearnifyLogo />
        </div>

        <Button
          aria-label="Menu"
          id="menu-toggle"
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </Button>

        <div
          id="mobile-menu"
          className={`fixed top-0 right-0 left-0 z-50 transform bg-white px-4 py-4 md:hidden ${open ? "translate-y-0" : "-translate-y-full"} w-full flex-col items-start gap-2 bg-white px-5 py-4 text-sm shadow-md transition-transform duration-700 ease-in-out`}
        >
          <div className="mb-5 flex w-full items-center justify-end">
            <Button
              className="cursor-pointer bg-transparent text-2xl font-bold text-black hover:bg-transparent"
              onClick={() => setOpen(false)}
            >
              X
            </Button>
          </div>
          {HeaderElements.map((el) => (
            <Link
              key={el.id}
              href={el.href}
              className="hover:text-primary my-1 block"
            >
              {el.label}
            </Link>
          ))}

          <div className="mt-4">
            <SignedIn>
              <div className="my-1 flex items-center justify-start gap-8">
                <div className="relative cursor-pointer">
                  <GraduationCap />
                  <button className="absolute -top-2 -right-3 h-[18px] w-[18px] rounded-full bg-indigo-500 text-xs text-white">
                    3
                  </button>
                </div>
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <Link
                href="/auth/login"
                className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition"
              >
                Login
              </Link>
            </SignedOut>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {HeaderElements.map((el) => (
            <Link key={el.id} href={el.href} className="hover:text-primary">
              {el.label}
            </Link>
          ))}

          <div className="hidden items-center gap-2 rounded-full border border-gray-300 px-3 text-sm lg:flex">
            <input
              className="w-full bg-transparent py-1.5 placeholder-gray-500 outline-none"
              type="text"
              placeholder="Search courses"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <SignedIn>
            <div className="relative cursor-pointer">
              <GraduationCap />
              <button className="absolute -top-2 -right-3 h-[18px] w-[18px] rounded-full bg-indigo-500 text-xs text-white">
                3
              </button>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link
              href="/auth/login"
              className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition"
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
