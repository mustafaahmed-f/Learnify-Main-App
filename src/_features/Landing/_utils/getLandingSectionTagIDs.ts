import { mainFeatures } from "@/_utils/constants/mainFeatures";
import { generateTagIDs } from "@/_utils/helperMethods/generateTagIDs";

export function getLandingSectionTagIDs(suffix: string) {
  return generateTagIDs(mainFeatures["Landing"], suffix);
}
