import { isNil } from "lodash";

export function capitalizeFirstLetter(str: string): string {
  console.log("4", str);
  if (isNil(str)) return "";
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
