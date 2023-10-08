import { describe, expect, test } from "vitest";
import { Unit } from "../../data/unit";
import { formatWindSpeed, getWindBearing } from "./wind-formatters";

const cases: [number, string][] = [
  [15, "N"],
  [91, "E"],
  [180, "S"],
  [240, "SW"],
  [280, "W"],
  [359.8, "NNW"],
  [360, "N"],
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
    test.each([[1, 15, "si", "4 km/h N"]])(
      "Given wind speed `%s`, bearing `%s` and unit `%s`, expect `%s`",
      (speed, bearing, unit, result) => {
        expect(formatWindSpeed(speed, bearing, unit as Unit)).toBe(result);
      }
    );
  });
});
