"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { imagesURL } from "../utils/ImagesURL";
import { AppName } from "@/_utils/constants/AppName";
import Link from "next/link";

function ImageDisplay() {
  const pathname = usePathname();
  let lastSegment = pathname.split("/").pop();

  return (
    <section
      className="relative hidden h-full w-full grow md:block"
      style={{
        backgroundImage: `url(${imagesURL[lastSegment as keyof typeof imagesURL]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-primary-900/95 absolute top-0 right-0 bottom-0 left-0 flex flex-col items-start justify-between p-10 text-white">
        <Link href="/" className="text-3xl font-bold">
          {AppName}
        </Link>
        <div className="flex flex-col items-start gap-8">
          <div className="bg-accent rounded-full px-3 py-1 text-sm text-black uppercase">
            level up your career
          </div>
          <h2 className="text-4xl font-bold">
            Master the skills that{" "}
            <span className="text-primary-100">matter</span>.
          </h2>
          <p className="text-text-muted text-lg">
            Join over 2 million students worldwide and learn from the industry's
            most respected mentors.
          </p>
        </div>
        <div className="flex items-center justify-start gap-8">
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="text-lg font-semibold">4.5/5</p>
            <p className="text-text-muted text-sm">Average rating</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="text-lg font-semibold">12k+</p>
            <p className="text-text-muted text-sm">Expert mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageDisplay;
