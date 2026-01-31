import { metricsData } from "../../_utils/MetricsData";
import SingleMetric from "./SingleMetric";

function MetricsSection() {
  return (
    <div className="px-8">
      <h2 className="mb-6 text-center text-3xl font-bold">Our success</h2>
      <p className="mx-auto max-w-1/2 text-center text-sm max-sm:max-w-3/4">
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices
        eu ornare tristique vel nisl orci.{" "}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-11 py-16">
        {metricsData.map((metric) => (
          <SingleMetric
            key={metric.id}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </div>
    </div>
  );
}

export default MetricsSection;
