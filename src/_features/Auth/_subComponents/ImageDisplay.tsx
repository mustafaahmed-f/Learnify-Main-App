"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { imagesURL } from "../utils/ImagesURL";

function ImageDisplay() {
  const pathname = usePathname();
  let lastSegment = pathname.split("/").pop();

  return (
    <div className="hidden grow md:block">
      <Image
        src={imagesURL[lastSegment as keyof typeof imagesURL]}
        alt={`${lastSegment}_image`}
        width={800}
        height={1000}
        className="h-full rounded-2xl object-cover"
      />
    </div>
  );
}

export default ImageDisplay;
