import { describe, expect, test } from "vitest";
import { PrecipitationType } from "../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../data/unit";
import { formatPrecipitation } from "./precipitation-formatter";

describe("Precipitation formatter", () => {
  const testCases: Array<
    [number | undefined, Unit, PrecipitationType, string]
  > = [
    [3, Unit.CA, PrecipitationType.Rain, "3mm"],
    [4, Unit.SI, PrecipitationType.Sleet, "4mm"],
    [1, Unit.US, PrecipitationType.Rain, "1in"],
    [50, Unit.SI, PrecipitationType.Snow, "50cm"],
    [50, Unit.UK, PrecipitationType.Snow, "50in"],
    [undefined, Unit.SI, PrecipitationType.Snow, ""],
  ];
  test.each(testCases)(
    "%s of unit %s with precipitation type %s returns %s",
    (amount, unit, precipitationType, result) => {
      expect(
        formatPrecipitation(
          amount as any,
          precipitationType as PrecipitationType,
          unit as Unit
        )
      ).toBe(result);
    }
  );
});
