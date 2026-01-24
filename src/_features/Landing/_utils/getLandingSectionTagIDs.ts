import { generateTagIDs } from "@/_utils/helperMethods/generateTagIDs";

export function getLandingSectionTagIDs(suffix: string) {
  return generateTagIDs("landing", suffix);
}
