import { Button } from "@/_components/ui/button";

interface AvailableMemberShipsProps {
  title: string;
  btnText: string;
  type: "student" | "instructor";
  imgURL: string;
}

function AvailableMemberShips({
  title,
  btnText,
  type,
  imgURL,
}: AvailableMemberShipsProps) {
  return (
    <div
      className="flex min-h-[300px] min-w-[350px] items-center justify-center rounded-2xl bg-cover px-2 text-white sm:min-w-[500px]"
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-start gap-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Button
          className="cursor-pointer rounded-full px-8 py-4 text-sm"
          style={{
            backgroundColor: type === "student" ? "#23BDEE" : "transparent",
            border: type === "student" ? "none" : "2px solid white",
          }}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default AvailableMemberShips;
