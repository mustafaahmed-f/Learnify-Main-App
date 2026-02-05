import { resourcesData } from "../../_utils/ResourcesData";
import SingleResource from "./SingleResource";

interface ResoursesSectionProps {}

function ResoursesSection({}: ResoursesSectionProps) {
  return (
    <div className="col-span-2 flex flex-col items-start justify-start gap-12">
      {resourcesData.map((resource) => (
        <SingleResource key={resource.id} {...resource} />
      ))}
    </div>
  );
}

export default ResoursesSection;
