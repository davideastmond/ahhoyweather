import { describe, expect, test } from "vitest";
import { Unit } from "../../data/unit";
import { formatWindSpeed, getWindBearing } from "./wind-formatters";

const cases: [number | undefined, string | undefined][] = [
  [15, "N"],
  [91, "E"],
  [180, "S"],
  [240, "SW"],
  [280, "W"],
  [359.8, "NNW"],
  [360, "N"],
  [undefined, undefined],
];
describe("Wind formatter tests", () => {
  describe("wind bearing function", () => {
    test.each(cases)(
      "given `%s` bearing, returns cardinal direction `%s`",
      (bearing, result) => {
        expect(getWindBearing(bearing)).toBe(result);
      }
    );
  });
  describe("format wind speed tests", () => {
    test.each([
      [1, 15, Unit.SI, "4 km/h N"],
      [2, 15, undefined, "8 km/h N"],
      [1, 15, Unit.CA, "4 km/h N"],
      [1, 15, Unit.US, "1 mph N"],
      [undefined, 15, Unit.US, ""],
      [5, 15, Unit.UK, "5 mph N"],
    ])(
      "Given wind speed `%s`, bearing `%s` and unit `%s`, expect `%s`",
      (speed, bearing, unit, result) => {
        expect(formatWindSpeed(speed as any, bearing, unit as Unit)).toBe(
          result
        );
      }
    );
  });
});
