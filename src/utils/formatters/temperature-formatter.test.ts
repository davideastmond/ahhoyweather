import { describe, expect, test } from "vitest";
import { Unit } from "../../data/unit";
import { formatTemperature } from "./temperature-formatter";

describe("Temperature formatter tests", () => {
  const testCases: Array<[number | undefined, Unit, string]> = [
    [1, Unit.SI, "1° C"],
    [1, Unit.UK, "1° F"],
    [5, Unit.CA, "5° C"],
    [6, Unit.US, "6° F"],
    [undefined, Unit.UK, ""],
  ];
  test.each(testCases)(
    "Expect quantity %s of unit %s to output %s",
    (quantity, unit, output) => {
      expect(formatTemperature(quantity as number, unit as Unit)).toBe(output);
    }
  );
});
