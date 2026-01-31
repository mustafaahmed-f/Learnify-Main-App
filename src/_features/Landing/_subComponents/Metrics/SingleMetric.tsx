interface SingleMetricProps {
  title: string;
  value: string;
}

function SingleMetric({ title, value }: SingleMetricProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-4xl font-semibold text-transparent">
        {value}
      </p>
      <p>{title}</p>
    </div>
  );
}

export default SingleMetric;
