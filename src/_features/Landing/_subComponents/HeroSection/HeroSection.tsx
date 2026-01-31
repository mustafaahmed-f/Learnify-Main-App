import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";
import BriefSection from "./BriefSection";
import SectionImg from "./SectionImg";

function HeroSection() {
  return (
    <div className="relative">
      <div
        className="paddings-1 bg-primary grid w-full grid-cols-1 px-14 pt-6 pb-28 max-sm:pt-20 sm:grid-cols-2 sm:pb-0"
        id={getLandingSectionTagIDs(`HeroSection`)}
      >
        <BriefSection />
        <SectionImg />
      </div>

      {/* Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[120px] w-full"
        >
          <path
            d="M0,64 C240,120 480,120 720,96 960,72 1200,24 1440,16 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
