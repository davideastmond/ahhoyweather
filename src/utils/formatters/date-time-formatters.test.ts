import dayjs from "dayjs";
import { describe, expect, test } from "vitest";
import { getDayOfWeek } from "./date-time-formatters";

describe("DateTtime formatters", () => {
  describe("Get day of week", () => {
    const dayOfWeekTestCases = [
      [dayjs("2023-10-02").unix(), "Mon", "short"],
      [dayjs("2023-10-03").unix(), "Tuesday", "long"],
      [dayjs("2023-10-04").unix(), "Wed", "short"],
      [dayjs("2023-10-05").unix(), "Thursday", "long"],
      [dayjs("2023-10-06").unix(), "Fri", "short"],
      [dayjs("2023-10-07").unix(), "Sat", "short"],
      [dayjs("2023-10-08").unix(), "Sunday", "long"],
    ];
    test.each(dayOfWeekTestCases)("%s returns %s", (input, output, option) => {
      expect(
        getDayOfWeek(input as number, "America/Toronto", option as any)
      ).toBe(output);
    });
  });
});
