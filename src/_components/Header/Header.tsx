"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import LearnifyLogo from "../general/LearnifyLogo";
import { GraduationCap } from "lucide-react";
import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

interface HeaderProps {}

function Header({}: HeaderProps) {
  const { 0: open, 1: setOpen } = useState(false);

  return (
    <header>
      <nav className="relative flex items-center justify-between border-b border-gray-300 bg-white px-6 py-4 transition-all md:px-16 lg:px-24 xl:px-32">
        <Link href="/" className="text-2xl font-bold">
          <LearnifyLogo />
        </Link>

        <Button
          aria-label="Menu"
          id="menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden"
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
          className={`absolute top-[60px] left-0 ${open ? "flex" : "hidden"} w-full flex-col items-start gap-2 bg-white px-5 py-4 text-sm shadow-md md:hidden`}
        >
          <Link href="#" className="block">
            Courses
          </Link>
          <Link href="#" className="block">
            Blog
          </Link>
          <Link href="#" className="block">
            About us
          </Link>

          <SignedIn>
            <div className="my-1 flex items-center justify-start gap-8">
              <div className="relative cursor-pointer">
                <GraduationCap />
                <button className="absolute -top-2 -right-3 h-[18px] w-[18px] rounded-full bg-indigo-500 text-xs text-white">
                  3
                </button>
              </div>
              <UserProfile />
            </div>
            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition">
              Logout
            </button>
          </SignedIn>

          <SignedOut>
            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition">
              Login
            </button>
          </SignedOut>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="hover:text-primary">
            Courses
          </Link>
          <Link href="#" className="hover:text-primary">
            Blog
          </Link>
          <Link href="#" className="hover:text-primary">
            About us
          </Link>

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
            <UserProfile />
            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition">
              Logout
            </button>
          </SignedIn>
          <SignedOut>
            <button className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-8 py-2 text-white transition">
              Login
            </button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
