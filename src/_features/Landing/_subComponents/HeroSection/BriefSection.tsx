import { Button } from "@/_components/ui/button";
import PlayIcon from "@/_icons/PlayIcon";
import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";

function BriefSection() {
  return (
    <div
      className="w-full h-full flex items-start justify-center flex-col gap-6"
      id={getLandingSectionTagIDs(`HeroSection-BriefSection`)}
    >
      <h2 className="font-bold text-5xl text-white leading-tight">
        <span className="text-orange-400">Studying</span> Online now is much
        easier
      </h2>
      <p className="text-sm text-white">
        Learnify is an interesting platform that will teach you in more an
        interactive way
      </p>
      <div className="flex items-center gap-5 max-sm:flex-col max-sm:justify-center w-full">
        <Button className="rounded-full cursor-pointer text-white bg-secondary-foreground px-8 py-5">
          Join For Free
        </Button>
        <div className="flex items-center  gap-5  cursor-pointer hover:text-white text-black">
          <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
            <PlayIcon />
          </div>
          <p className="text-base ">Watch how it works</p>
        </div>
      </div>
    </div>
  );
}

export default BriefSection;
