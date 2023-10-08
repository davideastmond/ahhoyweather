import { isNil } from "lodash";
import { Unit } from "../../data/unit";

// TODO: Do a more realistic precip gauge such as
// < 1 mm ~2, ~n, 10-15mm etc.
export function formatPrecipitation(amount: number, unit?: Unit): string {
  if (isNil(amount)) return "";
  // Default is milimeteres (metric)
  const defaultLabel: string = `${amount}mm`;
  switch (unit) {
    case "si":
      return defaultLabel;
    case "uk":
    case "us":
      return `${amount}in`;
    default:
      return defaultLabel;
  }
}
