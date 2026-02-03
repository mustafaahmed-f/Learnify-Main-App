import { Button } from "@/_components/ui/button";
import { featuresData } from "../../_utils/FeaturesData";
import SingleFeature from "./SingleFeature";
import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";

interface FeaturesSectionProps {}

function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <div className="px-8" id={getLandingSectionTagIDs(`FeaturesSection`)}>
      <h2 className="text-prefix mb-6 text-center text-2xl font-bold">
        Our <span className="text-suffix">Features</span>
      </h2>
      <p className="mx-auto max-w-1/2 text-center text-sm max-sm:max-w-3/4">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>

      <div className="features-wrapper mt-16 flex flex-col gap-7 px-4 py-5 sm:gap-10 sm:px-10 sm:py-10 md:px-14 lg:px-20">
        {featuresData.map((feature) => (
          <SingleFeature key={feature.id} {...feature} />
        ))}
      </div>

      <div className="mt-5 flex w-full items-center justify-center">
        <Button className="cursor-pointer rounded-full border-2 border-[#49BBBD] bg-transparent px-4 py-1.5 text-sm text-[#49BBBD] hover:border-0 hover:text-white">
          See More Features
        </Button>
      </div>
    </div>
  );
}

export default FeaturesSection;
