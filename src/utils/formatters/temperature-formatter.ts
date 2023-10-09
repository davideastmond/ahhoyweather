import { isNil } from "lodash";
import { Unit } from "../../data/unit";

export function formatTemperature(temperature: number, unit?: Unit): string {
  if (isNil(temperature)) return "";

  switch (unit) {
    case "us":
    case "uk":
      return `${temperature.toFixed(0)}° F`;
    case "si":
    case "ca":
    default:
      // Default will be si
      return `${temperature.toFixed(0)}° C`;
  }
}
