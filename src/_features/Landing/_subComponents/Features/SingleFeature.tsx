import Image from "next/image";

interface SingleFeatureProps {
  prefix: string;
  suffix: string;
  description: string | string[];
  imgURL: string;
}

function SingleFeature({
  prefix,
  suffix,
  description,
  imgURL,
}: SingleFeatureProps) {
  return (
    <div className="feature flex flex-row items-center justify-center gap-5">
      <div className="">
        <p className="text-suffix mb-6 text-2xl font-semibold">
          <span className="bg-prefix hidden h-5 w-5 max-sm:inline-block"></span>{" "}
          {prefix} <span className="text-prefix">{suffix}</span>
        </p>
        {Array.isArray(description) ? (
          <ol className="list-inside list-decimal">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        ) : (
          <p className="text-sm">{description}</p>
        )}
      </div>
      <Image
        src={imgURL}
        alt="feature"
        width={400}
        height={400}
        className="max-sm:hidden"
      />
    </div>
  );
}

export default SingleFeature;
