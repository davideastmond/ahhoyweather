import { describe, expect, test } from "vitest";
import { capitalizeFirstLetter } from "./string-formatters";

describe("String formatter tests", () => {
  describe("capitalize first letter", () => {
    const cases: string[][] = [
      ["lowercase", "Lowercase"],
      ["lowercase something", "Lowercase something"],
      ["lOWERCASE", "LOWERCASE"],
      ["be", "Be"],
      ["n", "N"],
      [undefined as any, ""],
    ];
    test.each(cases)("given `%s` as argument, returns `%s`", (arg, res) => {
      expect(capitalizeFirstLetter(arg)).toBe(res);
    });
  });
});
