import { isNil } from "lodash";

export function formatPercentage(value: number): string {
  if (isNil(value)) return "";
  return `${(value * 100).toFixed(0)} %`;
}
