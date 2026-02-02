import Image from "next/image";
import { AvailableMemberShipsData } from "../../_utils/AvailableMemberShips";
import AvailableMemberShips from "./AvailableMemberShips";

interface AboutPlatformSectionProps {}

function AboutPlatformSection({}: AboutPlatformSectionProps) {
  return (
    <div className="px-8">
      <h2 className="text-prefix mb-6 text-center text-2xl font-bold">
        What is <span className="text-suffix">Learnify ?</span>
      </h2>
      <p className="mx-auto max-w-1/2 text-center text-sm max-sm:max-w-3/4">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-20">
        {AvailableMemberShipsData.map((membership) => (
          <AvailableMemberShips key={membership.id} {...membership} />
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 items-center px-4 sm:px-10 md:grid-cols-2 md:px-14 lg:px-20">
        <div className="relative px-2 py-2 sm:px-4 sm:py-3">
          <div className="bg-green-eclipse absolute top-0 left-0 h-10 w-10 rounded-full"></div>
          <div className="relative z-20">
            <p className="text-prefix mb-5 text-2xl font-semibold">
              Everything you can do in a physical classroom,{" "}
              <span className="text-suffix font-normal">
                you can do with TOTC
              </span>
            </p>
            <p className="mb-5 underline">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <p className="hover:text-green-eclipse w-fit cursor-pointer underline">
              Learn more
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2 py-5 sm:px-8 md:justify-end">
          <Image
            src={
              "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            }
            alt="Teacher-with-students"
            width={400}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPlatformSection;
