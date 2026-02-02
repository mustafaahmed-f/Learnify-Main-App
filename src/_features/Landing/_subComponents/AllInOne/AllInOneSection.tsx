import { ServicesOfPlatform } from "../../_utils/ServicesOfPlatform";
import SingleService from "./SingleService";

interface AllInOneSectionProps {}

function AllInOneSection({}: AllInOneSectionProps) {
  return (
    <div className="px-8">
      <h2 className="text-prefix mb-6 text-center text-2xl font-bold">
        All-In-One <span className="text-suffix">Cloud Software.</span>
      </h2>
      <p className="mx-auto max-w-1/2 text-center text-sm max-sm:max-w-3/4">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>
      <div className="mt-10 flex w-full flex-wrap items-stretch justify-center gap-16 sm:mt-14">
        {ServicesOfPlatform.map((service) => (
          <SingleService key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default AllInOneSection;
