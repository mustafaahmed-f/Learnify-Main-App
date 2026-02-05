import Image from "next/image";

function NewsSection() {
  return (
    <div className="mx-auto flex flex-col gap-6 max-sm:items-center">
      <Image
        alt="news-image"
        src={
          "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=600&q=80"
        }
        width={580}
        height={300}
        // fill
        className="rounded-2xl"
      />
      <p className="bg-primary w-fit rounded-md px-2 py-1 text-white uppercase max-sm:text-sm">
        news
      </p>
      <p className="font-semibold text-black">
        Class adds $30 million to its balance sheet for a Zoom-friendly edtech
        solution
      </p>
      <p className="text-sm text-[#696984]">
        Class, launched less than a year ago by Blackboard co-founder Michael
        Chasen, integrates exclusively...
      </p>
      <p className="mt-2 text-[#696984] underline">Read More</p>
    </div>
  );
}

export default NewsSection;
