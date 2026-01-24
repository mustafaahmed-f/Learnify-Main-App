import Image from "next/image";
import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";

function SectionImg() {
  return (
    <div
      className="hidden sm:block relative w-full h-[650px]"
      id={getLandingSectionTagIDs(`HeroSection-SectionImg`)}
    >
      <Image
        src="/hero-section-ai.png"
        alt="hero"
        fill
        className="object-fill"
      />
    </div>
  );
}

export default SectionImg;
