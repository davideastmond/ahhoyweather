import dayjs from "dayjs";
import { isNil } from "lodash";
import { Unit } from "../../data/unit";

export function formatTemperature(temperature: number, unit?: Unit): string {
  if (isNil(temperature)) return "";

  switch (unit) {
    case "si":
      return `${temperature.toFixed(0)}° C`;
    case "us":
      return `${temperature.toFixed(0)}° F`;
    default:
      // Default will be si
      return `${temperature.toFixed(0)}° C`;
  }
}

export function formatTime(unixTimeData: number): string {
  return dayjs(unixTimeData).format("MMMM D, YYYY");
}

export function formatPercentage(value: number): string {
  if (isNil(value)) return "";
  return `${(value * 100).toFixed(0)} %`;
}
