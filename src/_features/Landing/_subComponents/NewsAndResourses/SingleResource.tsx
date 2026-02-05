import Image from "next/image";

interface SingleResourceProps {
  title: string;
  description: string;
  imgURL: string;
}

function SingleResource({ title, description, imgURL }: SingleResourceProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-6 max-sm:items-center sm:flex-row sm:flex-nowrap">
      <Image
        alt="resource-image"
        src={imgURL}
        width={180}
        height={140}
        className="rounded-2xl"
      />
      <div>
        <p className="font-semibold text-black">{title}</p>
        <p className="text-sm text-[#696984]">{description}</p>
      </div>
    </div>
  );
}

export default SingleResource;
