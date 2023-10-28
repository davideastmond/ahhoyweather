import { describe, expect, test } from "vitest";
import { formatPercentage } from "./number-formatters";

describe("number formatter tests", () => {
  describe("formatPercentage tests", () => {
    const testCases = [
      [0.25, "25 %"],
      [undefined as any, ""],
    ];
    test.each(testCases)("given %s expected %o", (input, result) => {
      expect(formatPercentage(input)).toBe(result);
    });
  });
});
