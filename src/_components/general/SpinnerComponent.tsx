import Spinner from "./Spinner";

interface SpinnerComponentProps {}

function SpinnerComponent({}: SpinnerComponentProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <Spinner />
    </div>
  );
}

export default SpinnerComponent;
