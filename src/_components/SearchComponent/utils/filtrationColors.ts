import { filterValues } from "./filterValues";
type colorsKey = (typeof filterValues)[number]["value"];
export const filtrationColors: {
  [key in colorsKey]: string;
} = {
  all: "#23BDEE",
  courses: "#10B981",
  instructors: "#8B5CF6",
  "live-classes": "#F97316",
};
