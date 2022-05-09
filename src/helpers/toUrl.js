import { imgUrlPrefix } from "../utils/constants";

export function toUrl(path) {
  return `${imgUrlPrefix}${path}`;
}
