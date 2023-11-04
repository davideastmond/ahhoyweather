import dayjs from "dayjs";
import { describe, expect, test } from "vitest";
import { getTimeOfDayRangeForecast } from "./time-of-day-range";

const hourlyData = [
  [
    [
      {
        time: dayjs("2015-03-25T06:00:00-04:00").unix(),
      },
    ],
    {
      morning: { time: 1427277600 },
    },
  ],
  [
    [
      {
        time: dayjs("2015-03-25T00:00:00-04:00").unix(),
      },
    ],
    {
      overnight: { time: 1427256000 },
    },
  ],
  [
    [
      {
        time: dayjs("2015-03-25T22:00:00-04:00").unix(),
      },
    ],
    {
      night: { time: 1427335200 },
    },
  ],
  [
    [
      {
        time: dayjs("2015-03-25T17:00:00-04:00").unix(),
      },
    ],
    {
      evening: { time: 1427317200 },
    },
  ],
  [
    [
      {
        time: dayjs("2015-03-25T14:00:00-04:00").unix(),
      },
    ],
    {
      afternoon: { time: 1427306400 },
    },
  ],
];
describe("Time of day range tests", () => {
  test.each(hourlyData)("%s returns %s", (data, expected) => {
    const result = getTimeOfDayRangeForecast(data as any, "America/Toronto");
    expect(result).toEqual(expected);
  });
});
