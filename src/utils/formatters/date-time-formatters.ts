import { isNil } from "lodash";
import { getLocalTime } from "../date-time";

const WEEKDAY = [
  {
    long: "Sunday",
    short: "Sun",
  },
  {
    long: "Monday",
    short: "Mon",
  },
  {
    long: "Tuesday",
    short: "Tues",
  },
  {
    long: "Wednesday",
    short: "Wed",
  },
  {
    long: "Thursday",
    short: "Thu",
  },
  {
    long: "Friday",
    short: "Fri",
  },
  {
    long: "Saturday",
    short: "Sat",
  },
];
export function formatDateTime(
  unixDateTime: number,
  timeZone: string,
  customFormat?: string
): string {
  if (isNil(unixDateTime)) return "";
  const dateTimeStringFormat = customFormat
    ? customFormat
    : "dddd, MMMM D, YYYY h:mm A";

  return getLocalTime(unixDateTime, timeZone).format(dateTimeStringFormat);
}

export function getDayOfWeek(
  unixDateTime: number,
  timeZone: string,
  format?: "long" | "short"
): string {
  const currentDate = getLocalTime(unixDateTime, timeZone);
  const idx: number = currentDate.weekday();
  return WEEKDAY[idx][format || "short"];
}

export function getShortMonthDate(
  unixDateTime: number,
  timeZone: string
): string {
  return getLocalTime(unixDateTime, timeZone).format("MM/DD");
}
