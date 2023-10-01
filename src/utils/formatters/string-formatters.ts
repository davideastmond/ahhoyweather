import { isNil } from "lodash";

export function capitalizeFirstLetter(str: string): string {
  if (isNil(str)) return "";
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
