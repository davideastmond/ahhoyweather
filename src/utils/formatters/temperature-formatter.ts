import { isNil } from "lodash";
import { Unit } from "../../data/unit";

export function formatTemperature(temperature: number, unit?: Unit): string {
  if (isNil(temperature)) return "";

  switch (unit) {
    case Unit.US:
    case Unit.UK:
      return `${temperature.toFixed(0)}° F`;
    case Unit.SI:
    case Unit.CA:
    default:
      // Default will be si
      return `${temperature.toFixed(0)}° C`;
  }
}
