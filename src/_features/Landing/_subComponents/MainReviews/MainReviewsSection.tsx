import { Button } from "@/_components/ui/button";
import Image from "next/image";
import { getLandingSectionTagIDs } from "../../_utils/getLandingSectionTagIDs";

function MainReviewsSection() {
  return (
    <div className="px-8" id={getLandingSectionTagIDs(`MainReviewsSection`)}>
      <div className="flex flex-wrap items-center justify-center gap-y-10 px-4 sm:gap-x-16 sm:px-10 md:flex-nowrap md:gap-x-30 md:px-14 lg:px-20">
        <div className="flex flex-col gap-6">
          <p className="testimonial flex items-center gap-2 text-xs">
            TESTIMONIAL
          </p>
          <h3 className="text-prefix text-2xl font-bold">What They Say ?</h3>
          <p className="text-base">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p>Are you too? Please give your assessment</p>
          <Button className="w-fit cursor-pointer rounded-full border-2 border-[#49BBBD] bg-transparent px-4 py-1.5 text-[#49BBBD] hover:text-white">
            Write your assessment
          </Button>
        </div>
        <Image
          src={
            "https://res.cloudinary.com/dvvmu40wx/image/upload/v1770144673/samples/eLearning/Review_i6r5kr.png"
          }
          width={400}
          height={400}
          alt="Review"
        />
      </div>
    </div>
  );
}

export default MainReviewsSection;
