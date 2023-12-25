import dayjs from "dayjs";
import { describe, expect, test } from "vitest";
import {
  formatDateTime,
  formatTime,
  getDayOfWeek,
  getShortMonthDate,
} from "./date-time-formatters";

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
  describe("Format dateTime", () => {
    const cases = [
      [
        dayjs("2023-10-02").unix(),
        "America/Toronto",
        undefined,
        "Monday, October 2, 2023 12:00 AM",
      ],
      [
        dayjs("2023-10-03").unix(),
        "America/Toronto",
        undefined,
        "Tuesday, October 3, 2023 12:00 AM",
      ],
      [dayjs("2023-10-03").unix(), "America/Toronto", "dddd", "Tuesday"],
      [undefined, "America/Toronto", "dddd", ""],
    ];
    test.each(cases)(
      "%s returns correct time",
      (unixTime, timeZone, customFormatting, expected) => {
        expect(
          formatDateTime(
            unixTime as number,
            timeZone as string,
            customFormatting as string
          )
        ).toBe(expected);
      }
    );
  });
  describe("Get shortMonthDate and format time", () => {
    test("getShortMonthDate and format time work", () => {
      const unixTimeStamp: number = dayjs("2023-10-02").unix();
      const timeZone: string = "America/Toronto";

      expect(getShortMonthDate(unixTimeStamp, timeZone)).toBe("10/02");
      expect(formatTime(unixTimeStamp * 1000)).toBe("October 2, 2023");
    });
  });
});
