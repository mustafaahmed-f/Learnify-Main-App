import { ServicesIcons } from "../../_utils/ServicesIcons";

interface SingleServiceProps {
  svg: "billing" | "customer" | "scheduling";
  title: string;
  description: string;
}

function SingleService({ svg, title, description }: SingleServiceProps) {
  return (
    <div className="l relative flex max-w-80 flex-col items-center justify-start gap-6 bg-white px-8 pt-16 pb-8 text-center shadow-lg">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-center text-sm">{description}</p>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {ServicesIcons[svg]}
      </div>
      {/* <div>{ServicesIcons[svg]}</div> */}
    </div>
  );
}

export default SingleService;
