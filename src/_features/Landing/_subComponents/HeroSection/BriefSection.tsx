import { Button } from "@/_components/ui/button";
import PlayIcon from "@/_icons/PlayIcon";
import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";

function BriefSection() {
  return (
    <div
      className="flex h-full w-full flex-col items-start justify-center gap-6"
      id={getLandingSectionTagIDs(`HeroSection-BriefSection`)}
    >
      <h2 className="text-5xl leading-tight font-bold text-white">
        <span className="text-orange-400">Studying</span> Online now is much
        easier
      </h2>
      <p className="text-sm text-white">
        Learnify is an interesting platform that will teach you in more an
        interactive way
      </p>
      <div className="flex w-full items-center gap-5 max-sm:flex-col max-sm:justify-center">
        <Button className="bg-secondary-foreground cursor-pointer rounded-full px-8 py-5 text-white">
          Join For Free
        </Button>
        <div className="flex cursor-pointer items-center gap-5 text-black hover:text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <PlayIcon />
          </div>
          <p className="text-base">Watch how it works</p>
        </div>
      </div>
    </div>
  );
}

export default BriefSection;
