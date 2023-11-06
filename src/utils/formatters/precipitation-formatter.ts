import { isNil } from "lodash";
import { PrecipitationType } from "../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../data/unit";

// TODO: Do a more realistic precip gauge such as
// < 1 mm ~2, ~n, 10-15mm etc.

// TODO: For snow for metric, it's measured in cm.
export function formatPrecipitation(
  amount: number,
  type: PrecipitationType,
  unit?: Unit
): string {
  if (isNil(amount)) return "";
  // Default is milimeteres (metric)
  switch (unit) {
    case Unit.UK:
    case Unit.US:
      return `${amount}in`;
    case Unit.SI:
    case Unit.CA:
    default:
      if (type === PrecipitationType.Snow) return `${amount}cm`;
      return `${amount}mm`;
  }
}
